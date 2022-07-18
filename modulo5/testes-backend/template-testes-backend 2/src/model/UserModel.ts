import { USER_ROLES } from "../../tests/mocks/authenticatorMocks"

export class UserModel {
    constructor (
        id: string,
        name: string,
        email: string,
        password: string,
        role: USER_ROLES
    ) {}
}