import {Cv} from '@/app/i18n/Cv'

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
        title: 'MEAL Officer',
        location: 'Première Urgence Internationale - Poland (Ukraine Emergency)',
        period: 'April 2022 - May 2022',
        content: `
          Digitalized forms using Kobo.
Training and technical support of the program teams. 
Created and managed databases and visualisation tools allowing program monitoring and reporting. 
Set up FCRM mechanisms.
Maintained project monitoring tools updated.
        `
      },
      {
        title: 'Software Engineer',
        location: 'beta.gouv, French Ministry of Economics - Paris',
        period: '2020 - 2022 (2 years)',
        content: `
          Developed SignalConso application related to Consumer Affairs and Fraud Prevention.
          Built on a <code>Scala</code> Rest API, <code>Node</code> and <code>React</code> applications.
          Accessible through https://signal.conso.gouv.fr and https://admin.signal.conso.gouv.fr.
        `
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
        `
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
        `
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
      `
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
            Used in large applications including with <code>Redux</code> and <code>TypeScript</code>.
          `
        },
        {
          logo: "dev/angular.png",
          title: "Angular (2+)",
          rate: 5,
          content: `
            Used in large applications including with <code>NgRx</code>
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
            Used both versions to create SaaS applications, REST and <code>GraphQL</code> API
          `
        }
      ]
    },
    {
      title: 'Languages',
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
    label: 'Various',
    articles: [
      'Diploma for youth leaders and workers (BAFA)',
      `<div style="white-space: nowrap">Daily sport: Crossfit, climbing, running</div>`,
      'Driving licence',
    ]
  }
}
