import {Cv} from '@/i18n/Cv'

export const cvFr: Cv = {
  job: 'Ingénieur logiciel',
  location: 'Bogotá, Colombie (nat. française)',
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
      url: ' ',
      icon: {iconFa: 'fab fa-linkedin'},
      label: 'linkedin.com/in/alexandreannic',
    }
  ],
  summary: `
      Ingénieur logiciel passionné avec <b>plus de 10 ans d'expérience</b>.
      Durant mes études, je me suis spécialisé en <b>algorithmes, systèmes distribués et protocoles réseau</b>. Compétent dans la création d'<b>interfaces intuitives</b>, j’ai une solide compréhension des principes de <b>sécurité</b> et j’apprécie relever les défis de <b>scalabilité</b>.
    <b>Résidant en Colombie</b>, où ma compagne travaille dans l’humanitaire. Je recherche un poste en <b>télétravail</b>.
    Je suis autonome, toujours motivée à progresser.
  `,
  education: {
    label: 'Formation',
    articles: [
      {
        shortTitle: 'Master',
        shortContent: 'Science et technologie du logiciel',
        shortLocation: 'UPMC - Paris',
        title: `Master en science et technologie du logiciel`,
        honor: 'Avec mention bien',
        period: '2016',
        location: 'UPMC (Université Pierre et Marie Curie) - Paris',
        logo: 'upmc.png',
        content: `
          Algorithmique (compression, hash, géométrie 2D) -
          Programmation multithreadée et distribuée
          (<code>Scala</code>, <code>OCaml</code>, <code>Java</code>, <code>C</code>) -
          Applications web (sécurité, traçabilité)
        `
      },
      {
        title: 'Licence en informatique',
        shortTitle: 'Licence',
        shortContent: 'Informatique',
        honor: 'Avec mention bien',
        period: '2014',
        shortLocation: 'UPMC - Paris',
        location: 'UPMC (Université Pierre et Marie Curie) - Paris',
        content: `
          Algorithmique (complexité, structures de données, récursivité) -
          POO - Design patterns -
          Bases de données (transactions, <code>SQL3</code>, <code>PL/SQL</code>, <code>NoSQL</code>, <code>XPath</code>)
        `,
      },
      {
        title: 'DUT Informatique',
        shortTitle: 'DUT (Bac+2)',
        shortContent: 'Informatique',
        period: '2013',
        location: 'IUT d\'Orsay',
        logo: 'logo.jpg',
        content: `
          Architecture Unix, bash, scripting -
          POO en <code>Java</code>, <code>C++</code> -
          <code>SQL</code> -
          Programmation système en <code>C</code> (pipe, signal, fork, thread) -
          Réseaux (DHCP, DNS, firewall) -
          Architecture des ordinateurs
        `,
      },
    ]
  },
  work: {
    label: 'Expériences professionnelles',
    articles: [
      {
        title: 'Information Management Coordinator',
        location: 'Danish Refugee Council (DRC) - Ukraine',
        period: '2023 - 2025 (2 ans)',
        tags: ['TypeScript', 'React', 'NodeJS', 'Github Actions', 'PSQL'],
        links: [
          {label: 'Démo dashboard', url: 'https://infoportal-ua.drc.ngo/dashboard/protection-monitoring'},
          {label: 'GitHub', url: 'https://github.com/DRC-UA'},
        ],
        content: `
          DRC, l’une des plus grandes ONG internationales, et l’Ukraine sa plus importante mission. La gestion traditionnelle des données ne pouvait pas passer à l’échelle.<br/>
          <ul>
          <li>Développement <b>InfoPortal</b>, une plateforme qui harmonise les sources de données externes permettant une manipulation fluide, leur analyse, leur protection et le reporting automatique aux clusters.<br/></li> 
          <li>Transformation des processus prenant des semaines aux équipes en un simple <b>clic</b>.</li>
          <li>Implication le siège et les principaux acteurs</b> pour pousser l’adoption dans les autres missions. <b>Construit et formé une équipe</b> pour assurer la pérennité.</li>
          </ul>
        `
      },
      {
        title: 'Ingénieur logiciel',
        location: 'Ministère de l’Économie, beta.gouv - Paris',
        period: '2020 - 2022 (2 ans)',
        content: `
          <ul>
          <li>Développement de l’application <b>SignalConso</b>, qui met en relation les signalements des consommateurs avec les entreprises, sous la supervision de la <b>Répression des fraudes</b>.</li>
          <li>Traitement de <b>10 000 signalements mensuels</b>, incluant <b>toutes les grandes entreprises françaises</b>, avec un <b>taux de satisfaction de 93%</b>.</li>
          <li>Développement de l’API <code>Scala</code>, <b>lead technique et UI/UX</b> de l’application front.</li>
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
        location: 'Mediarithmics - Paris',
        period: '2019 - 2020 (1 an)',
        content: `
          <ul>
         <li>Développement d’une application cloud en Node/TypeScript pour <b>créer et monitorer des pipelines de microservices</b> liés par des <b>queues</b> et piloté par une interface React.</li>
         <li>Le système <b>ingérait de grands volumes de données d’entreprises françaises</b> pour fournir des analyses avancées.</li>
         <li>Les microservices étaient créés en TypeScript et déployés via <b>K8s</b>.</li>
          </ul>
        `,
        tags: ['k8s', 'Docker', 'TypeScript', 'React'],
      },
      {
        logo: 'particeep.jpg',
        title: 'Ingénieur logiciel',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (4 ans)',
        content: `
          <ul>
          <li>Contribution à l’évolution de l’<b>API REST et <code>GraphQL</code> en <code>Scala</code> avec <coe>PostgreSQL</coe></b>.<br/></li>
          <li><b>Responsable de la création de plusieurs</b> applications en <code>React</code> et <cod>Angular</cod>.<br/></li>
          <li>Développement du SDK API pour <code>JavaScript</code>, <code>PHP</code> et <code>Scala</code>.<br/></li>
          <li>Tests fonctionnels et e2e (<code>Seleniu</code>, <code>Mocha</code>, <code>Protractor</code>) et <b>CI</b> avec <code>Jenkins</code>.</li>
          </ul>
        `,
        tags: ['Java', 'Scala', 'Angular', 'AngularJs', 'React', 'PHP', 'PSQL'],
      },
      {
        logo: 'activa.png',
        title: 'Développeur logiciel',
        location: 'Activa Informatique - Paris',
        period: 'Été 2013, 2014 et 2015',
        content: `
          Développé des fonctionnalités SaaS (calendrier, chat, tableau de bord) avec Java, PHP, jQuery et MySQL.
        `,
        tags: ['Java', 'PHP', 'JavaScript', 'JQuery']
      },
      {
        title: 'Stage en recherche informatique',
        location: 'LRI (Laboratoire de Recherche en Informatique) - Orsay',
        period: '2013 (3 mois)',
        content: `
          Contribution au projet <b>Grid Observatory</b>, traitant un large flux de données issu du <b>LHC</b>.
        `,
        tags: ['Perl', 'Bash', 'MySQL']
      },
    ]
  },
  projects: {
    label: 'Projets personnels',
    articles: [
      {
        title: 'MX - Extension MUI',
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
        title: 'DRC Periodic Review',
        content: '',
        imgName: 'periodic-review.png',
        links: [
          {url: 'https://github.com/alexandreannic/periodic-review-survey'},
          {label: 'Démo', url: 'https://drc...'},
        ],
      },
    ]
  },
  skills: {
    label: 'Compétences',
    articles: [
      {
        title: 'Frameworks',
        content: [
          {
            icon: {
              iconImgSrc: 'dev/react.png',
              iconFa: 'fab fa-react',
            },
            title: 'React',
            rate: 5,
            content: `
            Utilisé dans des applications complexes, notamment avec <code>Redux</code> et <code>TypeScript</code>.
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
            Utilisé dans des applications complexes, notamment avec <code>NgRx</code>.
          `,
          },
          {
            icon: {
              iconImgSrc: 'dev/play.png',
              iconFa: 'fa-solid fa-chevron-right',
            },
            title: 'Play (Java / Scala)',
            rate: 4,
            content: `
            Utilisé avec <code>Scala</code> et <code>Java</code> pour construire des APIs REST et <code>GraphQL</code>.
          `
          }
        ]
      },
      {
        title: 'Langages',
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
        title: 'Persistance',
        content: [
          {
            icon: {
              iconImgSrc: 'dev/sql.png',
              iconFa: 'fa-solid fa-database',
            },
            title: 'SQL',
            rate: 5,
          },
          {
            icon: {
              iconImgSrc: 'dev/nosql.png',
              iconText: '{}',
              iconSizeRation: .8,
            },
            title: 'NoSQL',
            rate: 3,
          },
        ]
      }
    ]
  },
  various: {
    label: 'Divers',
    articles: [
      `<b>Français</b>: Langue maternelle.`,
      `<b>Anglais</b>: Courant, expérience pro.`,
      `<b>Sport</b>: CrossFit, escalade, running.</div>`,
      '<b>BAFA</b>.',
      '<b>Permis de conduire</b>.',
    ]
  }
}
