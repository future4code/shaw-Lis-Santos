import { Request, Response } from 'express'
import UserDataBase from '../data/UserDatabase'

export default async function getUserByName(req: Request, res: Response) {
    try {
        const { type } = req.params
        const userDataBase = new UserDataBase()
        const user = await userDataBase.getUserByType(type)
        res.status(200).send(user)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}