import { User } from "../model/User"
import { FindByEmailResponse } from "../types/findByEmailResponse"
import { BaseDataBase } from "./BaseDataBase"

export default class UserData extends BaseDataBase {
    protected TABLE_NAME = 'labook_users'


    insert = async (user: User) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(user)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    findByEmail = async (email: string) => {
        try {
            const [result]: FindByEmailResponse = await BaseDataBase.connection(this.TABLE_NAME)
                .select("*")
                .where({ email })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}