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
];