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
    Expérience en <b>lead technique</b> et <b>management d’équipe</b>, avec une forte attention portée à l'UI/UX ainsi qu’aux systèmes distribués scalables.
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
        title: 'Fondateur',
        location: 'NexusPortal',
        period: '2025 - 2026 (1 an)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'NexusPortal', url: 'https://www.nexusportal.app/'},
        ],
        content: `
          Création d'une plateforme <code>Node</code>-<code>TypeScript</code> de gestion des données (collecte › transformation › protection › visualisation › analyze).
          <ul>
          <li>Éditeur de <b>dashboards</b> dynamiques • Système d'accès avancé • Éditeur XLSForm</li>
          <li>Collaboration temps réel via <b>WebSockets</b> (type Google Sheets)</li>
          <li><b>Moteur de transformations</b> en <code>TypeScript</code> assemblables en pipelines</li>
          </ul>
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
Création d’une plateforme <code>Node</code>-<code>TypeScript</code>-<code>Next.js</code> pour l’une des plus <b>grandes missions humanitaires</b> au monde.
<ul>
<li>Centralisation et normalisation de volumes importants de données issues de multiples web services (APIs, scraping, création de SDKs)</li>
<li>Adoptée par toutes les équipes, avec gestion fine des accès (données sensibles)</li>
<li><b>Dashboards</b> consolidés et partage inter-ONG</li>
<li>Incluant <b>CRM</b> pour les feedback bénéficiaires et <b>Case Management System</b></li>
<li>Automatisation de processus critiques (semaines → <b>un clic</b>)</li>
<li><b>Recrutement et formation d’une équipe</b> de 4 (devs + IM)</li>
</ul>
        `
      },
      {
        title: 'Ingénieur logiciel',
        location: 'Ministère de l’Économie (beta.gouv) - Paris',
        remote: 'Télétravail',
        period: '2020 - 2022 (2 ans)',
        content: `
          <ul>
          <li>Développement de <b>SignalConso</b>, une platforme reliant les réclamations <b>consommateurs</b> aux <b>entreprises</b> monitoré par la <b>DGCCRF</b></li>
          <li><b>100k signalements mensuels</b>, impliquant les <b>principales entreprises françaises</b>, avec <b>93% de satisfaction</b></li>
          <li>Développement de l’API <code>Scala</code> et <b>lead la refonte <code>Angular</code> → <code>Next.js</code>
          </ul>
        `,
        links: [
          {url: 'https://signal.conso.gouv.fr', label: 'signal.conso.gouv'},
          {url: 'https://github.com/SignalConso', label: 'GitHub'},
        ],
        tags: ['Scala', 'TypeScript', 'Angular', 'React', 'PSQL']
      },
      {
        title: 'Ingénieur Big Data',
        remote: 'Présentiel',
        location: 'Mediarithmics - Paris',
        period: '2019 - 2020 (1 an)',
        content: `
          <ul>
          <li>Création d’une librairie <code>TypeScript</code> standardisant les imports massifs de données (streams, parsing, retry, error handling, logging).</li>          
          <li>
             Lead (équipe de 3) la création d’une application cloud <code>Node</code>-<code>TypeScript</code>-<code>PSQL</code> pour gérer des pipelines de <b>microservices</b> automatiquement déployés sur <code>Kubernetes</code>, piloté et monitoré via une interface <b>React</b>.
             Le système <b>ingérait des TBs de données de grandes groupes françaises</b> (Fnac-Darty, TF1, etc.) pour l'analytique.
          </li>
          </ul>
        `,
        tags: ['k8s', 'Docker', 'TypeScript', 'React'],
      },
      {
        title: 'Ingénieur logiciel',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (4 ans)',
        remote: 'Présentiel',
        content: `
        <ul>
  <li>
    Développement d’une <b>API microservices de gestion de produits financiers</b> 
    (<code>REST</code>/<code>GraphQL</code>-<code>Java</code>-<code>Scala</code>)
  </li>
  <li>
    <b>Lead technique</b> des apps MEDEF Incubateur + Tunnel de souscription 
    <code>Scala</code>-<code>React</code>
  </li>
  <li>
    Développement d’une plateforme de <b>financement participatif</b> 
    <code>Angular</code>-<code>Scala</code>
  </li>
  <li>
    Création de <b>libraries UI</b>, scripts de migration <code>Python</code> et de <b>SDKs</b> 
    en <code>JS</code>-<code>PHP</code>-<code>Scala</code>
  </li>
  <li>
    Mise en place de la <b>CI</b> <code>Jenkins</code> et des tests auto 
    <code>Selenium</code>-<code>Mocha</code>-<code>Protractor</code>
  </li>
</ul>
        `,
        tags: ['Java', 'Scala', 'Angular', 'React', 'PHP', 'PSQL'],
      },
      // {
      //   title: 'Développeur',
      //   remote: 'Télétravail',
      //   location: 'Activa Informatique - Paris',
      //   period: 'Été 2013, 2014, 2015',
      //   content: `
      //     Développement de fonctionnalités SaaS en <code>Java</code>, <code>PHP</code>, <code>jQuery</code> et <code>MySQL</code>.
      //   `,
      //   tags: ['Java', 'PHP', 'JavaScript', 'JQuery']
      // },
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
    label: 'Projets Perso',
    articles: [
      {
        title: 'MX - MUI Extension',
        content: '',
        imgName: 'mx.png',
        links: [
          {url: 'https://github.com/alexandreannic/mui-extension'},
          {label: 'Démo', url: 'https://mui-extension.firebaseapp.com/'},
        ],
      },
      {
        title: 'Form Editor',
        content: '',
        imgName: 'form-editor.png',
        links: [
          {url: 'https://github.com/alexandreannic/form-editor'},
          {label: 'Démo', url: 'https://angular-form-editor.firebaseapp.com/'},
        ],
      },
      {
        title: 'Revue Périodique DRC',
        content: '',
        imgName: 'periodic-review.png',
        links: [
          {url: 'https://github.com/alexandreannic/periodic-review-survey'},
          {label: 'Démo', url: 'https://drc-periodic-review.web.app/'},
        ],
      },
      {
        title: 'Redux DataTable',
        content: '',
        imgName: 'redux-dt.png',
        links: [
          {url: 'https://github.com/alexandreannic/redux-datatable'},
          {label: 'Démo', url: 'https://redux-datatable.web.app/'},
        ],
      },
      {
        title: 'TypeScript Utils',
        content:
          'Bibliothèque utilitaire <code>TypeScript</code> légère offrant une collection de fonctions essentielles pour simplifier les tâches de programmation courantes. ' +
          'Conçue pour la sécurité des types, l’efficacité, la lisibilité et la maintenabilité.',
        links: [{url: 'https://github.com/alexandreannic/ts-utils'}],
      },
      {
        title: 'React Hooks Lib',
        content:
          'Suite complète de hooks personnalisés <code>React</code> avec des API claires et cohérentes et une inférence <code>TypeScript</code> robuste.',
        links: [{url: 'https://github.com/alexandreannic/react-hooks-lib'}],
      },
      {
        title: 'KoboToolbox SDK',
        content:
          'SDK <code>TypeScript</code> pour interagir avec l’API KoboToolbox, en masquant sa complexité et en contournant ses bugs.',
        links: [{url: 'https://github.com/DRC-UA/kobo-sdk'}],
      },
      {
        title: 'ActivityInfo SDK',
        content:
          'SDK <code>TypeScript</code> pour interagir avec l’API ActivityInfo. Inclut un générateur d’interface <code>TypeScript</code> qui simplifie les corps de requête incompréhensibles et permet d’envoyer des données dans un format lisible.',
        links: [{url: 'https://github.com/DRC-UA/activityinfo-sdk'}],
      },
    ],
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
              iconSizeRation: .85,
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
            rate: 3.5,
            // content: `Used document-oriented databases mainly during studies project`
          },
        ]
      }
    ],
  },
  various: {
    label: 'Divers',
    articles: [
      `<b>Français</b>: langue maternelle`,
      `<b>Anglais</b>: courant (expérience pro.)`,
      `BAFA, Crossfit, Échecs, alpinisme, Permis B`,
    ]
  }
}
