import { Product } from "../../src/model/Product"
import { Product1, Product2 } from "./ProductMock"

export class ProductDatabaseMock {

    public async getProductByName(product_name: string): Promise<Product | undefined> {
        switch (product_name) {
            case "Calça pantalona":
                return Product1
            case "Blusa canelada com gola":
                return Product2
            default:
                return undefined
        }
    }
    public async getProductById (id: string): Promise<Product | undefined> {
        switch (id) {
            case "id_product1":
                return Product1
            case "id_product2":
                return Product2
            default:
                return undefined
        }
    }
}