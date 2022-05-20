import {Container} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import  {GlobalTheme}  from './theme/GlobalTheme';
import React from 'react'
import NavBar from './components/NavBar' 
import Main from './components/Main'
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={GlobalTheme}>
        <Container maxWidth='xl' sx={{pb: 15}}>
          <NavBar/>
          <Main/>
        </Container>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
