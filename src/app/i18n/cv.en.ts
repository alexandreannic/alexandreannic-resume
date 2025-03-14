import {Cv} from '@/app/i18n/Cv'

export const cvEn: Cv = {
  job: 'Software Engineer',
  location: 'Bogotá, Colombia',
  summary: `Senior software engineer with more than <b>10 years experience</b>. Committed in building intuitive, high-performance applications, with a strong focus on UX/UI and clean architecture.<br/>Skilled in optimizing performance, ensuring security, and handling large-scale data processing to build robust and efficient systems.`,
  education: {
    label: 'Education',
    articles: [
      {
        title: `Master Degree in Science and Software Technology`,
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
      {
        title: 'Bachelor in Computer Science',
        honor: 'With high honours',
        period: '2014',
        location: 'UPMC (University Pierre et Marie Curie) - Paris',
        content: `
        Algorithmic (complexity, data structure, recursion) -
        OOP - Designs patterns -
        Databases (transactions, <code>SQL3</code>, <code>PL/SQL</code>, <code>NoSQL</code>, <code>XPath</code>)`,
      },
      {
        title: 'DUT of Computer Science', //  (two-year university degree in technology
        period: '2013',
        location: 'IUT d\'Orsay',
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
    label: 'Work experiences',
    articles: [
      {
        title: 'Information Management Coordinator in Humanitarian Sector',
        location: 'Danish Refugee Council (DRC) - Ukraine',
        period: '2023 - 2025 (2 years)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'Demo dashboard', url: 'https://infoportal-ua.drc.ngo/dashboard/protection-monitoring'},
          {label: 'InfoPortal', url: 'https://github.com/DRC-UA/infoportal'},
          // {label: 'Kobo SDK', url: 'https://github.com/DRC-UA/kobo-sdk'},
          // {label: 'ActivityInfo SDK', url: 'https://github.com/DRC-UA/activityinfo-sdk'}
        ],
        content: `
          <b>Context</b>: DRC is one of the largest international NGOs, with Ukraine as its biggest mission. 
          Traditional Information Management, relying on manual effort, couldn't scale.<br/>
          Built <b>InfoPortal</b>, a platform integrating multiple external data sources to enhance reporting, 
          improve program monitoring, ensure data protection, and streamline information management. 
          <b>Engaged key stakeholders</b> to drive adoption across missions and <b>built a team</b> to ensure sustainability. 
        `
      },
//       {
//         title: 'MEAL Officer',
//         location: 'Première Urgence Internationale - Poland (Ukraine Emergency)',
//         period: 'April 2022 - May 2022',
//         content: `
//           Digitalized forms using Kobo.
// Training and technical support of the program teams.
// Created and managed databases and visualisation tools allowing program monitoring and reporting.
// Set up FCRM mechanisms.
// Maintained project monitoring tools updated.
//         `
//       },
      {
        title: 'Software Engineer',
        location: 'French Ministry of Economics, beta.gouv - Paris',
        period: '2020 - 2022 (2 years)',
        content: `
          Developed the <b>SignalConso</b> application to connect consumer complaints and feedbacks with companies, overseen by <b>Consumer Affairs and Fraud Prevention</b>.
          Handled <b>100,000 monthly consumer reports</b>, involving all <b>major French companies</b>, with a <b>satisfaction rate of 93%</b>.
          Improved <code>Scala</b> API and rebuilt client app from scratch and <b>leading UX/UI decisions</b>.
        `,
        links: [
          {url: 'https://signal.conso.gouv.fr', label: 'signal.conso.gouv'},
          {url: 'https://github.com/SignalConso', label: 'GitHub'},
        ],
        tags: ['Scala', 'TypeScript', 'Angular', 'React', 'PSQL']
      },
      {
        title: 'Big Data engineer',
        location: 'Mediarithmics - Paris',
        period: '2019 - 2020 (1 year)',
        content: `
          Developed <code>Node/TypeScript</code> applications <b>streaming GB of daily data</b>.
          Allow, through an <code>React</code> UI, to <b>build and monitor pipelines of microservices</b> in <code>Microsoft Azure</code>,
          <b>linked by queues, orchestrated with <code>k8s (Docker)</code></b>.<br/>
<!--          Developed <code>TypeScript</code> libraries, test coverage close to 100% with <code>Mocha</code>.-->
        `,
        tags: ['k8s', 'Docker', 'TypeScript', 'React'],
      },
      {
        logo: 'particeep.jpg',
        title: 'Software engineer',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (3 years)',
        content: `
          Contributed to the evolution of the <b>REST and <code>GraphQL</code> API in <code>Scala</code> with <code>PostgresSQL</code></b>.<br/>
          <b>Led the creation of multiple</b> <code>React</code> and <code>Angular</code> applications from scatch.<br/>
          Developed the API SDK for <code>JavaScript</code>, <code>PHP</code> and <code>Scala</code>.<br/>
          Built functional and e2e tests with <code>Selenium</code>, <code>Mocha</code> and <code>Protractor</code>.<br/>
          Implemented CI with <code>Jenkins</code>.<br/>
        `,
        tags: ['Java', 'Scala', 'Angular', 'AngularJs', 'React', 'PHP', 'PSQL'],
      },
      {
        logo: 'activa.png',
        title: 'Software developer',
        location: 'Activa Informatique - Paris',
        period: 'Summers 2013, 2014 and 2015',
        content: `
        Developed features on a SaaS application with <code>Java</code>, <code>JPA</code>, <code>JQuery</code>
        and <code>MySQL</code> such as appointments calendar, real-time chat, statistics.<br/>
        Developed websites in <code>PHP</code> for small businesses and associations.
      `,
        tags: ['Java', 'PHP', 'JavaScript', 'JQuery',]
      },
      // {
      //   logo: 'upmc.png',
      //   title: 'Master 1 semester project',
      //   location: 'UPMC (University Pierre et Marie Curie) - Paris',
      //   period: '2015 (6 months)',
      //   content: `
      //   Implemented autoscalling registry inspired by DHT based on an application of distributed
      //   components, using technologies as Future, Socket, Thread and RMI.
      // `
      // },
      {
        title: 'Internship in computer research',
        location: 'LRI (Computer Research Laboratory) - Orsay',
        period: '2013 (3 months)',
        content: `
          Worked on the <b>Grid Observatory</b> project within the <b>European Grid Infrastructure</b>, collecting vast amounts of data from high-energy physics experiments at the LHC.
          Reconstructed a flow of +200Go/month from 250 sources of inconsistent grid usage traces to make them workable for researchers.
        `,
        tags: ['Perl', 'Bash', 'MySQL']
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
          {url: 'https://github.com/alexandreannic/activityinfo-sdk'}
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
              iconFa: 'fab fa-angular',
              iconImgSrc: 'dev/angularjs.png',
            },
            title: 'AngularJS',
            rate: 4,
            content: `

          `
          },
          {
            icon: {
              iconImgSrc: 'dev/play.png',
              iconFa: 'fa-solid fa-chevron-right',
            },
            title: 'Play framework',
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
          {
            icon: {
              iconFa: 'fab fa-js',
              iconImgSrc: 'dev/javascript.png',
            },
            title: 'JavaScript',
            rate: 5,
          },
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
              iconImgSrc: 'dev/csharp.png',
              iconFa: 'fa-solid fa-hashtag',

            },
            title: 'C#',
            rate: 2.5,
          },
          {
            icon: {
              iconImgSrc: 'dev/php.png',
              iconFa: 'fab fa-php',
            },
            title: 'PHP',
            rate: 4,
          },
          {
            icon: {
              iconImgSrc: 'dev/c++.png',
              iconFa: 'fab fa-c',

            },
            title: 'C/C++',
            rate: 3,
          },
          {
            icon: {
              iconImgSrc: 'dev/perl.png',
              iconFa: 'fa-solid fa-code',
              iconSizeRation: .8,
            },
            title: 'Perl',
            rate: 4,
          },
          {
            icon: {
              iconFa: 'fa-brands fa-python',
            },
            title: 'Python',
            rate: 3,
          },
        ]
      },
      {
        title: 'Persistence',
        content: [
          {
            icon: {
              iconImgSrc: 'dev/sql.png',
              iconFa: 'fa-solid fa-database',
            },
            title: 'SQL',
            rate: 4.5,
            // content: `
            //   Mainly <code>PostGres</code> anad <code>MySQL</code>. Script <code>PL/SQL</code>
            // `
          },
          {
            icon: {
              iconImgSrc: 'dev/nosql.png',
              iconText: '{}',
              iconSizeRation: .8,
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
      'Diploma for youth leaders and workers (BAFA)',
      `<div style="white-space: nowrap">Daily sport: Crossfit, climbing, running</div>`,
      'Driving licence',
    ]
  }
}
