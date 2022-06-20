export type Address = {
    logradouro: string, 
    bairro: string, 
    cidade: string,
    estado: string
}

export type addressComplete = {
    cep: string,
    logradouro: string,
    numero: number,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string
}