export class BuyersModel {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private CPF: string
    ) { }
    getID(): string {
        return this.id
    }
    getName(): string {
        return this.name
    }
    getEmail(): string {
        return this.email
    }
    getCpf(): string {
        return this.CPF
    }
}

export interface BuyerDTO {
   name: string,
   email: string, 
   CPF: string
}