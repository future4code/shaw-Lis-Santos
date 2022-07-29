import { TagDatabase } from "../data/TagDatabase";
import { getByTag } from "../model/Tag";

export class TagBusiness {
    constructor(
        private tagDatabase: TagDatabase
    ) { }
    getProductByTag = async (tag: string): Promise<getByTag[]> => {
        try {
            const tagDb: getByTag[] = await this.tagDatabase.getProductByTag(tag)
            if (!tagDb) {
                throw new Error("Tag inválida")
            }
            return tagDb
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}