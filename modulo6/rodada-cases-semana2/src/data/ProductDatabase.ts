import { Product } from "../model/Product"
import { BaseDatabase } from "./BaseDatabase"
export class ProductDatabase extends BaseDatabase {
    protected TABLE_NAME = 'products_amaro'

    insertProduct = async (newProduct: Product): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(newProduct)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}