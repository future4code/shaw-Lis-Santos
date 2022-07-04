export class Recipe {
    constructor(
        private id: string,
        private title: string,
        private description: string,
        private created_at: string,
        private user_id: string
    ) { }
    public getId(): string {
        return this.id
    }
    public getTitle(): string {
        return this.title
    }
    public getDescription(): string {
        return this.description
    }
    public getCreatedAt(): string {
        return this.created_at 
    }
    public getUserId(): string{
        return this.user_id
    }
}