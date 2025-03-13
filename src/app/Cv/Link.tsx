import {Cv} from '@/app/i18n/Cv'
import {MixIcon} from '@/app/Cv/MixIcon'
import Box from '@mui/material/Box'
import Icon from '@mui/material/Icon'

export const Link = ({url, label, icon}: Cv.Link) => {
  if (url.includes('github')) {
    icon = {iconFa: 'fab fa-github'}
    if (!label) label = 'GitHub'
  }
  if (!icon) {
    icon = {iconFa: 'fa-solid fa-link'}
  }
  return (
    <Box component="a" href={url} target="_blank" sx={{
      display: 'inline-flex',
      px: 1,
      color: 'text.primary',
      alignItems: 'center'
    }}>
      {icon && (
        <MixIcon icon={icon} sxColor="text.primary" sizeInherit sx={{mr: .5}}/>
      )}
      {label}
      <Icon color="disabled" fontSize="inherit" sx={{ml: .5}}>open_in_new</Icon>
    </Box>
  )
}