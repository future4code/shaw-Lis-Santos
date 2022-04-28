import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { goToAdminHomePage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const TripDetailsPage = () => {
    const [trips, setTrips] = useState([])
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            console.log('Não está logado')
            navigate("/login")
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token')
        const url = `${base_url}trip/${params.id}`
        const headers = {
            headers: {
                auth: token
            }
        }
        axios.get(url, headers)
            .then((res) => {
                console.log(res.data)
                setTrips([res.data])
            })
            .catch((err) => {
                console.log(err.res)
            })

    }, [])

    const travel = trips.map((trip) => {
        return(
            <div key={trip.trip.id}>
                {trip.trip.name}
            </div>
        )
    })

    return (
        <div>
            <p>Trip Details Page</p>
            {travel}
            <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
        </div>
    )
}