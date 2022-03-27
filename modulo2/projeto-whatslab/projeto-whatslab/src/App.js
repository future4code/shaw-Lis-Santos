import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';
import Painel from './Painel';
import { Mensagem } from './Inputs';
import Title from './Title';


class App extends Component {
  render() {
    return (
      <Card> 
          <Painel> 
            <Title>WhatsLab</Title>
          <Mensagem></Mensagem>
          </Painel>
      </Card>
    );
  }
}

export default App;