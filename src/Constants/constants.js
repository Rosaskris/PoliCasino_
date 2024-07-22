/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
  ladys2,
  bachata,
  casinoalparque
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Bienvenidos a nuestra Academia de Baile, un lugar donde la pasión por la danza cobra vida. Nos especializamos en enseñar salsa casino, salsa caleña, bachata, porro y otros vibrantes ritmos latinos, comenzando desde cero.",

    "En nuestra academia, creemos que el baile es más que movimiento; es una forma de expresión que conecta cuerpo y alma. Nuestro eslogan, 'al ritmo del alma', refleja nuestra misión de hacer que cada clase sea una experiencia transformadora, llena de energía, alegría y crecimiento personal.",

    "Únete a nosotros y descubre el placer de bailar!"
  ]
};

export const navLinks = [
  {
    id: 'nosotros',
    title: 'Nosotros',
  },
  {
    id: 'eventos',
    title: 'Eventos',
  },
  {
    id: 'clases',
    title: 'Clases',
  },
  {
    id: 'contact',
    title: 'Contactanos',
  },
];

const projects = [
  {
    name: "Inauguración la Hojarasca",
    // description: 'El pasado 12 de julio de 2024, nuestra academia de baile tuvo el honor de participar en la re-inauguración de la Hostería La Hojarasca en San Jerónimo. Fue una noche mágica en la que nuestros talentosos bailarines deslumbraron al público con cuatro espectaculares presentaciones.',
    image:memoryGame,
    image2:ladys2,
    image3:bachata,
  },
  {
    name: 'Clausura 2023',
    // description: 'El 13 de diciembre de 2023, el Teatro Clown fue el escenario de nuestra 4ta Clausura Anual. Durante este evento, disfrutamos de una maravillosa variedad de presentaciones que destacaron el talento y la dedicación de nuestros alumnos de todos los niveles. Fue una noche llena de energía, ritmo y alegría, donde cada actuación reflejó el esfuerzo y el amor por la danza que compartimos en nuestra academia. Agradecemos a todos los que formaron parte de esta celebración inolvidable.',
    image: pawsitivePrototype,
    
  },
  {
    name: 'Casino al parque 2023',
    // description: "En 2023, nuestra academia tuvo el honor de participar en 'Casino al Parque' en Medellín, un evento vibrante que celebra la cultura y la música latina. Agradecemos a todos los asistentes que disfrutaron con nosotros y a los organizadores por crear un espacio tan especial para compartir el amor por el baile. ¡Fue una experiencia inolvidable!",
    image: casinoalparque,
    
  },
  {
    name: 'Clausura 2022',
    // description: 'El 15 de diciembre de 2022, el Teatro Porfirio Barba Jacob fue el escenario de nuestra 3ra Clausura Anual. En esta mágica noche, disfrutamos de una diversidad de presentaciones que mostraron el talento y la dedicación de nuestros alumnos de todos los niveles. Cada actuación reflejó el arduo trabajo y la pasión por la danza que cultivamos en nuestra academia. Agradecemos a todos los que hicieron posible esta celebración tan especial, llena de ritmo y alegría',
    image: calculator,
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I am certified in AWS and proficient in working with EC2 and RDS instances, leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'vite',
    title: 'Vite',
    icon: viteIcon,
    description:
      'I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions and creating graphic interfaces using Tkinter.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  {
    id: 'neo',
    title: 'Neo4j',
    icon: neoIcon,
    description:
      'I am knowledgeable in Neo4j, the graph database management system. I have expertise in utilizing GraphOS to build robust recommendation systems, leveraging the strength of graph-based data modeling.',
  },
  {
    id: 'raspi',
    title: 'Raspberry Pi',
    icon: raspIcon,
    description:
      'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in assembly language. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  },
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
