import React from "react";
import axios from "axios";
import {Form, Label, Button} from "./styled"

export default class ListPage extends React.Component {
    state = {
        name: ""
    }

    onChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    componentDidMount() {
        this.criarPlaylist()
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.name
        }
        axios.post(url, body, {
            headers: {
                Authorization: "lis-ribeiro-shaw"
            }
        }).then((res) => {
            alert("Playlist criada com sucesso!")
            this.setState({name: ""})
        }).catch((err) => console.log(err.response.data.message))
    }

    render() {
        return (
            <div>
                <Form>
                    <Label>Criar Playlist</Label>
                    <input
                    value={this.state.name}
                    onChange={this.onChangeName}
                    />
                    <Button onClick={this.criarPlaylist}>Criar</Button>
                </Form>
            </div>
        )
    }
}