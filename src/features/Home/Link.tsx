import {Cv} from '@/i18n/Cv'
import {MixIcon} from '@/features/Home/MixIcon'
import Icon from '@mui/material/Icon'
import {Button} from '@mui/material'

export const Link = ({url, label, icon}: Cv.Link) => {
  if (url.includes('github')) {
    icon = {iconFa: 'fab fa-github'}
    if (!label) label = 'GitHub'
  }
  if (!icon) {
    icon = {iconFa: 'fa-solid fa-link'}
  }
  return (
    <Button size="small" component="a" href={url} target="_blank" sx={{
      display: 'inline-flex',
      mr: 1,
      color: 'primary.main',
      alignItems: 'center'
    }}>
      {icon && (
        <MixIcon icon={icon} sxColor="primary.main" sizeInherit sx={{mr: .5}}/>
      )}
      {label}
      <Icon color="disabled" fontSize="inherit" sx={{ml: .5}}>open_in_new</Icon>
    </Button>
  )
}