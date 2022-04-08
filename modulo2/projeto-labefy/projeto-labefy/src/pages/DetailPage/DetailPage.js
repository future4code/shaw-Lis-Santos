import React from "react";
import axios from "axios";
import {CardPlaylist} from "./styled"

export default class DetailPage extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.pegarPlaylists()
    }
    pegarPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "lis-ribeiro-shaw"
            }
        }).then((res) => {
            this.setState({ playlists: res.data })
        })
            .catch((err) => {
                alert("Ocorreu um problema, tente novamente")
            })
    }
    render() {
       const listaPlaylists = this.state.playlists.map((playlist) => {
        return <CardPlaylist key={playlist.id}>{playlist.name}</CardPlaylist>
       })

       return (
           <div>
               {listaPlaylists}
           </div>
       )
    }
}
    