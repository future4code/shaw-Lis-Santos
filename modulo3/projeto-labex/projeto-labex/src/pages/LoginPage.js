import React from "react";
import axios from "axios";
import styled from "styled-components"
import { useNavigate } from "react-router";
import { goBack } from "../routes/coordinator";
import { base_url } from "../constants/constants";
import useForm from "../hooks/useForms";


const Tela = styled.div `
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
justify-content: space-between;
background-color: #F0F8FF;
`

const Formulario = styled.form `
align-self: center;
justify-content: center;
`

const Input = styled.input `
border-radius: 10%;
width: 20vw;
height: 5vh;
border: 1px solid blue;
`

const Posicionar = styled.div `
justify-content: center;
text-align: center;
align-self: center;
`
const Button = styled.button`
background: none;
border: 0.5px solid blue;
justify-content: center;
text-align: center;
align-self: center;
width: 3vw;
height: 2.5vh;
border-radius: 20%;
&:hover{
    cursor: pointer;
    background-color: #F0F8FF;
}
`


export const LoginPage = () => {
    const navigate = useNavigate()

    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })

    const login = (e) => {
        e.preventDefault()
        console.log(form)
        const url = `${base_url}login`
        const headers = {
            headers: {
                ContentType: "application/json"
            }
        }
        axios.post(url, form, headers)
            .then((res) => {
                console.log(res.data.token)
                localStorage.setItem('token', res.data.token)
                navigate("/admin/trips/list")
            })
            .catch((err) => {
                console.log(err.res)
            })
    }

    return (
        <Tela>
            <Posicionar>
            <h1>Login</h1>
            <Formulario onSubmit={login}>
                <div>
                <Input
                    placeholder="e-mail"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                />
                </div>
                <div>
                <Input
                    placeholder="password"
                    name="password"
                    type="password"
                    required
                    value={form.password}
                    onChange={onChange}
                />
                </div>
                
                <Button>Enviar</Button>
            </Formulario>
            <Button onClick={() => goBack(navigate)}>Voltar</Button>
           </Posicionar>
        </Tela>
    )
}