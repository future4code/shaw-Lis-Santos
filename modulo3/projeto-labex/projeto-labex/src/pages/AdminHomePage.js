import React, { useState, usEffect, useEffect } from "react";
import { useNavigate } from "react-router";
import { goToHomePage, goToCreateTripPage, goToLogin, goToTripDetailPage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const AdminHomePage = () => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])

    const getTrips = () => {
        const url = `${base_url}trips`
        axios.get(url)
            .then((res) => {
                setTrips(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getTrips()
    }, [])

    const tripsName = trips.map((tripName) => {
        return (
            <div key={tripName.id}>
                {tripName.name} 
               <button onClick={() => navigate(`admin/trips/${trips.id}`)}>Ver Detalhes</button>
            </div>
        )
    })

    return (
        <div>
            <p>Admin Home Page</p>
            {tripsName}
            <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={() => goToLogin(navigate)}>Logout</button>
            <div>
                <button onClick={() => goToTripDetailPage(navigate)}>Trip Details Page</button>
            </div>

        </div>
    )
}