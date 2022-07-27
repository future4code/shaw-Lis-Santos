import { TagDatabase } from "../data/TagDatabase";

export class TagBusiness {
    constructor(
        private tagDatabase: TagDatabase
    ) { }
    getProductByTag = async (tag: string) => {
        try {
            const tagDb = await this.tagDatabase.getProductByTag(tag)
            return tagDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}