import {Panel} from '@/app/features/Home/Panel/Panel'
import Box from '@mui/material/Box'
import {cssMixins} from '@/app/utils/style'
import {Cv} from '@/app/i18n/Cv'
import {PanelTitle} from '@/app/features/Home/Panel/PanelTitle'
import {SxProps} from '@mui/system'
import {Link} from '@/app/features/Home/Link'

export const Project = ({
  project,
  sx,
}: {
  sx?: SxProps
  project: Cv.Project
}) => {
  const {content, title, imgName, links} = project
  return (
    <Panel sx={sx}>
      <Box sx={{display: 'flex', flexDirection: 'column', height: '100%'}}>
        {imgName && (
          <Box sx={{
            marginTop: -1.5,
            marginRight: -1,
            marginLeft: -1,
            mb: 2,
            opacity: .5,
            transition: 'all 300ms ease-in-out',
            height: 220,
            // width: 280,
            maxWidth: 'calc(100% + 16px)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: (cssMixins.radius - 4) + 'px',
            backgroundImage: `url(/project/${imgName})`,
            '&:hover': {
              opacity: 1,
            }
          }}/>
        )}
        <PanelTitle title={title}/>
        <Box sx={{flex: 1}} dangerouslySetInnerHTML={{__html: content}}/>
        <Box sx={{mt: 1}}>
          {project.links?.map(_ =>
            <Link label={_.label} key={_.url} url={_.url}/>
          )}
        </Box>
      </Box>
    </Panel>
  )
}