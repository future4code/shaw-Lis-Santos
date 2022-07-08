import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { createGlobalStyle } from 'styled-components'
import Home from './pages/HomePage/HomePage'
import MatchesPage from './pages/MatchesPage/MatchesPages'
import { BASE_URL } from './constants/constants'



const GlobalStyle = createGlobalStyle`
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Poppins"
 
}
`


function App() {
  const [screen, setScreen] = useState('Home')

  const goToMatchesPage = () => {
    setScreen('Matches')
  }

  const goToHomePage = () => {
    setScreen('Home')
  }

  const selectPage = () => {
    switch (screen) {
      case 'Home':
        return <Home goToMatchesPage={goToMatchesPage} />
      case 'Matches':
        return <MatchesPage goToHomePage={goToHomePage} />
      default:
        return <Home goToMatchesPage={goToMatchesPage} />
    }
  }

  return (
    <div>
      <GlobalStyle />
      {selectPage()}
    </div>
  )
}

export default App;