import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      
      {
        nomeUsuario: 'lis',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=4'
      },

      {
        nomeUsuario:'júlia',
        fotoUsuario:'https://picsum.photos/50/50?a=5',
        fotoPost:'https://picsum.photos/200/150?a=6'

      }
    ]
    }
  render() {
        const listaDeComponentes = this.state.post.map((post) => {
    return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
    )
        })
        console.log(listaDeComponentes)
        return (
          <MainContainer>
            {listaDeComponentes}
          </MainContainer>
        );
  }
}    

export default App;
