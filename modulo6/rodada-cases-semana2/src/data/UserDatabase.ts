import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    protected TABLE_NAME = 'users_amaro'
    insertUser = async (user: User): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(user)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getUserByEmail = async (email: string) => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({email})
                console.log(result)
            return result[0] && User.toUserModel(result[0])
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message)
        }
    }
}