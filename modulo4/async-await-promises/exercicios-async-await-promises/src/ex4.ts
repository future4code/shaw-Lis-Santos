import axios from "axios";
import { baseURL } from "./baseURL";

const createNews = async (
    title: string,
    content: string,
    date: number
): Promise<void> => {
    const response = await axios.put(`${baseURL}/news`, {
        title: title,
        content: content,
        date: date
    })
}

const main = async (): Promise<void> => {
    try {
        createNews("Help", "Não sei nada de knex", 13)
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()

// a. Arrow function. Evita bugs no código.