import styled from "styled-components";

export const Tela = styled.div`
display: flex;
justify-content: space-around;
background-color: #ffe4e1;
width: 100vw;
height: 100vh;
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid black;
  border-radius: 10%;
  width: 350px;
  height: 400px;
 `
export const Label = styled.label`
  display: flex;
  justify-content: center;
  font-family: "Indie Flower";
  font-size: 25px;
  padding-bottom: 2px;
`

export const Input = styled.input `
  width: 250px;
  align-self: center;
  border-radius: 5%;
  opacity: 0.7;
  
`
export const ButtonAdicionar = styled.button`
  font-family: "Indie Flower";
  margin-top: 2px;
  border-radius: 10px;
  margin-top: 15px;
  width: 65px;
  align-self: center;
  justify-content: center;
  &:hover{
    background-color: #fff;
    cursor: pointer;
}
`
export const Tittle = styled.h1`
display: flex;
justify-content: center;
font-family: "Indie Flower";
`

export const Bloco = styled.div`
border: 0.5px solid black;
width: 350px;
height: 710px;
padding-bottom: 15px;
border-radius: 10%;
`
export const Button2 = styled.button`
font-family: "Indie Flower";
  margin-top: 2px;
  border-radius: 10px;
  margin-top: 15px;
  width: 50px;
  align-self: center;
  &:hover{
    background-color: #fff;
    cursor: pointer;
}
`
export const CardMusic = styled.div`
display: flex;
font-family: "Indie Flower";
border: 1px solid black;
padding: 15px; 
margin: 10px;
width: 270px;
 justify-content: center; 
 text-align: center;
flex-wrap: wrap-reverse;
border-radius: 10%;
&:hover {
  background-color: #ffebcd;
}
`
export const ButtonPlay = styled.button`
border-radius: 200%;
&:hover{
    background-color: #fff;
    cursor: pointer;
}
`
export const Musicas = styled.h1`
display: flex;
align-items: center;
font-size: 20px;
flex-direction: column;
`