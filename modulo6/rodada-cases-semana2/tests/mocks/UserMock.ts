import { LoginInputDTO, USER_ROLE } from "../../src/model/User"
import { User } from "../../src/model/User"

export const user1 = new User(
    "id_user1",
    "user1",
    "user1@email.com",
    "senha123",
    USER_ROLE.ADMIN
)

export const user2 = new User(
    "id_user1=2",
    "user2",
    "user2@email.com",
    "senha456",
    USER_ROLE.NORMAL
)

export const userLoginMockWrongEmail: LoginInputDTO = {
    email: "julia@email.com",
    password: "123456"
}