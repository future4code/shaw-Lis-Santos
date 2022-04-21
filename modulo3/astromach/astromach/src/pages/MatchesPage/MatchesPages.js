import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'

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

    useEffect(() => {
        getMatches()
    }, [])

    const matches = match.map((person) => {
        return (
            <div>
                <img src={person.photo} width="300px" height="300px" />
                <p>{person.name} </p>
               </div>
            
        )
    })

return (
        <div>
           <button onClick={props.goToHomePage}>Back</button>
            {matches}
        </div>
    )
}