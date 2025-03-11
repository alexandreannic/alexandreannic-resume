import {Cv} from '@/app/i18n/Cv'
import {MixIcon} from '@/app/Cv/MixIcon'

export const cvEn: Cv = {
  job: 'Full-stack engineer',
  location: 'Paris Area, France',
  education: {
    label: 'Education',
    articles: [
      {
        title: 'Master Science and Software Technology',
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
        title: 'Bachelor in computer science',
        honor: 'With high honours',
        period: '2014',
        location: 'UPMC (University Pierre et Marie Curie) - Paris',
        content: `
        Algorithmic (complexity, data structure, recursion) -
        OOP - Designs patterns -
        Databases (transactions, <code>SQL3</code>, <code>PL/SQL</code>, <code>NoSQL</code>, <code>XPath</code>)`,
      },
      {
        title: 'DUT of computer science', //  (two-year university degree in technology
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
        title: 'Information Management Coordinator',
        location: 'Danish Refugee Council (DRC)',
        period: '2023 - 2025 (2 years)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'InfoPortal', url: 'https://github.com/DRC-UA/infoportal'},
          {label: 'Kobo SDK', url: 'https://github.com/DRC-UA/kobo-sdk'},
          {label: 'ActivityInfo SDK', url: 'https://github.com/DRC-UA/activityinfo-sdk'}
        ],
        content: `
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
        location: 'beta.gouv, French Ministry of Economics - Paris',
        period: '2020 - 2022 (2 years)',
        content: `
          Developed SignalConso application related to Consumer Affairs and Fraud Prevention.
          Built on a <code>Scala</code> Rest API, <code>Node</code> and <code>React</code> applications.
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
          Developed <code>Node/TypeScript</code> applications streaming GB of daily data.
          Allow, through an <code>React</code> UI, to build and monitor "pipelines" of microservices in <code>Microsoft Azure</code>,
          linked by queues, orchestrated with <code>k8s (Docker)</code>.<br/>
          Developed <code>TypeScript</code> libraries, test coverage close to 100% with <code>Mocha</code>.
        `,
        tags: ['k8s', 'Docker', 'TypeScript', 'React'],
      },
      {
        logo: 'particeep.jpg',
        title: 'Software engineer',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (3 years)',
        content: `
          Led front team and created several <code>React</code> and <code>Angular</code> applications from scratch.<br/>
          Contributed to the evolution of the REST and <code>GraphQL</code> API in <code>Scala</code> with <code>PostgresSQL</code>.<br/>
          Developed the API SDK for <code>JavaScript</code>, <code>PHP</code> and <code>Scala</code>.<br/>
          Built functional and end to end tests with <code>Selenium</code>, <code>Mocha</code> and <code>Protractor</code>.<br/>
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
        tags: ['Java', 'JavaScript', 'JQuery',]
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
        Worked on the Grid Observatory project related to the European Grid Infrastructure.
        Reconstructed a flow with <code>Perl</code> and <code>MySQL</code> of +200Go/month from 250 sources of inconsistent grid usage traces to make
        them workable for researchers.
      `,
      },
    ]
  },
  projects: {
    label: 'Projects',
    articles: [

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
            Used both versions to create SaaS applications, REST and <code>GraphQL</code> API
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
            rate: 3,
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

            },
            title: 'Perl',
            rate: 3.5,
          }
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
            },
            // logoFa: 'fa-solid fa-brackets-curly',
            title: 'NoSQL',
            rate: 3,
            // content: `Used document-oriented databases mainly during studies projects`
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
