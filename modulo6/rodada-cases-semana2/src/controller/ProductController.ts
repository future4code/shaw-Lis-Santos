import { Request, Response } from 'express'
import { ProductDTO, TagsDTO } from '../model/Product'
import { ProductBusiness } from '../business/ProductBusiness'

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    insertProduct = async (req: Request, res: Response) => {
        try {
            const { product_name, tags } = req.body
            const product: ProductDTO = {
                product_name
            }
            const tag: TagsDTO = {
                tags
            }
            await this.productBusiness.insertProduct(product, tag)
            res.status(201).send({ message: "Produto criado com sucesso!" })
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    getProductByName = async (req: Request, res: Response) => {
        const { product_name } = req.body
        try {
            const productName = await this.productBusiness.getProductByName(product_name)
            res.status(200).send(productName)
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    getProductById = async (req: Request, res: Response) => {
        const { id } = req.params
        const productId = await this.productBusiness.getProductById(id)
        res.status(200).send(productId)
    }
}