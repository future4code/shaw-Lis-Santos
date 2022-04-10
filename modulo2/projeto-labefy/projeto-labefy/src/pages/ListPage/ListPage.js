import React from "react";
import axios from "axios";
import { Tela, Form, Label, Button, CardPlaylist, Button2, Tittle, Bloco, Button3 } from "./styled"

export default class ListPage extends React.Component {
    state = {
        nomePlaylist: "",
        playlists: []
    }

    componentDidMount() {
        this.mostrarPlaylists()
    }

    onChangeNome = (e) => {
        this.setState({ nomePlaylist: e.target.value })
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomePlaylist
        }

        axios.post(url, body, {
            headers: {
                Authorization: "lis-ribeiro-shaw"
            }
        }).then((res) => {
            alert("Playlist criada com sucesso!")
            this.setState({ nomePlaylist: "" })
            this.mostrarPlaylists()
        })

            .catch((err) => {
                alert("Já existe uma playlist com esse nome, tente outro =)")
            })
    }

    mostrarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "lis-ribeiro-shaw"
            }
        }).then((res) => {
            console.log(res)
            this.setState({ playlists: res.data.result.list })
        })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente")
            })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "lis-ribeiro-shaw"
            }
        }).then((res) => {
            alert("Playlist deletada com sucesso!")
            this.mostrarPlaylists()
        })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    }

    render() {
        const listaPlaylists = this.state.playlists.map((playlist) => {
            return <CardPlaylist
                key={playlist.id}>
                {playlist.name}
                <Button3 onClick={() => this.props.goToDetailPage(playlist.id)} >details</Button3>
                <Button2 onClick={() => this.deletarPlaylist(playlist.id)}>delete</Button2>
            </CardPlaylist>
        })
        return (
            <div>
                <Tela>
                    <Form>
                        <Label>Criar Playlist</Label>
                        <input
                            value={this.state.nomePlaylist}
                            onChange={this.onChangeNome}
                        />
                        <Button onClick={this.criarPlaylist}>Criar</Button>
                    </Form>
                    <Bloco>
                        <Tittle> Playlists </Tittle>
                        {listaPlaylists}
                    </Bloco>
                </Tela>
            </div>
        )
    }
}