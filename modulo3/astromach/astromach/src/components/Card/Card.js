import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Astromach from '../../img/astromach.png'

const Header = styled.header`
display: flex;
width: 293px;
justify-content: space-between;
align-items: center;
padding-left: 3px;
text-align: center;
background-color: #fff;
`

const Button2 = styled.button`
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

export default function Card(props) {
    return (
        <div>
            <Header> <img src={Astromach} witdh="50px" height="50px" />
                <Button2 onClick={props.goToMatchesPage}> <i class="fa-solid fa-heart-circle-check"></i></Button2>
            </Header>
        </div>
    )
}