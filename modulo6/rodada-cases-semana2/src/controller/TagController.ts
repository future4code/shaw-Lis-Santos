import { Request, Response } from 'express'
import { TagBusiness } from '../business/TagBusiness'

export class TagController {
    constructor(
        private tagBusiness: TagBusiness
    ) { }
    getProductByTag = async (req: Request, res: Response) => {
        const { tag } = req.params
        try {
            const tags = await this.tagBusiness.getProductByTag(tag)
            res.status(500).send(tags)
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}