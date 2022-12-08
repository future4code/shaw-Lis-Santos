import { Tag } from "../../src/model/Tag"
import { tag1 } from "./TagMock";

export class TagDatabaseMock {
    public async getProductByTag(tag: string): Promise<Tag | undefined> {
        switch (tag) {
            case "Jeans":
                return tag1
            default:
                return undefined
        }
    }
}