import {Box, BoxProps} from '@mui/material'
import React from 'react'

export const PdfSlide = ({
  format = 'horizontal',
  allowOverflow,
  ...props
}: {allowOverflow?: boolean; format?: 'horizontal' | 'vertical'} & BoxProps) => {
  // const x = '29.7cm'
  const x = '31.7cm'
  const y = '21.0cm'
  const width = format === 'horizontal' ? x : y
  const height = format === 'horizontal' ? y : x
  return (
    <Box
      {...props}
      sx={{
        background: (t) => t.palette.background.default,
        p: 0,
        // overflow: 'hidden',
        width,
        height: allowOverflow ? undefined : height,
        '@media screen': {
          // aspectRatio: (297 / 210) + '',
          height: allowOverflow ? undefined : height,
          width,
          mb: 16,
          borderRadius: '6px',
          boxShadow: (t) => t.shadows[1],
        },
        // pageBreakAfter: 'always',
        ...props.sx,
      }}
    />
  )
}
