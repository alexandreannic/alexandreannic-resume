import {IconRef} from '@/app/Cv/MixIcon'

export type Cv = Cv.Cv
export namespace Cv {
  export type Cv = {
    job: string
    location: string
    education: Education
    work: {label: string, articles: Article[]}
    projects: {label: string, articles: Project[]}
    skills: {label: string, articles: Skills[]}
    various: {label: string, articles: string[]}
  }

  export type Education = {
    label: string
    articles: Article[]
  }

  export type Skills = {
    title: string
    content: Skill[]
  }

  export type Project = Pick<Article,
    'title' |
    'content' |
    'links'
  > & {
    imgName?: string
  }

  export type Skill = {
    icon: IconRef
    title: Article['title']
    content?: Article['content']
    rate: number
  }

  export type Article = {
    title: string
    honor?: string
    period: string
    tags?: string[]
    location: string
    logo?: string
    content: string
    links?: Link[]
  }

  export type Link = {
    icon?: IconRef,
    label?: string
    url: string
  }
}