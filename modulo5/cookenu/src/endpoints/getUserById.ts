import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDataBase'
import { Authenticator } from '../services/Authenticator'

export async function getUserById(req: Request, res: Response) {
    try {
        const token = req.headers.authorization
        const { id } = req.params

        const authenticator = new Authenticator()

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(id)
        res.status(200).send(user)
        if (!token) {
            res.status(422).send('Esse endpoint exige uma autorização a ser passada nos headers')
        }

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}