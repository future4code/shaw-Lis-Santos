export type SingUpInputDTO = {
    name: string
    email: string
    password: string
}

export type LoginInputDTO = {
    email: string
    password: string
}

export enum TYPE {
    normal = "normal",
    evento = "evento"
}

export type PostInputDTO = {
    photo: string
	description: string
	type: TYPE
	created_at: Date
    author_id: string
}