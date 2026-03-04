import { BiAccessibility } from "react-icons/bi";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiGreensock,
  SiGit,
  SiFigma,
  SiDocker,
  SiFirebase,
  SiStripe,
  SiJest,
  SiStorybook,
  SiCypress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGooglecloud,
} from "react-icons/si";

export const MockSkills = [
  { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "HTML5", icon: FaHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Framer Motion", icon: SiFramer, color: "text-[#0055FF]" },
  { name: "Three.js", icon: SiThreedotjs, color: "text-foreground" },
  { name: "GSAP", icon: SiGreensock, color: "text-[#88CE02]" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
  { name: "Git", icon: SiGit, color: "text-[#F7DF1E]" },
  { name: "Figma", icon: SiFigma, color: "text-[#E34]" },
  { name: "Accessibility (a11y)", icon: BiAccessibility, color: "text-[#F7DF]" },
  { name: "Docker", icon: SiDocker, color: "text-[#0055FF]" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "text-[#0055FF]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FE9000]" },
  { name: "Stripe", icon: SiStripe, color: "text-[#625AFE]" },
  { name: "Jest", icon: SiJest, color: "text-[#A74A58]" },
  { name: "Storybook", icon: SiStorybook, color: "text-[#FE4684]" },
  { name: "Cypress", icon: SiCypress, color: "text-[#68D2A6]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#306092]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#E28C00]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#12914E]" },
];

export const MockExperience = [
  {
    role: "Senior Frontend Engineer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Led the frontend team in developing highly interactive and accessible web applications using Next.js and React. Mentored junior developers and established code quality standards.",
  },
  {
    role: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2019 - 2022",
    description:
      "Built stunning marketing websites with complex animations using GSAP and Framer Motion. Collaborated closely with UI/UX designers to bring their visions to life.",
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Innovate",
    period: "2018 - 2019",
    description:
      "Started my journey by maintaining and creating new features for internal dashboards using React and standard RESTful APIs.",
  },
];

export const MockEducation = [
  {
    degree: "Bachelor of Computer Science",
    institution: "University of Technology",
    period: "2014 - 2018",
    description:
      "Focus on Software Engineering and Human-Computer Interaction.",
  },
  {
    degree: "Advanced Web Development Bootcamp",
    institution: "Tech Academy",
    period: "2018",
    description: "Intensive training in modern web development stack (MERN).",
  },
];
