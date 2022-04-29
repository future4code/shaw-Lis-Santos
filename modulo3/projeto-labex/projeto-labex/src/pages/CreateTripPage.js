import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { goBack } from "../routes/coordinator";
import axios from "axios";
import { base_url } from "../constants/constants";
import useForm from "../hooks/useForms";

export const CreateTripPage = () => {
    const navigate = useNavigate()

    const { form, onChange, clearFields } = useForm({
        name: "",
        description: "",
        planet: "",
        durationInDays: "",
        date: "dd-mm-yyyy"
    })



    const createTrip = () => {
        const url = `${base_url}trips`
        const headers = {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVCcXR3SmdUODRFUHRnTFFRUW1oIiwiZW1haWwiOiJsYWItYm90QGdtYWlsLmNvbSIsImlhdCI6MTY1MTE1NDcwNH0.WGYwkNy6zgcT7fU6P4kcJ_uwL_EmwErv2JHngVkM9P0",
            }
        }
        axios.post(url, form, headers)
            .then((res) => {

            })
            .catch((err) => {
                console.log(err.res)
            })
    }
    useEffect(() => {
        createTrip()
    }, [])

    return (
        <div>
            <p>Create Trip Page</p>
            <form>
                <input
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                />
                <select name="planet" id="planet">
                    <option value="Planeta" selected="Planeta"> Escolha um Planeta </option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Júpiter">Júpiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Netuno">Netuno</option>
                    <option value="Plutão">Plutão</option>
                </select>
                <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Descrição"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    required
                />
                <input
                    placeholder="Duração em dias"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    required
                />
            </form>

        </div>
    )
}