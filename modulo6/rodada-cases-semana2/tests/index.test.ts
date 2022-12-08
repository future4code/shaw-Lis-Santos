import { ProductBusiness } from "../src/business/ProductBusiness"
import { TagBusiness } from "../src/business/TagBusiness"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"
import { TagDatabaseMock } from "./mocks/TagDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { Product1, Product2 } from "./mocks/ProductMock"
import { tag1 } from "./mocks/TagMock"
import { LoginInputDTO, SignupInputDTO, USER_ROLE } from "../src/model/User"
import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"
import { HashGeneratorMock } from "./mocks/HashManagerMock"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { userLoginMockWrongEmail } from "./mocks/UserMock"

const userBusinessMock = new UserBusiness(
    new UserDatabaseMock as any,
    new AuthenticatorMock as any,
    new HashGeneratorMock as any,
    new IdGeneratorMock
)

const productBusinessMock = new ProductBusiness(
    new ProductDatabaseMock as any,
    new TagDatabaseMock as any,
    new IdGeneratorMock,
    new AuthenticatorMock as any
)

const tagBusinessMock = new TagBusiness(
    new TagDatabaseMock as any,
    new AuthenticatorMock as any
)

describe("tests of users_amaro, products_amaro and product_tag tables", () => {
    test("Test Signup sucess", async () => {
        expect.assertions(1)
        try {
            const user: SignupInputDTO = {
                name: "Lis",
                email: "lis@gmail.com",
                password: "7891011",
                role: USER_ROLE.ADMIN
            }
            const result = await userBusinessMock.signup(user)
            expect(result).toBe("TOKEN")
        } catch (error: any) {
            console.log(error)
        }
    })

    test("Login invalid password", async () => {
        expect.assertions(1)
        try {
            await userBusinessMock.login(userLoginMockWrongEmail)
        } catch (error: any) {
            expect(error.message).toBe("E-mail não cadastrado")
        }
    })

    test("Login success", async () => {
        expect.assertions(1)
        try {
            const user: LoginInputDTO = {
                email: "lis@gmail.com",
                password: "7891011"
            }
            expect(user).toBe("TOKEN")
        } catch (error) {
            console.log(error)
        }
    })
    test("Test getProductByName, empty product_name parameter", async () => {
        expect.assertions(1)
        try {
            await productBusinessMock.getProductByName("", "TOKEN")
        } catch (error: any) {
            expect(error.message).toBe("Insira um nome de produto para pesquisa")
        }
    })
    test("Sucess test getProdyctByName", async () => {
        expect.assertions(1)
        try {
            const result = await productBusinessMock.getProductByName("Calça pantalona", "TOKEN")
            expect(result).toBe(Product1)

        } catch (error: any) {
            console.log(error)
        }
    })
    test("Test getProductById, empty id parameter", async () => {
        expect.assertions(1)
        try {
            await productBusinessMock.getProductById("", "TOKEN")
        } catch (error: any) {
            expect(error.message).toBe("Insira um produto com esse id")
        }
    })
    test("Sucess test getProductById", async () => {
        expect.assertions(1)
        try {
            const result = await productBusinessMock.getProductById("id_product2", "TOKEN")
            expect(result).toBe(Product2)

        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("Test getProductByTag, empty tag parameter", async () => {
        expect.assertions(1)
        try {
            await tagBusinessMock.getProductByTag("Algodão", "TOKEN")
        } catch (error: any) {
            expect(error.message).toBe("Tag inválida")
        }
    })
    test("Sucess test getProductByTag", async () => {
        expect.assertions(1)
        try {
            const result = await tagBusinessMock.getProductByTag("Jeans", "TOKEN")
            expect(result).toBe(tag1)
        } catch (error: any) {
            console.log(error)
        }
    })
})