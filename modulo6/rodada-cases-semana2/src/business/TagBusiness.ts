import { TagDatabase } from "../data/TagDatabase";
import { getByTag } from "../model/Tag";
import { Authenticator } from "../services/Authenticator";

export class TagBusiness {
    constructor(
        private tagDatabase: TagDatabase,
        private authenticator: Authenticator
    ) { }
    getProductByTag = async (tag: string, token: string): Promise<getByTag[]> => {
        try {
        const tokenData = this.authenticator.getTokenData(token)
        if (tokenData.role !== "ADMIN") {
            throw new Error("Não autorizado")
        }
        const validToken = this.authenticator.getTokenData(token)
        if (!validToken) {
            throw new Error("Token inválido")
        }
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