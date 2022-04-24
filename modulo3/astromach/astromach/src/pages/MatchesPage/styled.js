import styled from "styled-components";

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
min-width: 300px;
min-height: 500px;
margin-top: 10px;
align-self: center;
text-align: center;
margin-top: 60px;
box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, 0.2);
background-color: #fff;
`

export const Match = styled.div `
img{
    display:flex;
    flex-direction: column;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: transparent;
}
`

export const Button = styled.button `
width: 20px;
background-color: transparent;
border: transparent;
align-self: center;
justify-content: center;
align-items: center;
color: #752d92;
margin-top: 1px;
font-size: 20px;

`
export const Button2 = styled.button`
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
margin-top: 119px;
margin-right: 8px;
color: #fff;
background-color: #48a498;
`

// export const Center = styled.div `
// margin-top: -10px;
// `

export const Centralizar = styled.div `
display: flex;
align-items: center;
width: 100%;
height: 10%;
padding: 35px 10px;
`

export const Ajustar = styled.div `
margin-left: 10px;
font-weight: 900px;
`