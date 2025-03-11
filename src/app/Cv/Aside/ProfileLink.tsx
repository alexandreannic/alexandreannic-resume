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
        fontSize: cssMixins.fontMedium,
        display: 'flex',
        alignItems: 'center',
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
            color: 'text.secondary',
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
            color: 'text.secondary',
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
