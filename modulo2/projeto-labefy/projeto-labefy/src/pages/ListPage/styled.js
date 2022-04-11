import styled from "styled-components"

export const Tela = styled.div`
background-color: #ffe4e1;
width: 100vw;
height: 100vh;
`

export const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
 `

export const Label = styled.label`
  font-family: "Indie Flower";
  font-size: 25px;
  padding-bottom: 2px;
`
export const Button = styled.button`
  font-family: "Indie Flower";
  margin-top: 2px;
  border-radius: 10px;
  &:hover{
    background-color: #fff;
    cursor: pointer;
}
`
export const CardPlaylist = styled.div`
display: flex;
font-family: "Indie Flower";
border: 1px solid black;
padding: 15px; 
margin: 10px;
width: 270px;
justify-content: space-between;
border-radius: 10%;
&:hover{
    background-color: #ffebcd
}
`

export const Button2 = styled.button`
border: transparent;
font-family: "Indie Flower";
border-radius: 50%;
&:hover{
    background-color: #fff;
    cursor: pointer;
}
`
export const Button3 = styled.button`
border: transparent;
font-family: "Indie Flower";
border-radius: 50%;
&:hover{
    background-color: #fff;
    cursor: pointer;
}
`

export const Tittle = styled.h2`
display: flex;
justify-content: center;
font-family: "Indie Flower";
`

export const Bloco = styled.div`
width: 300px;
display: flex;
flex-direction: column;
}
`