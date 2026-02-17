import {Cv} from '@/i18n/Cv'

export const cvHum: Cv = {
  job: 'Software Engineer / IM',
  location: 'France, Paris',
  links: [
    // {
    //   url: 'https://stackoverflow.com/users/5735030',
    //   icon: {iconFa: 'fab fa-stack-overflow'},
    //   label: 'stackoverflow.com/users/5735030',
    // },
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
    Software engineer who transitioned into the humanitarian sector, where a developer background turned out to be highly valuable to solve complex Information Management challenges.
  `,
  education: {
    label: 'Education',
    articles: [
      {
        shortTitle: 'Master Degree',
        shortContent: `Software Science and Technology`,
        shortLocation: 'Pierre and Marie Curie, Shanghai #40 worldwide',
        title: `Master's in Software Science & Technology`,
        honor: 'With high honours',
        period: '2016',
        location: 'UPMC (University Pierre et Marie Curie) - Paris, Shanghai #40 worldwide',
        logo: 'upmc.png',
        content: `
        Algorithmic (compression, hash, 2D geometry) -
        Multithreaded and distributed programming
        (<code>Scala</code>, <code>OCaml</code>, <code>Java</code>, <code>C</code>) -
        Web app (security, tracking)
      `
      },
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
        title: `Founder of NexusPortal`,
        period: '2025 - 2026 (1 year)',
        links: [{label: `NexusPortal`, url: `https://www.nexusportal.app/`}],
        content: `
          Founded and built <b>NexusPortal</b>, a SaaS platform modernising Information Management workflows in the humanitarian sector.
          <ul>
            <li>Architected a <b>single source of truth</b> to keep data consistent across complex multi-step workflows.</li>
            <li>Designed <b>granular role-based access control</b> that is flexible and easy to maintain.</li>
            <li><b>Automated repetitive data workflows</b>, eliminating manual reconciliation and keeping <b>data always consistent and available</b>.</li>
            <li>Built as a flexible platform adaptable to multiple systems as <b>Referral, CFM, deduplication, MEAL, reporting</b>.</li>
            <li><b>Dynamic dashboards</b> engine to quickly generate analytics without manual data preparation.</li>
          </ul>

<!--          Founded and built NexusPortal, a SaaS platform designed to modernise Information Management workflows in the humanitarian sector.-->
<!--          <ul>-->
<!--            <li>Architected a single source of truth approach to keep data consistent across complex multi-step workflows.<li>-->
<!--            <li>Designed granular role-based permission management flexible and easy to maintain.</li>-->
<!--            <li>Automated repetitive workflows, eliminating manual reconciliation and computation and keeping data always ready.</li>-->
<!--            <li>Flexible and easy as it can be used for any system (Referral, CFM, deduplication etc.)</li>-->
            
<!--            <li>Keep a single source of truth of data all along complex workflows.</li>-->
<!--            <li>Allow fine and easily management permissions.</li>-->
<!--            <li>Avoid repetitive manual tasks by automatizing the workflows and keep data sync.</li>-->
<!--          </ul> -->
        `,
      },
      {
        title: 'Information Management Coordinator',
        location: 'Danish Refugee Council (DRC) - Ukraine, Kyiv',
        remote: 'On-site',
        period: '2023 - 2025 (2 years)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'Prot Monito Dashboard', url: 'https://infoportal-ua.drc.ngo/dashboard/protection-monitoring'},
          {label: 'GitHub', url: 'https://github.com/DRC-UA'},
          // {label: 'Kobo SDK', url: 'https://github.com/DRC-UA/kobo-sdk'},
          // {label: 'ActivityInfo SDK', url: 'https://github.com/DRC-UA/activityinfo-sdk'}
        ],
        content: `
          <ul>
            <li>Designed and built <b>InfoPortal</b>, a data platform replacing typical fragile workflows and <b>streamlining</b> IM.</li>          
            <li>Implementing: <b>Referral System, CFM, Protection Monitoring, MEAL Monitoring, deduplication, donor/cluster reporting</b>.</li>          
            <li>Replaced manual, multi-week processes to report on <b>activity-info</b> into a <b>single click</b>.</li>          
<!--            <li>Implemented <b>role-based access control</b> synced with org. permissions.</li>          -->
            <li>
              Led stakeholder engagement and drove adoption across mission.          
              <b>Built and trained</b> IM team to ensure sustainability.
            </li>
          </ul>
        `
      },
      {
        title: 'Information Management Officer',
        location: 'Première Urgence Int. (PUI) - Poland, Przemyśl',
        remote: 'On-site',
        period: '2022 (2 months)',
        content: `
          Kick off of a Information Management System on the border with Ukraine.  
          <ul>
            <li>Built <b>Kobo</b> forms, <b>Excel</b> databases and <b>PowerBi</b> dashboards. Set up <b>FCRM</b> mechanisms.</li>
            <li>Training and technical support of the program teams.</li>
          <ul>
        `
      },
      {
        title: 'Software Engineer',
        location: 'French Ministry of Economics, beta.gouv - Paris',
        remote: 'Remote',
        period: '2020 - 2022 (2 years)',
        content: `
          Developed <b>SignalConso</b>, linking consumer complaints with companies under <b>Consumer Affairs and Fraud Prevention</b>.
        `,
        // links: [
        //   {url: 'https://signal.conso.gouv.fr', label: 'signal.conso.gouv'},
        //   {url: 'https://github.com/SignalConso', label: 'GitHub'},
        // ],
        tags: ['Scala', 'TypeScript', 'Angular', 'React', 'PSQL']
      },
      {
        title: 'Big Data Engineer',
        remote: 'On-site',
        location: 'Mediarithmics - Paris',
        period: '2019 - 2020 (1 year)',
        content: `
          Developed a cloud application to <b>build and monitor pipelines of microservices</b>. The system <b>ingested TBs of data from major French companies</b> to deliver advanced analytics.
        `,
        tags: ['k8s', 'Docker', 'TypeScript', 'React'],
      },
      {
        logo: 'particeep.jpg',
        remote: 'On-site',
        title: 'Software Engineer',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (4 years)',
        content: `
          Contributed and lead the creation of multiple web services.
        `,
        tags: ['Java', 'Scala', 'Angular', 'AngularJs', 'React', 'PHP', 'PSQL'],
      },
      // {
      //   logo: 'activa.png',
      //   remote: 'Remote',
      //   title: 'Software Developer',
      //   location: 'Activa Informatique - Paris',
      //   period: 'Summers 2013, 2014 and 2015',
      //   content: `
      //     Built features (calendar, chat, dashboard, etc.) in a SaaS application.
      //   `,
      //   tags: ['Java', 'PHP', 'JavaScript', 'JQuery',]
      // },
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
//       {
//         title: 'Internship in computer research',
//         remote: 'On-site',
//         location: 'LRI (Computer Research Laboratory) - Orsay',
//         period: '2013 (3 months)',
//         content: `
//           Worked on the <b>Grid Observatory</b> project, handling large stream of data from the <b>LHC</b>.
// <!--          Reconstructed a flow of +200Go/month from 250 sources of inconsistent grid usage traces to make them workable for researchers.-->
//         `,
//         tags: ['Perl', 'Bash', 'MySQL']
//       },
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
          {
            icon: {
              iconFa: 'fab fa-js',
              iconSizeRation: .9,
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
            title: 'C / C++',
            rate: 3,
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
              iconImgSrc: 'dev/perl.png',
              iconFa: 'fa-solid fa-code',
              iconSizeRation: .8,
            },
            title: 'Perl',
            rate: 4,
          },
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
        title: 'Persistence',
        content: [
          {
            icon: {
              iconImgSrc: 'dev/sql.png',
              iconSizeRation: .8,
              iconFa: 'fa-solid fa-database',
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
      `<b>French</b>: Native speaker.`,
      `<b>English</b>: Fluent, professional experience.`,
      `<b>Daily sport</b>: Crossfit, Climbing, Running.</div>`,
      '<b>BAFA</b>: Youth Work Diploma.',
    ]
  }
}
