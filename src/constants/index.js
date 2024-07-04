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
  conai,
  recruit,
  todo,
  userlist,


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
    "id": "project-1",
    "name": "AI Content Generator",
    "description": "An advanced AI-powered content generation tool, designed to streamline and expedite the process of creating written content. Utilizes machine learning models to generate diverse and relevant content based on user-provided prompts.",
    "detailed": "The AI Content Generator, built with Next.js, provides a seamless and efficient experience for generating written content. Leveraging the power of machine learning models, this tool can produce a variety of content types based on user inputs, making it a versatile and valuable resource for content creators. The development approach included continuous testing and feedback loops to ensure robust performance and feature refinement.",
    "tags": [
      {
        "name": "next js",
        "color": "blue-text-gradient"
      },
      {
        "name": "react.js",
        "color": "blue-text-gradient"
      },
      {
        "name": "postgresql",
        "color": "pink-text-gradient"
      },
      {
        "name": "tailwind",
        "color": "pink-text-gradient"
      },
      {
        "name": "expressjs",
        "color": "green-text-gradient"
      }
    ],
    "image": conai,
    "repo": "https://github.com/chiranjiv-d-adsul/AI-Content-Generator-full-stack-project-.git",
    "demo": "https://conai.vercel.app/"
  },


  {
    id: "project-2",
    name: "Agency blog",
    description:
      "A sleek and interactive agency blog website, featuring visually engaging posts, intuitive navigation, and opportunities for reader interaction and exploration. Note: To login into the website enter-> Username: admin and Password also: admin",
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
    id: "project-3",
<<<<<<< HEAD
=======
    name: "TradeX",
    description:
      "A Frontend Project in which Figma Design transformed into Code. (Currently working on it) Note: rezize ur window to 90%",
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
>>>>>>> af7cabf167b481d2e4eb2de1b2f26342098d015a
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
    "id": "project-4",
    "name": "Dynamic To-Do List Application",
    "description": "Efficiently manage and track tasks with dynamic features for creating, updating, and organizing to-do items. Includes functionalities for real-time task management across different stages.",
    "detailed": "The Dynamic To-Do List Application is designed to streamline task management by providing dynamic features for creating, updating, and organizing tasks. The application allows users to add new tasks to the Pending section, move tasks between Pending, In Progress, and Completed sections, and displays a timestamp for completed tasks. The optional drag-and-drop functionality enhances user experience by simplifying task movement between sections. The project involves setting up the environment, developing both the backend and frontend, and implementing real-time task management functionalities.",
    "tags": [
      {
        "name": "react.js",
        "color": "blue-text-gradient"
      },
      {
        "name": "nodejs",
        "color": "blue-text-gradient"
      },
      {
        "name": "expressjs",
        "color": "green-text-gradient"
      },
      {
        "name": "mongodb",
        "color": "pink-text-gradient"
      },
      {
        "name": "tailwind",
        "color": "pink-text-gradient"
      }
    ],
    "image": todo,
    "repo": "https://github.com/chiranjiv-d-adsul/Dynamic-Todo-List",
    "demo": "https://iridescent-bombolone-8c2d79.netlify.app/"
  },

  {
    "id": "project-5",
    "name": "User List Management",
    "description": "Manage user lists, upload users via CSV, and send personalized emails efficiently. Features include creating user lists, importing users, and sending emails through an intuitive frontend interface.",
    "detailed": "The User List Management application allows for efficient management of user lists, with capabilities to upload users via CSV and send personalized emails. The process setup includes installing dependencies and configuring the environment. The backend is powered by an Express server with MongoDB, while the frontend is built with React and launched using Vite. Users can create and customize user lists, import users from CSV files, and send personalized emails to list members. This tool streamlines the process of managing user data and communication.",
    "tags": [
      {
        "name": "react.js",
        "color": "blue-text-gradient"
      },
      {
        "name": "nodejs",
        "color": "blue-text-gradient"
      },
      {
        "name": "expressjs",
        "color": "green-text-gradient"
      },
      {
        "name": "mongodb",
        "color": "pink-text-gradient"
      }
    ],
    "image":userlist,
    "repo": "https://github.com/chiranjiv-d-adsul/user-list-management",
    "demo": "https://thunderous-pavlova-31149b.netlify.app/"
  },

  {
    id: "project-6",
    name: "Dummy Healthcentre",
    description:
      "In the dummy healthcare system, patients can explore various departments and services offered by the hospital with the added requirement of logging in or registering to access these features. You can directly acces services",
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
    name: "CoPass",
    description:
      "Introducing the Coopass a comprehensive platform facilitating seamless connections between coolies and passengers for load-carrying services, Implemented Idea towards it. Note: To login into the website enter-> Username: chiranjiv and Password also: chiranjiv",
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
    "id": "project-5",
    "name": "Recruits",
    "description": "Provide an efficient platform to search for candidates based on location and job role, and add new candidates to the database.",
    "detailed": "The Recruits application is designed to streamline the process of searching for and managing candidate information. The platform allows users to search for candidates by location and job role, add new candidates to the database, and dynamically filter search results. The development process includes installing dependencies, configuring the environment, developing the backend with Express.js and MongoDB, building the frontend with React.js, deploying the application, and enabling search and add functionalities. The application ensures a responsive design and provides real-time updates to enhance user experience.",
    "tags": [
      {
        "name": "react.js",
        "color": "blue-text-gradient"
      },
      {
        "name": "nodejs",
        "color": "blue-text-gradient"
      },
      {
        "name": "expressjs",
        "color": "green-text-gradient"
      },
      {
        "name": "mongodb",
        "color": "pink-text-gradient"
      }
    ],
    "image": recruit,
    "repo": "https://github.com/chiranjiv-d-adsul/recruitment",
    "demo": "https://willowy-maamoul-554c69.netlify.app/"
  },
  {
    "id": "project-6",
    "name": "SocialPilot (MultiPlatform) (Currently Working)",
    "description": "Developing a multi-platform recruitment tool for recruiters to simultaneously post job openings across various platforms. Features integration with platforms like Facebook, LinkedIn, Medium, etc.",
    "detailed": "SocialPilot is a multi-platform recruitment tool designed to streamline the process of posting job openings across various platforms simultaneously. It utilizes React for dynamic user interfaces, Node.js for server-side logic, Express.js for backend routing, and Tailwind CSS for efficient styling. Upon signing in, users are redirected to the homepage and can access the dashboard by clicking on the signin button. The project aims to enhance recruiter productivity by providing a unified platform for managing job postings across multiple channels.",
    "tags": [
      {
        "name": "react.js",
        "color": "blue-text-gradient"
      },
      {
        "name": "tailwind",
        "color": "blue-text-gradient"
      },
      {
        "name": "nodejs",
        "color": "green-text-gradient"
      },
      {
        "name": "expressjs",
        "color": "green-text-gradient"
      }
    ],
    "image": socialpilot,
    "repo": "",
    "demo": "https://social-pilot-frontend.vercel.app/"
  }



];



export { services, technologies, projects, experiences };
