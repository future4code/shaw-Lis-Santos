import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";
import styled from "styled-components";

const Tela = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
justify-content: space-between;

`

const Card = styled.div`
display: flex;
flex-direction: column;
 font-family: "Indie Flower";
 border: 1px solid black;
 padding: 15px; 
 margin: 10px;
 width: 260px;
 height: 200px;
justify-content: center; 
text-align: center;
 flex-wrap: wrap;
 border-radius: 10%;
 `


export const ListTripsPage = () => {
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

//     const deleteTrip = (id) => {
//         const url = `${base_url}trips/${id}`
//         const headers = {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVCcXR3SmdUODRFUHRnTFFRUW1oIiwiZW1haWwiOiJsYWItYm90QGdtYWlsLmNvbSIsImlhdCI6MTY1MTE1NDcwNH0.WGYwkNy6zgcT7fU6P4kcJ_uwL_EmwErv2JHngVkM9P0"
//                 }
            
//         }

//         axios.delete(url, headers)
//         .then((res) => {
//             console.log(res)
//         })
//         .catch((err) => {
//         console.log(err)
//     })
// }
    const travel = trips.map((trip) => {
        return (
            <Card key={trip.id}>
                <p> <b>Nome: </b> {trip.name} </p>
                <p> <b>Descrição: </b> {trip.description} </p>
                <p>  <b>Planeta:</b>{trip.planet} </p>
                <p> <b>Duração:</b>{trip.durationInDays} dias </p>
                <p>  <b>Data:</b>{trip.date} </p>
                <button onClick={() => navigate(`admin/trips/${trip.id}`)}>Ver Detalhes</button>
                {/* <button onClick={() => deleteTrip(trip.id) }> Delete</button> */}
            </Card>
        )
    })

    return (
        <div>
            <Tela>
                <p>List Trips Page</p>
                {travel}
                <div>
                    <button onClick={() => goToHomePage(navigate)}>Voltar</button>
                    <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
                </div>
            </Tela>
        </div>
    )
}