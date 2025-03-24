import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import {cssMixins} from '../../../utils/style'
import {IconRef, MixIcon} from '@/app/features/Home/MixIcon'

export const ProfileLink = ({
  icon,
  size = 19,
  children,
  href,
  target,
  rel,
}: {
  size?: number
  target?: string
  href?: string
  rel?: string
  icon?: IconRef;
  children?: ReactNode;
}) => {
  const body = (
    <Box
      sx={{
        transition: 'all 300ms ease-in-out',
        fontSize: cssMixins.fontMedium,
        display: 'flex',
        alignItems: 'center',
        color: 'text.secondary',
        '&:hover': {
          color: href ? 'text.primary' : undefined,
        },
        '&:not(:last-of-type)': {
          paddingBottom: 1,
        },
      }}
    >
      {icon && <MixIcon icon={icon} size={size}/>}
      {children}
    </Box>
  )
  if (href) return (
    <a href={href} rel={rel} target={target} style={{textDecoration: 'none'}}>{body}</a>
  )
  return body
}
