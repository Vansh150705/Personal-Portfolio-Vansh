// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/psd-logo.jpg';
import agcLogo from './assets/company_logo/aaioi-logo.png';
import newtonschoolLogo from './assets/company_logo/iwai-logo.jpg';

// Education Section Logo's
import glaLogo from './assets/education_logo/srmlogo.jpeg';
import bsaLogo from './assets/education_logo/dav-logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/Taskflow.png';
import csprepLogo from './assets/work_logo/Blogify.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React js', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Django', logo: pythonLogo },
      { name: 'SQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'PHP', logo: cLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Web Designer Intern",
      company: "Pro Sport Development, Delhi",
      date: "Oct 2025 - Present",
      desc: "Designed and optimized website interfaces by implementing responsive layouts, improving navigation, and enhancing overall usability. Developed and customized web components using PHP, HTML, CSS, and JavaScript while collaborating on CMS management.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "CMS"],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Web Development Intern",
      company: "Airports Authority of India, Delhi",
      date: "Jun 2025 - Jul 2025",
      desc: "Developed a full-stack Office-Task Management System using the MERN stack with role-based dashboards, JWT authentication, and real-time task tracking. Built RESTful APIs and optimized database queries.",
      skills: ["React JS", "Node.js", "Express", "MongoDB", "Git", "Postman"],
    },
    {
      id: 2,
      img: newtonschoolLogo,
      role: "IT Intern",
      company: "Inland Waterways Authority of India, Noida",
      date: "Jun 2024 - Jul 2024",
      desc: "Assisted the IT team in monitoring network systems, updating database records, and maintaining digital platforms. Supported system administration tasks and basic network troubleshooting.",
      skills: ["Networking", "Troubleshooting", "System Admin", "Databases"],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "S.R.M. Institute of Science and Technology",
      date: "Batch: 2023 - 2027",
      grade: "8.32 CGPA",
      desc: "Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science. Actively engaged in complex programming concepts, software development, and modern technologies. Core subjects include Data Structures, Algorithms, OOPS, and Full Stack Web Development.",
      degree: "Bachelor of Technology (B.Tech) - Computer Science",
    },
    {
      id: 1,
      img: vpsLogo,
      school: "Suraj Bhan D.A.V. Public School",
      date: "Batch: 2023",
      grade: "",
      desc: "Completed Higher Secondary Education, building a strong foundation in physical sciences and mathematics.",
      degree: "Higher Secondary Education",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Office-Task Management System",
      description:
        "Built a MERN stack task management system with JWT authentication, role-based dashboards, real-time chat, and sub-task workflows. This system improves task resolution efficiency by 40%.",
      image: githubdetLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT", "Chat"],
      github: "https://github.com",
      webapp: "#",
    },
    {
      id: 1,
      title: "Blogify - by VM",
      description:
        "Full Stack AI Powered Blogging Web Application using MERN stack, Google Gemini, and Imagekit API. It automates content generation, reducing blog creation time by 50% compared to manual writing.",
      image: csprepLogo,
      tags: ["React JS", "Node.js", "Express", "MongoDB", "AI", "Gemini API"],
      github: "https://github.com",
      webapp: "#",
    },
    {
      id: 2,
      title: "Brain Tumor Detection using CNN",
      description:
        "Developed a deep learning model to classify brain tumor images using Convolutional Neural Networks (CNN) and applied Grad-CAM heatmaps to visualize important tumor regions, achieving 86.1% accuracy.",
      image: movierecLogo,
      tags: ["Python", "CNN", "Deep Learning", "Grad-CAM", "AI"],
      github: "https://github.com",
      webapp: "#",
    },
  ];

  export const volunteering = [
    {
      id: 0,
      role: "Marketing and Content Intern",
      company: "Hamari Pahchan NGO, Delhi",
      date: "Aug 2024 - Sep 2024",
      desc: "Designed 15+ social media creatives and contributed to digital marketing campaigns.",
      skills: ["Marketing", "Content", "Design"]
    },
    {
      id: 1,
      role: "Teaching Intern",
      company: "The Rising People Welfare Society (TRPWS), Delhi",
      date: "Jul 2024 - Sep 2024",
      desc: "Taught 20+ underprivileged students, supporting after-school learning programs.",
      skills: ["Teaching", "Mentoring", "Communication"]
    }
  ];

  export const extracurricular = [
    {
      id: 0,
      title: "Athletics Team Captain",
      desc: "Led 8+ athletes and organized 3 inter-college sports events."
    },
    {
      id: 1,
      title: "Cultural Fest Manager",
      desc: "Managed college cultural fest and coordinated 5+ major events with cross-functional teams."
    },
    {
      id: 2,
      title: "Club Core Member",
      desc: "Core member of college cultural and tech clubs, contributing to planning and execution of various activities."
    }
  ];