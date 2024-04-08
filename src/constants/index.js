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
      name: "Python",
      icon: python,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "JavaScript",
      icon: javascript,
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
      name: "Bash",
      icon: bash,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Fugro",
      icon: fugro,
      iconBg: "#E6DEDD",
      date: "February 2023 - Present",
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
      name: "Data Inference",
      description:
        "A web based platform the solves to frustrating problem of pandas data inference. It takes in CSv files and algorithmically determins column data types.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "django",
          color: "green-text-gradient",
        },
        {
          name: "data",
          color: "pink-text-gradient",
        },
      ],
      image: datainference,
      source_code_link: "https://github.com/romeo-yenni/rhombus-ai",
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
      name: "Model Harbor",
      description:
        "*WORK IN PROGRESS* A web platform that lets users upload the 3D models and view them in browser. Future features include adding backend for storage.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "3JS",
          color: "green-text-gradient",
        },
        {
          name: "WebGL",
          color: "pink-text-gradient",
        },
      ],
      image: modelimage,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };