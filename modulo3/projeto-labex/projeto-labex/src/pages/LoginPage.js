import React, { useState, usEffect, useEffect } from "react";
import { useNavigate } from "react-router";
import { goBack, goToAdminHomePage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";
import useForm from "../hooks/useForms";


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
        <div>
            <p>Login Page</p>
            <form onSubmit={login}>
                <input
                    placeholder="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                />
                <input
                    placeholder="password"
                    name="password"
                    type="password"
                    required
                    value={form.password}
                    onChange={onChange}
                />
                <button>Enviar</button>
            </form>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}