import {ProfileLink} from '@/app/Cv/Aside/ProfileLink'
import {AsideSection} from '@/app/Cv/Aside/AsideSection'
import React from 'react'
import {useI18n} from '@/app/i18n/I18nContext'
import Box from '@mui/material/Box'
import {ModeSwitch} from '@/app/ModeSwitch'
import Icon from '@mui/material/Icon'

export const AsideLinkCompact = () => {
  const {m} = useI18n()
  return (
    <AsideSection>
      <ProfileLink icon="location_on">{m.location}</ProfileLink>
      <ProfileLink icon="email">
        <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
      </ProfileLink>
      <Box sx={{maxWidth: 400, display: 'flex', mt: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <ProfileLink
          size={28} iconFa="stack-overflow"
          href="https://stackoverflow.com/users/5735030/alexandre-annic"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProfileLink
          size={28}
          iconFa="github"
          href="https://github.com/alexandreannic"
          target="_blank"
          rel="noopener noreferrer"
        />
        <ProfileLink
          size={28}
          iconFa="linkedin"
          href="https://www.linkedin.com/in/alexandreannic/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <Icon color="disabled" sx={{fontSize: 14}}>fiber_manual_record</Icon>
        <ModeSwitch/>
      </Box>
    </AsideSection>
  )
}