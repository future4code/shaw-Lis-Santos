import { ProductDatabase } from "../data/ProductDatabase";
import { Product, ProductDTO, ProductTag, TagsDTO } from "../model/Product";
import { IdGenerator } from "../services/IdGenerator";
import { TagDatabase } from "../data/TagDatabase";

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private tagDatabase: TagDatabase,
        private idGenerator: IdGenerator
    ) { }
    async insertProduct(product: ProductDTO, tag: TagsDTO) {
        const { product_name } = product
        try {
            const id = this.idGenerator.generateId()
            const newProduct = new Product(
                id, product_name
            )
            await this.productDatabase.insertProduct(newProduct)

            for (let nomeTag of tag.tags) {
                const newTag = new ProductTag(this.idGenerator.generateId(), nomeTag, id)
                await this.tagDatabase.insertTag(newTag)
            }

        } catch (error: any) {
        }
    }
}