import { Request, Response } from 'express'
import { ProductDTO } from '../model/Product'
import { TagsDTO } from '../model/Tag'
import { ProductBusiness } from '../business/ProductBusiness'

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    insertProduct = async (req: Request, res: Response): Promise<void> => {
        const token: string = req.headers.authorization as string
        try {
            const { product_name, tags } = req.body
            const product: ProductDTO = {
                product_name
            }
            const tag: TagsDTO = {
                tags
            }
            await this.productBusiness.insertProduct(product, tag, token)
            res.status(201).send({ message: "Produto criado com sucesso!" })
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    getProductByName = async (req: Request, res: Response) => {
        const { product_name } = req.body
        const token: string = req.headers.authorization as string
        try {
            const productName = await this.productBusiness.getProductByName(product_name, token)
            res.status(200).send(productName)
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    getProductById = async (req: Request, res: Response) => {
        const { id } = req.params
        const token: string = req.headers.authorization as string
        try {
            const productId = await this.productBusiness.getProductById(id, token)
            res.status(200).send(productId)
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}