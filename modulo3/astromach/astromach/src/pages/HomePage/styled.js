import styled from 'styled-components'

export const Tela = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
background-color: #752d92;
`

export const BlocoMaior = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 500px;
align-self: center;
`

export const Bloco = styled.div`
display: flex;
flex-direction: column;
border: 4px solid #48a498;
width: 300px;
height: 500px;
margin-top: 10px;
align-self: center;
text-align: center;
margin-top: 60px;
box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, 0.2);
background-color: #fff;
`
export const Button = styled.button`
border: transparent;
border-radius: 40%;
width: 30px;
cursor: pointer;
font-size: 20px;
background-color: transparent;
border: 2px solid green;
align-self: space-evenly;
margin-bottom: 2px;
&:hover {
color: green;
}
&:focus {
        outline: none;
        box-shadow: 5px 5px 5px green;
        color: green;
`

export const Button1 = styled.button`
border: transparent;
border-radius: 40%;
width: 30px;
cursor: pointer;
font-size: 20px;
background-color: transparent;
border: 2px solid red;
align-self: space-evenly;
margin-top: 10px;
&:hover {
color: red;
}
&:focus {
        outline: none;
        box-shadow: 5px 5px 5px red;
        color:red;
`

export const Button2 = styled.button`
width: 40px;
height: 40px;
border-radius: 10px;
align-self: center;
cursor: pointer;
border: transparent;
background-color: transparent;
font-size: 20px;
align-self: flex-end;
`

export const Button3 = styled.button`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-content: flex-end;
align-self: flex-end;
background: transparent;
border: 1px solid #48a498;
width: 60px;
border-radius: 20%;
cursor: pointer;
font-size: 13px;
margin-top: 150px;
margin-right: 8px;
color: #fff;
background-color: #48a498;
`