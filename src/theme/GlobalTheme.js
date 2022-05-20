import {createTheme} from '@mui/material/styles'

export const GlobalTheme = createTheme({
  palette: {
    grayishBlue: 'hsl(229, 8%, 60%)',
    primary: {
      main: 'hsl(231, 69%, 60%)',
      dark: 'hsl(229, 31%, 21%)'
    },
    danger: {
      main: 'hsl(0, 94%, 66%)',
    }
  }
})