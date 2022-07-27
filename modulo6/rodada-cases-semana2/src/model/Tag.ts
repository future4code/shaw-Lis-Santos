export class Tag {
    constructor (
    id: string,
    tag: string[], 
    product_id: string
    ) {}
}

export interface getByTag {
    product_id: string
    product_name: string
    tag: string[]
}