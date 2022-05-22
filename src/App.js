import {Box, Container} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import  {GlobalTheme}  from './theme/GlobalTheme';
import React from 'react'
import NavBar from './components/NavBar' 
import Main from './components/Main'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={GlobalTheme}>
        <Container maxWidth='xl'>
          <NavBar/>
          <Main/>
        </Container>
       <Footer/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
