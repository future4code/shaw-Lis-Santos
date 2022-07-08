import axios from "axios";
import { baseURL } from "./baseURL";

async function getAllSubscribers(): Promise<any[]> {
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

// a. GET
// b. any[]