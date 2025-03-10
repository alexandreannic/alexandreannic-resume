import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import {cssMixins} from '../../utils/style'

export const AsideSection = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <Box
      sx={{
        '&:not(:last-of-type)': {
          pb: 1.5,
          mb: 1.5,
        },
      }}
    >
      {title && (
        <Box
          sx={{
            mb: 1.5,
            fontSize: cssMixins.fontSmall,
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: 1,
            color: 'text.secondary',
            lineHeight: 1,
          }}
        >
          {title}
        </Box>
      )}
      {children}
    </Box>
  )
}
