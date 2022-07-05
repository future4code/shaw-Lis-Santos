import UserData from "../data/UserData"
import { User } from "../model/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/idGenerator"
import { LoginInputDTO, SingUpInputDTO } from "../types/singupInputDTO"

export default class UserBusiness {

    userData = new UserData()
    idGenerator = new IdGenerator()
    hashManager = new HashManager()
    authenticator = new Authenticator()

    singup = async (input: SingUpInputDTO) => {
        // validação
        const { name, email, password } = input
        if (!name || !email || !password) {
            throw new Error("Campos inválidos")
        }

        if (password.length < 6) {
            throw new Error("A senha deve possuir no mínimo 6 caracteres")
        }
        // conferir se o usuário existe ou não
        const registeredUser = await this.userData.findByEmail(email)
        if (registeredUser) {
            throw new Error("E-mail já cadastrado!")
        }
        // criar um id para o usuário
        const id = this.idGenerator.generateId()
        // hasear o password
        const hashedPassword = await this.hashManager.hash(password)
        // criar o objeto usuário
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        // inserir usuário no banco de dados
        await this.userData.insert(user)
        // criar o token 
        const token = this.authenticator.generateToken({ id })
        // retornar o token
        return token
    }

    login = async (input: LoginInputDTO) => {
        const { email, password } = input
        if (!email || !password) {
            throw new Error("Campos inválidos")
        }
        const userData = new UserData()
        const user = await userData.findByEmail(email)

        if (!user) {
            throw new Error('Esse email não está cadastrado')
        }
        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error('Email ou senha incorretos.')
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id: user.id})
        return token
    }
}