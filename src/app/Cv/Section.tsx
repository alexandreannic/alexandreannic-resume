import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {Theme} from '@mui/system'
import {cssMixins} from '../utils/style'

export const sectionMargin = (t: Theme, mult: number = 1) => t.spacing(2 * mult)

const Section = ({title, icon, noSeparator, children}: {
  title: string;
  icon: string;
  noSeparator?: boolean;
  children: ReactNode;
}) => {
  return (
    <Box
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        padding: 2,
        mb: (t) => sectionMargin(t, 1.5),
        borderRadius: cssMixins.radius,
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
            mb: 1.5,
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
