import { Monitor } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { PencilRuler } from "lucide-react";
import React from "../assets/react.svg";
import Javascript from "../assets/js.svg";
import Typescript from "../assets/ts.svg";
import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import Next from "../assets/nextjs.svg";
import Git from "../assets/git.svg";
import Github from "../assets/github.svg";
import Node from "../assets/nodejs.svg";
import Tailwind from "../assets/tailwind.svg";
import Vite from "../assets/vite.svg";
import Shadcn from "../assets/shadcn-logo.png";
import Java from "../assets/java.svg";
import MUI from "../assets/mui.svg";
import Mongodb from "../assets/mongodb.svg";
import Bootstrap from "../assets/bootstrap.svg";
import Express from "../assets/express.svg";
import Vscode from "../assets/vscode.svg";
import Vercel from "../assets/vercel.svg";
import Database from "../assets/database.svg";
import Mysql from "../assets/mysql.svg";
import Codex from "../assets/hello-world.webp";
import Notecraft from "../assets/notecraft.png";
import LMS from "../assets/lms.webp";
import Geek from "../assets/geeks.svg";
import Portfolio from "../assets/portfolio.png";
import Fibo from "../assets/fibo.png";
import Weekday from "../assets/weekday.png";
import Quill from "../assets/quill.png";
import DiaDocs from "../assets/diagramdocs.png";
import DigiLab from "../assets/digilab.png";
import Xero from "../assets/xero.png";
import Intelli from "../assets/intelli.png";
import Npm from "../assets/npm.svg";
import Figma from "../assets/figma.svg";
import Netlify from "../assets/netlify.svg";
import API from "../assets/api.svg";
import Chrome from "../assets/chrome.svg";
import Windows from "../assets/windows.svg";

export const expertise = [
  { icon: Monitor, title: "Software Development", desc: "experienced in object oriented programming: java, javascript, typescript." },
  { icon: FaReact, title: "Frontend ReactJs, NextJs", desc: "passionate about ui/ux. Development experience in html, css, js, react and Nextjs frameworks." },
  { icon: PencilRuler, title: "User Interface, UI Developer", desc: "hands-on experience developing attractive user interfaces using bootstrap, tailwind css, shadcn, materialUI, figma." },
];

export const MobileNavigation = [
  { title: "home", href: "/" },
  { title: "about", href: "/about" },
  { title: "my work", href: "/work" },
  { title: "my expertise", href: "/expertise" },
  { title: "experience", href: "/experience" },
  { title: "contact", href: "/contact" },    
];

export const Navigation = [
  { title: "about", to: "/about" },
  { title: "expertise", to: "/expertise" },
  { title: "work", to: "/work" },
  { title: "experience", to: "/experience" },
  { title: "contact", to: "/contact" },
];

export const AboutMe = "Hello! I am Sahil Ahmed, a front-end developer or React developer from India. As a developer, I am deeply interested in both design and coding, and I enjoy using React.js or Next.js to build web application interfaces and functionality. I am a fresh graduate with Bachelor's degree in Electronics and Electrical Enigineering.";

export const education = [
  { 
    course: "Bachelor's of Technology, B.TECH",
    collegeName: "Dr. Akhilesh Das Gupta Institute of Technology and Management",
    batch: "2018 - 2022",
    collegeAddress: "Shastri Park, New Delhi, Delhi",
    description: "Graduated with B.Tech from ADGITM formerly known as Northern India Engineering College major in Electronics and Electrical Engineering with 8.6 CGPA",
  }
];

export const techStacks = [
  { icon: React, title: "React" },
  { icon: Javascript, title: "Javascript" },
  { icon: Next, title: "Nextjs" },
  { icon: Typescript, title: "Typescript" },
  { icon: HTML, title: "HTML" },
  { icon: CSS, title: "CSS" },
  { icon: Vite, title: "Vite" },
  { icon: Tailwind, title: "Tailwind" },
  { icon: Node, title: "Node" },
  { icon: Shadcn, title: "Shadcn"},
  { icon: Mongodb, title: "MongoDB" },
  { icon: Mysql, title: "MySQL" },
  { icon: Github, title: "Github" },
  { icon: Git, title: "Git" },
  { icon: Java, title: "Java" },
  { icon: Vscode, title: "VS Code" },
  { icon: Vercel, title: "Vercel" },
  { icon: MUI, title: "MUI" },
  { icon: Bootstrap, title: "Bootstrap" },
  { icon: Database, title: "Database" },
  { icon: Express, title: "Express" },
  { icon: Npm, title: "NPM" },
  { icon: Figma, title: "Figma" },
  { icon: Netlify, title: "Netlify" },
  { icon: API, title: "API" },
  { icon: Chrome, title: "Chrome" },
  { icon: Windows, title: "Windows" },
];

export const items = [
  {
    title: "Code-X: Coding Editor/Compiler",
    description: "An Editor where you can code with 10+ languages and 10+ themes.",
    header: Codex,
    tag: "Fullstack",
    link: "https://github.com/1999-sahil/code-x-code-editor"
  },
  {
    title: "EdFlex Learning: A LMS Platform",
    description: "A learning management system that provides a large and indispensable features to support teaching and learning.",
    header: LMS,
    tag: "Fullstack",
    link: "https://github.com/1999-sahil/edflex_lms"
  },
  {
    title: "Modern Portfolio: Next.js with Framer motion",
    description: "A portfolio using using Next.js along with framer motion using Tailwind CSS.",
    header: Portfolio,
    tag: "UI",
    link: "https://github.com/1999-sahil/my-portfolio"
  },
  {
    title: "Notecraft, A digital workplace where better, faster work happens",
    description: "A freemium productivity and note taking web application based on File and Folder structure",
    header: Notecraft,
    tag: "Fullstack",
    link: "https://github.com/1999-sahil/notecraft-nextjs"
  },
  {
    title: "GeekGazette: A platofrm for sharing your art and skills",
    description: "GeekGazette is a social networking platform where users can showcase their skills and share it for others.",
    header: Geek,
    tag: "Fullstack",
    link: "https://github.com/1999-sahil/geekgazette-nextjs-app"
  },
  {
    title: "Track/Untrack Mobile Progress Bar",
    description: "",
    header: Fibo,
    tag: "Frontend",
    link: "https://github.com/1999-sahil/fibo-frontend-assignment"
  },
  {
    title: "Infinite Scrollling with API data",
    description: "",
    header: Weekday,
    tag: "Frontend",
    link: "https://github.com/1999-sahil/weekday-frontend"
  },
  {
    title: "QuillAudits UI",
    description: "",
    header: Quill,
    tag: "UI",
    link: "https://github.com/1999-sahil/quillAudits-frontend"
  },
  {
    title: "DiagramDocs: A digital canvas",
    description: "DiagramDocs provides docs and diagrams platform for engineering teams. DiagramDocs enables developers to create docs and diagrams at the speed of thought ",
    header: DiaDocs,
    tag: "Fullstack",
    link: "https://github.com/1999-sahil/diagramdocs_nextjs-convex"
  },
  {
    title: "Digilabs Admin Panel UI",
    description: "",
    header: DigiLab,
    tag: "Frontend",
    link: "https://github.com/1999-sahil/digilabs-frontend-round1"
  },
  {
    title: "XeroCode UI",
    description: "",
    header: Xero,
    tag: "UI",
    link: "https://github.com/1999-sahil/xerocodee-page"
  },
  {
    title: "IntelliTech Courses UI",
    description: "",
    header: Intelli,
    tag: "UI",
    link: "https://github.com/1999-sahil/intellitech_assessment"
  },
];
