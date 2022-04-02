import React from 'react'
import styled from 'styled-components'

const Tittle = styled.h3`
    display: flex;
    justify-content: center;
`
const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Label = styled.label`
padding-bottom: 15px;
`

const Input = styled.input`
    margin-bottom: 15px;
   
`
const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
`

export default class Etapa2 extends React.Component {
    render() {
        return (
            <>
                <Tittle>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Tittle>
                <Form>
                    <Label><b>5.</b> Qual curso?</Label>
                    <Input></Input>

                    <Label><b>6.</b> Qual a unidade do curso?</Label>
                    <Input></Input>
                    <Button onClick= {this.props.onClick}>Próxima Etapa</Button>
                </Form>
            </>
        )
    }
}