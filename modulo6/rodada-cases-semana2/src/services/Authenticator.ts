import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/User"
import dotenv from 'dotenv'
dotenv.config()

export class Authenticator {
    public generateToken = (input: AuthenticationData): string => {
        const token = jwt.sign(
            input,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
            }
        )
        return token
    }

    public getTokenData = (token: string): AuthenticationData => {
        const data = jwt.verify(token, process.env.JWT_JEY as string)
        return data as AuthenticationData
    }
}