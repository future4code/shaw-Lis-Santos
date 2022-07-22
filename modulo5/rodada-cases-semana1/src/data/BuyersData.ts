import { BaseDataBase } from "./BaseDatabase";
import { BuyersModel } from "../model/BuyersModel";

export class BuyersData extends BaseDataBase {
    protected TABLE_NAME = 'buyers_wirecard'

    insert = async (buyer: BuyersModel): Promise<void> => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(buyer)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    findByEmail = async (email: string) => {
        try {
            const [result] = await BaseDataBase.connection(this.TABLE_NAME)
                .select("*")
                .where({ email })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    findByCpf = async (CPF: string) => {
        try {
            const [result] = await BaseDataBase.connection(this.TABLE_NAME)
                .select("*")
                .where({ CPF })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    findById = async (id: string) => {
        try {
            const [result] = await BaseDataBase.connection(this.TABLE_NAME)
                .select("*")
                .where({ id })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}