import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import {SxProps} from '@mui/system'
import {cssMixins} from '../../utils/style'

export const CvSection = ({title, icon, noSeparator, children, sx, titleSx,}: {
  title: string;
  icon?: string;
  noSeparator?: boolean;
  children: ReactNode;
  titleSx?: SxProps
  sx?: SxProps
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        mb: 2,
        ...sx
      }}
    >
      {title && (
        <Typography
          className="content"
          variant="h6"
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: cssMixins.fontTitle,
            fontWeight: 500,
            mb: 1,
            lineHeight: 1,
            ...titleSx,
          }}
        >
          {title}
        </Typography>
      )}
      <Box>
        {children}
      </Box>
    </Box>
  )
}
