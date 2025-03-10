import React from 'react'
import {sectionMargin} from '../Section'
import {Link} from './Link'
import {Skill} from './Skill'
import {cssMixins} from '../../utils/style'
import {AsideSection} from './AsideSection'
import {useI18n} from '../../i18n/I18nContext'
import Logo from '../../utils/Logo'
import Box from '@mui/material/Box'

const avatarSize = '1.56cm'

export const Aside = () => {
  const i18n = useI18n()

  return (
    <Box
      component="aside"
      sx={{width: '6.20cm', marginRight: (theme) => sectionMargin(theme, 1.5)}}
    >
      {/* Header */}
      <Box sx={{display: 'flex', alignItems: 'center', marginBottom: 2}}>
        <Logo
          sx={{background: 'rgba(0,0,0,.4)', borderRadius: '50%', marginRight: 1.5}}
          size={avatarSize}
          src="avatar.jpg"
        />
        <Box>
          <Box sx={{fontSize: cssMixins.fontMainTitle, textAlign: 'center'}}>Alexandre Annic</Box>
          <Box sx={{color: 'primary.main', fontSize: cssMixins.rem(1.5), fontWeight: 500}}>
            {i18n.job}
          </Box>
        </Box>
      </Box>

      {/* Contact Links */}
      <AsideSection>
        <Link icon="location_on">{i18n.location}</Link>
        <Link icon="email">
          <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
        </Link>
        <Link iconFa="stack-overflow">
          <a
            href="https://stackoverflow.com/users/5735030/alexandre-annic"
            target="_blank"
            rel="noopener noreferrer"
          >
            stackoverflow.com/users/5735030
          </a>
        </Link>
        <Link iconFa="github">
          <a href="https://github.com/alexandreannic" target="_blank" rel="noopener noreferrer">
            github.com/alexandreannic
          </a>
        </Link>
        <Link iconFa="linkedin">
          <a href="https://www.linkedin.com/in/alexandreannic/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/alexandreannic
          </a>
        </Link>
      </AsideSection>

      {/* Skills */}
      {i18n.skills.map((s, i) => (
        <AsideSection title={s.title} key={i}>
          {s.content.map((c, j) => (
            <Skill key={j} logo={c.logo} title={c.title} rate={c.rate}>
              {c.content && <Box dangerouslySetInnerHTML={{__html: c.content}}/>}
            </Skill>
          ))}
        </AsideSection>
      ))}

      {/* Various Articles */}
      <AsideSection title={i18n.various.label}>
        {i18n.various.articles.map((v, i) => (
          <Box sx={{marginBottom: 0.5}} key={i} dangerouslySetInnerHTML={{__html: v}}/>
        ))}
      </AsideSection>
    </Box>
  )
}
