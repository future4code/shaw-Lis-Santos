import React, { useState, usEffect } from "react";
import { useNavigate } from "react-router";
import { goToAdminHomePage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const TripDetailsPage = () => {
    const navigate = useNavigate()

    return(
        <div>
            <p>Trip Details Page</p>
            <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
        </div>
    )
}