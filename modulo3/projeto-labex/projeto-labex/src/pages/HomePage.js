import React, { useState, usEffect } from "react";
import { useNavigate } from "react-router";
import { goToListTripsPage, goToLogin } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <p>Home Page</p>
            <button onClick={() => goToListTripsPage(navigate)}>Lista de viagens</button>
            <button onClick={() => goToLogin(navigate)}>Área de admin</button>
        </div>
    )
}