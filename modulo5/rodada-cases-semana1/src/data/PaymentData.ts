import { PaymentModel } from "../model/PaymentModel"
import { BaseDataBase } from "./BaseDatabase"

export class PaymentData extends BaseDataBase {
    protected TABLE_NAME = 'payment'

    insertPayment = async (payment: PaymentModel) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(payment)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    getPaymentById = async (id: string) => {
        try {
            const [result] = await BaseDataBase.connection(this.TABLE_NAME).select("*").where({ id })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}