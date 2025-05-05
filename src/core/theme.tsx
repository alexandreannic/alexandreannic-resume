'use client'
import {createTheme} from '@mui/material/styles'
import {darken, lighten} from '@mui/material'
import {tabletWidth} from '@/utils/style'

const backgroundStartColor = darken('#031525', .4)

export const makeTheme = ({fontSize = 14, spacing = 8}: {spacing?: number, fontSize?: number} = {}) => createTheme({
  defaultColorScheme: 'dark',
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  spacing,
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: 'rgb(66, 69, 68)',
        },
        primary: {
          main: '#0071cd',
          light: lighten('#0b57d0', .5),
          dark: darken('#0b57d0', .5),
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#0b57d0',
          light: lighten('#0b57d0', .5),
          dark: darken('#0b57d0', .5),
          contrastText: '#FFFFFF',
        },
        // text: {
        //   primary: '#000000',
        //   secondary: '#333333',
        // },
        background: {
          // paper: '#fff',
          // default: 'rgb(246, 248, 252)',
          default: '#fff',
          paper: 'rgb(246, 248, 252)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#1DE9B6',
          light: '#64FFDA',
          dark: '#00BFA5',
          contrastText: '#FFFFFF',
        },
        secondary: {
          main: '#56e0ff',
          light: '#9cedff',
          dark: '#00d2f8',
          contrastText: '#FFFFFF',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#94a3b8',
        },
        background: {
          default: backgroundStartColor,
          paper: 'rgba(255, 255, 255, 0.08)',
        },
      },
    },
  },
  typography: {
    fontSize: fontSize,
    fontFamily: 'var(--font-ubuntu)',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        component: 'div'
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 40,
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          overflow: 'visible',
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: t => ({
        '*, *::before, *::after': {
          // box-sizing: inherit;
          boxSizing: 'border-box',
        },
        '@font-face': {
          fontFamily: 'Material Icons',
          fontStyle: 'normal',
          fontWeight: 400,
          src: 'url(https://fonts.gstatic.com/s/materialicons/v140/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2) format("woff2")',
        },
        '.material-icons': {
          fontFamily: 'Material Icons',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontSize: 24,
          lineHeight: 1,
          letterSpacing: 'normal',
          textTransform: 'none',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          wordWrap: 'normal',
          direction: 'ltr',
          WebkitFontFeatureSettings: '"liga"',
          WebkitFontSmoothing: 'antialiased',
        },
        a: {
          color: 'inherit',
          textDecoration: 'none',
        },
        ':focus': {
          outline: 0,
        },
        body: {
          fontSize,
          margin: 0,
          padding: 0,
          background: 'background.default',
          // background: 'none',
          position: 'relative',
          zIndex: 4,
        },
        html: {
          fontSize: fontSize,
          [`@media (max-width:${tabletWidth}px)`]: {
            fontSize: fontSize - 1,
          },
          background: 'none',
          '&::before': {
            zIndex: 1,
            content: '""',
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            display: 'block',
            margin: 0,
            padding: 0,
            backgroundImage: t.palette.mode === 'dark' ? 'url(/bg4.jpeg)' : t.palette.background.default,
            backgroundSize: 'cover',
          },
          '&::after': {
            zIndex: 2,
            content: t.palette.mode === 'dark' ? '""' : undefined,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.65)',
            pointerEvents: 'none',
          },
          zIndex: 3,
          fontFamily: '--font-ubuntu',
        },
      })
    }
  }
})

export const defaultTheme = makeTheme()