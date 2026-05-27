import type { ReactNode } from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiBitbucket,
  SiJira,
  SiPostman,
  SiSwagger,
  SiNetlify,
  SiVercel,
  SiPrisma,
  SiNodedotjs,
  SiPostgresql,
  SiCloudflare,
  SiExpress,
} from "react-icons/si";

export type Skill = {
  title: string;
  icon: ReactNode;
};

export const skills: Skill[] = [
  { title: "React", icon: <FaReact /> },
  { title: "Next.js", icon: <SiNextdotjs /> },
  { title: "TypeScript", icon: <SiTypescript /> },
  { title: "JavaScript", icon: <FaJs /> },
  { title: "HTML5", icon: <FaHtml5 /> },
  { title: "CSS3", icon: <FaCss3Alt /> },
  { title: "Tailwind CSS", icon: <SiTailwindcss /> },
  { title: "Material UI", icon: <SiMui /> },
  { title: "Git", icon: <FaGitAlt /> },
  { title: "GitHub", icon: <FaGithub /> },
  { title: "Bitbucket", icon: <SiBitbucket /> },
  { title: "Figma", icon: <FaFigma /> },
  { title: "Jira", icon: <SiJira /> },
  { title: "Postman", icon: <SiPostman /> },
  { title: "Swagger", icon: <SiSwagger /> },
  { title: "Netlify", icon: <SiNetlify /> },
  { title: "Vercel", icon: <SiVercel /> },
];

export const currentLearning: Skill[] = [
  { title: "Prisma", icon: <SiPrisma /> },
  { title: "Node.js", icon: <SiNodedotjs /> },
  { title: "PostgreSQL", icon: <SiPostgresql /> },
  { title: "Cloudflare", icon: <SiCloudflare /> },
  { title: "Express", icon: <SiExpress /> },
  {
    title: "Hono",
    icon: (
      <div className="font-bold text-lg border-2 border-current rounded px-1">
        H
      </div>
    ),
  },
];
