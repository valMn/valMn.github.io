import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Valentin Manaila Dev Portfolio ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi there 👋 I'm`,
  name: ' Valentin',
  subtitle: `a Full Stack Developer.`,
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'vm_profile.jpg',
  paragraphOne: `Bootcamp Graduate with an Architecture background 🧱 coming  into Software Development. ⌨️

  My experience in designing and building architecture has been a huge advantage during my career transition.`,
  list1: [
    `Why❓ Let's 👀 :`,
    '✔️ used to working on and solving complex, non-linear problems',
    '✔️ created DRY sets of blueprints for contractors to build from',
    '✔️ worked within teams to achieve a common goal - the building',
    '✔️ designed bespoke details && implemented off the shelf systems',
    '✔️ comfortable with not knowing all the answers to a problem ⁉️',
    '✔️ focused on the process of problem solving, not the tools',
    '✔️ focused on the process of problem solving, not the tools',
    '✔️ self-taught: tailoring menswear, making lamps, photography...',
  ],
  paragraphTwo: `I'm a maker and a problem solver at heart. I thrive in dynamic environments and teams working together to solve a problem.`,
  paragraphThree: `Get in touch, who knows what we will build together  <🔨>
  `,
  resume:
    'https://docs.google.com/document/d/1v8lXfUlibDGXBCNAAhtC-aUo6o2AuTrSi74amTA4HXo/export?format=pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'planinsight.png',
    title: 'planinSIGHT.co.uk',
    info1: 'React (with hooks) | Firebase Auth | Firestore Db',
    info2: [
      'This app was my final project for the Full Stack Web Development Bootcamp.',
      'I created an app that I wish I had working as an Architect. ',
      'planinSIGHT helps construction professionals understand how long a planning application will actually take to be determined.',
    ],
    tags: ['REACT', 'FIREBASE', 'CHARTJS', 'DAYJS'],
    url: 'https://www.planinsight.co.uk/',
    repo: 'https://github.com/studioVMdev/decide-it-client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'brainflix.png',
    title: 'Video Streaming Site',
    info1: 'React frontend + Express backend | CRUD',
    info2: [
      'This full stack application is designed using:',
      'React hooks, front-end routing using React Router v5.3',
      'Express server using MVC architecture',
      'Fully hosted front and backend',
      'Performs CRUD operations on videos, comments, likes',
    ],
    tags: ['REACT', 'JS', 'NODE', 'EXPRESS', 'MVC'],
    url: 'https://vm-brainflix.netlify.app/',
    repo: 'https://github.com/studioVMdev/valentin-manaila-brainflix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bansite.png',
    title: 'Band Site',
    info1: 'A fully responsive vanilla JS website | CRUD',
    info2: [
      'The site is designed with a mobile first approach in mind and uses BEM naming conventions and SASS',
      'GET - Comments are fetched from the db using axios',
      'POST/ PATCH - New comments are validated in the front-end first +  Like increment counter is implemented',
      'DELETE - Comments removed from db and UI based on response status',
    ],
    tags: ['JS', 'HTML', 'SASS', 'BEM', 'FLEXBOX', 'AXIOS'],
    url: 'https://priceless-lovelace-b57462.netlify.app/',
    repo: 'https://github.com/studioVMdev/valentin-manaila-bandsite', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trivia.png',
    title: 'Two Player Trivia',
    info1: 'Hackathon Project using vanilla JS and trivia API',
    info2: [
      'The project is written using OOP paradigm:',
      '- Game class that holds the game state and calls the Rounds,',
      '- Round class that calls two instances of the Card class,',
      "- Card class that creates the cards, randomizes the answers and manages it's own validation,",
      '- UI class that manages the various menus.',
    ],
    tags: ['JS', 'HTML', 'SASS', 'FLEXBOX', 'AXIOS'],
    url: 'https://naughty-raman-b6ca06.netlify.app/',
    repo: 'https://github.com/studioVMdev/bstn-hackathon-trivia', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'valentin.manaila@gmail.com?subject=Portfolio Website Query&body=Hi Valentin,',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/valentin-manaila',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/studiovmdev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
