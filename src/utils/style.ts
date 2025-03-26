import {SxProps, Theme} from '@mui/system'

export const cssMixins = {
  fontSmall: '1rem',
  fontBig: '1.2rem',
  fontTitle: '1.5rem',
  fontMedium: '1.1rem',
  fontMainTitle: '1.7rem',
  lineHeight: 1.48,
  radius: 16,
  radiusSmall: 4,
}

export const makeSx = <T>(_: { [key in keyof T]: SxProps<Theme> }) => _

export const cssAlpha = (color: string, ratio: number) => {
  return `color-mix(in srgb, var(${color}) ${ratio * 100}%, transparent)`
}

export const mobileWidth = 800
export const tabletWidth = 1000

export const shortUrl = (url: string) => url
  .replace('http://', '')
  .replace('https://', '')
  .replace(/\/$/g, '')
  .replace('www.', '')