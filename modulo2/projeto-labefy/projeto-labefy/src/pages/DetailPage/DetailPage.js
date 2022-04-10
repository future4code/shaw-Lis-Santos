import React from "react";
import axios from "axios";
import { Form, Label, Input, ButtonAdicionar, Bloco, Tittle, Tela, Button2, CardMusic, Musicas } from "./styled"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


export default class DetailPage extends React.Component {
    state = {
        name: "",
        artist: "",
        url: "",
        musicas: [],
        audio: false
    }

    componentDidMount = () => {
        this.mostrarMusicas(this.props.idPlaylist)
    }

    adicionarMusicasPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.name,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(url, body, {
            headers: {
                Authorization: "lis-ribeiro-shaw"
            }
        }).then((res) => {
            alert("Música adicionada com sucesso!")
            this.setState({ name: "", artist: "", url: "" })
            this.mostrarMusicas(this.props.idPlaylist)
        })
            .catch((err) => {
                alert("Ocorreu um erro na tentativa de adiconar sua música, verifique se as informações foram preenchidas corretamente")
            })
    }

    mostrarMusicas = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: "lis-ribeiro-shaw"
            }
        }).then((res) => {
            this.setState({ musicas: res.data.result.tracks })
        })
            .catch((err) => {
                console.log(err)
            })
    }

    onChangeName = (e) => {
        console.log("onChangeName")
        this.setState({ name: e.target.value })
    }

    onChangeArtist = (e) => {
        this.setState({ artist: e.target.value })
    }

    onChangeUrl = (e) => {
        this.setState({ url: e.target.value })
    }

    render() {
        const listaMusicas = this.state.musicas.map((musica) => {
            return <CardMusic
                key={musica.id}>
               <AudioPlayer
                        src={musica.url}
                        layout={"horizontal"}
                        showJumpControls={false}
                        customControlsSection={['MAIN_CONTROLS', 'VOLUME_CONTROLS']}
                    />
                    {musica.name} <br />{musica.artist}
            </CardMusic>

        })
        return (
            <div>
                <Tela>
                    <Form>
                        <Tittle> Adicionar Músicas </Tittle>
                        <Label>Título</Label>
                        <Input
                            value={this.state.name}
                            onChange={this.onChangeName} />
                        <Label>Artista</Label>
                        <Input
                            value={this.state.artist}
                            onChange={this.onChangeArtist} />
                        <Label>Link</Label>
                        <Input
                            value={this.state.url}
                            onChange={this.onChangeUrl} />
                        <ButtonAdicionar type="button" onClick={() => this.adicionarMusicasPlaylist(this.props.idPlaylist)}>Adicionar</ButtonAdicionar>
                        <Button2 type="button" onClick={this.props.goToListPage}>Voltar</Button2>
                    </Form>
                    <Bloco>
                        <Tittle> Músicas</Tittle>
                        <Musicas>
                            {listaMusicas}
                        </Musicas>
                    </Bloco>
                </Tela>
            </div>
        )
    }
}