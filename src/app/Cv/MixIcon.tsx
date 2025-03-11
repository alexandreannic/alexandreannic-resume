import Box from '@mui/material/Box'
import Logo from '@/app/utils/Logo'
import React from 'react'
import {Icon as MuiIcon} from '@mui/material'
import {SxProps} from '@mui/system'

export type IconRef = {
  iconImgSrc?: string
  iconMat?: string
  iconFa?: string
  iconText?: string
}

export const MixIcon = ({
  size,
  sx,
  sxColor = 'primary.main',
  icon
}: {
  sx?: SxProps
  sxColor?: string
  icon: IconRef
  size?: string | number
}) => {
  const common: SxProps = {
    mr: 1.5,
    textAlign: 'center',
    display: 'inline-block',
    color: sxColor,
    ...sx,
  }

  const {
    iconMat,
    iconFa,
    iconImgSrc,
    iconText
  } = icon
  if (iconFa) {
    return (
      <Box
        component="i"
        className={iconFa}
        sx={{
          ...common,
          fontSize: `${size}px !important`,
          minWidth: size,
        }}
      />
    )
  }
  if (iconText)
    return (
      <Box
        sx={{
          ...common,
          fontFamily: 'monospace',
          fontSize: `${size}px !important`,
          minWidth: size,
        }}
      >{iconText}</Box>
    )
  if (iconMat)
    return (
      <MuiIcon
        sx={{
          ...common,
          fontSize: `${size}px !important`,
          minWidth: size,
        }}
      >
        {iconMat}
      </MuiIcon>
    )
  if (iconImgSrc)
    return (
      <Logo src={iconImgSrc} size={size} sx={common}/>
    )
  return <></>
}