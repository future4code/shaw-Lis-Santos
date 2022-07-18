import { USER_ROLES } from "./authenticatorMocks"
import { UserModel } from "../../src/model/UserModel"


export const userMock = new UserModel(
    "id_mock1",
    "mock1",
    "mock1@gmail.com",
    "senha123",
    USER_ROLES.ADMIN
)

export const userMock2 = new UserModel(
    "id_mock2",
    "mock2",
    "mock2@gmail.com",
    "senha123",
    USER_ROLES.NORMAL
)