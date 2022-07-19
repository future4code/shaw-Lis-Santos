import { BaseDataBase } from "./BaseDatabase";
import { BuyersModel } from "../model/BuyersModel";

export class BuyersData extends BaseDataBase {
    protected TABLE_NAME = 'buyers_wirecard'

    insert = async (buyer: BuyersModel) => {
        try {
            await BaseDataBase.connection(this.TABLE_NAME).insert(buyer)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}