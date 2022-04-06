import React from 'react';
import TelaCadastro from './Components/TelaCadastro';
import TelaListaUsuarios from './TelaListaUsuarios';

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolhetela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div> Erro! Página não encontrada =(</div>
    }
  }

  irParaCadastro = () => {
    this.setState({
      telaAtual: "cadastro"
    })
  }

  irParaLista = () => {
    this.setState({
      telaAtual: "lista"
    })
  }

  render() {
    return (
      <div>
        {this.escolhetela()}
      </div>
    )
  }
}