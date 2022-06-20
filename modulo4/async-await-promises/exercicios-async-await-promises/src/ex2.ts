import axios from "axios";
import { baseURL } from "./baseURL";

const getAllSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
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

// a. Na função nomeada utilizamos a palavra function e o async vem no início de tudo, já a arrow function é uma função não nomeada, denominada em uma variável, o async vem logo após o sinal de '=' e a '=>' vem após a tipagem do retorno.