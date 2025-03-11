import Box from '@mui/material/Box'
import {alpha} from '@mui/system'

export const Tag = ({label}: {label?: string}) => {
  return (
    <Box sx={{
      display: 'inline-flex',
      backgroundColor: alpha('#64FFDA', 0.1),
      color: 'primary.main',
      p: .5,
      pr: 1.5,
      pl: 1.5,
      borderRadius: 50,
      '&:not(:last-of-type)': {
        mr: 1,
      }
    }}>{label}</Box>
  )
}