import axios from "axios";
import { BASE_URL } from '../constants/url'
import { goToFeed } from "../routes/coordinator";

export const login = (form, clear, navigate, setRightButtonText) => {
    const url = `${BASE_URL}/users/login`
    axios.post(url, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            alert("Erro no login")
        })

}

export const signUp = (form, clear, navigate, setRightButtonText) => {
    const url = `${BASE_URL}/users/signup`
    axios.post(url, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeed(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            alert(err.res)
        })
}