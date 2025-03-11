'use client'

import {createTheme} from '@mui/material/styles'
import {darken, lighten} from '@mui/material'

// const backgroundStartColor = '#001a3a'// darken('#031525', .4)
// const backgroundEndColor = '#002a5e'//lighten('#031525', .1)
// material
const backgroundStartColor = darken('#031525', .4)
// const backgroundEndColor = lighten('#031525', .1)
const backgroundEndColor = 'rgb(15, 23, 42)'
const lightPrimary = '#64FFDA'
const darkPrimary = '#1DE9B6'

const lightBackground = '#F5F5F5'
const darkBackground = '#0A192F'

// const backgroundStartColor = darken('#0f172a', .4)
// const backgroundEndColor = lighten('#0f172a', .1)
// const hexagonColor = '66ccff'
// const hexagonOpacity = 0.12
// const generateHexagonSvgUrl = (color: string) => {
//   return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z' fill='none' stroke='%23${color}' stroke-width='1'/%3E%3C/svg%3E")`
// }

export const theme = createTheme({
  // colorSchemes: {dark: true, light: false},
  defaultColorScheme: 'dark',
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#00cf9d',
          light: '#A7FFE4',
          dark: '#00dca5',
          contrastText: '#0A192F',
        },
        secondary: {
          main: '#00c3ec',
          light: '#9cedff',
          dark: '#00d2f8',
          contrastText: '#FFFFFF',
        },
        // text: {
        //   primary: '#000000',
        //   secondary: '#333333',
        // },
        background: {
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
    fontSize: 15,
    fontFamily: 'var(--font-ubuntu)',
  },
  components: {
    MuiTypography: {
      defaultProps: {
        component: 'div'
      }
    },
    MuiCssBaseline: {
      styleOverrides: t => ({
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
          // background: `radial-gradient(circle,${lighten(backgroundStartColor, 0.14)} 1px,transparent 1px), transparent`,
          // backgroundSize: '16px 16px',
          // backgroundImage: generateHexagonSvgUrl(hexagonColor),
          background: t.palette.mode === 'dark'
            ? `linear-gradient(to bottom, ${backgroundStartColor}, ${backgroundEndColor})`
            : `linear-gradient(to bottom, #fff, #fff)`,
        },
        html: {
          fontSize: 15,
          fontFamily: '--font-ubuntu',
        },
      })
    }
  }
})
//
// export default function ThemeRegistry({children}: {children: ReactNode}) {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
// }
//
