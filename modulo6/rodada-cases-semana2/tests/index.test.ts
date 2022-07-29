import { ProductBusiness } from "../src/business/ProductBusiness"
import { TagBusiness } from "../src/business/TagBusiness"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"
import { TagDatabaseMock } from "./mocks/TagDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { Product1, Product2 } from "./mocks/ProductMock"
import { tag1 } from "./mocks/TagMock"

const productBusinessMock = new ProductBusiness(
    new ProductDatabaseMock as any,
    new TagDatabaseMock as any,
    new IdGeneratorMock
)

const tagBusinessMock = new TagBusiness(
    new TagDatabaseMock as any
)

describe("products_amaro e product_tag tables tests", () => {
    test("Test getProductByName, empty product_name parameter", async () => {
        expect.assertions(1)
        try {
            await productBusinessMock.getProductByName("")
        } catch (error: any) {
            expect(error.message).toBe("Insira um nome de produto para pesquisa")
        }
    })
    test("Sucess test getProdyctByName", async () => {
        expect.assertions(1)
        try {
            const result = await productBusinessMock.getProductByName("Calça pantalona")
            expect(result).toBe(Product1)

        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("Test getProductById, empty id parameter", async () => {
        expect.assertions(1)
        try {
            await productBusinessMock.getProductById("")
        } catch (error: any) {
            expect(error.message).toBe("Insira um produto com esse id")
        }
    })
    test("Sucess test getProductById", async () => {
        expect.assertions(1)
        try {
            const result = await productBusinessMock.getProductById("id_product2")
            expect(result).toBe(Product2)

        } catch (error: any) {
            console.log(error.message)
        }
    })
    test("Test getProductByTag, empty tag parameter", async () => {
        expect.assertions(1)
        try {
            await tagBusinessMock.getProductByTag("Algodão")
        } catch (error: any) {
            expect(error.message).toBe("Tag inválida")
        }
    })
    test("Sucess test getProductByTag", async () => {
        expect.assertions(1)
        try {
            const result = await tagBusinessMock.getProductByTag("Jeans")
            expect(result).toBe(tag1)
        } catch (error: any) {
            console.log(error)
        }
    })

})