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
  hospital,
  agency,
  nextjs,
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
  {
    name: 'Next JS',
    icon: nextjs,
    color:'white',
  },

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
    name: "Agency blog",
    description:
      "A sleek and interactive agency blog website, featuring visually engaging posts, intuitive navigation, and opportunities for reader interaction and exploration.<br>
To login into the website enter-> Username: admin and Password also: admin",
    detailed:
      "This agency blog website, powered by Next.js, seamlessly blends sleek design with advanced interactivity. Leveraging Next.js's server-side rendering capabilities, pages load quickly and efficiently, providing users with a smooth browsing experience. ",
    tags: [
      {
        name: "next js",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "node js js",
        color: "pink-text-gradient",
      },
    ],
    image: agency,
    repo: "https://github.com/chiranjiv-d-adsul/Agency-fullstackproject_Nextjs",
    demo: "https://agency-xi-one.vercel.app/",
  },
  {
    id: "project-2",
    name: "SocialPilot",
    description:
      "Developing a multi-platform recruitment tool for recruiters to simultaneously post job openings across various platforms.(Currently working on it) Note: use sigin option",
    detailed:
      "Developing a platform using react js, tailwindcss and node js:- for recruiters to post job openings simultaneously on multiple platforms using the React frontend library for dynamic user interfaces, Node.js for server-side logic, Express.js for backend routing, and Tailwind CSS for efficient styling. This tech stack enables seamless integration of various job posting platforms and provides recruiters with a streamlined experience for managing job listings.",
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
    demo: "https://social-pilot-frontend.vercel.app/",
  },
  {
    id: "project-3",
    name: "TradeX",
    description:
      "A Frontend Project in which Figma Design transformed into Code. (Currently working on it)",
    detailed:
    "Created a frontend project by transforming a Figma design into code using React for building dynamic user interfaces, Tailwind CSS for efficient styling, and APIs for integrating external data or services. This project ensures seamless translation of design concepts into functional web applications, offering a visually appealing and responsive user experience.",
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
    repo: "https://github.com/chiranjiv-d-adsul/Koinx-Frontend",
    demo: "https://koinxfrontend.vercel.app/",
  },
  {
    id: "project-4",
    name: "Chatter",
    description: "Real Time Chat Application",
    detailed:
    "Build a real-time chat application using Socket.IO, a library for enabling real-time, bidirectional communication between web clients and servers. Utilize Express.js, a web application framework for Node.js, to handle routing and server-side logic. Node.js will serve as the runtime environment. With these technologies combined, you can create a responsive and interactive chat experience where users can exchange messages instantly.",
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
    demo: "https://chat-application-0a6.up.railway.app/",
  },
  {
    id: "project-5",
    name: "CoPass",
    description:
      "Introducing the Coopass a comprehensive platform facilitating seamless connections between coolies and passengers for load-carrying services, Implemented Idea towards it.<br>
To login into the website enter-> Username: chiranjiv and Password also: chiranjiv",",
    detailed:
      "Developed a Porter Management System using PHP for server-side scripting, HTML for structuring web pages, CSS for styling, JavaScript for client-side interactivity, and MySQL for database management. This platform facilitates connections between porters and passengers for load-carrying services, offering a user-friendly interface and efficient load management capabilities.",
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
    repo: "https://github.com/chiranjiv-d-adsul/Coopass_miniproject-php.git",
    demo: "https://cooliepass.infinityfreeapp.com/",
  },
  {
    id: "project-6",
    name: "Dummy Healthcentre",
    description:
      "In the dummy healthcare system, patients can explore various departments and services offered by the hospital with the added requirement of logging in or registering to access these features. <br>
You can directly acces services",
    detailed:" the dummy healthcare system, patients can easily navigate through the platform to explore various departments and services offered by the hospital. Upon registration and login, patients gain access to a comprehensive overview of available medical services.",
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
    image: hospital,
    repo: "https://github.com/chiranjiv-d-adsul/DummyHealthcare-php.git",
    demo: "http://dummyhealthcare.wuaze.com/",
  },
  {
    id: "project-7",
    name: "Dummy Banking",
    description:
      "The main aim of this project is it gives information about the functioning of databases in banking system",
    detailed: "The main aim of the project is to provide comprehensive information about the functioning of databases within a banking system. This includes demonstrating various operations such as checking account balances, adding money to an account, and transferring money between accounts, all using database operations.",
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
    repo: "https://github.com/chiranjiv-d-adsul/Dummybanking-php.git",
    demo: "https://devmshello.000webhostapp.com/",
  },
];



export { services, technologies, projects, experiences };
