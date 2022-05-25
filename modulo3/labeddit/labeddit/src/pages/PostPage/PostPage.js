import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useParams } from "react-router";
import useForm from "../../hooks/useForm";
import { TextField } from "@material-ui/core";
import { InputsContainer, ScreenContainer, PostCard, UserName, ReactButton, Bloco } from "./styled";
import { Button } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { BASE_URL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import Loading from "../../components/Loading/Loading";
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@material-ui/icons/FavoriteBorderTwoTone';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import TextsmsTwoToneIcon from '@material-ui/icons/TextsmsTwoTone';

const PostPage = () => {
    useProtectedPage()
    const params = useParams()
    // const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [posts, getPosts] = useRequestData([], `${BASE_URL}/posts`)
    const [form, onChange, clear] = useForm({ body: '' })
    const [post, setPost] = useState({})
    const [comments, getComments] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)

    useEffect(() => {
        for (const post of posts) {
            if (post.id === params.id) {
                setPost(post)
                break
            }
        }
    }, [posts])

    const onSubmitForm = (e) => {
        e.preventDefault()
        createComment(form, clear, getComments)
    }

    const createComment = (form, clear) => {
        setIsLoading(true)
        const url = `${BASE_URL}/posts/${params.id}/comments`
        axios.post(url, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data)
                clear()
                getComments()
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setIsLoading(false)

            })
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

    const deletePostVote = (id) => {
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
                getComments()
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const createCommentVote = (id) => {
        const url = `${BASE_URL}/comments/${id}/votes`
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
                getComments()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const changeCommentVote = (id) => {
        const url = `${BASE_URL}/comments/${id}/votes`
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
                getComments()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const deleteCommentVote = (id) => {
        const url = `${BASE_URL}/comments/${id}/votes`
        axios
            .delete(url, {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            .then((res) => {
                console.log(res.data)
                getComments()
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const commentsList = comments?.map((comment) => {
        return (
            <PostCard key={comment.id}>
                <div>
                    <UserName>Enviado por: {comment.username}</UserName>
                    <br />
                    <div>{comment.body}</div>
                    <Bloco>
                        <ReactButton onClick={() => createCommentVote(comment.id)}><FavoriteTwoToneIcon color={"primary"} /> </ReactButton>
                        {comment.voteSum}
                        <ReactButton onClick={() => changeCommentVote(comment.id)}><FavoriteBorderTwoToneIcon color={"primary"} /> </ReactButton>
                        <ReactButton onClick={() => deleteCommentVote(comment.id)}><DeleteForeverTwoToneIcon color={"primary"} /></ReactButton>
                    </Bloco>

                </div>

            </PostCard>
        )
    })


    return (
        <div>
            <PostCard >
                <div key={post.id}>
                    <UserName> Enviado por: {post.username} </UserName>
                    <br />
                    <p>{post.title} </p>
                    <p>{post.body}</p>
                </div>
                <Bloco>
                    <ReactButton onClick={() => createPostVote(post.id)}><FavoriteTwoToneIcon color={"primary"} /> </ReactButton>
                    {post.voteSum}
                    <ReactButton onClick={() => changePostVote(post.id)}><FavoriteBorderTwoToneIcon color={"primary"} /> </ReactButton>
                    <ReactButton onClick={() => deletePostVote(post.id)}><DeleteForeverTwoToneIcon color={"primary"} /></ReactButton>
                    <ReactButton> {post.commentCount}<TextsmsTwoToneIcon color={"primary"} /></ReactButton>
                </Bloco>

            </ PostCard>
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
                            placeholder="Adicionar comentário..."
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
            {commentsList.length >= 0 ? commentsList : <Loading />}

        </div>

    )
}
export default PostPage;