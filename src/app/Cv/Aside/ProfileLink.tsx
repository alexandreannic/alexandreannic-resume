import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import {cssMixins} from '../../utils/style'

export const ProfileLink = ({
  icon,
  iconFa,
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
  icon?: string;
  iconFa?: string;
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
      {icon ? (
        <Icon
          sx={{
            mr: 1.5,
            fontSize: `${size}px !important`,
            minWidth: size,
            textAlign: 'center',
            display: 'inline-block',
          }}
        >
          {icon}
        </Icon>
      ) : (
        <Box
          component="i"
          className={`fab fa-${iconFa}`}
          sx={{
            mr: 1.5,
            fontSize: `${size}px !important`,
            minWidth: size,
            textAlign: 'center',
            display: 'inline-block',
          }}
        />
      )}
      {children}
    </Box>
  )
  if (href) return (
    <a href={href} rel={rel} target={target} style={{textDecoration: 'none'}}>{body}</a>
  )
  return body
}
