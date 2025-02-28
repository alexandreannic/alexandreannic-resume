'use client'
import {createTheme} from '@mui/material/styles'

export const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: 'var(--font-ubuntu)',
  },
})
