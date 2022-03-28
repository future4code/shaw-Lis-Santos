import React from 'react';
import styled from 'styled-components';

const Tittle = styled.h3`
    display: flex;
    justify-content: center;
`
const Paragrafo = styled.p `
    display: flex;
    justify-content: center;
`
export default class Final extends React.Component {
    render() {
        return (
            <>
                <Tittle>O FORMULÁRIO ACABOU</Tittle>
                <Paragrafo>Muito obrigado por participar! Entratemos em contato!</Paragrafo>
            </>
        )
    }
}