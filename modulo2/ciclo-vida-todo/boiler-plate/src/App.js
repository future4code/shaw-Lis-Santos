import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
  state = {
    tarefas: [
      {
        id: Date.now(),
        texto: "Estudar",
        completa: false,
        adicionar: []
      },

      {
        id: Date.now(),
        texto: "Comer",
        completa: true,
        adicionar: []
      }
    ],

    inputValue: '',
    filtro: '',
  }

  onClickBotaoSalvarInformacoes = () => {
    localStorage.setItem("adicionar", JSON.stringify(this.state.tarefas))
  }

  buscarInformacoesDoLocalStorage = () => {
    const valorInput = localStorage.getItem("adicionar")
    this.setState({tarefas:JSON.parse(valorInput)})
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.tarefas === this.props.tarefas) {
      this.onClickBotaoSalvarInformacoes()
    }

  }

  componentDidMount() {
    this.buscarInformacoesDoLocalStorage()
  }

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  criaTarefa = () => {
    const novaTarefa =
    {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novoArrayTarefas = [novaTarefa, ...this.state.tarefas]
    this.setState({ tarefas: novoArrayTarefas })
  }

  selectTarefa = (id) => {
    const novoArrayTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })
    this.setState({ tarefas: novoArrayTarefas })
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value })
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa
        case "completas":
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input type="text" placeholder={"Digite a tarefa..."} value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App;