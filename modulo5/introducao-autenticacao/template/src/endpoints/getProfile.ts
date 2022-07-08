import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { UserRole } from "../types"

export default async function getProfile(req: Request, res: Response): Promise<any> {
    try {
        const token = req.headers.authorization as string
        if (!token) {
            throw new Error("Token não enviado")
        }
        const authenticator = new Authenticator()
        const data = authenticator.getData(token)

        const userDB = new UserDatabase()
        if (data.role !== UserRole.NORMAL) {
            throw new Error("Only a normal user can access this funcionality");
        }

        const user = await userDB.getId(data.id)

        res.status(200).send({
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        })

    } catch (error: any) {
        res.statusCode = 500
        res.send(error.sqlMessage || error.message)
    }
}