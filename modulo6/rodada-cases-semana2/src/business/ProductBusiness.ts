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
    getProductByName = async (product_name: string) => {
        try {
            const productDb = await this.productDatabase.getByName(product_name)
            if (!productDb) {
                throw new Error("Não existe produto com esse nome")
            }
            return productDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getProductById = async (id: string) => {
        try {
            const productDb = await this.productDatabase.getById(id)
            if (!id) {
                throw new Error("Insira um produto com esse id")
            }
            if (!productDb) {
                throw new Error("Não existe produto com esse id")
            }
            return productDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}