import Box from '@mui/material/Box'
import Logo from '@/utils/Logo'
import React from 'react'
import {Icon as MuiIcon} from '@mui/material'
import {SxProps} from '@mui/system'

export type IconRef = {
  iconSizeRation?: number
  iconImgSrc?: string
  iconMat?: string
  iconFa?: string
  iconText?: string
}

export const MixIcon = ({
  size = 22,
  sx,
  sxColor = 'primary.main',
  sizeInherit,
  icon
}: {
  sx?: SxProps
  sxColor?: string
  icon: IconRef
  size?: number
  sizeInherit?: boolean
}) => {
  const common: SxProps = {
    display: 'inline-flex !important',
    alignItems: 'center',
    mt: .25,
    textAlign: 'center',
    minWidth: !sizeInherit ? size * 1.2 : undefined,
    width: !sizeInherit ? size * 1.2 : undefined,
    height: !sizeInherit ? size * 1.2 : undefined,
    color: sxColor,
    fontSize: sizeInherit ? `inherit` : `${size * (icon.iconSizeRation ?? 1)}px !important`,
    ...sx,
  }

  const {
    iconMat,
    iconFa,
    iconImgSrc,
    iconText
  } = icon
  if (iconImgSrc)
    return (
      <Logo src={iconImgSrc} sx={{...common, transform: `scale(${icon.iconSizeRation ?? 1})`}}/>
    )
  if (iconFa) {
    return (
      <Box
        component="i"
        className={iconFa}
        sx={{
          ...common,
        }}
      />
    )
  }
  if (iconText)
    return (
      <Box
        sx={{
          fontFamily: 'monospace',
          ...common,
        }}
      >{iconText}</Box>
    )
  if (iconMat)
    return (
      <MuiIcon
        sx={{
          ...common,
        }}
      >
        {iconMat}
      </MuiIcon>
    )
  return <></>
}