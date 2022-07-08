import { Request, Response } from 'express'
import UserDataBase from '../data/UserDatabase'

export default async function getUserByName(req: Request, res: Response) {
    try {
        const name = String(req.query.name)
        let order = req.query.order as string
        let sort = req.query.sort as string

        // if (order !== "asc" && order !== "des") {
        //     order = "asc"
        // }

        // if (!sort) {
        //     sort = 'email'
        // }
        const userDataBase = new UserDataBase()
        const user = await userDataBase.getUserByName(name, order, sort)
        res.status(200).send(user)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
}