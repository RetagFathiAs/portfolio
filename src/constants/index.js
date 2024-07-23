import {
  inkscape,
  python,
  sqlserver,
  phot,
  csharp,
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  alx,
  icdl,
  coding,
  server,
  java,
  cicon,
  code,
  carrent,
  jobit,
  tripguide,
  threejs,
  photoshop,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Story",
  },
  {
    id: "work",
    title: "Expeience & knowledge",
  },
  {
    id: "contact",
    title: "Contact with me",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Photoshop",
    icon: phot,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Inkscap",
    icon: inkscape,
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
    name: "Sql server",
    icon: sqlserver,
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
    name: "python",
    icon: python,
  },
  {
    name: "csharp",
    icon: csharp,
  },
];

const experiences = [
  {
    title: "System Manager",
    company_name: "Sql , OLDB.",
    icon: server,
    iconBg: "#E6DEDD",
    date: "2022 - 2024",
    points: [
      "Developing and maintaining Desktop databases using sql with other related languages.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring compatibility.",
      "phpmyadmin, mysql, sqlite",
    ],
  },
  {
    title: "Graphic Designer",
    
    icon: photoshop,
    iconBg: "#E6DEDD",
    date: "2021-2024",
    points: [
      "Develop a strong understanding of visual elements such as color theory, typography, layout, and composition. ",
      "Master industry-standard design software like Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
      "Continuously work on personal projects and build a diverse portfolio. Showcase a variety of design styles, projects, and client work.",
    ],
  },
  {
    title: "Web Developer",
    
    icon: code,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "ALX",
    icon: alx,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I started learning programming in this course in C and created complex projects, including",
      " A printf function built entirely from scratch.",
      " A simple shell.",
      " A maze game.",
      "It took me nine months of practice and problem-solving to complete this course.Developing and maintaining web applications using React.js and other related technologies.",
      
    ],
  },
  {
    title: "ALX - Specializing",
    company_name: "alx",
    icon: alx,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "After nine months of fundamental learning, we started a specialization trimester; I chose front-end design. ",
      "I am learning more about design-oriented languages such as:",
      "React.js",
      "Delving deeper into CSS",
      "JavaScript" ,
      "Among other"
    ],
  },
  {
    title: "Java Programming ",
    company_name: "Edraak",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - 2023",
    points: [
      "Java 1 : I have mastered the fundamentals of Java programming and the use ",
      "Java 2 : Delve deeper into Java, an OOP language, and develop a keen interest in classesز",
      "Java 3 : After mastering the fundamentals of Java, I began to develop projects. ",
      "My projects were three games:",
      "Snake game using JavaFX.",
      "Dragon Tail.",
      "XO strategy game."
    ],
  },
  {
    title: "Cs50",
    company_name: "Harvard - Edx",
    icon: cicon,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "i granted a great knowledge about programming in c language as it's the basic language."
    ],
  },
  {
    title: "Programming skills",
    
    icon: coding,
    iconBg: "#E6DEDD",
    
    points: [
      "I have a deep understanding of programming languages" ,
      "such as SQL, Java, Python, C#, C++, PHP, HTML, CSS, JavaScript, and C. "
    ],
  },
  {
    title: "ICDL",
    
    icon: icdl,
    iconBg: "#E6DEDD",
    
    points: [
      "I have earned certifications from Edraak in the following programs:",
" Microsoft Office Word",
" Microsoft Office PowerPoint",
"Microsoft Office Access",
"Computer Science"
    ],
  },
];



const projects = [
  {
    name: "Zuwarah Website",
    description:
"Explore our website dedicated to Zuwara city! Discover the latest news, events, and updates about this vibrant coastal town. Additionally, we showcase captivating photos of Zuwaras most iconic landmarks. Our site was meticulously crafted using HTML, CSS, and JavaScript. Come visit us now!",
    tags: [
      {
        name: "Php",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Js",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://retagfathias.github.io/ZuLinesource/index.html",
  },
  {
    name: "Dragon tail",
    description:
      "Dragon Tail Game , Embark on an exciting adventure with our Java game, meticulously crafted using the NetBeans IDE. Immerse yourself in captivating gameplay. it contains a main character also an enimy character with a horizintal camera ,explore a world of fun and challenges!",
      tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "netbeans",
        color: "green-text-gradient",
      },
      {
        name: "desktop",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pharmacy Management System",
    description:
    "Streamline your pharmacy operations with our robust database application. Designed meticulously using C#, Visual Studio, and SQL, our system empowers you to efficiently manage inventory, prescriptions,and more." ,  
     tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "Visual Studio",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/RetagFathiAs/phManagementSystem",
  },
];

export { services, technologies, experiences, projects };
