import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinator";
import { base_url } from "../constants/constants";
import BackgroundCard from "../img/background-card.webp"

const Tela = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
justify-content: space-between;
`

// const Header = styled.header `
// width: 20vw;
// height: 20vh;
// justify-content: flex-end;
// text-align: flex-end;
// align-self: flex-end;
// `

const Card = styled.div`
display: flex;
flex-direction: column;
 font-family: "Indie Flower";
 border: 1px solid blue;
 padding: 15px; 
 margin: 10px;
 width: 20vw;
 height: 35vh;
justify-content: space-between; 
text-align: center;
 flex-wrap: wrap;
 border-radius: 10%;
 
 `

 const Spacing = styled.div `
justify-content: space-between;
text-align: space-between;
align-self: space-between;
 `

const Button = styled.button`
background: none;
border: 0.5px solid blue;
justify-content: center;
text-align: center;
align-self: center;
width: 7vw;
height: 5vh;
&:hover{
    cursor: pointer;
    background-color: #F0F8FF;
}
`
// const Tittle = styled.h1`
// justify-content: center;
// text-align: center;
// align-self: center;
// `

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

    const travel = trips.map((trip) => {
        return (
            <Card key={trip.id}>
                <p> <b>Nome: </b> {trip.name} </p>
                <p> <b>Descrição: </b> {trip.description} </p>
                <p>  <b>Planeta:</b> {trip.planet} </p>
                <p> <b>Duração:</b> {trip.durationInDays} dias </p>
                <p>  <b>Data:</b> {trip.date} </p>
            </Card>
        )
    })

    return (
        <div>
            <Tela>
                
              
                {/* <Tittle>Lista de Viagens</Tittle> */}
                
                {travel}
                <Spacing>
                    <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
                    <Button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</Button>
                </Spacing>
            </Tela>
        </div>
    )
}