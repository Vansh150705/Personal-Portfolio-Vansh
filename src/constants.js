// Experience Section Logo's
import webverseLogo from './assets/company_logo/psd-logo.jpg';
import agcLogo from './assets/company_logo/aaioi-logo.png';
import newtonschoolLogo from './assets/company_logo/iwai-logo.jpg';

// Education Section Logo's
import glaLogo from './assets/education_logo/srmlogo.jpeg';
import davLogo from './assets/education_logo/dav-logo.png';

// Project Section Logo's
import csprepLogo from './assets/work_logo/Blogify.png'; // placeholder thumbnail for Plumeo
import movierecLogo from './assets/work_logo/AgenticSOC.png'; // placeholder thumbnail for ThreatBrain
import webverLogo from './assets/work_logo/talkdox-thumbnail.png';

export const SkillsInfo = [
  {
    title: 'Programming Languages',
    skills: ['C++', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'HTML', 'CSS']
  },
  {
    title: 'AI / ML',
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'FAISS', 'RAG', 'Agentic AI', 'Multi-Agent Systems', 'Gemini API', 'Gemini Embeddings', 'TensorFlow / Keras', 'Prompt Engineering']
  },
  {
    title: 'Databases',
    skills: ['SQL', 'MongoDB', 'Vector Databases', 'PostgreSQL']
  },
  {
    title: 'Frameworks',
    skills: ['React.js', 'Node.js', 'Express.js', 'Redux', 'Tailwind CSS', 'Socket.IO']
  }
];

export const experiences = [
  {
    id: 0,
    img: null,
    role: "Artificial Intelligence Intern",
    company: "Corporate Infotech Pvt Ltd, Noida",
    date: "Jun 2026 - Ongoing",
    desc: "Building core NLP capabilities for the BiharOne multilingual chatbot — focusing on Named Entity Recognition and fine-tuning language models to enhance intent classification and response accuracy across multiple Indian languages. Assisting in developing RAG and Agentic AI workflows that power context-aware, dynamic chatbot responses, with involvement in system integration, testing, and scalability optimization for multilingual functionality.",
    skills: ["NLP", "NER", "RAG", "Agentic AI", "LLM Fine-Tuning", "Python", "System Integration"],
  },
  {
    id: 1,
    img: webverseLogo,
    role: "Web Designer Intern",
    company: "Pro Sport Development, Delhi",
    date: "Oct 2025 - May 2026",
    desc: "Designed and optimized website interfaces by implementing responsive layouts, improving navigation, and enhancing overall usability — resulting in a more engaging and user-friendly experience. Developed and customized reusable web components using PHP, HTML, CSS, and JavaScript while collaborating on CMS management and performance testing to ensure seamless functionality and scalability.",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "CMS", "UI/UX"],
  },
  {
    id: 2,
    img: agcLogo,
    role: "Software Engineering Intern",
    company: "Airports Authority of India, Delhi",
    date: "Jun 2025 - Jul 2025",
    desc: "Developed a full-stack Office-Task Management System for AAI using the MERN stack — with role-based dashboards, JWT authentication, real-time task tracking, and integrated task-level chat using Socket.IO. Built RESTful APIs, optimized database queries, and worked with Git, Postman, and Agile practices for reliable, scalable delivery.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Socket.IO",
      "REST APIs",
      "Git",
      "Postman"
    ],
  },
  {
    id: 3,
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
    grade: "8.43 CGPA",
    desc: "Pursuing B.Tech in Computer Science & Engineering with a strong academic foundation. Relevant coursework includes Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Full-Stack Web Development. Actively applying theoretical concepts to real-world projects and internships, with a focus on building scalable and efficient systems.",
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
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
      "Production-grade Agentic RAG system built with React, FastAPI, LangChain, FAISS, and Google Gemini 2.5 Flash — supporting chat with PDFs, websites, and YouTube videos. Implements 3 Agentic AI layers (Clarification, Self-Reflection, Confidence Adaptation), Document fingerprinting, Doc vs Doc Comparison with dual vector retrieval, a chronological Timeline Extractor, a Smart Flashcard Generator, and 5 one-click automation tools. Deployed on Vercel + HuggingFace Spaces.",
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
    title: "ThreatBrain",
    description:
      "AI-driven multi-tenant SOC automation platform built with FastAPI, Groq LLM API, Supabase Postgres, and React + TypeScript. Features a 7-agent orchestrator pipeline performing MITRE ATT&CK classification, IOC enrichment via third-party threat-intel APIs, and cross-event correlation that auto-promotes incidents. Engineered with Pydantic-validated JSON-mode LLM I/O, row-level security for tenant isolation, and append-only audit trails via Postgres triggers.",
    image: movierecLogo,
    tags: [
      "FastAPI",
      "Groq LLM API",
      "Supabase",
      "PostgreSQL",
      "React",
      "TypeScript",
      "MITRE ATT&CK",
      "Multi-Agent"
    ],
    github: "",
    webapp: "",
  },
  {
    id: 2,
    title: "Plumeo",
    description:
      "Enterprise goal-setting and tracking portal built with Next.js 14, TypeScript, and Supabase Postgres. Implements Entra ID SSO with role-based access (Admin / Manager / Employee) via Postgres row-level security, four scoring formulas as isomorphic pure functions, an approval workflow state machine, and an immutable audit log with before/after JSON diffs. Integrates a multi-channel notification queue (Email + Teams + In-app) and a rule-based escalation engine running on Vercel cron.",
    image: csprepLogo,
    tags: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Entra ID SSO",
      "Vercel Cron",
      "RBAC"
    ],
    github: "",
    webapp: "",
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