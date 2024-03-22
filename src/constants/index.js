import {
  frontend,
  backend,
  student,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  mysql,
  php,
  expressjs,
  docker,
  postgresql,
  rubyrails,
  graphql,
  tradex,
  spark,
  oasis,
  phn,
  socialpilot,
  chatter,
  copass,
  bank,
} from "../assets";

export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Student",
    icon: student,
  },
  {
    title: "Programmer",
    icon: frontend,
  },
  {
    title: "Frontend Developer",
    icon: ux,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },

  // {
  //   title: 'Software Prototyping',
  //   icon: prototyping,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    color: "#E75000",
  },
  {
    name: "CSS 3",
    icon: css,
    color: "#2196F3",
  },
  {
    name: "JavaScript",
    icon: javascript,
    color: "#F6DE1D",
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  //      color:'',
  // },

  {
    name: "React JS",
    icon: reactjs,
    color: "#61DAFB",
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  //   color:'',
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    color: "#0F172A",
  },
  {
    name: "figma",
    icon: figma,
    color: "#2E313A",
  },
  {
    name: "Node JS",
    icon: nodejs,
    color: "#88BC5B",
  },
  {
    name: "Express JS",
    icon: expressjs,
    color: "#2E2E2E",
  },
  {
    name: "Php",
    icon: php,
    color: "#92A9ED",
  },
  {
    name: "MySql",
    icon: mysql,
    color: "",
  },

  {
    name: "git",
    icon: git,
    color: "#F05146",
  },
  // {
  //   name: 'postgresql',
  //   icon: postgresql,
  //   color:'',
  // },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Phn Technology Pvt Ltd",
    icon: phn,
    iconBg: "white",
    date: "April 2023 - June 2023",
  },
  {
    title: "Web Developer Intern -> Program",
    company_name: "The Sparks Foundation",
    icon: spark,
    iconBg: "white",
    date: "May 2023 - June 2023",
  },
  {
    title: "Frontend Developer Intern -> Program",
    company_name: "Oasis InfoByte",
    icon: oasis,
    iconBg: "white",
    date: "Aug 2023",
  },
];

const projects = [

  {
    id: "project-1",
    name: "SocialPilot",
    description:
      "A Platform for Recruiters to post work on different platform at the same time -> Currently Working on it " ,
    detailed:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, nulla accusamus. Similique ut neque fugiat atque sed quasi odio voluptatem nemo nulla architecto cum nobis deserunt modi, commodi sunt omnis voluptatibus alias. Libero et id perferendis similique ex. Aspernatur eligendi neque expedita dicta quisquam maxime alias dolores consequuntur deserunt, a, at officiis! Adipisci earum aperiam quia sequi ex? Cupiditate recusandae aut iusto pariatur voluptatem earum consequatur consectetur incidunt modi assumenda praesentium inventore, fugit ea possimus, accusamus deserunt explicabo, molestiae necessitatibus veniam. Molestiae odio ducimus nihil excepturi. Consectetur fugiat sit dolore soluta eum saepe quis quas necessitatibus veniam molestiae sint magnam, ab alias? Obcaecati vitae sint, error voluptates adipisci omnis voluptate itaque quis. Nisi deleniti ex dolore et illum recusandae sint? Quidem quo facere mollitia dolor harum, fugiat accusamus. Sit, optio? Quia, rerum veritatis? Sit rerum corrupti minus mollitia neque? Rerum voluptas optio mollitia, nesciunt voluptatibus suscipit alias, dolore eveniet sint dicta expedita omnis quo ab doloremque deleniti minima porro velit quae totam, modi necessitatibus? Inventore consequatur nam, rem numquam dolorem impedit quo laborum recusandae modi totam, possimus iusto eveniet nemo quae atque incidunt harum alias dignissimos sit voluptatum delectus ducimus. Accusamus, tenetur porro consectetur tempore eligendi odio iusto molestias recusandae!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "taiwlind",
        color: "blue-text-gradient",
      },
      {
        name: "express js",
        color: "pink-text-gradient",
      },
      {
        name: "node js js",
        color: "pink-text-gradient",
      },
    ],
    image: socialpilot,
    repo: "https://github.com/Abhishek-M-K/Social-Pilot-Frontend",
    demo: "/",
  },
  {
    id: "project-2",
    name: "TradeX",
    description:
      "A Frontend Project in which Figma Design transformed into Code lorem .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tradex,
    repo: "/",
    demo: "/",
  },
  {
    id: "project-3",
    name: "Chatter",
    description: "Real Time Chat Application",
    tags: [
      {
        name: "express js",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: chatter,
    repo: "https://github.com/adsulchiru17/chat-application",
    demo: "https://chatter-eosin.vercel.app/",
  },
  {
    id: "project-4",
    name: "CoPass",
    description: "A Platform where Coolies can connect with Passengers to carry load -> Porter Management System",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: copass,
    repo: "/",
    demo: "https://coopasspm.000webhostapp.com/",
  },
  {
    id: "project-5",
    name: "Dummy Banking",
    description:
      "1.The main aim of this project is it gives information about the functioning of databases in banking system   ",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bank,
    repo: "/",
    demo: "https://devmshello.000webhostapp.com/",
  },
]

  const projects1 = [


];


  // {
  //   id: "project-6",
  //   name: "Banking Mangement System",
  //   description:
  //     "1.The main aim of this project is it gives information about the functioning of databases in banking system  2.It manages all the transactions like transferring money,viewing accounts details,etc using Arithemtic Operations.",
  //   tags: [
  //     {
  //       name: "php",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mysql",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: bank,
  //   repo: "/",
  //   demo: "https://devmshello.000webhostapp.com/",
  // },
  // {
  //   id: "project-7",
  //   name: "Banking Mangement System",
  //   description:
  //     "1.The main aim of this project is it gives information about the functioning of databases in banking system  2.It manages all the transactions like transferring money,viewing accounts details,etc using Arithemtic Operations.",
  //   tags: [
  //     {
  //       name: "php",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mysql",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: bank,
  //   repo: "/",
  //   demo: "https://devmshello.000webhostapp.com/",
  // },
  // {
  //   id: "project-8",
  //   name: "Banking Mangement System",
  //   description:
  //     "1.The main aim of this project is it gives information about the functioning of databases in banking system  2.It manages all the transactions like transferring money,viewing accounts details,etc using Arithemtic Operations.",
  //   tags: [
  //     {
  //       name: "php",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mysql",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: bank,
  //   repo: "/",
  //   demo: "https://devmshello.000webhostapp.com/",
  // },

export { services, technologies, projects, projects1, experiences };
