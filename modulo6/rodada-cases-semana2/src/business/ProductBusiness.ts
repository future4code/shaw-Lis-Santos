import { ProductDatabase } from "../data/ProductDatabase"
import { Product, ProductDTO, ProductTag } from "../model/Product"
import { TagsDTO } from "../model/Tag"
import { IdGenerator } from "../services/IdGenerator"
import { TagDatabase } from "../data/TagDatabase"
import { Authenticator } from "../services/Authenticator"

export class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private tagDatabase: TagDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }
    async insertProduct(product: ProductDTO, tag: TagsDTO, token: string): Promise<void> {
        const { product_name } = product
        const tokenData = this.authenticator.getTokenData(token)
        if (tokenData.role !== "ADMIN") {
            throw new Error("Não autorizado")
        }
        const validToken = this.authenticator.getTokenData(token)
        if (!validToken) {
            throw new Error("Token inválido")
        }
        try {
            const id = this.idGenerator.generateId()
            const newProduct = new Product(
                id,
                product_name
            )
            await this.productDatabase.insertProduct(newProduct)

            for (let nomeTag of tag.tags) {
                const newTag = new ProductTag(this.idGenerator.generateId(), nomeTag, id)
                await this.tagDatabase.insertTag(newTag)
            }

        } catch (error: any) {
        }
    }
    getProductByName = async (product_name: string, token: string): Promise<Product> => {
        try {
            console.log(product_name)
            const tokenData = this.authenticator.getTokenData(token)
            if (tokenData.role !== "ADMIN") {
                throw new Error("Não autorizado")
            }
            const validToken = this.authenticator.getTokenData(token)
            if (!validToken) {
                throw new Error("Token inválido")
            }
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
    getProductById = async (id: string, token: string): Promise<Product> => {
        const tokenData = this.authenticator.getTokenData(token)
        if (tokenData.role !== "ADMIN") {
            throw new Error("Não autorizado")
        }
        const validToken = this.authenticator.getTokenData(token)
        if (!validToken) {
            throw new Error("Token inválido")
        }
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