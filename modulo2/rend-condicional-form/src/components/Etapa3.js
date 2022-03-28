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


export default class Etapa3 extends React.Component {
    render() {
        return (
            <>
                <Tittle>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Tittle>
                <Form>
                    <Label><b>7.</b> Porque você não terminou um curso de graduação?</Label>
                    <Input></Input>
                    <Label><b>8.</b> Você fez algum curso complementar?</Label>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                        </select>
                        <Button onClick= {this.props.onClick}>Próxima Etapa</Button>
                    </Form>
            </>
        )
    }
}