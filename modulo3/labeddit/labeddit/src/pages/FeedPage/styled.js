import styled from "styled-components";

export const PostCard = styled.div`
border: 2px solid #a64fa4;
margin: 30px;
flex-wrap: wrap;
min-width: 80vw;
min-height: 14vh;
padding-left: 5px
`

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
`

export const UserName = styled.p`
font-size: 12px;
color: #a0a0a0;
`

export const ScreenContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`

export const InputsContainer = styled.div`
display: flex;
flex-direction: column;
width: 80ww;
max-width: 300px;
align-items: center;
margin-bottom: 20px;
`

export const SignUpButton = styled.button`
width: 80vw;
max-width: 450px;
background: none;
border: none;
`
