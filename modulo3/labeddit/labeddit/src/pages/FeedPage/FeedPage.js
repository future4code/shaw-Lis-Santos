import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from "../../constants/url";
import { PostListContainer, PostCard, UserName } from "./styled";
import { TextField } from "@material-ui/core";
import { InputsContainer, ScreenContainer } from "./styled";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/post";


const FeedPage = () => {
    useProtectedPage()
    const [form, onChange, clear] = useForm({ title: '', body: '' })
    const posts = useRequestData([], `${BASE_URL}/posts`)

    const onSubmitForm = e => {
        e.preventDefault()
        createPost(form, clear)
    }

    const postCards = posts.map((post) => {
        return (
            <PostCard key={post.id}>
                <UserName> Enviado por: {post.username} </UserName>
                <br />
                <p>{post.body}</p>

            </PostCard>
        )
    })

    return (
        <div>
            <ScreenContainer>
                <InputsContainer>
                    <form onSubmit={onSubmitForm}>
                        <TextField
                            name={"title"}
                            value={form.title}
                            onChange={onChange}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                            placeholder="Título"
                        />
                        <TextField
                            name={"body"}
                            value={form.body}
                            onChange={onChange}
                            placeholder={"Escreva seu post..."}
                            variant={"outlined"}
                            fullWidth
                            margin={"normal"}
                            required
                        />
                        <Button
                            type={"submit"}
                            fullWidth
                            variant={"contained"}
                            color={"primary"}
                        >
                            Postar
                        </Button>
                    </form>
                </InputsContainer>
            </ScreenContainer>
            <PostListContainer>
                {postCards}
            </PostListContainer>
        </div>
    )
}

export default FeedPage;