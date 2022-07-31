export type ProductDTO = {
    product_name: string
}

export class Product {
    constructor(
        private id: string,
        private product_name: string,
    ) { }
}

export class ProductTag {
    constructor(
        private id: string,
        private tag: string,
        private product_id: string
    ) { }
}