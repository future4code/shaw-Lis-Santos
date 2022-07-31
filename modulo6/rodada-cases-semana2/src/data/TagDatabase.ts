import { ProductTag } from "../model/Product"
import { BaseDatabase } from "./BaseDatabase"
import { getByTag, Tag } from "../model/Tag"

export class TagDatabase extends BaseDatabase {
    protected TABLE_NAME = 'product_tag'
    protected TABLE_NAME2 = 'products_amaro'
    insertTag = async (newTag: ProductTag): Promise<void> => {
        try {
            await BaseDatabase.connection(this.TABLE_NAME)
                .insert(newTag)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getProductByTag = async (tag: Tag) => {
        try {
            const result: getByTag[] = await BaseDatabase.connection(this.TABLE_NAME)
                .select("product_tag.product_id", "products_amaro.product_name", "product_tag.tag")
                .where({ tag })
                .join(this.TABLE_NAME2, "product_tag.product_id", "products_amaro.id")
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}