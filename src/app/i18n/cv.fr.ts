export const cvFr = {
  job: 'Ingénieur Full-stack',
  location: 'Paris, France',
  education: {
    label: 'Éducation',
    articles: [
      {
        title: 'Master Science et Technologie du Logiciel',
        honor: 'Mention Bien',
        period: '2016',
        location: 'UPMC (Université Pierre et Marie Curie) - Paris',
        logo: 'upmc.png',
        content: `
        Algorithmie (compression, hachage, géometrie 2D) -
        Programmation concurrente et distribuée
        (<code>Scala</code>, <code>OCaml</code>, <code>Java</code>, <code>C</code>) -
        Web (securité, traquage)
      `
      },
      {

        title: 'Licence Informatique',
        honor: 'Mention Bien',
        period: '2014',
        location: 'UPMC (Université Pierre et Marie Curie) - Paris',
        content: `
        Algorithmie (complexité, structure de données, recursion) -
        OOP - Designs patterns -
        Base de données (transactions, <code>SQL3</code>, <code>PL/SQL</code>, <code>NoSQL</code>, <code>XPath</code>)`,
      },
      {
        title: 'DUT Informatique',
        period: '2013',
        location: 'IUT d\'Orsay',
        logo: 'logo.jpg',
        content: `
        Architecture Unix, bash, script -
        POO <code>Java</code>, <code>C++</code> -
        <code>SQL</code> -
        Programmation système en <code>C</code> (pipe, signal, fork, thread) -
        Réseau (DHCP, DNS, Firewall) -
        Logique
      `,
      },
    ]
  },
  work: {
    label: 'Expériences',
    articles: [
      {
        title: 'Ingénieur Big Data',
        location: 'Mediarithmics - Paris',
        period: '2019 - 2020 (1 an)',
        content: `
          Développement d'applications <code>Node</code>/<code>TypeScript</code> streamant des Go de données quotidiennes.
          Permet, via une UI <code>React</code>, de générer et monitorer des "pipelines" de <code>microservices</code> dans <code>Microsoft Azure</code>, liés par des queues,
          orchestrés avec <code>k8s (Docker)</code>.<br/>
          Développement de librairies <code>TypeScript</code>, converture de tests <code>Mocha</code> proche de 100%.
        `
      },
      {
        logo: 'particeep.jpg',
        title: 'Ingénieur logiciel',
        location: 'Particeep - Paris',
        period: '2016 - 2019 (3 ans)',
        content: `
          Direction de l'équipe front et création d'applications en <code>React</code>/<code>Angular</code>.<br/>
          Contribution à l'évolution d'API REST et <code>GraphQL</code> en <code>Scala</code> avec <code>PostgresSQL</code>.<br/>
          Développement de l'API SDK pour <code>JavaScript</code>, <code>PHP</code> et <code>Scala</code>.<br/>
          Développement de tests fonctionnels et e2e avec <code>Selenium</code>, <code>Mocha</code> et <code>Protractor</code>.<br/>
          Mise en place de CI avec <code>Jenkins</code>.<br/>
      `
      },
      {
        logo: 'particeep.jpg',
        title: 'Stage développeur logiciel',
        location: 'Particeep - Paris',
        period: '2016  (6 mois)',
        content: `
          Développement d'une application SaaS avec <code>Java</code>, <code>JPA</code>, <code>AngularJS</code> et <code>PostgresSQL</code>.<br/>
          Refactoring complet afin d'améliorer les performances et la réutilisabilité du code.<br/>
          Développement de fonctionnalités telles que: personnalisation de l'apparence, édition de mails et paiement en ligne.
          Développement de tests <code>JUnit</code> et <code>Selenium</code>.
        `
      },
      {
        logo: 'upmc.png',
        title: 'Ingénieur logiciel',
        location: 'Event Catalyst',
        period: '2016 (6 mois)',
        content: `
          Développement d'un système d'organisation de conférences, comprenant une API <code>ASP.NET</code>,
          une Web application <code>ASP.NET</code> et une application <code>Android</code>.<br/>
          Fonctionnalités: QR-code check-in, formulaire éditable, gestion des visiteurs.
       `
      },
      {
        logo: 'activa.png',
        title: 'Développeur logiciel',
        location: 'Activa Informatique - Paris',
        period: 'Étés 2013, 2014 and 2015',
        content: `
          Développement de fonctionnalités sur une application SaaS avec <code>Java</code>, <code>JPA</code>, <code>JQuery</code> et <code>MySQL</code>
          telles que: calendrier de rendez-vous, discussion instantanée, statistiques.<br/>
          Création de sites web en <code>PHP</code> pour des PME et des associations.
        `
      },
      // {
      //   logo: 'upmc.png',
      //   title: 'Projet de Master 1',
      //   location: 'UPMC (Université Pierre et Marie Curie) - Paris',
      //   period: '6 mois - 2015',
      //   content: `
      //     Développement d'un registre auto-adaptatif inspiré du principe des DHT pour une application distribuée.
      //     Technologies: Future, Socket, Thread et RMI.
      //   `
      // },
      {
        title: 'Stage de recherche informatique',
        location: 'LRI (Laboratoire de Recherche Informatique) - Orsay',
        period: '2013 (3 mois)',
        content: `
          Conception d’un système de reconstruction de données (+200Go de données par mois) en <code>Perl</code> et <code>MySQL</code> provenant de plus de
          250 machines associées à la grille EGI.
        `
      },
    ]
  },
  skills: [
    {
      title: 'Framework',
      content: [
        {
          logo: "dev/react.png",
          title: "React",
          rate: 5,
          content: `
            Utilisé dans des larges applications y compris avec <code>Redux</code> et <code>TypeScript</code>
          `
        },
        {
          logo: "dev/angular.png",
          title: "Angular (2+)",
          rate: 5,
          content: `
            Utilisé dans de larges applications y compris avec <code>NgRx</code>
          `,
        },
        {
          logo: "dev/angularjs.png",
          title: "AngularJS",
          rate: 4,
          content: `

          `
        },
        {
          logo: "dev/play.png",
          title: "Play framework",
          rate: 4,
          content: `
            Utilisation des 2 versions pour des applications SaaS et des API REST et <code>GraphQL</code>
          `
        }
      ]
    },
    {
      title: 'Langages',
      content: [
        {
          logo: "dev/ts.png",
          title: "TypeScript",
          rate: 5,
        },
        {
          logo: "dev/javascript.png",
          title: "JavaScript",
          rate: 5,
        },
        {
          logo: "dev/scala.png",
          title: "Scala",
          rate: 3,
        },
        {
          logo: "dev/java.png",
          title: "Java",
          rate: 4,
        },
        {
          logo: "dev/csharp.png",
          title: "C#",
          rate: 2.5,
        },
        {
          logo: "dev/php.png",
          title: "PHP",
          rate: 4,
        },
        {
          logo: "dev/c++.png",
          title: "C/C++",
          rate: 3,
        },
        {
          logo: "dev/perl.png",
          title: "Perl",
          rate: 3.5,
        }
      ]
    },
    {
      title: 'Persistence',
      content: [
        {
          logo: 'dev/sql.png',
          title: 'SQL',
          rate: 4.5,
          // content: `
          //   Mainly <code>PostGres</code> anad <code>MySQL</code>. Script <code>PL/SQL</code>
          // `
        },
        {
          logo: 'dev/nosql.png',
          title: 'NoSQL',
          rate: 3,
          // content: `Used document-oriented databases mainly during studies projects`
        },
      ]
    }
  ],
  various: {
    label: 'Divers',
    articles: [
      'BAFA',
      `<div style="white-space: nowrap">Sport quotidien: Crossfit, escalade</div>`,
      'Permis B',
    ]
  }
}
