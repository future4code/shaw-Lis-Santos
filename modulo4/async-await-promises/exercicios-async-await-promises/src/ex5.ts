import axios from "axios"
import { baseURL } from "./baseURL";

type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotifications = async (
    users: user[],
    message: string
): Promise<void> => {

    try {
        for (const user of users) {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message
            });
        }

        console.log("All notifications sent");
    } catch {
        console.log("Error");
    }
};

const main = async (): Promise<void> => {
    try {
        await sendNotifications([], "oi")
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()