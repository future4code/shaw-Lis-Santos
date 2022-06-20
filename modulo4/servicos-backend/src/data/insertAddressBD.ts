import { addressComplete } from "../types/typeAddres";
import { connection } from './connection'

export default async function insertAddressBD(address: addressComplete) {

    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = address

        console.log(address)

    await connection("address").insert({
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    })
}