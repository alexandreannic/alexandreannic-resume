import {ProfileLink} from '@/app/Cv/Aside/ProfileLink'
import {AsideSection} from '@/app/Cv/Aside/AsideSection'
import React from 'react'
import {useI18n} from '@/app/i18n/I18nContext'

export const AsideLink = () => {
  const {m} = useI18n()
  return (
    <AsideSection>
      <ProfileLink icon="location_on">{m.location}</ProfileLink>
      <ProfileLink icon="email">
        <a href="mailto:alexandre.annic1@gmail.com">alexandre.annic1@gmail.com</a>
      </ProfileLink>
      <ProfileLink iconFa="stack-overflow">
        <a
          href="https://stackoverflow.com/users/5735030/alexandre-annic"
          target="_blank"
          rel="noopener noreferrer"
        >
          stackoverflow.com/users/5735030
        </a>
      </ProfileLink>
      <ProfileLink iconFa="github">
        <a href="https://github.com/alexandreannic" target="_blank" rel="noopener noreferrer">
          github.com/alexandreannic
        </a>
      </ProfileLink>
      <ProfileLink iconFa="linkedin">
        <a href="https://www.linkedin.com/in/alexandreannic/" target="_blank" rel="noopener noreferrer">
          linkedin.com/in/alexandreannic
        </a>
      </ProfileLink>
    </AsideSection>
  )
}