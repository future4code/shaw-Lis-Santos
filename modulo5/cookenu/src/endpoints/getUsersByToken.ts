import { Request, Response } from 'express'
import { UserDatabase } from '../data/UserDataBase'
import { Authenticator } from '../services/Authenticator'

export async function getUsersByToken(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string

        if (!token) {
            res.status(409).send('Não autorizado')
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token as string)
        
            const userDatabase = new UserDatabase()
            const user = await userDatabase.getUserById(tokenData.id)
            res.status(200).send(user)

    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
}