export const navLinks = [
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "certifications", title: "Certifications" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const personalInfo = {
  name: "Aditya Bhawsar",
  role: "MERN Stack Developer",
  tagline: "Final-year Computer Science student seeking opportunities in Software Engineering.",
  intro:
    "I'm a final-year Computer Science student interested in full stack web development. I enjoy learning new technologies, solving problems, and building projects to improve my development skills.",
  email: "adityabhawsar21@gmail.com",
  github: "https://github.com/adityabhawsar221",
  linkedin: "https://linkedin.com/in/aditya-bhawsar21",
};

export const skills = {
  languages: [
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  frontend: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ],
  database: [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ],
  tools: [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Vercel", icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" },
  ],
  concepts: [
    { name: "DSA", icon: "https://cdn-icons-png.flaticon.com/512/8099/8099466.png" },
    { name: "OOP", icon: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png" },
    { name: "REST APIs", icon: "https://cdn-icons-png.flaticon.com/512/8205/8205469.png" },
    { name: "Networking", icon: "https://cdn-icons-png.flaticon.com/512/2850/2850315.png" },
  ],
};

export const projects = [
  {
    name: "FoodieFly",
    description:
      "MERN stack food delivery platform with separate user, shop owner, and delivery roles, real-time tracking, and online payments.",
    tags: [
      { name: "MongoDB", color: "text-green-500" },
      { name: "Express.js", color: "text-white" },
      { name: "React", color: "text-blue-400" },
      { name: "Node.js", color: "text-green-400" },
      { name: "Socket.IO", color: "text-gray-400" },
      { name: "Redux Toolkit", color: "text-purple-400" },
    ],
    image: "",
    source_code_link: "https://github.com/adityabhawsar221/FoodieFly",
    live_demo_link: "https://foodiefly-igaw.onrender.com",
    features: [
      "Secure authentication & authorization with JWT",
      "Real-time order updates & live tracking via Socket.IO",
      "Online payments, image uploads & OTP verification",
      "Responsive UI with React, Redux Toolkit & Tailwind CSS",
    ],
  },
  {
    name: "Resume Analyzer",
    description:
      "AI-powered resume analyzer that compares resumes against job descriptions using GPT API, detecting skill gaps and match percentage.",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "TypeScript", color: "text-blue-300" },
      { name: "Puter.js", color: "text-cyan-400" },
      { name: "GPT API", color: "text-purple-400" },
    ],
    image: "",
    source_code_link: "https://github.com/adityabhawsar221/Resume-Analyser",
    live_demo_link: "https://resume-analyser-yrx6.vercel.app/",
    features: [
      "Resume parsing vs job description comparison",
      "AI-based skill gap detection and match scoring",
      "GPT API for keyword and role-specific suggestions",
      "Reusable React + TypeScript components",
    ],
  },
  {
    name: "AI Code Reviewer",
    description:
      "Real-time AI code review tool using Gemini API that detects bugs, suggests optimizations, and explains code with Monaco Editor.",
    tags: [
      { name: "React", color: "text-blue-400" },
      { name: "Tailwind CSS", color: "text-cyan-400" },
      { name: "Gemini API", color: "text-yellow-400" },
      { name: "Monaco Editor", color: "text-gray-300" },
    ],
    image: "",
    source_code_link: "https://github.com/adityabhawsar221/Code-Reviewer",
    live_demo_link: "https://reviewmate-ai-code-reviewer.vercel.app/",
    features: [
      "Gemini API powered real-time code analysis",
      "Bug detection, optimized logic suggestions",
      "Monaco Editor for syntax highlighting",
      "Responsive UI with React and Tailwind CSS",
    ],
  },
  {
    name: "Blogify",
    description:
      "Full-stack blog application with user authentication, image uploads via Cloudinary, and server-rendered views using EJS.",
    tags: [
      { name: "Node.js", color: "text-green-400" },
      { name: "Express", color: "text-white" },
      { name: "MongoDB", color: "text-green-500" },
      { name: "Cloudinary", color: "text-blue-400" },
    ],
    image: "",
    source_code_link: "https://github.com/adityabhawsar221/Blogify",
    live_demo_link: "https://blogify-z19a.onrender.com/",
    features: [
      "Secure auth with bcrypt & protected routes",
      "Blog creation with Multer + Cloudinary image uploads",
      "Server-rendered views via EJS & Bootstrap",
      "Deployed on Render with MongoDB Atlas",
    ],
  },
];

export const certifications = [
  {
    title: "MERN Stack Development",
    issuer: "CodeHelp",
    year: "2024",
    link: "https://drive.google.com/file/d/1rvMwaERZaJnPiMIQ1P3ULelGgErkSLTk/view?usp=sharing",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Coding Ninjas",
    year: "2024",
    link: "https://certificate.codingninjas.com/verify/f9b43e12d6b5757f",
  },
];

export const achievements = [
  { title: "LeetCode Problems Solved", value: "300", suffix: "+" },
  { title: "Contest Rating", value: "1500", suffix: "+" },
  { title: "Projects Deployed", value: "4", suffix: "" },
];

export const education = [
  {
    title: "B.Tech in Computer Science & Engineering (AIML)",
    institution: "Gyan Ganga Institute of Technology and Sciences",
    date: "2022 – 2026",
    points: [
      "Specialization in Artificial Intelligence and Machine Learning.",
      "Consistently maintaining excellent academic performance.",
      "Active participant in coding challenges, hackathons, and open-source projects.",
    ],
  },
];
