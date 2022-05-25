import axios from "axios"
import { BASE_URL } from '../constants/url'

export const createPost = (form, clear, setIsLoading, getPosts) => {
    setIsLoading(true)
    const url = `${BASE_URL}/posts`
    axios.post(url, form, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            console.log(res)
            alert(res.data)
            clear()
            getPosts()
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.res)
        })
}