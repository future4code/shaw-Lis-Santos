import { Request, Response } from "express";
import UserBusiness from "../Business/UserBusiness";
import { userInput } from "../types/user";

class UserController {

    async signUp(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const newUser: userInput = {
                name,
                email,
                password,
                role
            }

            // instanciar a classe bussines
            const userBusiness = new UserBusiness()

            // chamar o metodo de signUp , que esta no bussines e ele retorna um token
            const token = await userBusiness.signUp(newUser)

            res.status(201).send({ message: "Usuário criado com sucesso", token })

        } catch (error: any) {
            res.status(500).send({ message: error.slqMessage || error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(email, password)

            res.status(200).send({ message: "Usuário logado com sucesso!", token })
        } catch (error: any) {
            res.status(500).send({ message: error.slqMessage || error.message })
        }
    }
    async getUsers(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness()
            const users = await userBusiness.getAllUsers()
            res.status(200).send(users)
        } catch (error: any) {
            res.status(500).send({ message: error.slqMessage || error.message })
        }
    }
    async deleteUser(req: Request, res: Response) {
        try {
            const id = req.params.id
            const token: string = req.headers.authorization as string

            const userBussines = new UserBusiness()

            await userBussines.deleteUsers(id, token)

            res.status(201).send({ message: "Usuário deletado" })
        } catch (error: any) {
            res.status(500).send({ message: error.slqMessage || error.message })
        }
    }
}

export default UserController