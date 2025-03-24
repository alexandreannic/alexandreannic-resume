import {Cv} from '@/app/i18n/Cv'
import {Box} from '@mui/material'
import {MixIcon} from '@/app/features/Home/MixIcon'

export const CvSideLink = ({link}: {link: Partial<Cv.Link>}) => {
  return (
    <Box
      component={link.url ? 'a' : 'div'}
      href={link.url}
      target="_blank"
      sx={{display: 'flex', alignItems: 'center', mb: 1, fontWeight: link.url ? undefined : undefined, color: link.url ? 'primary.main' : undefined}}
    >
      {link.icon && (
        <MixIcon icon={link.icon} size={18}/>
      )}
      {link.label}
    </Box>
  )
}