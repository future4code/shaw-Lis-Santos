export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type SignupInputDTO = {
    name: string,
    email: string,
    password: string,
    role: USER_ROLE
}

export type LoginInputDTO = {
    email: string,
    password: string
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLE
    ) { }
    getId() {
        return this.id;
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }

    getRole() {
        return this.role;
    }

    static toUserModel(user: any): User {
        return new User(
            user.id,
            user.name,
            user.email,
            user.password,
            user.role
        )
    }
}
export interface AuthenticationData {
    id: string,
    role: USER_ROLE
}