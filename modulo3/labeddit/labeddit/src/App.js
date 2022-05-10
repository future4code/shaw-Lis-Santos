import React from 'react'
import { Router } from './routes/Router'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme';
import { GlobalStyle } from './AppStyle';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;