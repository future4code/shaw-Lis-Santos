import axios from "axios"
import { addressComplete } from '../types/typeAddres'

export const getFullAddress = async (cep: string, numero: number, complemento: string): Promise<addressComplete | undefined> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: addressComplete = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            numero: numero,
            complemento: complemento,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        return address
    } catch (error: any) {
        return error.sqlMessage || error.message
    }
}