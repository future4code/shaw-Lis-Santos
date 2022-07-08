import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    getById(id: string) {
        throw new Error("Method not implemented.");
    }
    public createUser = async (newUser: user) => {
        try {
            await this.getConnection()
                ('Users')
                .insert(
                    newUser
                )
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    public getByEmail = async (email: string): Promise<user> => {
        const [result] = await this.getConnection()
            ('User')
            .where({ email })
        return result
    }
    public getUserByEmail = async (email: string): Promise<user> => {
        const [result] = await this.getConnection().select("*").from('User')
            .where({ email })
        return result[0]
    }
    public getId = async (id: string): Promise<user> => {
        const [result] = await this.getConnection()('User')
            .where({ id })
        return result
    }
}