import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { goToAdminHomePage } from "../routes/coordinator";
import { base_url } from "../constants/constants";


const Card = styled.div`
display: flex;
flex-direction: column;
 font-family: "Indie Flower";
 border: 1px solid blue;
 padding: 15px; 
 margin: 10px;
 width: 17vw;
 height: 33vh;
justify-content: space-between; 
text-align: center;
 flex-wrap: wrap;
 border-radius: 10%;
 `

 const Tittle = styled.div `
 h1{
     display: flex;
     justify-content: center;
 }

 `
 const Subtitle = styled.div `
 h2{
     display: flex;
     justify-content: center;
 }

 `

 const Bloco = styled.div `
padding: 5px;

 `

const Button = styled.button`
 background: none;
 border: 0.5px solid blue;
 justify-content: space-between;
 align-self: space-between;
 width: 3vw;
 height: 2.5vh;
 &:hover{
     cursor: pointer;
     background-color: #F0F8FF;
 }
 `
const Posicionar = styled.div`
display: flex;
justify-content: space-evenly;
text-align: center;
align-self: center;
`

export const TripDetailsPage = () => {
    const [tripDetails, setTripDetails] = useState({})
    const navigate = useNavigate()
    const params = useParams()
    const token = localStorage.getItem("token")

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            console.log('Não está logado')
            navigate("/login")
        }
    }, [])

    const getTripsDetails = () => {
        const url = `${base_url}trip/${params.id}`
        const headers = {
            headers: {
                auth: token
            }
        }
        axios.get(url, headers)
            .then((res) => {
                console.log(res.data.trip)
                setTripDetails(res.data.trip)
            })
            .catch((err) => {
                console.log(err.res.trip)
            })

    }

    const listCandidates = tripDetails.candidates && tripDetails.candidates.map((candidate) => {
        return (
            <Card>
                <div key={candidate.id} >
                <p><b> Nome: </b>{candidate.name}</p>
                <p><b> Idade: </b> {candidate.age}</p>
                <p> <b> Profissão: </b>{candidate.profession}</p>
                <p> <b> País: </b>{candidate.country}</p>
                <p> <b> Texto de Candidatura </b>{candidate.applicationText}</p>
                <br />

                <Posicionar>
                <div>
                <Button onClick={() => decideCandidates(candidate.id, true)}>Aprovar</Button>
                </div>
                <div>
                <Button onClick={() => decideCandidates(candidate.id, false)}>Reprovar</Button>
                </div>
                </ Posicionar>
                </div>
            </Card>
        )
    })

    const listApproved = tripDetails.approved && tripDetails.approved.map((person) => {
        return (

            <div>
                <li>
                    {person.name}
                </li>
            </div>

        )
    })

    console.log(tripDetails)
    useEffect(() => {
        getTripsDetails()
    }, [])
    const decideCandidates = (candidateId, boolean) => {
        const body = { approve: boolean };
        const token = localStorage.getItem("token");

        axios
            .put(
                `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lis-ribeiro-shaw/trips/${params.id}/candidates/${candidateId}/decide`,
                body,
                {
                    headers: {
                        auth: token,
                    },
                }
            )
            .then((res) => {
                alert("Transação aceita!");
            })
            .catch((err) => {
                console.log(err.res);
            });
    };

    useEffect(() => {
        getTripsDetails()
    }, [])

    return (
        <div>
        <Tittle>
            <h1> {tripDetails.name}</h1> 
            </Tittle>
            <Bloco>
            <p> <b> Nome: </b>{tripDetails.name} </p>
            <p> <b> Descrição:  </b> {tripDetails.description} </p>
            <p> <b> Planeta: </b>{tripDetails.planet} </p>
            <p> <b> Duração:  </b>{tripDetails.durationInDays} </p>
            <p> <b> Data:</b> {tripDetails.date} </p>
            </Bloco>

            <Subtitle>
                <h2>Candidatos pendentes</h2>
                {listCandidates}
                <br />
                <h2>Candidatos Aprovados </h2>
                {listApproved}
            </Subtitle>
            <Button onClick={() => goToAdminHomePage(navigate)}>Voltar</Button>
            </div>
    )
}