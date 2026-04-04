// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/psd-logo.jpg';
import agcLogo from './assets/company_logo/aaioi-logo.png';
import newtonschoolLogo from './assets/company_logo/iwai-logo.jpg';

// Education Section Logo's
import glaLogo from './assets/education_logo/srmlogo.jpeg';
import davLogo from './assets/education_logo/dav-logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/Taskflow.png';
import csprepLogo from './assets/work_logo/Blogify.png';
import movierecLogo from './assets/work_logo/AgenticSOC.png';
import webverLogo from './assets/work_logo/web_dig.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React JS', logo: reactjsLogo },
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
    desc: "Spearheading the redesign and optimization of client-facing web interfaces — rebuilding responsive layouts, streamlining navigation flows, and significantly improving overall usability. Independently developing and customizing reusable web components in PHP, HTML, CSS, and JavaScript, while managing end-to-end CMS workflows. Directly contributing to the company's digital presence and user engagement.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "CMS"],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Web Development Intern",
    company: "Airports Authority of India, Delhi",
    date: "Jun 2025 - Jul 2025",
    desc: "Engineered a production-grade, full-stack Office-Task Management System for one of India's largest civil aviation authorities. Built with the MERN stack — featuring role-based access dashboards, JWT authentication, real-time task tracking, and automated sub-task workflows. Delivered a measurable 40% improvement in task resolution efficiency. Designed and optimized RESTful APIs and MongoDB queries to handle concurrent multi-user operations reliably.",
    skills: ["React JS", "Node.js", "Express", "MongoDB", "JWT", "Git", "Postman"],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "IT Intern",
    company: "Inland Waterways Authority of India, Noida",
    date: "Jun 2024 - Jul 2024",
    desc: "Embedded with the core IT team of a Government of India organization — monitored live network infrastructure, maintained and updated critical database records, and ensured uptime of internal digital platforms. Supported system administration operations and resolved network issues through structured troubleshooting protocols.",
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
    desc: "Pursuing B.Tech in Computer Science with a strong academic record (8.32 CGPA). Coursework spans Data Structures & Algorithms, Object-Oriented Programming, Database Management, Operating Systems, and Full-Stack Web Development. Consistently applying academic knowledge to real-world projects and internships throughout the degree.",
    degree: "Bachelor of Technology (B.Tech) - Computer Science",
  },
  {
    id: 1,
    img: davLogo,
    school: "Suraj Bhan D.A.V. Public School",
    date: "Batch: 2023",
    grade: "",
    desc: "Completed Higher Secondary Education with a focus on Physics, Chemistry, and Mathematics — building strong analytical and problem-solving foundations that directly support engineering and development work.",
    degree: "Higher Secondary Education (PCM)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Office-Task Management System",
    description:
      "Production-grade task management platform built and deployed for Airports Authority of India. Engineered end-to-end on the MERN stack with JWT-secured authentication, granular role-based dashboards (Admin / Manager / Employee), real-time team chat, and hierarchical sub-task workflows. Achieved a measurable 40% improvement in task resolution efficiency across teams.",
    image: githubdetLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "JWT", "Real-time Chat"],
    github: "https://github.com/Vansh150705/taskmanager-frontend",
    webapp: "https://office-task-manager.vercel.app/",
  },
  {
    id: 1,
    title: "Blogify - by VM",
    description:
      "AI-powered full-stack blogging platform that integrates Google Gemini for intelligent content generation and Imagekit API for optimized media delivery. Reduces blog creation time by 50% compared to manual workflows. Built on the MERN stack with a clean editor experience, authentication, and dynamic content management — demonstrating practical integration of LLMs into production web apps.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Gemini API", "Imagekit"],
    github: "https://github.com/Vansh150705/Blogify---by-VM",
    webapp: "https://blogify-by-vm-frontend.vercel.app/",
  },
  {
    id: 2,
    title: "Agentic SOC Dashboard",
    description:
      "Real-time Security Operations Center (SOC) dashboard designed for live threat visibility and incident response. Streams live data every 10 seconds via Google Sheets API and n8n automation workflows. Features interactive threat monitoring charts, incident lifecycle management, multi-channel notification systems, and one-click PDF export — built entirely in React with a focus on performance and operational clarity.",
    image: movierecLogo,
    tags: ["React JS", "n8n", "Google Sheets API", "Real-time", "Automation"],
    github: "https://github.com/Vansh150705/Frontend-Agentic-SOC",
    webapp: "https://frontend-agentic-soc.vercel.app/",
  },
];

export const volunteering = [
  {
    id: 0,
    role: "Marketing and Content Intern",
    company: "Hamari Pahchan NGO, Delhi",
    date: "Aug 2024 - Sep 2024",
    desc: "Designed 15+ high-engagement social media creatives and drove digital marketing campaigns that expanded the NGO's online reach. Combined design thinking with content strategy to amplify the organization's social impact mission.",
    skills: ["Marketing", "Content", "Design"],
  },
  {
    id: 1,
    role: "Teaching Intern",
    company: "The Rising People Welfare Society (TRPWS), Delhi",
    date: "Jul 2024 - Sep 2024",
    desc: "Volunteered as an educator for 20+ underprivileged students, conducting structured after-school learning sessions. Developed personalized teaching approaches to improve comprehension and build academic confidence in underserved communities.",
    skills: ["Teaching", "Mentoring", "Communication"],
  },
];

export const extracurricular = [
  {
    id: 0,
    title: "Athletics Team Captain",
    desc: "Led and mentored a team of 8+ athletes, driving coordinated training schedules and representing the college at 3 inter-college sports events. Developed strong leadership, discipline, and team-management skills under competitive pressure.",
  },
  {
    id: 1,
    title: "Cultural Fest Manager",
    desc: "Owned end-to-end planning and execution of 5+ major events at the college cultural fest — coordinating across cross-functional teams, managing logistics, timelines, and on-ground operations for an audience of hundreds.",
  },
  {
    id: 2,
    title: "Club Core Member",
    desc: "Active core member of both cultural and technical college clubs — contributing to event ideation, speaker coordination, promotional strategy, and execution. Bridging the gap between technical and creative communities on campus.",
  },
];