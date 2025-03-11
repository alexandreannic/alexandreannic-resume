import {SxProps, Theme} from '@mui/system'

export const cssMixins = {
  fontSmall: '0.875rem',
  fontBig: '1.1rem',
  fontTitle: '1.4rem',
  fontMedium: '1rem',
  fontMainTitle: '1.5rem',
  lineHeight: 1.48,
  radius: 16,
}

export const makeSx = <T>(_: {[key in keyof T]: SxProps<Theme>}) => _
