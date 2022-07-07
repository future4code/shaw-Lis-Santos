export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }
    public async getId(): Promise<string> {
        return this.id
    }
    public async getName(): Promise<string> {
        return this.name
    }
    public async getEmail(): Promise<string> {
        return this.email
    }
    public async getPassword(): Promise<string> {
        return this.password
    }

static toUserModel(data: any): User {
    return new User(data.id, data.name, data.email, data.password)
}
}