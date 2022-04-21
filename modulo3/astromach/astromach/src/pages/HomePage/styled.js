import styled from 'styled-components'

export const Tela = styled.div `
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
`
export const Bloco = styled.div`
display:flex;
flex-direction: column;
border: 0.5px solid black;
width: 300px;
height: 400px;
margin-top: 10px;
align-self: center;
text-align: center;
margin-top: 60px;
`
export const Button = styled.button `
color: red;
border: transparent;
border-radius: 100%;
cursor: pointer;
`

export const Button2 = styled.button `
width: 40px;
height: 40px;
border-radius: 10px;
align-self: center;
cursor: pointer;
border: transparent;
`