import { TYPE } from "../types/inputsDTO"

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: TYPE,
        private created_at: Date,
        private author_id: string
    ) { }
    public async getId(): Promise<string> {
        return this.id
    }
    public async getPhoto(): Promise<string> {
        return this.photo
    }
    public async getDescription(): Promise<string> {
        return this.description
    }
    public async getType(): Promise<TYPE> {
        return this.type
    }
    public async getCreatedAt(): Promise<Date> {
        return this.created_at
    }
    public async getAuthorId(): Promise<string> {
        return this.author_id
    }
}