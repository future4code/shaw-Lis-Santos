import { UserModel } from "../../src/model/UserModel"
import { userMock } from "./userMock"

export class UserDataMocks {

    public async createUser(user: UserModel): Promise<void> { }

    getPostById = async (id: string): Promise<UserModel> => {
        return userMock
    }
}