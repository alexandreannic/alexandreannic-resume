import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {SxProps, Theme} from '@mui/system'
import {cssMixins} from '../utils/style'

export const sanitizeId = (_: string) => _
  .replaceAll(/\s+/g, '_')
  .replaceAll(/èéê/g, 'e')
  .replaceAll(/àáâ/g, 'a')
  .toLowerCase()

const Section = ({title, icon, noSeparator, children, sx}: {
  title: string;
  icon?: string;
  noSeparator?: boolean;
  children: ReactNode;
  sx?: SxProps
}) => {
  return (
    <Box
      id={sanitizeId(title)}
      sx={{
        width: '100%',
        mb: 5,
        ...sx
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: cssMixins.fontTitle,
            fontWeight: 500,
            mb: 2,
            lineHeight: 1,
          }}
        >
          {/* <Box component="span" sx={{ mr: 1 }}>{icon}</Box> */}
          {title}
        </Typography>
      )}
      {children}
    </Box>
  )
}

export default Section
