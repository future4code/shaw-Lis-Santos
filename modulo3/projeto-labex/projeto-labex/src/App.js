import React from "react";
import { createGlobalStyle } from "styled-components";
import { Router } from "./routes/Router";

const GlobalStyle = createGlobalStyle`
 *{
   margin: 0px;
   padding: 0px;
   box-sizing: border-box;
   font-family:"Indie Flower"
 }
 `

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  )
}
export default App;
