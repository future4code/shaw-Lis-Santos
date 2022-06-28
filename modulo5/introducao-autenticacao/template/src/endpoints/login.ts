import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager";

export default async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body

        const userDB = new UserDatabase()
        const user = await userDB.getByEmail(email)

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (!user) {
            res.statusCode = 401
            throw new Error("Email ou senha incorreta")
        }

        const hashMenage = new HashManager()
        const passwordCorrect: boolean = await hashMenage.compare(password, user.password)

        if (!passwordCorrect) {
            throw new Error("Email ou senha incorreta")
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id: user.id, role: user.role })
        res.send({ token })

    } catch (error: any) {
        res.statusCode = 500
        res.send(error.sqlMessage || error.message)
    }
}