'use client'
import {FC, useEffect, useState} from 'react'
import Box from '@mui/material/Box'
import {cssMixins} from '@/utils/style'
import {BoxProps} from '@mui/system'

interface SectionData {
  id: string;
  title: string;
}

interface SidePanelProps extends BoxProps {
  sections: SectionData[];
}

export const AsideMenu: FC<SidePanelProps> = ({sections, ...props}) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '')

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections])

  return (
    <Box component="nav" {...props}>
      <ul style={{paddingLeft: 14}}>
        {sections.map((section) => (
          <li key={section.id}>
            <Box
              onClick={() => scrollToSection(section.id)}
              sx={{
                cursor: 'pointer',
                transition: 'color 300ms ease-in-out',
                background: 'none',
                borderRadius: 50,
                border: 'none',
                fontWeight: activeSection === section.id ? 600 : 400,
                py: .5,
                px: 1,
                mb: .5,
                // fontSize: cssMixins.fontBig,
                color: activeSection === section.id ? 'primary.main' : 'text.secondary',
              }}
            >
              {section.title}
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  )
}