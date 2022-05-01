import React, { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { goBack } from "../routes/coordinator";
import { base_url } from "../constants/constants";
import useForm from "../hooks/useForms"
import planetsJason from '../json/planets.json'

const Tela = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100vw;
height: 100vh;
justify-content: space-between;
background-color: #F0F8FF;
`

const Formulario = styled.form`
align-self: center;
justify-content: center;
`

const Input = styled.input`
border-radius: 10%;
width: 20vw;
height: 5vh;
border: 1px solid blue;
`

const Select = styled.select`
border-radius: 10%;
width: 20vw;
height: 5vh;
border: 1px solid blue;
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
width: 3vw;
height: 2.5vh;
border-radius: 20%;
&:hover{
    cursor: pointer;
    background-color: #F0F8FF;
}
`

export const CreateTripPage = () => {
    const navigate = useNavigate()

    const { form, onChange, clearFields } = useForm({
        name: "",
        planet: "",
        date: [],
        description: "",
        durationInDays: "",
    })

    const convertDate = new Date(form.date);
    const dateBr = convertDate.getDate() + "/" + convertDate.getMonth() + 1 + convertDate.getFullYear()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token === null) {
            console.log('Não está logado')
            navigate("/login")
        }
    }, [])

    const createTrip = (e) => {
        e.preventDefault()
        const url = `${base_url}trips`
        // const token = localStorage.getItem("token")
        const headers = {
            //     headers: {
            //         auth: token,
            //     }
            // }
            headers: {
                "Content-Type": "application/json",
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkVCcXR3SmdUODRFUHRnTFFRUW1oIiwiZW1haWwiOiJsYWItYm90QGdtYWlsLmNvbSIsImlhdCI6MTY1MTE1NDcwNH0.WGYwkNy6zgcT7fU6P4kcJ_uwL_EmwErv2JHngVkM9P0"
            }

        }
        axios.post(url, form, headers)
            .then((res) => {
                alert("Viagem cadastrada!")
                clearFields()
            })
            .catch((err) => {
                console.log(err.res.data)
                alert("Não foi possível cadastrar a viagem.")
            })
    }

    console.log(form)
    const planetsSolarSystem = planetsJason.map((planets) => {
        return (
            <option key={planets.ordem} value={form.planets}>{planets.nome}</option>
        )
    })

    return (
        <div>
            <Tela>
                <Posicionar>
                    <h1>Criar Viagem</h1>

                    <Formulario onSubmit={createTrip}>
                        <div>
                            <Input
                                placeholder="Nome"
                                name="name"
                                value={form.name}
                                onChange={onChange}
                                pattern={"^.{5,}"}
                                title={"O nome deve ter no mínimo 5 caracteres"}
                                required
                            />
                        </div>
                        <div>
                            <Select
                                name="planet"
                                value={form.planet}
                                onChange={onChange}>
                                {planetsSolarSystem}
                            </Select >
                        </div>
                        <div>
                            <Input
                                name="date"
                                type="date"
                                value={form.date}
                                onChange={onChange}
                                date={dateBr}
                                // pattern={""}
                                required
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Descrição"
                                name="description"
                                value={form.description}
                                onChange={onChange}
                                pattern={"^.{30,}"}
                                title={"O texto deve ter no mínimo 30 caracteres"}
                                required
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Duração em dias"
                                name="durationInDays"
                                type="number"
                                value={form.durationInDays}
                                onChange={onChange}
                                min={"50"}
                                required
                            />
                        </div>
                        <Button>Criar</Button>
                    </Formulario>
                    <Button onClick={() => goBack(navigate)}>Voltar</Button>
                </Posicionar>
            </Tela>
        </div>
    )

}