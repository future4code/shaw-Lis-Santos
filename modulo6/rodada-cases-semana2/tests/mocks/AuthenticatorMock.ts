import { USER_ROLE } from '../../src/model/User'

export class AuthenticatorMock {
    public generateToken() {
        return "TOKEN"
    }

    public getTokenData(token: string) {
        const objeto = {
            id: "id_mock",
            role: USER_ROLE.ADMIN
        }
        return objeto
    }
}