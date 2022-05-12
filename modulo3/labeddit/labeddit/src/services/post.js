import axios from "axios"
import { BASE_URL } from '../constants/url'

export const createPost = (form, clear, setIsLoading) => {
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
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.res)
        })
}


export const createComment = (form, onChange, clear, id) => {
    const url = `${BASE_URL}/posts/${id}/comments`
    axios.post(url, form, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}