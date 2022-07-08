import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'
import {Tela, BlocoMaior, Bloco, Button, Match, Button3, Centralizar, Ajustar} from './styled'
import Card from '../../components/Card/Card'

export default function Matches(props) {
    const [match, setMatch] = useState([])

    const getMatches = () => {
        const url = `${BASE_URL}matches`
        axios
            .get(url)
            .then((res) => {
                setMatch(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    const putClear = () => {
        const url = `${BASE_URL}clear`
        axios
            .put(url)
            .then((res) => { })
            .catch((err) => { (console.log(err)) })
    }

    useEffect(() => {
        getMatches()
    }, [])

    const matches = match.map((person) => {
        return (
   
                <Centralizar>
                <img src={person.photo} width="200px" height="200px" />
                 <Ajustar> <b> {person.name} </b>  </Ajustar>
               </Centralizar>
               
            
        )
    })

return (
    <Tela>
        <BlocoMaior>
        <Bloco>
            <Card
             />
            <Match>
                <Button onClick={props.goToHomePage}> <i class="fa-solid fa-rotate-left"></i></Button>
            {matches}
            </Match>
            </Bloco>
            </BlocoMaior>
        <Button3 class="button" onClick={() => putClear()}> clear matches</Button3>
        
        </Tela>
    )
}