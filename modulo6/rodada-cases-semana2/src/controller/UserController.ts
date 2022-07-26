import { Request, Response } from "express"
import { SignupInputDTO, LoginInputDTO } from "../model/User"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {
    constructor(
        private userBusiness = new UserBusiness
    ) { }

    signup = async (req: Request, res: Response) => {
        try {
            const { name, email, password, role } = req.body

            const user: SignupInputDTO = {
                name,
                email,
                password,
                role
            }
            const token = await this.userBusiness.signup(user)
            res.status(201).send({
                message: "Usuário criado com sucesso!", token
            })
        } catch (error: any) {
            res.status(500).send(error.slqMessage || error.message)
        }
    }
    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            const userLogin: LoginInputDTO = {
                email,
                password
            }
            const token = await this.userBusiness.login(userLogin)
            res.status(200).send(token)

        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}