import {createTheme} from '@mui/material/styles'

export const defaultTheme = createTheme({
  cssVariables: true,
  palette: {
    background: {}
  },
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: 'var(--font-ubuntu)',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: 15,
          fontFamily: '--font-ubuntu',
        },
      }
    }
  }
})
