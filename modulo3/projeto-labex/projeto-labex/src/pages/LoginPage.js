import React, { useState, usEffect } from "react";
import { useNavigate } from "react-router";
import { goBack, goToAdminHomePage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Login Page</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button>
        </div>
    )
}