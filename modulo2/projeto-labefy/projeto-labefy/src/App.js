import React from 'react'
import ListPage from './pages/ListPage/ListPage'
import DetailPage from './pages/DetailPage/DetailPage'

export default class App extends React.Component {
  state = {
    telaAtual: "list"
  }

  escolherTela = () => {
    switch (this.state.telaAtual) {
      case "list":
        return <ListPage/>
      case "detail":
        return <DetailPage  />
      default:
        return <ListPage/>
    }
  }

  render() {
    return (
      <div>
        {this.escolherTela()}
      </div>
    )
  }
}