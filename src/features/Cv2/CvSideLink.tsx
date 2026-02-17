import {Cv} from '@/i18n/Cv'
import {Box} from '@mui/material'
import {MixIcon} from '@/features/Home/MixIcon'

export const CvSideLink2 = ({link}: {link: Partial<Cv.Link>}) => {
  return (
    <Box
      component={link.url ? 'a' : 'div'}
      href={link.url}
      target="_blank"
      sx={{
        display: 'flex',
        // flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: link.url ? undefined : undefined,
        color: link.url ? 'primary.main' : undefined
      }}
    >
      {link.icon && (
        <MixIcon icon={link.icon} size={18} sx={{mr: .5,}}/>
      )}
      {link.label}
    </Box>
  )
}