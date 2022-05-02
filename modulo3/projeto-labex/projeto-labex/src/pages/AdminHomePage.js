import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { goToHomePage, goToCreateTripPage, goToLogin, goToTripDetailPage } from "../routes/coordinator";
import { base_url } from "../constants/constants";

const Tela = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
background-color: #F0F8FF ;
 `

const Card = styled.div`
display: flex;
width: 25vw;
height: 7vh;
margin: 10px;
border: 0.5px solid blue;
/* justify-content: space-between; */
border-radius: 10%;

&:hover{
    cursor: pointer;
    border: 0.5px solid #fda626;
}
`
const Posicionar = styled.div`
display: flex;
ul{

    align-self: center;
}
`

const Tittle = styled.div`
h1 {
    display: flex;
    justify-content: center;
}
`

const Button = styled.button`
/* display: block; */
background: none;
border: 0.5px solid blue;
text-align: center;
/* align-self: flex-end;
justify-content: flex-end; */
width: 3vw;
height: 3vh;
border-radius: 20%;
margin-left: 6px;
&:hover{
    cursor: pointer;
    /* background-color: #F0F8FF; */
    border: 0.5px solid #fda626;
}
}
`

const ButtonViagem = styled.button`
background: none;
border: 0.5px solid blue;
justify-content: center;
text-align: center;
align-self: center;
width: 5vw;
height: 3vh;
border-radius: 20%;
&:hover{
    cursor: pointer;
    border: 0.5px solid #fda626;
}
`

export const AdminHomePage = () => {
    const navigate = useNavigate()
    const [trips, setTrips] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            console.log('Não está logado')
            navigate("/login")
        }
    }, [])

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

    const deleteTrip = (id) => {
        const url = `${base_url}trips/${id}`
        const headers = {
            headers: {
                "Content-Type": "application/json",
                "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVCcXR3SmdUODRFUHRnTFFRUW1oIiwiZW1haWwiOiJsYWItYm90QGdtYWlsLmNvbSIsImlhdCI6MTY1MTE1NDcwNH0.WGYwkNy6zgcT7fU6P4kcJ_uwL_EmwErv2JHngVkM9P0"
            }

        }

        axios.delete(url, headers)
            .then((res) => {
                alert("Sua viagem foi apagada!")
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

            <Card>
                <Posicionar>


                    <ul key={tripName.id} onClick={() => goToTripDetailPage(navigate, tripName.id)}>


                        <b>{tripName.name}</b>




                        {/* <button onClick={() => navigate(`admin/trips/${trips.id}`)}>Ver Detalhes</button> */}
                        {/* <button onClick={() => deleteTrip(tripName.id) }> Delete</button> */}
                        

                        <Button onClick={() => deleteTrip(tripName.id)}> Delete</Button>
                        

                    </ul>
                </Posicionar>



            </Card>


        )
    })

    return (
        <Tela>
            <Tittle>
                <h1>Painel Administrativo</h1>
            </Tittle>
            {tripsName}


            <div>
                <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
                <ButtonViagem onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</ButtonViagem>
                <Button onClick={() => goToLogin(navigate)}>Logout</Button>
            </div>
        </Tela>
    )
}