import React, { useState, usEffect } from "react";
import { useNavigate } from "react-router";
import { goBack } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const CreateTripPage = () => {
    const navigate = useNavigate()

    return(
        <div>
            <p>Create Trip Page</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
            
        </div>
    )
}