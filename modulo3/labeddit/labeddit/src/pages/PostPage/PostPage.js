import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router";
import useForm from "../../hooks/useForm";
import { TextField } from "@material-ui/core";
import { InputsContainer, ScreenContainer } from "./styled";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)
    const [form, onChange, clear] = useForm({ body: '' })
    const [post, setPost] = useState({})

    useEffect(() => {
        for (const post of posts) {
            if (post.id === params.id) {
                setPost(post)
                break
            }
        }
    }, [post])

    const onSubmitForm = (e) => {
        e.preventDefault()
        createComment(form, clear)
    }

    const createComment = (form, clear) => {

        const url = `${BASE_URL}/posts/${params.id}/comments`
        axios.post(url, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
                clear()
            })
            .catch((err) => {
                console.log(err)

            })
    }

    return (
        <div>
            <ScreenContainer>
                <InputsContainer>
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            label={"Comentário"}
                        />
                        <Button
                            type={"submit"}
                            fullWidth
                            variant={"contained"}
                            color={"primary"}
                        >
                            {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Comentar</>}
                        </Button>
                    </form>
                </InputsContainer>
            </ScreenContainer>

        </div>

    )
}
export default PostPage;