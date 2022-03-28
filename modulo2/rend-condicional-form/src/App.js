import React from 'react';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'


export default class App extends React.Component {

  state = {
    pagina: 1
  }

  renderizarEtapa = () => {
    switch (this.state.pagina) {
      case 1:
        return <Etapa1 onClick={this.irParaProximaPagina}/>;
      case 2:
        return <Etapa2 onClick={this.irParaProximaPagina} />
      case 3:
        return <Etapa3 onClick={this.irParaProximaPagina}/> 
      case 4:
        return <Final onClick={this.irParaProximaPagina} />
      default:
        <p>Página não encontrada</p>
    }
  }

  irParaProximaPagina = (pagina) => {
    this.setState({
      pagina: this.state.pagina + 1
    })
  }

  render() {
    return (
      <>
        {this.renderizarEtapa()}
      </>
    );
  }
}