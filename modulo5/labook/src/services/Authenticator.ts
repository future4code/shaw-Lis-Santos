import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/authData"

export class Authenticator {
    public generateToken = (input: authenticationData): string => {
        const token = jwt.sign(
            input,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
            }
        )
        return token
    }



    public getTokenData = (token: string): authenticationData => {
        const data = jwt.verify(token, process.env.JWT_JEY as string)
        return data as authenticationData
    }
}