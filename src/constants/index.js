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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  fugro,
  uwa,
  csharp,
  python,
  c,
  django,
  bash,
  huggingface,
  sqlite,
  mysql,
  net,
  datainference,
  portfolio,
  modelimage,
  millcrest,
  golang,
  veracio,
  vue,
  postgres,
  truprobe,
  tytonai,
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
    title: "Full Stack Engineer",
    icon: mobile,
  },
  {
    title: "Devops Engineer",
    icon: backend,
  },
  {
    title: "Application Engineer",
    icon: creator,
  },
  {
    title: "CyberSecurity Specialist",
    icon: web,
  },
];

const technologies = [
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: ".Net",
    icon: net,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "golang",
    icon: golang,
  },
];

const experiences = [
  {
    title: "Full-stack Software Engineer",
    company_name: "Veracio",
    icon: veracio,
    iconBg: "#E6DEDD",
    date: "December 2024 - Present",
    points: [
      "Led the development of an industry-leading drilling management platform, Strata Geo. Envisioned with microservices-based architecture from scratch,",
      "I built scalable backend services and APIs to support multiple applications, ensuring smooth integration and high availability.",
      "Organized the creation of a secure, centralised user authentication system, enabling seamless access management across the platform.",
      "Delivered the vision for the Truprobe app, developing both frontend and backend, ensuring rapid deployment and iteration through CI/CD pipelines.",
    ],
  },
  {
    title: "Full-stack Software Engineer",
    company_name: "Millcrest Environmental Technology",
    icon: millcrest,
    iconBg: "#E6DEDD",
    date: "June 2024 - December 2024",
    points: [
      'Developed "TytonAI", an advanced artificial intelligence platform that specializes in delivering intelligent automation, data-driven insights, and predictive analytics for environmental monitoring.',
      "Utilized React for dynamic and responsive front-end interfaces, improving user experience and application performance",
      "Designed and implemented gRPC APIs in Go (Golang) to facilitate efficient data communication.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Fugro",
    icon: fugro,
    iconBg: "#E6DEDD",
    date: "February 2023 - June 2024",
    points: [
      "Developing innovative solutions and streamlining complex processes within a software environment, including creating a robust log file debugger tool.",
      "Collaborating closely with QA team to ensure comprehensive testing and seamless integration of the debugger.",
      "Pioneering a cutting-edge software automation pipeline translating Figma designs into functional web components using JavaScript React.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Fugro",
    icon: fugro,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Feb 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Student",
    company_name: "Univeristy of Western Australia",
    icon: uwa,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Nov 2023",
    points: [
      "Majoring in Computer Science and Cyber Security.",
      "Developing skills in data stuctures and algorithms.",
      "Working closely with other students to created complex software projects.",
      "Using super computers to work with large language models LLMs",
    ],
  },
];

const projects = [
  {
    name: "TruProbe",
    description:
      "Veracio's unified cloud platform for downhole survey data. Enabled secure single sign-on, real-time field-to-cloud sync, and instant survey uploads. Delivered 3D visualization and analytics to reduce errors, save time, and support confident decision-making.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "3JS",
        color: "green-text-gradient",
      },
      {
        name: "visualization",
        color: "pink-text-gradient",
      },
    ],
    image: truprobe,
    source_code_link: "https://github.com/romeo-yenni/rhombus-ai",
    youtube: "https://www.youtube.com/watch?v=cZeQe1feOpU",
  },
  {
    name: "My Portfolio",
    description:
      "The website you are currently looking at! I build this portfolio to show off my skills and experience. Built using React 3 Fibre, a 3JS library for React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "3JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/romeo-yenni/nikolagopcevic",
  },
  {
    name: "Tyton AI",
    description:
      "Powerful, web-based platform that brings machine learning within reach of ecologists, enabling accurate, cost-effective vegetation and landscape classification at scale.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "golang",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: tytonai,
    source_code_link: "https://tytonei.com/tytonai/",
    internet: "aa",
  },
];

export { services, technologies, experiences, projects };
