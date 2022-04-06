import React from 'react';
import axios from 'axios';

const headers = {
  headers: {
    Authorization: "lis-ribeiro-shaw"
  }
}

export default class App extends React.Component {
  state = {
    usuarios: [],
    inputName: "",
    inputEmail: ""
  }
  componentDidMount() {
    this.getAllUsers()
  }
  getAllUsers() {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

    axios.get(url, headers)
      .then((res) => {
        console.log(res)
        this.setState({
          usuarios: res.data
        })
      })
      .catch((error) => {
        console.log(error.response.data.message)
      })
  }
  postUsuario = () => {
    console.log(this.state.inputName)
  }

  postEmail = () => {
    console.log(this.state.inputEmail)
  }

  createUser = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/user"
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail
    }
    axios.post(url, body, headers)
      .then((res) => {
        console.log(res.data)
        this.getAllUsers()
        this.setState({
          inputName: ""
        })
      }).catch((error) => {
        alert(error.response.data.message)
      })
  }
  onChangeName = (event) => {
    this.setState({ inputName: event.target.value })
  }
  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value })
  }
  render() {
    const componentsUsers = this.state.usuarios.map((usuario) => {
      return <li key={usuario.id}> {usuario.name}</li>
    })
    return (
      <div>
        <form>
        <label>
          Nome:
          <input
            placeholder="Insira seu nome"
            value={this.state.inputName} onChange={this.onChangeName} />
        </label>
        <label>
          E-mail:
          <input
            placeholder="Insira seu e-mail"
            value={this.state.inputEmail} onChange={this.onChangeEmail} />
        </label>
        <button onClick={this.postUsuario}>Enviar</button>
        </form>
        
        <ul> {componentsUsers}</ul>
      </div>

    )
  }
}