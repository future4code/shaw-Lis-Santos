import React, { useState, usEffect } from "react";
import { useNavigate } from "react-router";
import { goBack, goToAdminHomePage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }

    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const login = () => {
        console.log(email, password)
        const url = `${base_url}login`
        const body = {
            email: email,
            password: password
        }
        axios.post(url, body)
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
        <div>
            <p>Login Page</p>
            <input
                placeholder="email"
                type="email"
                value={email}
                onChange={onChangeEmail}
            />

            <input
                placeholder="password"
                type="password"
                value={password}
                onChange={onChangePassword}
            />
            <button onClick={() => goBack(navigate)}>Voltar</button>
            {/* <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button> */}
            <button onClick={login}>Enviar</button>
        </div>
    )
}