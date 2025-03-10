export type Cv = Cv.Cv
export namespace Cv {
  export type Cv = {
    job: string
    location: string
    education: Education
    work: {label: string, articles: Article[]}
    skills: Skills[]
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

  export type Skill = {
    logo: Article['logo']
    title: Article['title']
    content?: Article['content']
    rate: number
  }

  export type Article = {
    title: string
    honor?: string
    period: string
    location: string
    logo?: string
    content: string
  }
}