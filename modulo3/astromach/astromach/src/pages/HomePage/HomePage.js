import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'
import { Tela, Bloco, Button} from './styled'

export default function Home(props) {
    const [listPerson, setListPerson] = useState({})

    const getProfileToChoose = () => {
        const url = `${BASE_URL}person`
        axios
            .get(url)
            .then((res) => {
                setListPerson(res.data.profile)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const postChoosePerson = (id, boolean) => {
        const url = `${BASE_URL}choose-person`
        const body = {
            id: id,
            choice: boolean
        }
        axios
            .post(url, body)
            .then(() => { getProfileToChoose() })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        getProfileToChoose()
    }, [])

    return (
        <Tela>
            <Bloco>
                <button onClick={props.goToMatchesPage}>s2</button>
                <div>
                    <img src={listPerson.photo} width="300px" height="300px" />
                    <p> <b> {listPerson.name}, {listPerson.age} </b>  </p>
                    <p>{listPerson.bio} </p>
                </div>

            </Bloco>
            <div>
                <Button onClick={() => postChoosePerson(listPerson.id, false)}><i class="fa-solid fa-xmark"></i> </Button> <Button onClick={() => postChoosePerson(listPerson.id, true)}><i class="fa-solid fa-heart"></i></Button>
            </div>
        </Tela>
    )
}