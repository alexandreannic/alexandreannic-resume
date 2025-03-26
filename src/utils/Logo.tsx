import React from 'react'
import {SxProps} from '@mui/system'
import Box from '@mui/material/Box'

const Logo = ({
  className,
  src,
  size = 140,
  sx,
}: {
  className?: string,
  src: string
  size?: number
  sx?: SxProps
}) => {
  return (
    <Box className={className} sx={{
      backgroundImage: `url(/logo/${src})`,
      height: size,
      width: size,
      minWidth: size,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      ...sx
    }}/>
  )
}

export default Logo
