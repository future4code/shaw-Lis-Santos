import React, { useState, usEffect } from "react";
import { useNavigate } from "react-router";
import {goBack} from "../routes/coordinator"
import axios from "axios";
import { base_url } from "../constants/constants";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    return(
        <div>
            <p>Application Form Page</p>
            <button onClick={() => goBack(navigate)}>Voltar</button>
        </div>
    )
}