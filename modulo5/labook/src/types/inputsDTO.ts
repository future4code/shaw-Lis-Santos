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
    event = "event"
}

export type PostInputDTO = {
    photo: string
	description: string
	type: TYPE
    author_id: string
}

export type PostDataDTO = {
    id: string
    photo: string
	description: string
	type: TYPE
    author_id: string
}