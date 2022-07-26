import { UserDatabase } from "../data/UserDataBase"
import { LoginInputDTO, SignupInputDTO, User, USER_ROLE } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export class UserBusiness {
    constructor(
        private userDatabase = new UserDatabase,
        private authenticator = new Authenticator,
        private hashManager = new HashManager,
        private idGenerator = new IdGenerator
    ) { }

    async signup(user: SignupInputDTO) {
        const { name, email, password } = user
        let { role } = user
        try {
            if (!name || !email || !password) {
                throw new Error("Insira corretamente as informações de 'name', 'email' e 'password'")
            }
            if (!email.includes("@")) {
                throw new Error("Verifique se o campo de e-mail foi passado corretamente")
            }
            if (password.length < 6) {
                throw new Error("A senha deve possuir no mínimo 6 caracteres")
            }
            if (!role) {
                role = USER_ROLE.NORMAL
            }
            if (role?.toUpperCase() === "ADMIN") {
                role = USER_ROLE.ADMIN
            }
            if (role?.toUpperCase() === "NORMAL") {
                role = USER_ROLE.NORMAL
            }
            if (role !== USER_ROLE.NORMAL && role !== USER_ROLE.ADMIN) {
                throw new Error("O role passado é invalido. Preencha com os valores de NORMAL ou ADMIN")
            }
            const registeredUser = await this.userDatabase.getUserByEmail(email)
            if (registeredUser) {
                throw new Error("E-mail já cadastrado")
            }
            console.log(role)
            const id = this.idGenerator.generateId()

            const hashPassword = await this.hashManager.hash(password)
            const user = new User(
                id,
                name,
                email,
                hashPassword,
                role
            )
            console.log(user)
            await this.userDatabase.insertUser(user)
            const token = this.authenticator.generateToken({ id, role })
            return token
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    login = async (user: LoginInputDTO) => {
        try {
            const { email, password } = user
            if (!email || !password) {
                throw new Error("Preencha corretamente as informações de 'email' e 'password'")
            }
            const userDB = await this.userDatabase.getUserByEmail(email)
            if (!userDB) {
                throw new Error("E-mail inválido")
            }
            const passwordIsCorrect: boolean = await this.hashManager.compare(password, userDB.getPassword())
            if (!passwordIsCorrect) {
                throw new Error("Senha incorreta")
            }
            const token = this.authenticator.generateToken({ id: userDB.getEmail(), role: userDB.getRole() })
            return token

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}