import {Cv} from '@/i18n/Cv'
import {MixIcon} from '@/features/Home/MixIcon'
import {cssAlpha, cssMixins} from '@/utils/style'
import Box from '@mui/material/Box'

export const CvLink = ({url, label, icon}: Cv.Link) => {
  if (url.includes('github')) {
    icon = {iconFa: 'fab fa-github'}
    if (!label) label = 'GitHub'
  }
  if (!icon) {
    icon = {iconMat: 'link'}
  }
  return (
    <Box component="a" href={url} target="_blank" sx={{
      display: 'inline-flex',
      textTransform: 'none',
      mb: .5,
      fontSize: cssMixins.fontSmall,
      color: 'primary.main',
      alignItems: 'center',
      backgroundColor: cssAlpha('--mui-palette-primary-main', .08),
      py: .25,
      px: 1.5,
      borderRadius: 50,
    }}>
      {icon && (
        <MixIcon icon={icon} sxColor="primary.main" sizeInherit sx={{minWidth: 18, mr: 0}}/>
      )}
      {label}
    </Box>
  )
}