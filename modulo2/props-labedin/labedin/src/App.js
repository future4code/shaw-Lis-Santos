import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E03AQEtbajB3w--MQ/profile-displayphoto-shrink_800_800/0/1628980787384?e=1653523200&v=beta&t=r-GjSYiAgOPASHZ29PFiABtohFAmda6BJceWTNhHVJk" 
          nome="Lis Ribeiro" 
          descricao="Oi, meu nome é Lis. Sou formada em direito mas hoje tenho como objetivo me tornar uma desenvolvedora front-end."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/6327/6327790.png" 
          texto="Ver mais"
        />
      </div>

      <CardPequeno imagem="https://prints.ultracoloringpages.com/b6af9485cc85a17d9716ddc7b16a10a5.png" texto="Av Dr Paulo Japiassu Coelho, 411"/>

      <CardPequeno imagem="http://www.unirio.br/arquivologia/imagens/logo%20email.png/image" 
          texto="E-mail: lisribeiro197@gmail.com" />
      

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
         imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
         nome="Labenu" 
         descricao="Estudante Web Full Stack - Integral." 
        />
        
        <CardGrande 
          imagem="data:image/png;base64,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" 
          nome="Unifeso" 
          descricao="Graduada em Direito pela Fundação Educacional Serra dos Órgãos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
