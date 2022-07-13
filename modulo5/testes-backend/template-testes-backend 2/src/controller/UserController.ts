import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserData } from '../data/UserData'

export default class UserController {
    getUserById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const userBusiness = new UserBusiness(new UserData)
            const user = await userBusiness.getUser(id)
            res.status(200).send(user)

        } catch (error) {
            res.status(500).send({ message: error.slqMessage || error.message })
        }
    }
}