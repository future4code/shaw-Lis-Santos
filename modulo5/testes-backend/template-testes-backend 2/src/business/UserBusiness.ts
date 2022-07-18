import { UserData } from "../data/UserData"

export class UserBusiness {
    constructor(
        private userData: UserData
    ) {}
    getUser = async (id: string) => {
        if (!id) {
            throw new Error("Insira um id de usuário")
        }
        const userDataBase = await this.userData.getPostById(id)
        if (!userDataBase) {
            throw new Error("Não existe usuário com esse id")
        }
        return userDataBase
    }
} 