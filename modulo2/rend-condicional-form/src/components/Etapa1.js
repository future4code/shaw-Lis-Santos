import React from 'react';
import styled from 'styled-components';

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

const Label = styled.label `
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

export default class Etapa1 extends React.Component {
    render() {
        return (
            <>
                <Tittle>ETAPA 1 - DADOS GERAIS</Tittle>
                <Form>
                    <Label><b>1.</b> Qual o seu nome?</Label>
                    <Input></Input>

                    <Label><b>2.</b> Qual sua idade?</Label>
                    <Input></Input>

                    <Label><b>3.</b> Qual seu e-mail?</Label>
                    <Input></Input>

                    <Label><b>4.</b> Qual a sua escolaridade?</Label>
                    <select>
                        <option> Ensino médio incompleto </option>
                        <option> Ensino médio completo </option>
                        <option> Ensino superior incompleto </option>
                        <option> Ensino superior completo </option>
                    </select>
                    <Button onClick= {this.props.onClick}>Próxima Etapa</Button>
                </Form>
            </>
        )
    }
}