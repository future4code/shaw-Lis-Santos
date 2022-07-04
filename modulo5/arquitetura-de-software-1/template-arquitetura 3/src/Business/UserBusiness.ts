import { generateToken, getTokenData } from "../services/authenticator";
import { HashManager } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { userInput} from "../types/user";
import UserData from '../data/UserData'

class UserBusiness {

    // metodo da classe
    async signUp(user: userInput) {

        const { name, email, password, role } = user
        console.log(name, email, password, role)

        // 1 regra de negocio - validar os valores 
        if (
            !name ||
            !email ||
            !password ||
            !role
        ) {
            throw new Error('Preencha os campos "name", "email" e "password" e "role"')
        }

        // 2 regra de negocio - gerar meu id 
        const id: string = generateId()

        // 3 regra de negocio - fazer o hash da senha
        const hashManager = new HashManager()
        const cypherPassword = await hashManager.hash(password);


        // 4 regra de negocio - inserir os valores no banco de dados
        const userData = new UserData()

        await userData.insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        // 5 regra de negocio - gerar o token
        const token: string = generateToken({
            id,
            role: role
        })

        return token

    }

    // metodo da classe
    async login(email: string, password: string) {

        if (!email || !password) {
            throw new Error("Insira corretamente as informações de 'email', 'password'")
        }

        const userData = new UserData()
        const user = await userData.findUserByEmail(email)

        if (!user) {
            throw new Error('Esse email não está cadastrado')
        }

        const hashManager = new HashManager()
        const passwordIsCorrect = await hashManager.compare(password, user.password)

        if (!passwordIsCorrect) {
            throw new Error('Email ou senha incorretos.')
        }

        const token: string = generateToken({
            id: user.id,
            role: user.role
        })

        return token

    }

    async getAllUsers() {
        const userData = new UserData()
        const users = await userData.getAllUsers()
        return users
    }
    async deleteUsers(id: string, token:string) {

        if (!token) {
            throw new Error('Não autorizado.')
         }

        const authenticationData = getTokenData(token)

        if(authenticationData.role !== "ADMIN"){
            throw new Error('Não autorizado.')
        }

        const userData = new UserData()
         await userData.deleteUser(id)

    }
}

export default UserBusiness