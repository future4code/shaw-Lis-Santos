import { User } from "../../src/model/User"
import { user1, user2 } from "./UserMock";

export class UserDatabaseMock {
    insertUser = async (user: User): Promise<void> => {
    }
    getUserByEmail = async (email: string): Promise<User | undefined> => {
        switch (email) {
            case "user1@email.com":
                return user1
            case "user2@gmail.com":
                return user2
            default:
                return undefined
        }
    }
}