import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Valentin Manaila Dev Portfolio ', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `👋 Hi, I'm`,
  name: 'Valentin Manaila',
  subtitle: `and I'm a React Developer.`,
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'vm_profile.jpg',
  paragraphOne: 'fakfdfdfsd',
  paragraphTwo: 'sdasdasdas',
  paragraphThree: 'sdasdas',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
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
      url: 'https://www.linkedin.com/in/valentin-manaila-152ab768/',
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
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
