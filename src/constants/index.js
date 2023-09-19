import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  epicenter,
  gmetri,
  star,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Experience & Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Co-Founder/CXO",
    company_name: "Epicenter AI",
    icon: epicenter,
    iconBg: "#383E56",
    date: "June 2023 - Present",
    points: [
      "Established development of a front end engine wired to an indigenously engineered Large Language Model (LLM)",
      "Headed design of product, customer journey maps, interface, and output recognition ",
      "Gathered early investor interest valuating the idea potential at a seed round of $40,000",
    ],
  },
  {
    title: "VR/XR Experience Developer",
    company_name: "GMetri XR",
    icon: gmetri,
    iconBg: "#fff",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Ideated, programmed and deployed VR modules for multinational companies’ engagement exercises – Paypal, Accenture, etc.",
      "Designed VR Retail Experience Sections for clients, including renowned fashion designer Manish Malhotra - boosting conversion rates by 70% & engagement rates by 2x-3x",
      "Developed innovative integrations with VR media and human-web-interaction technologies; directly handled projects worth ~$38,000",
      "Conducted collaborative design-tech exercises with client & internal development teams in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer (code + design)",
    company_name: "Starlight",
    icon: star,
    iconBg: "#fff",
    date: "May 2020 - Jul 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed user-interaction modules integrating user psychology, regional demographic trends, and conversion metrics for small-sized businesses in the UK, US.",
      "Contracted to construct website interactions harnessing UX frameworks based on robust interaction data; programmed and deployed React-based team management webapp.",
      "-	Developed cross-platform apps, utilizing the react-native framework, for outreach initiatives.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Epicenter V1",
    description:
      "Web-based platform (UI) allows students to generate an unlimited bank of questions tailored to their course style",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/malarkey2/expicenter-v1",
  },
  {
    name: "InYPT Dash",
    description:
      "Dashboard allowing a gamified rewward beased learning and competition platform.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/malarkey2/inypt-dash",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
