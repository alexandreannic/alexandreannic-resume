import {SxProps, Theme} from '@mui/system'

export const cssMixins = {
  fontSmall: '1rem',
  fontBig: '1.15rem',
  fontTitle: '1.5rem',
  fontMedium: '1.1rem',
  fontMainTitle: '1.7rem',
  lineHeight: 1.48,
  radius: 16,
}

export const makeSx = <T>(_: {[key in keyof T]: SxProps<Theme>}) => _
