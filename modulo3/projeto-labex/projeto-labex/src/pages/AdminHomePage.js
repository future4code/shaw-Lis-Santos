import React, { useState, usEffect } from "react";
import { useNavigate } from "react-router";
import { goToHomePage, goToCreateTripPage, goToLogin, goToTripDetailPage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const AdminHomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Admin Home Page</p>
            <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={() => goToLogin(navigate)}>Logout</button>
            <div>
                <button onClick={() => goToTripDetailPage(navigate)}>Trip Details Page</button>
            </div>

        </div>
    )
}