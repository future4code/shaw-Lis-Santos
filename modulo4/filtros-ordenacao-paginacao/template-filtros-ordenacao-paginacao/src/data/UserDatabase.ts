import { BaseDataBase } from "./BaseDatabase";

export default class UserDataBase extends BaseDataBase {
    public async getUserByName(name: string, sort: string, order: string) {
        try {
            const [result] = await BaseDataBase.connection('aula48_exercicio')
            .select("*")
            .where('name', 'like', `%${name}%`)
            .orderBy(sort, order)

            if (result.length === 0) {
                throw new Error("Não existe usuário com esse nome")
            }
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    public async getUserByType(type: string) {
        try {
            const result = await BaseDataBase.connection('aula48_exercicio')
            .select("*")
            .where('type', 'like', `%${type}%`)

            if(!result) {
                throw new Error("Não existe usuário com esse type")
            }
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}