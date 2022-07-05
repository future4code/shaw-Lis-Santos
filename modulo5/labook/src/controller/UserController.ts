import { Request, Response } from 'express'
import UserBusiness from '../business/UserBusiness'
import { LoginInputDTO, SingUpInputDTO } from '../types/singupInputDTO'

export default class UserController {

    singup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SingUpInputDTO = {
            name,
            email,
            password
        }
        try {
            const userBusiness = new UserBusiness()
            const token = await userBusiness.singup(input)
            res.status(201).send({ message: "Usuário cadastrado com sucesso!", token })
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
    login = async (req: Request, res: Response) => {
        const { email, password } = req.body

        const input: LoginInputDTO = {
            email,
            password
        }
        try {
            const userBusiness = new UserBusiness()
            const token = await userBusiness.login(input)
            res.status(201).send({ message: "Usuário logado com sucesso!", token })
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
}