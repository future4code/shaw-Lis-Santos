export class UserModel {
    constructor(
    private id: string,
    private name: string,
    private email: string, 
    private type: string
    ) {}
    getId(): string {
        return this.id
    }
    getName(): string {
        return this.name
    }
    getEmail(): string {
        return this.email
    }
    getType(): string {
        return this.type
    }
}