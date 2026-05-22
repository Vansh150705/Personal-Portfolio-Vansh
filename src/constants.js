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
import webverLogo from './assets/work_logo/documind.png';

export const SkillsInfo = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'C++', 'PHP']
  },
  {
    title: 'Full-Stack Web',
    skills: ['HTML', 'CSS', 'React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'GSAP', 'Node.js', 'Express.js', 'REST APIs', 'Socket.io']
  },
  {
    title: 'AI Engineering',
    skills: ['LangChain', 'FAISS', 'RAG', 'Agentic AI', 'Gemini']
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'SQL']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'CI/CD', 'Vercel']
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Yarn', 'Figma', 'Chrome DevTools']
  }
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Web Designer Intern",
    company: "Pro Sport Development, Delhi",
    date: "Oct 2025 - Present",
    desc: "Led the redesign and optimization of client-facing web interfaces by improving responsive layouts, navigation flow, and overall usability. Developed and customized reusable components using PHP, HTML, CSS, and JavaScript, while managing end-to-end CMS workflows. Contributed directly to enhancing user experience and platform performance.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "CMS", "UI/UX"],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Web Development Intern",
    company: "Airports Authority of India, Delhi",
    date: "Jun 2025 - Jul 2025",
    desc: "Built a full-stack Office Task Management System using the MERN stack, featuring role-based dashboards, JWT authentication, and real-time task tracking. Implemented real-time communication using Socket.io and designed RESTful APIs for seamless client-server interaction. Optimized MongoDB queries for concurrent users and focused on scalable architecture, efficient data handling, and reliable system performance.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.io",
      "REST APIs",
      "Git",
      "Postman"
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "IT Intern",
    company: "Inland Waterways Authority of India, Noida",
    date: "Jun 2024 - Jul 2024",
    desc: "Associated with the IT department to gain exposure to enterprise IT operations, including network infrastructure, database systems, and internal platforms. Observed system administration workflows and assisted in basic troubleshooting tasks, developing a foundational understanding of IT infrastructure and support processes.",
    skills: [ "Networking Fundamentals", "TCP/IP Basics", "System Administration (Overview)", "Database Systems", "IT Infrastructure", "Technical Troubleshooting" ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "S.R.M. Institute of Science and Technology",
    date: "Batch: 2023 - 2027",
    grade: "8.32 CGPA",
    desc: "Pursuing B.Tech in Computer Science with a strong academic foundation. Relevant coursework includes Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Full-Stack Web Development. Actively applying theoretical concepts to real-world projects and internships, with a focus on building scalable and efficient systems.",
    degree: "Bachelor of Technology (B.Tech) - Computer Science",
  },
  {
    id: 1,
    img: davLogo,
    school: "Suraj Bhan D.A.V. Public School",
    date: "Batch: 2023",
    grade: "",
    desc: "Completed Higher Secondary Education with a specialization in Physics, Chemistry, and Mathematics, developing strong analytical thinking and problem-solving skills that form the foundation for engineering and software development.",
    degree: "Higher Secondary Education (PCM)",
  },
];

export const projects = [
{
    id: 0,
    title: "TalkDox",
    description:
      "Built a production-grade Agentic RAG system using React, FastAPI, LangChain, FAISS, and Google Gemini 2.5 Flash — supporting chat with PDFs, websites, and YouTube videos. Implemented 3 Agentic AI layers (Clarification, Self-Reflection, Confidence Adaptation), Document DNA fingerprinting, Doc vs Doc Comparison with dual vector retrieval, chronological Timeline Extractor, Smart Flashcards, 5 automation tools, AI Personas, Voice Input, and Multilingual support. Deployed on Vercel + HuggingFace Spaces.",
    image: webverLogo,
    tags: [
      "React",
      "FastAPI",
      "LangChain",
      "FAISS",
      "Gemini 2.5 Flash",
      "Agentic RAG",
      "Python"
    ],
    github: "https://github.com/Vansh150705/TalkDox",
    webapp: "https://talkdox-ai.vercel.app",
  },
  {
    id: 1,
    title: "TaskFlow",
    description:
      "Full-stack task management platform developed for Airports Authority of India, built on the MERN stack. Implements JWT-based authentication, role-based dashboards (Admin / Employee), real-time team communication, and hierarchical sub-task workflows. Designed scalable REST APIs and optimized MongoDB queries to support concurrent users, improving task tracking efficiency and overall workflow management.",
    image: githubdetLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.io",
      "REST APIs"
    ],
    github: "https://github.com/Vansh150705/taskmanager-frontend",
    webapp: "https://office-task-manager.vercel.app/",
  },
  {
    id: 2,
    title: "Blogify - by VM",
    description:
      "AI-powered full-stack blogging platform built using the MERN stack, integrating Google Gemini for intelligent content generation and ImageKit for optimized media delivery. Features authentication, dynamic content management, and a clean editor interface. Demonstrates practical integration of LLMs into web applications with a focus on performance, usability, and efficient content workflows.",
    image: csprepLogo,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "ImageKit",
      "AI Integration"
    ],
    github: "https://github.com/Vansh150705/Blogify---by-VM",
    webapp: "https://blogify-by-vm-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "Agentic SOC Platform",
    description:
      "Full-stack Security Operations Center (SOC) platform designed for real-time threat monitoring and incident management. Built end-to-end with a React frontend and automated data pipelines using n8n and Google Sheets API. Implements live data streaming, incident lifecycle tracking, multi-channel alerting, and PDF report generation. Focused on building a scalable, automation-driven system for operational visibility and efficient response handling.",
    image: movierecLogo,
    tags: [
      "React.js",
      "n8n",
      "Google Sheets API",
      "Automation",
      "Real-time Systems",
      "System Design"
    ],
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