import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
    id: string;
    name: string;
    email: string;
}

// a. 
const getAllSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    });
}

const main = async (): Promise<void> => {
    try {
        const subscribers = await getAllSubscribers()
        console.log(subscribers)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()

// Não ocorre nenhum erro na tipagem.

// b. Para especificar qual ponto da resposta se quer realmente.