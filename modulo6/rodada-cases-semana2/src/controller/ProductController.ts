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
            res.status(201).send({ message: "Produto criado com sucesso!"})
        } catch (error: any) {

        }
    }
}