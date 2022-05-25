import axios from "axios";
import { BASE_URL } from '../constants/url'
import { goToFeed } from "../routes/coordinator";

export const login = (form, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    const url = `${BASE_URL}/users/login`
    axios.post(url, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeed(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.res)
        })

}

export const signUp = (form, clear, navigate, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    const url = `${BASE_URL}/users/signup`
    axios.post(url, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            setIsLoading(false)
            goToFeed(navigate)
            setRightButtonText("Logout")
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.res)
        })
}