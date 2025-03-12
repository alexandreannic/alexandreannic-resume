import {Panel} from '@/app/Cv/Panel'
import Box from '@mui/material/Box'
import {cssMixins} from '@/app/utils/style'
import {Cv} from '@/app/i18n/Cv'
import {PanelTitle} from '@/app/Cv/PanelTitle'
import {SxProps} from '@mui/system'
import {Link} from '@/app/Cv/Link'

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
      {imgName && (
        <Box sx={{
          marginTop: -1.5,
          marginRight: -1,
          marginLeft: -1,
          mb: 2,
          opacity: .7,
          height: 220,
          // width: 280,
          maxWidth: 'calc(100% + 16px)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: (cssMixins.radius - 4) + 'px',
          backgroundImage: `url(/project/${imgName})`,
        }}/>
      )}
      <PanelTitle title={title}/>
      {content}
      <Box>
        {project.links?.map(_ =>
          <Link label={_.label} key={_.url} url={_.url}/>
        )}
      </Box>
    </Panel>
  )
}