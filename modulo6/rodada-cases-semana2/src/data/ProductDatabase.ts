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
    getProductByName = async (product_name: string): Promise<Product> => {
        try {
            const result = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where("product_name", "like", `%${product_name}%`)
            return result as unknown as Product
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getProductById = async (id: string): Promise<Product> => {
        try {
            const [result] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("*")
                .where({id})
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}