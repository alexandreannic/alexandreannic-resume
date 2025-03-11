import React from 'react'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'
import {mapFor} from '@axanc/ts-utils'

export const Rate = ({rate}: {rate: number}) => {
  const hasHalf = rate % 1 !== 0
  const integer = Math.trunc(rate)
  const icon = (name: string) => (i: number) => (
    <Icon key={i} sx={{fontSize: '16px !important'}}>
      {name}
    </Icon>
  )

  return (
    <Box sx={{color: 'primary.main', display: 'flex'}}>
      {mapFor(integer, icon('star'))}
      {hasHalf && icon('star_half')(1)}
      {mapFor(5 - integer - (hasHalf ? 1 : 0), icon('star_border'))}
    </Box>
  )
}
