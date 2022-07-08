import React from "react";
import { useNavigate } from "react-router";
import { goToListTripsPage, goToLogin } from "../routes/coordinator";
import styled from "styled-components";
import Astronauta from '../img/astronauta.png'

const HomeDiv = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    background-color: #97c2fd;

    img{
        width: 50vw;
        height: 70vh;
    
    }
    `



const Button = styled.button`
background: none;
border: 1px solid #fda626;
justify-content: center;
text-align: center;
align-self: center;
width: 7vw;
height: 5vh;
background-color: #fff;
&:hover{
    cursor: pointer;
    background-color: #fda626;
}
`

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <HomeDiv>
            <img src={Astronauta} />
            <div>
                <h2>Labex</h2>
                <Button onClick={() => goToListTripsPage(navigate)}>Lista de viagens</Button>
                <Button onClick={() => goToLogin(navigate)}>Área de admin</Button>
            </div>
        </HomeDiv>
    )
}


{/* <Posicionar>
<div>
<Button onClick={() => decideCandidates(candidate.id, true)}>Aprovar</Button>
</div>
<div>
<Button onClick={() => decideCandidates(candidate.id, false)}>Reprovar</Button>
</div>
</ Posicionar>
</div>
</Card> */}

// const Tela = styled.div`
// display: flex;
// width: 100vw,
// height: 100vh;
// `

// const Tittle = styled.div `
// width: 15vw;
// height: 12w;
// background: 
// `

// const Button = styled.button`
// background: none;
// border: 0.5px solid blue;
// justify-content: center;
// text-align: center;
// align-self: center;
// width: 7vw;
// height: 5vh;
// &:hover{
//     cursor: pointer;
//     background-color: #F0F8FF;
// }
// `

// export const HomePage = () => {
//     const navigate = useNavigate()

//     return (
//         <Tela>
//             <Button onClick={() => goToListTripsPage(navigate)}>Lista de viagens</Button>
//             <Button onClick={() => goToLogin(navigate)}>Área de admin</Button>
//         </Tela>
//     )
// }

