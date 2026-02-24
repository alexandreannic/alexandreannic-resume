import {Cv} from '@/i18n/Cv'

export const cvEn: Cv = {
  job: 'Software Engineer',
  location: 'Paris, France',
  links: [
    {
      url: 'https://stackoverflow.com/users/5735030',
      icon: {iconFa: 'fab fa-stack-overflow'},
      label: 'stackoverflow.com/users/5735030',
    },
    {
      url: 'https://github.com/alexandreannic',
      icon: {iconFa: 'fab fa-github'},
      label: 'github.com/alexandreannic',
    },
    {
      url: 'https://www.linkedin.com/in/alexandreannic/',
      icon: {iconFa: 'fab fa-linkedin'},
      label: 'linkedin.com/in/alexandreannic',
    }
  ],
  summary: `
    Senior Software Engineer with <b>10+ years of experience</b>, specialized in <b>TypeScript and React</b> with strong experience across multiple languages and frameworks. Experienced in <b>technical leadership</b> and <b>team management</b>, with a strong focus on building elegant, intuitive UIs and scalable distributed systems.    
  `,
  education: {
    label: 'Education',
    articles: [
      {
        shortTitle: 'Master Degree',
        shortContent: `Science and Software Technology`,
        shortLocation: 'UPMC, Shanghai #40 worldwide',
        title: `Master's in Software Science`,
        honor: 'With high honours',
        period: '2016',
        location: 'UPMC (University Pierre et Marie Curie) - Paris',
        logo: 'upmc.png',
        content: `
        Algorithmic (compression, hash, 2D geometry) -
        Multithreaded and distributed programming
        (<code>Scala</code>, <code>OCaml</code>, <code>Java</code>, <code>C</code>) -
        Web app (security, tracking)
      `
      },
      // {
      //   title: 'Bachelor Degree in Computer Science',
      //   shortTitle: 'Bachelor Degree',
      //   shortContent: 'Computer Science',
      //   honor: 'With high honours',
      //   period: '2014',
      //   shortLocation: 'UPMC - Paris',
      //   location: 'UPMC (University Pierre et Marie Curie) - Paris',
      //   content: `
      //   Algorithmic (complexity, data structure, recursion) -
      //   OOP - Designs patterns -
      //   Databases (transactions, <code>SQL3</code>, <code>PL/SQL</code>, <code>NoSQL</code>, <code>XPath</code>)`,
      // },
      {
        title: 'DUT of Computer Science', //  (two-year university degree in technology
        shortTitle: 'DUT (2-year diploma)', //  (two-year university degree in technology
        shortContent: 'Computer Science',
        period: '2013',
        location: 'IUT d\'Orsay, Shanghai #13 worldwide',
        logo: 'logo.jpg',
        content: `
        Unix architecture, bash, script -
        POO <code>Java</code>, <code>C++</code> -
        <code>SQL</code> -
        System programming in <code>C</code> (pipe, signal, fork, thread) -
        Networking (DHCP, DNS, Firewall) -
        Computer architecture
      `,
      },
    ]
  },
  work: {
    label: 'Work Experiences',
    articles: [
      {
        title: 'Founder',
        location: 'NexusPortal',
        period: '2025 - 2026 (1 year)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'NexusPortal', url: 'https://www.nexusportal.app/'},
        ],
        content: `
        Built a <code>Node</code>-<code>TypeScript</code> data management platform (collection › transformation › protection › visualization › analysis).
        <ul>
        <li>Dynamic <b>dashboard</b> builder • Advanced access control system • XLSForm editor</li>
        <li>Real-time collaboration via <code>WebSockets</code> (Google Sheets–style)</li>
        <li><b>Modular <code>TypeScript</code> transformation engine</b> for chainable pipelines</li>
        </ul>
      `
      },
      {
        title: 'Information Management Coordinator',
        location: 'Danish Refugee Council (DRC) - Ukraine, Kyiv',
        remote: 'On-site',
        period: '2023 - 2025 (2 years)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'Demo dashboard', url: 'https://infoportal-ua.drc.ngo/dashboard/protection-monitoring'},
          {label: 'github.com/DRC-UA', url: 'https://github.com/DRC-UA'},
        ],
        content: `
Created a <code>Node</code>-<code>TypeScript</code>-<code>Next.js</code> platform for one of the <b>largest humanitarian missions</b> worldwide.
<ul>
<li>Centralized and standardized large volumes of data from multiple web services (APIs, scraping, SDKs development)</li>
<li>Adopted across all teams, with fine-grained access control (sensitive data)</li>
<li>Consolidated <b>dashboards</b> and inter-NGO data sharing</li>
<li>Integrate a <b>CRM</b> for beneficiary feedback and a <b>Case Management System</b></li>
<li>Automated critical processes (weeks → <b>one click</b>)</li>
<li><b>Recruited and trained a team</b> of 4 (developers + IM)</li>
</ul>
      `
      },
      {
        title: 'Software Engineer',
        location: 'Ministry of Economy (beta.gouv) - Paris',
        remote: 'Remote',
        period: '2020 - 2022 (2 years)',
        content: `
        <ul>
        <li>Developed <b>SignalConso</b>, a platform connecting <b>consumer complaints</b> with <b>companies</b>, monitored by the <b>DGCCRF</b></li>
        <li><b>100k monthly reports</b>, involving <b>major French companies</b>, with <b>93% satisfaction rate</b></li>
        <li>Developed the <code>Scala</code> API and led the <code>Angular</code> → <code>Next.js</code> frontend migration</li>
        </ul>
      `,
        links: [
          {url: 'https://signal.conso.gouv.fr', label: 'signal.conso.gouv'},
          {url: 'https://github.com/SignalConso', label: 'GitHub'},
        ],
        tags: ['Scala', 'TypeScript', 'Angular', 'React', 'PSQL']
      },
      {
        title: 'Big Data Engineer',
        remote: 'On-site',
        location: 'Mediarithmics - Paris',
        period: '2019 - 2020 (1 year)',
        content: `
<ul>
<li>Built a <code>TypeScript</code> library to standardize large-scale data imports (streams, parsing, retry strategies, error handling, logging).</li>
<li>
       Led (team of 3) the development of a cloud-based <code>Node</code>-<code>TypeScript</code>-<code>PSQL</code> application managing <b>microservices pipelines</b> automatically deployed on <code>Kubernetes</code>, orchestrated and monitored via a <code>React</code> interface.
       The system <b>ingested terabytes of data from major French companies</b> (Fnac-Darty, TF1, etc.) to produce analytics.
</li>
</ul>
      `,
        tags: ['k8s', 'Docker', 'TypeScript', 'React'],
      },
      {
        title: 'Software Engineer',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (4 years)',
        remote: 'On-site',
        content: `
<ul>
<li>
  Developed a <b>financial product management microservices API</b> 
  (<code>REST</code>/<code>GraphQL</code>-<code>Java</code>-<code>Scala</code>)
</li>
<li>
  <b>Technical Lead</b> for MEDEF Incubator apps + subscription funnel 
  <code>Scala</code>-<code>React</code>
</li>
<li>
  Developed a <b>crowdfunding platform</b> 
  <code>Angular</code>-<code>Scala</code>
</li>
<li>
  Created <b>UI Libraries</b>, migration scripts in <code>Python</code>, <b>SDKs</b> 
  in <code>JS</code>-<code>PHP</code>-<code>Scala</code>
</li>
<li>
  Set up <b>CI</b> with <code>Jenkins</code> and automated tests 
  <code>Selenium</code>-<code>Mocha</code>-<code>Protractor</code>
</li>
</ul>
      `,
        tags: ['Java', 'Scala', 'Angular', 'React', 'PHP', 'PSQL'],
      },
    ]
  },
  projects: {
    label: 'Side Projects',
    articles: [
      {
        title: 'MX - MUI Extension',
        content: '',
        imgName: 'mx.png',
        links: [
          {url: 'https://github.com/alexandreannic/mui-extension'},
          {label: 'Demo', url: 'https://mui-extension.firebaseapp.com/'},
        ],
      },
      {
        title: 'Form Editor',
        content: '',
        imgName: 'form-editor.png',
        links: [
          {url: 'https://github.com/alexandreannic/form-editor'},
          {label: 'Demo', url: 'https://angular-form-editor.firebaseapp.com/'},
        ],
      },
      {
        title: 'DRC Periodic Review',
        content: '',
        imgName: 'periodic-review.png',
        links: [
          {url: 'https://github.com/alexandreannic/periodic-review-survey'},
          {label: 'Demo', url: 'https://drc-periodic-review.web.app/'},
        ],
      },
      {
        title: 'Redux DataTable',
        content: '',
        imgName: 'redux-dt.png',
        links: [
          {url: 'https://github.com/alexandreannic/redux-datatable'},
          {label: 'Demo', url: 'https://redux-datatable.web.app/'},
        ],
      },
      {
        title: 'TypeScript Utils',
        content: 'Lightweight <code>TypeScript</code> utility library offering a collection of essential functions to simplify common coding tasks.' +
          'Designed for type-safety, efficiency, readability, and maintainability.',
        links: [
          {url: 'https://github.com/alexandreannic/ts-utils'}
        ]
      },
      {
        title: 'React Hooks Lib',
        content: 'Comprehensive suite of custom <code>React</code> hooks with clear, consistent APIs and robust <code>TypeScript</code> inference.',
        links: [
          {url: 'https://github.com/alexandreannic/react-hooks-lib'}
        ]
      },
      // {
      //   title: 'React TypeScript Interview',
      //   content: 'React interview tests for evaluating candidates in recruitment.',
      //   links: [
      //     {url: 'https://github.com/alexandreannic/drc-react-ts-interview'}
      //   ]
      // },
      {
        title: 'KoboToolbox SDK',
        content: 'A <code>TypeScript</code> SDK for seamlessly interacting with the KoboToolbox API, abstracting its complexities and bypassing his bugs.',
        links: [
          {url: 'https://github.com/DRC-UA/kobo-sdk'}
        ]
      },
      {
        title: 'ActivityInfo SDK',
        content: '<code>TypeScript</code> SDK for interacting with the ActivityInfo API. Features a <code>TypeScript</code> interface builder that simplifies unintelligible request bodies and enables data submission in a human-readable format.',
        links: [
          {url: 'https://github.com/DRC-UA/activityinfo-sdk'}
        ]
      },
    ]
  },
  skills: {
    label: 'Skills', articles: [
      {
        title: 'Framework',
        content: [
          {
            icon: {
              iconImgSrc: 'dev/react.png',
              iconFa: 'fab fa-react',
            },
            title: 'React',
            rate: 5,
            content: `
            Used in large applications including with <code>Redux</code> and <code>TypeScript</code>.
          `
          },
          {
            icon: {
              iconImgSrc: 'dev/angular.png',
              iconFa: 'fab fa-angular',
            },
            title: 'Angular (2+)',
            rate: 5,
            content: `
            Used in large applications including with <code>NgRx</code>
          `,
          },
          {
            icon: {
              iconImgSrc: 'dev/nextjs.png',
            },
            title: 'Next.js',
            rate: 5,
          },
          // {
          //   icon: {
          //     iconFa: 'fab fa-angular',
          //     iconImgSrc: 'dev/angularjs.png',
          //   },
          //   title: 'AngularJS',
          //   rate: 4,
          //   content: `
          //
          // `
          // },
          {
            icon: {
              iconImgSrc: 'dev/play.png',
              iconFa: 'fa-solid fa-chevron-right',
            },
            title: 'Play (Java / Scala)',
            rate: 4,
            content: `
            Used both <code>Scala</code> and <code>Java</code> to build REST and <code>GraphQL</code> API
          `
          }
        ]
      },
      {
        title: 'Languages',
        content: [
          {
            icon: {
              iconImgSrc: 'dev/ts.png',
              iconText: 'TS',
              iconSizeRation: .8,
            },
            title: 'TypeScript',
            rate: 5,
          },
          // {
          //   icon: {
          //     iconFa: 'fab fa-js',
          //     iconImgSrc: 'dev/javascript.png',
          //   },
          //   title: 'JavaScript',
          //   rate: 5,
          // },
          {
            icon: {
              iconImgSrc: 'dev/scala.png',
              iconText: 'λ',
            },
            title: 'Scala',
            // logoFa: 'fa-solid fa-lambda',
            rate: 4,
          },
          {
            icon: {
              iconImgSrc: 'dev/java.png',
              iconFa: 'fab fa-java',

            },
            title: 'Java',
            rate: 4,
          },
          {
            icon: {
              iconImgSrc: 'dev/graphql.svg',
              iconFa: 'fab fa-java',

            },
            title: 'GraphQL',
            rate: 4,
          },
          {
            icon: {
              iconImgSrc: 'dev/php.png',
              iconFa: 'fab fa-php',
              iconSizeRation: 1.2,
            },
            title: 'PHP',
            rate: 4,
          },
          {
            icon: {
              iconImgSrc: 'dev/c++.png',
              iconFa: 'fab fa-c',

            },
            title: 'C / C++',
            rate: 3,
          },
          // {
          //   icon: {
          //     iconImgSrc: 'dev/csharp.png',
          //     iconFa: 'fa-solid fa-hashtag',
          //
          //   },
          //   title: 'C#',
          //   rate: 2.5,
          // },
          // {
          //   icon: {
          //     iconImgSrc: 'dev/perl.png',
          //     iconFa: 'fa-solid fa-code',
          //     iconSizeRation: .8,
          //   },
          //   title: 'Perl',
          //   rate: 4,
          // },
          {
            icon: {
              iconImgSrc: 'dev/python.png',
              iconFa: 'fa-brands fa-python',
            },
            title: 'Python',
            rate: 3,
          },
        ]
      },
      {
        title: 'DevOps',
        content: [
          {title: 'Docker', rate: 4.5, icon: {iconImgSrc: 'dev/docker.png'}},
          {title: 'Kubernetes', rate: 3.5, icon: {iconImgSrc: 'dev/k8s.png'}},
          {title: 'Jenkins', rate: 4.5, icon: {iconImgSrc: 'dev/jenkins.ico'}},
          {title: 'Github Actions', rate: 4.5, icon: {iconImgSrc: 'dev/github.png'}},
        ],
      },
      {
        title: 'Persistence',
        content: [
          {
            icon: {
              iconImgSrc: 'dev/sql.png',
              iconFa: 'fa-solid fa-database',
              iconSizeRation: .8,
            },
            title: 'SQL',
            rate: 5,
            // content: `
            //   Mainly <code>PostGres</code> anad <code>MySQL</code>. Script <code>PL/SQL</code>
            // `
          },
          {
            icon: {
              iconImgSrc: 'dev/nosql.png',
              iconText: '{}',
              iconSizeRation: .9,
            },
            // logoFa: 'fa-solid fa-brackets-curly',
            title: 'NoSQL',
            rate: 3,
            // content: `Used document-oriented databases mainly during studies project`
          },
        ]
      }
    ]
  },
  various: {
    label: 'Various',
    articles: [
      `<b>French</b>: Native speaker`,
      `<b>English</b>: Fluent, professional experience`,
      `BAFA, Driving licence, Crossfit, Chess, mountaineering`,
    ]
  }
}
