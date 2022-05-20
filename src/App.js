import {Container} from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import  {GlobalTheme}  from './theme/GlobalTheme';
import NavBar from './components/NavBar' 
import React from 'react'
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={GlobalTheme}>
        <Container maxWidth='xl'>
          <NavBar/>
        </Container>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
