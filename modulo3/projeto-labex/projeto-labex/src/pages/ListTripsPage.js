import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { goToHomePage, goToApplicationFormPage } from "../routes/coordinator";
import { base_url } from "../constants/constants";


const Tela = styled.div`
display: flex;
flex-direction: column;
/* flex-wrap: wrap; */
width: 100%;
height: 100%;
 background-color:  ; 
align-items: center;
background-color: #F0F8FF;
`

const Header = styled.header`
display: flex;
justify-content: flex-end;
width: 20%;
height: 20%;
justify-content: flex-end;
text-align: flex-end;
align-self: flex-end;
background-color: #F0F8FF;
`


const Card = styled.div`
display: flex;
flex-direction: column;
 font-family: "Indie Flower";
 border: 1px dashed blue;
 padding: 15px; 
 margin: 10px;
 width: 20vw;
 height: 35vh;
justify-content: space-between; 
text-align: center;
 border-radius: 12%;
 &:hover{
    border: 1px dashed #fda626;
 }
 
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
    border: 1px solid #fda626;
    opacity: 0.6;
 };
 }
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
                <Header>

                    <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
                    <Button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</Button>

                </Header>
                <div>
                    {/* <Tittle>Lista de Viagens</Tittle> */}

                    {travel}
                </div>
                {/* <Spacing>
                    <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
                    <Button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</Button>
                </Spacing> */}
            </Tela>
        </div >
    )
}