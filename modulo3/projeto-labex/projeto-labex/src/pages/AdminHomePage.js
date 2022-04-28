import React, { useState, usEffect, useEffect } from "react";
import { useNavigate } from "react-router";
import { goToHomePage, goToCreateTripPage, goToLogin, goToTripDetailPage } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";

export const AdminHomePage = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [description, setDescripition] = useState("")
    const [planet, setPlanet] = useState("")
    const [durationInDays, setDurationInDays] = useState(0)
    const [date, setDate] = useState(0)

    const createTrip = () => {
        const url = `${base_url}trips`
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }
        axios.post(url, body)
            .then((res) => {

            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        createTrip()
    }, [])

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onChangeDescription = e => {
        setDescripition(e.target.value)
    }

    const onChangePlanet = e => {
        setPlanet(e.target.value)
    }

    const onChangeDurationInDays = e => {
        setDurationInDays(e.target.value)
    }

    const onChangeDate = e => {
        setDate(e.target.value)
    }

    return (
        <div>
            <p>Admin Home Page</p>
        <form> 
            <input
            placeholder="Nome"
            value={name}
            onChange={onChangeName}
            />
            <select name="planetas" id="planetas">
                    <option value="Escolha um Planeta" selected="Escolha um Planeta"> Planeta </option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutã0">Plutão</option>
            </select>
        </form>
            <button onClick={() => goToHomePage(navigate)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={() => goToLogin(navigate)}>Logout</button>
            <div>
                <button onClick={() => goToTripDetailPage(navigate)}>Trip Details Page</button>
            </div>

        </div>
    )
}