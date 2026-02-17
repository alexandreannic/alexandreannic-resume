import {Cv} from '@/i18n/Cv'

export const cvFr: Cv = {
  job: 'Ingénieur logiciel',
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
    Ingénieur logiciel senior avec <b>plus de 10 ans d’expérience</b>, spécialisé en <b>TypeScript et React</b> et à l’aise avec de nombreux langages et frameworks.
    Expérience en <b>lead technique</b> et <b>management d’équipe</b>, avec une forte attention portée aux interfaces élégantes et intuitives ainsi qu’aux systèmes distribués scalables.
  `,
  education: {
    label: 'Formation',
    articles: [
      {
        shortTitle: 'Master',
        shortContent: `Science et Technologie du Logiciel`,
        shortLocation: 'UPMC, Shanghai #40 mondial',
        title: `Master Science et Informatique`,
        honor: 'Mention Bien',
        period: '2016',
        location: 'UPMC (Université Pierre et Marie Curie) - Paris',
        logo: 'upmc.png',
        content: `
        Algorithmique (compression, hash, géométrie 2D) –
        Programmation distribuée et multithread
        (<code>Scala</code>, <code>OCaml</code>, <code>Java</code>, <code>C</code>) –
        Applications web (sécurité, tracking)
      `
      },
      {
        title: 'DUT Informatique',
        shortTitle: 'DUT',
        shortContent: 'Informatique',
        period: '2013',
        location: 'IUT d’Orsay, Shanghai #13 mondial',
        logo: 'logo.jpg',
        content: `
        Architecture Unix, bash, scripting –
        POO <code>Java</code>, <code>C++</code> –
        <code>SQL</code> –
        Programmation système en <code>C</code> (pipe, signal, fork, thread) –
        Réseaux (DHCP, DNS, Firewall) –
        Architecture des ordinateurs
      `,
      },
    ]
  },
  work: {
    label: 'Expériences professionnelles',
    articles: [
      {
        title: 'Fondateur de NexusPortal',
        period: '2025 - 2026 (1 an)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'NexusPortal', url: 'https://www.nexusportal.app/'},
        ],
        content: `
          Création de NexusPortal, une plateforme SaaS <b>modernisant les workflows de gestion de l’information</b> dans le secteur humanitaire, basée sur l’expérience acquise chez DRC Ukraine.
        `
      },
      {
        title: 'Information Management Coordinator',
        location: 'Danish Refugee Council (DRC) - Ukraine, Kyiv',
        remote: 'Présentiel',
        period: '2023 - 2025 (2 ans)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'Demo dashboard', url: 'https://infoportal-ua.drc.ngo/dashboard/protection-monitoring'},
          {label: 'github.com/DRC-UA', url: 'https://github.com/DRC-UA'},
        ],
        content: `
          <b>Contexte</b> : DRC est l’une des plus grandes ONG internationales, l’Ukraine sa plus importante mission.
          La gestion des données, très manuelle, ne passait pas à l’échelle.
          <ul>
          <li>Création de <b>InfoPortal</b>, plateforme harmonisant les sources de données pour permettre <b>analyse, sécurité et reporting automatisé</b>.</li>
          <li>Automatisation de processus nécessitant des semaines de travail en <b>un clic</b>.</li>
          <li><b>Pilotage du déploiement</b> pour garantir l’adoption de la solution.</li> 
          <li><b>Création et formation d’une équipe</b> pour assurer la soutenabilité</b>.</li>
          </ul>
        `
      },
      {
        title: 'Software Engineer',
        location: 'Ministère de l’Économie (beta.gouv) - Paris',
        remote: 'Télétravail',
        period: '2020 - 2022 (2 ans)',
        content: `
          <ul>
         <li>Développement de <b>SignalConso</b>, reliant les réclamations consommateurs aux entreprises sous l’égide de la <b>DGCCRF</b>.</li>
         <li><b>100k signalements mensuels</b>, impliquant les <b>principales entreprises françaises</b>, avec <b>93% de satisfaction</b>.</li>
         <li>Développement de l’API <code>Scala</code> et <b>lead technique & UX/UI</b> du front.</li>
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
        remote: 'Présentiel',
        location: 'Mediarithmics - Paris',
        period: '2019 - 2020 (1 an)',
        content: `
         Développement d’une application cloud Node/TypeScript pour gérer des pipelines de <b>microservices</b> déployés sur <b>Kubernetes</b>, piloté via une interface <b>React</b>.
         Le système <b>ingérait des TBs de données de grandes entreprises françaises</b> (Fnac-Darty, TF1, etc.) pour produire des analyses avancées.
        `,
        tags: ['k8s', 'Docker', 'TypeScript', 'React'],
      },
      {
        title: 'Software Engineer',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (4 ans)',
        remote: 'On-Site',
        content: `
<ul>
          <li>Évolution d’API <b>REST et <code>GraphQL</code> en <code>Scala</code></b>.</li>
          <li>Création de plusieurs applications <code>React</code> et <code>Angular</code>.</li>
          <li>Développement de SDK API <code>JavaScript</code>, <code>PHP</code> et <code>Scala</code>.</li>
          <li>Tests fonctionnels et e2e (<code>Selenium</code>, <code>Mocha</code>, <code>Protractor</code>).</li>
          <li>Mise en place de CI avec <code>Jenkins</code>.</li>
</ul>
        `,
        tags: ['Java', 'Scala', 'Angular', 'React', 'PHP', 'PSQL'],
      },
      {
        title: 'Software Developer',
        remote: 'Remote',
        location: 'Activa Informatique - Paris',
        period: 'Été 2013, 2014, 2015',
        content: `
          Développement de fonctionnalités SaaS en Java, PHP, jQuery et MySQL.
        `,
        tags: ['Java', 'PHP', 'JavaScript', 'JQuery']
      },
      // {
      //   title: 'Stage en recherche informatique',
      //   remote: 'Présentiel',
      //   location: 'LRI - Orsay',
      //   period: '2013 (3 mois)',
      //   content: `
      //     Travail sur le projet <b>Grid Observatory</b>, traitement de flux massifs issus du <b>LHC</b>.
      //   `,
      //   tags: ['Perl', 'Bash', 'MySQL']
      // },
    ]
  },
  projects: {
    label: 'Projets personnels',
    articles: [
      {title: 'MX - MUI Extension', content: ''},
      {title: 'Form Editor', content: ''},
      {title: 'DRC Periodic Review', content: ''},
      {title: 'Redux DataTable', content: ''},
      {
        title: 'TypeScript Utils',
        content: 'Bibliothèque utilitaire <code>TypeScript</code> légère facilitant les tâches courantes avec un fort accent sur la lisibilité et la maintenabilité.',
      },
      {
        title: 'React Hooks Lib',
        content: 'Suite complète de hooks <code>React</code> avec API cohérentes et inférence <code>TypeScript</code> robuste.',
      },
      {
        title: 'KoboToolbox SDK',
        content: 'SDK <code>TypeScript</code> facilitant l’intégration avec l’API KoboToolbox.',
      },
      {
        title: 'ActivityInfo SDK',
        content: 'SDK <code>TypeScript</code> pour l’API ActivityInfo avec générateur d’interfaces.',
      },
    ]
  },
  skills: {
    label: 'Compétences',
    articles: [
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
    ],
  },
  various: {
    label: 'Divers',
    articles: [
      `<b>Français</b> : langue maternelle.`,
      `<b>Anglais</b> : courant (expérience pro.).`,
      `<b>Sport</b> : CrossFit, escalade, running.`,
      `<b>BAFA</b>`,
      `<b>Permis B</b>`,
    ]
  }
}
