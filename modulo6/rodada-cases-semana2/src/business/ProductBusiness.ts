import { ProductDatabase } from "../data/ProductDatabase"
import { Product, ProductDTO, ProductTag } from "../model/Product"
import { TagsDTO } from "../model/Tag"
import { IdGenerator } from "../services/IdGenerator"
import { TagDatabase } from "../data/TagDatabase"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private tagDatabase: TagDatabase,
        private idGenerator: IdGenerator
    ) { }
    async insertProduct(product: ProductDTO, tag: TagsDTO): Promise<void> {
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
    getProductByName = async (product_name: string): Promise<Product> => {
        try {
            if (!product_name) {
                throw new Error("Insira um nome de produto para pesquisa")
            }
            const productDb = await this.productDatabase.getProductByName(product_name)
            if (!productDb) {
                throw new Error("Não existe produto com esse nome")
            }
            return productDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
    getProductById = async (id: string): Promise<Product> => {
        try {
            const productDb = await this.productDatabase.getProductById(id)
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