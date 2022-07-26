import { ProductTag } from "../model/Product"
import { BaseDatabase } from "./BaseDatabase"

export class TagDatabase extends BaseDatabase {
    protected TABLE_NAME = 'product_tag'
    insertTag = async (newTag: ProductTag): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(newTag)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

}