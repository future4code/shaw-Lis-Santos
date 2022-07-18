import { BaseDataBase } from "./BaseDatabase"

export class UserData extends BaseDataBase {
    protected TABLE_NAME = 'User_Arq'
    getPostById = async(id: string) => {
        const [result] = await BaseDataBase.connection(this.TABLE_NAME)
        .select("*")
        .where({id})
        return result
    }
} 