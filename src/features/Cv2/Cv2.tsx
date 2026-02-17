import {PdfSlide} from '@/shared/Pdf/PdfSlide'
import {Pdf} from '@/shared/Pdf/PdfLayout'
import Box from '@mui/material/Box'
import React from 'react'
import {CvPanel} from '@/features/Cv/CvPanel'
import {cssMixins, shortUrl} from '@/utils/style'
import {CvSection} from '@/features/Cv/CvSection'
import {CvSideLink} from '@/features/Cv/CvSideLink'
import {CvLink} from '@/features/Cv/CvLink'
import {TagContainer} from '@/features/Home/Tag'
// import {cvFr as cvEn} from '@/i18n/cv.fr'
import {map} from '@axanc/ts-utils'
import {cvHum} from '@/i18n/cv.hum'
import {CvSideLink2} from '@/features/Cv2/CvSideLink'
import Icon from '@mui/material/Icon'
import {BoxProps} from '@mui/material'
import {IconRef, MixIcon} from '@/features/Home/MixIcon'

const paddingX = 4

export const Cv2 = () => {
  // const {m} = useI18n()
  const m = cvHum
  return (
    <Pdf>
      <PdfSlide format="vertical">
        <Box sx={{px: paddingX, pt: 2, display: 'flex', alignItems: 'flex-start'}}>
          <Box sx={{whiteSpace: 'nowrap'}}>
            <Box sx={{fontSize: '1.4rem'}}>Alexandre Annic</Box>
            <Box sx={{color: 'text.secondary', fontSize: cssMixins.fontBig, fontWeight: 500}}>
              {m.job}
            </Box>
            <CvSideLink link={{label: m.location}}/>
          </Box>
          {/*<Icon sx={{marginLeft: 'auto', mr: -3, fontSize: '3rem', transform: 'scaleX(-1)', opacity: .3, color: 'text.disabled'}}>format_quote</Icon>*/}
          {/*<Box sx={{alignSelf: 'center', marginLeft: 'auto', fontWeight: 500, fontSize: '5rem', color: 'text.disabled'}}>“</Box>*/}
          <Box sx={{
            p: 0,
            pr: 2,
            position: 'relative',
            marginLeft: 'auto',
            color: 'text.secondary',
            fontWeight: 300,
            fontSize: '1rem',
            textWrap: 'balance',
            textAlign: 'right',
            maxWidth: '70%'
          }}>
            <Box sx={{
              backgroundColor: 'divider',
              position: 'absolute',
              width: 2,
              top: 4,
              bottom: 4,
              right: 0,
            }}/>
            {m.summary}
          </Box>
        </Box>
        <Box sx={{flex: 1, justifyContent: 'center', display: 'flex', px: 3, pt: -1, pb: .5, flexDirection: 'row', alignItems: 'flex-end', gap: 2,}}>
          <CvSideLink2 link={{
            url: 'https://alexandreannic.web.app/',
            label: 'alexandreannic.web.app',
            icon: {iconMat: 'account_circle'},
          }}/>
          {/*<Separator/>*/}
          {m.links.map((_, index) => (
            <>
              <CvSideLink2 link={_}/>
              {/*{index < m.links.length - 1 && <Separator/>}*/}
            </>
          ))}
        </Box>

        <Box sx={{px: paddingX, py: 1}}>
          <CvSection icon="school" title={m.education.label}>
            <Box sx={{gap: .25, display: 'flex'}}>
              {m.education.articles.map((e, i) => (
                <CvPanel
                  horizontal
                  isFirst={i === 0}
                  key={i}
                  step={e.period}
                  title={e.title}
                  subTitle={e.shortLocation ?? e.location}
                  logo={e.logo}
                >
                  {e.honor}
                </CvPanel>
              ))}
            </Box>
          </CvSection>

          <CvSection title={m.work.label}>
            {m.work.articles.map((e, i) => (
              <CvPanel
                sx={{mb: .25}}
                isFirst={i === 0}
                step={e.period}
                honor={e.honor}
                title={e.title}
                subTitle={(map(e.shortLocation ?? e.location, loc => loc) ?? '') + (e.remote ? ` (${e.remote})` : '')}
                logo={e.logo}
              >
                {e.content && <Box dangerouslySetInnerHTML={{__html: e.content}}/>}
                <TagContainer sx={{mt: 1, fontSize: cssMixins.fontMedium}}>
                  {e.links?.map(_ =>
                    <CvLink key={_.url} url={_.url} icon={_.icon} label={shortUrl(_.url)}/>
                  )}
                </TagContainer>
              </CvPanel>
            ))}
          </CvSection>
          <CvSection title="Skills">
            <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
              <Chip><b>French:</b>&nbsp;Native</Chip>
              <Chip><b>English:</b>&nbsp; Fluent</Chip>
              {m.skills.articles.flatMap(_ => _.content).filter(_ => ['Scala', 'JavaScript', 'TypeScript', 'NoSQL', 'SQL'].includes(_.title)).map(_ => (
                <Chip key={_.title} iconRef={_.icon}>{_.title}</Chip>
              ))}
            </Box>
          </CvSection>
        </Box>
      </PdfSlide>
    </Pdf>
  )
}

function Chip({sx, children, iconRef, ...props}: BoxProps & {iconRef?: IconRef}) {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'background.paper',
      px: 1.5,
      minHeight: 32,
      fontWeight: 500,
      borderRadius: 50,
      ...sx
    }} {...props}>
      {iconRef && <MixIcon sx={{mr: .5}} icon={{...iconRef, iconSizeRation: (iconRef.iconSizeRation ?? 1) * 0.8}}/>}
      {children}
    </Box>
  )
}

const Separator = ({sx, ...props}: BoxProps) => {
  return <Box {...props} sx={{...sx, color: 'text.disabled'}}>•</Box>
}
