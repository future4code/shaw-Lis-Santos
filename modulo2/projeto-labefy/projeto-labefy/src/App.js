import React from 'react'
import "./App.css"
import ImagemHeader from "./img/img_header.jpeg"
import ListPage from './pages/ListPage/ListPage'
import DetailPage from './pages/DetailPage/DetailPage'

export default class App extends React.Component {
  state = {
    telaAtual: "list",
    idPlaylist: ""
  }

  goToDetailPage = (id) => {
    this.setState({ telaAtual: "detail", idPlaylist: id })
  }
  goToListPage = () => {
    this.setState({ telaAtual: "list"})
  }
  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "list":
        return <ListPage goToDetailPage={this.goToDetailPage} />
      case "detail":
        return <DetailPage goToListPage={this.goToListPage} idPlaylist={this.state.idPlaylist} />
      default:
        return <ListPage goToDetailPage={this.goToDetailPage} />
    }
  }

  render() {
    return (
      <div>
        <header>
          <img src={ImagemHeader} height="200" width="200"/>
          </header>
        {this.escolherTela()}
      </div>
    )
  }
}