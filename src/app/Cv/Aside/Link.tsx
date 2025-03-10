import React, {ReactNode} from 'react'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import {cssMixins} from '../../utils/style'

const iconSize = 19

export const Link = ({
  icon,
  iconFa,
  children,
}: {
  icon?: string;
  iconFa?: string;
  children: ReactNode;
}) => {
  return (
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
            fontSize: `${iconSize}px !important`,
            minWidth: iconSize,
            textAlign: 'center',
            display: 'inline-block',
            color: 'primary.main',
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
            fontSize: `${iconSize}px !important`,
            minWidth: iconSize,
            textAlign: 'center',
            display: 'inline-block',
            color: 'primary.main',
          }}
        />
      )}
      {children}
    </Box>
  )
}
