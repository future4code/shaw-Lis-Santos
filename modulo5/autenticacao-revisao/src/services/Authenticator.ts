import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../model/User';
import dotenv from 'dotenv'

dotenv.config()

export interface AuthenticationData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {
    public generete(input: AuthenticationData): string {
        console.log(input, process.env.JWT_KEY, process.env.ACESS_TOKEN_EXPIRES)
        const token = jwt.sign(input, process.env.JWT_KEY as string, {
            expiresIn: process.env.ACESS_TOKEN_EXPIRES,
        })
        return token
    }
    public getTokenData(token: string): AuthenticationData {
        const data = jwt.verify(token, process.env.JWT_KEY as string)
        return data as AuthenticationData
    }
}