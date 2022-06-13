import axios from "axios";
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
        const requests = users.map(user =>
            axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message
            }))

        await Promise.all(requests)

        console.log("Notificações enviadas com sucesso!")
    } catch {
        console.log("Erro ao notificar")
    }
}

const main = async (): Promise<void> => {
    try {
        await sendNotifications([], "oi")
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }
}

main()

// a. Cria uma requisição (axios.post) em cada posição do vetor.

// b. Enviará as notificações para todos os usuários ao mesmo tempo.