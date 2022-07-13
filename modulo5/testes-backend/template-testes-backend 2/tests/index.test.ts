import { UserBusiness } from "../src/business/UserBusiness"
import { UserDataMocks } from "./mocks/UserDataMocks"

const userBusinessMock = new UserBusiness(
    new UserDataMocks as any
)
describe("getUserById", () => {
    // (a)
    test("Erro ao passar id inexistente", () => {
        expect.assertions(0)

        try {
            userBusinessMock.getUser("12345")
        } catch (error) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe("Não existe usuário com esse id")
        }
    })
    test("Retornar o respectivo usuário quando o id for registrado", () => {
            expect.assertions(2)

            try {
                const getUserById = jest.fn(
                    (id: string) => userBusinessMock.getUser(id)
                )

                const result = getUserById("id_mock1")

                expect(getUserById).toHaveBeenCalledWith("id_mock1")
                expect(result).toEqual({
                    id: "id_mock1",
                    name: "mock1",
                    email: "mock1@gmail.com",
                    role: "ADMIN",
                })
            } catch (error) {
                console.log(error.message)
            }
        })
    })