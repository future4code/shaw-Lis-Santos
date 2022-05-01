import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { goBack } from "../routes/coordinator"
import { base_url } from "../constants/constants";
import useForm from "../hooks/useForms";
import dataJson from '../json/paises-array.json'

const Tela = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
justify-content: space-between;
background-color: #F0F8FF;
`

const Formulario = styled.div`
align-self: center;
justify-content: center;
`

const Input = styled.input`
border-radius: 10%;
width: 20vw;
height: 5vh;
border: 1px solid blue;
&:hover{
    cursor: pointer;
    background-color: #F0F8FF;
}
`

const Select = styled.select`
border-radius: 10%;
width: 20vw;
height: 5vh;
border: 1px solid blue;
&:hover{
    cursor: pointer;
    background-color: #F0F8FF;
}
`

const Posicionar = styled.div`
justify-content: center;
text-align: center;
align-self: center;
`
const Button = styled.button`
background: none;
border: 0.5px solid blue;
justify-content: center;
text-align: center;
align-self: center;
width: 5vw;
height: 4vh;
border-radius: 20%;
&:hover{
    cursor: pointer;
    background-color: #F0F8FF;
}
`

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const [trips, setTrips] = useState([])
    const [tripId, setTripId] = useState("")

    const { form, onChange, clearFields } = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: ""
    })

    const applyToTrip = (e) => {
        e.preventDefault()
        const url = `${base_url}trips/${tripId}/apply`
        const headers = {
            headers: {
                "Content-Type": "application/json",
            },
        }
        console.log(form)

        axios.post(url, form, headers)
            .then((res) => {
                alert("Suas informações foram recebidas e encaminhadas para o administrador. Boa sorte!")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const getTrips = () => {
        const url = `${base_url}trips`
        axios.get(url)
            .then((res) => {
                setTrips(res.data.trips)
                clearFields()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const setId = (e) => {
        setTripId(e.target.value)
    }

    useEffect(() => {
        getTrips()
    }, [])

    const tripNameAndID = trips.map((trip) => {
        return (

            <option key={trip.id} value={trip.id}>{trip.name}</option>
        )
    })

    const countrysJason = dataJson.map((country) => {
        return (
            <option key={country.nome} value={country.nome}>{country.nome}</option>
        )
    })

    return (
        <div>
            <h1>Inscreva-se para uma viagem</h1>
            <form onSubmit={applyToTrip}>
                <div>
                <select onChange={setId}>
                    <option>
                        Escolha uma viagem
                    </option>
                    {tripNameAndID}
                </select>
                </div>
                <div>
                <input
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                />
                </div>
                <div>
                <input
                    placeholder="Idade"
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={onChange}
                    required
                    min={"18"}
                />
                </div>
                <div>
                <input
                    placeholder="Texto de candidatura"
                    name="applicationText"
                    required
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                </div>
                <div>
                <input
                    placeholder="Profissão"
                    name="profession"
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{10,}"}
                    title={"O texto deve ter no mínimo 10 caracteres"}
                />
                </div>
                <div>
                <select name="country"
                    value={form.country}
                    onChange={onChange}
                    required>
                    {countrysJason}

                </select>
                </div>
                
                <button>Cadastrar</button>
                
            </form>
            <button onClick={() => goBack(navigate)}>Voltar</button>

        </div>
    )
}