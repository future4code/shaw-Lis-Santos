import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/constants'
import { Tela, BlocoMaior, Bloco, Button, Button1, Button2, Button3 } from './styled'
import Card from '../../components/Card/Card'



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

    const putClear = () => {
        const url = `${BASE_URL}clear`
        axios
            .put(url)
            .then((res) => { })
            .catch((err) => { (console.log(err)) })
    }


    useEffect(() => {
        getProfileToChoose()
    }, [])
    return (
        <Tela>
            <BlocoMaior>
                <Bloco>
                    {/* <Header> <img src={Astromach} witdh="50px" height="50px" />
                    //     <Button2 onClick={props.goToMatchesPage}> <i class="fa-solid fa-heart-circle-check"></i></Button2>
                    // </Header>  */}
                    <Card goToMatchesPage={props.goToMatchesPage}/>
                    <div>
                        <img src={listPerson.photo} width="292px" height="295px" />
                        <p> <b> {listPerson.name}, {listPerson.age} </b>  </p>
                        <p>{listPerson.bio} </p>
                        <Button onClick={() => postChoosePerson(listPerson.id, false)}><i class="fa-solid fa-xmark"></i> </Button> <Button1 onClick={() => postChoosePerson(listPerson.id, true)}><i class="fa-solid fa-heart"></i></Button1>
                    </div> 
                </Bloco> 
            </BlocoMaior>
             <Button3 class="button" onClick={() => putClear()}> clear matches</Button3>
            <div>
            </div>
        </Tela>
    )
}