import React, { useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from "../../constants/url";
import { TextField } from "@material-ui/core";
import { InputsContainer, ScreenContainer, ReactButton, Bloco, PostCard, UserName } from "./styled";
import { Button } from "@material-ui/core";
import useForm from "../../hooks/useForm";
import { createPost } from "../../services/post";
import { CircularProgress } from "@material-ui/core";
import Loading from '../../components/Loading/Loading'
import axios from "axios";
import { useNavigate } from "react-router";
import { goToPost } from "../../routes/coordinator";
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import TextsmsTwoToneIcon from '@material-ui/icons/TextsmsTwoTone';


const FeedPage = () => {
    useProtectedPage()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange, clear] = useForm({ title: '', body: '' })
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)

    const onClickCard = (id) => {
        goToPost(navigate, id)
    }

    const onSubmitForm = e => {
        e.preventDefault()
        createPost(form, clear, setIsLoading, getPosts)
    }

    const createPostVote = (id) => {
        const url = `${BASE_URL}/posts/${id}/votes`
        const body = {
            direction: 1
        }
        axios.post(url, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
                getPosts()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const changePostVote = (id) => {
        const url = `${BASE_URL}/posts/${id}/votes`
        const body = {
            direction: -1
        }
        axios.put(url, body, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
                getPosts()
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const deleteCommentVote = (id) => {
        const url = `${BASE_URL}/posts/${id}/votes`
        axios
            .delete(url, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                console.log(res.data)
                getPosts()
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const postCards = posts.map((post) => {
        console.log(post)
        return (
            <PostCard >
                <div key={post.id} onClick={() => onClickCard(post.id)}>
                    <UserName> Enviado por: {post.username} </UserName>
                    <br />
                    <p>{post.title} </p>
                    <p>{post.body}</p>
                </div>
                <Bloco>
                    <ReactButton onClick={() => createPostVote(post.id)}><FavoriteTwoToneIcon color={"primary"} /> </ReactButton>
                    {post.voteSum}
                    <ReactButton onClick={() => changePostVote(post.id)}><FavoriteBorderTwoToneIcon color={"primary"} /> </ReactButton>
                    <ReactButton onClick={() => deleteCommentVote(post.id)}><DeleteForeverTwoToneIcon color={"primary"} /></ReactButton>
                    <ReactButton onClick={() => goToPost(navigate, post.id)}> {post.commentCount}<TextsmsTwoToneIcon color={"primary"} /></ReactButton>
                </Bloco>

            </ PostCard>
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
                            label={"Título"}
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
                            {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Postar</>}
                        </Button>
                    </form>
                </InputsContainer>
            </ScreenContainer>
            {postCards.length > 0 ? postCards : <Loading />}
        </div>
    )
}

export default FeedPage;