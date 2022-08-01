import { Result } from "../model/Result"
import { BaseDatabase } from "./BaseDatabase"

export class ResultDatabase extends BaseDatabase {
    protected TABLE_NAME = 'resultado'
    
    insertResult = async (result: Result) => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(result)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}