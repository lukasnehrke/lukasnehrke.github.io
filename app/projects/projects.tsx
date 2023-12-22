import { ExternalLink } from "lucide-react";
import type { ReactElement } from "react";

export interface Project {
  title: string;
  description: string;
  subtitle?: string;
  featured?: boolean;
  archived?: boolean;
  color?: string;
  keywords?: string[];
  actions?: {
    icon: ReactElement;
    href: string;
  }[];
}

export const projects: Project[] = [
  {
    featured: true,
    title: "SCA Tool Serv",
    description: "Making it easy to use open source in products right.",
    color: "bg-gradient-to-br from-green-400 to-green-500",
    actions: [{ icon: <ExternalLink />, href: "https://scatool.com" }],
    keywords: ["Spring Boot", "React", "Monorepo", "TypeScript", "REST", "Material UI", "GitHub"],
  },
  {
    featured: true,
    title: "QDAcity",
    description: "Web application for qualitative data analysis (QDA).",
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    actions: [{ icon: <ExternalLink />, href: "https://qdacity.com/" }],
    keywords: [
      "Cloud Endpoints Framework",
      "React",
      "Yjs",
      "Java",
      "JavaScript",
      "Google Cloud",
      "App Engine",
      "styled-components",
      "GitLab",
    ],
  },
  {
    title: "Vulpo",
    featured: true,
    archived: false,
    description: "Open Source E-Learning Platform.",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    keywords: [
      "Jamstack",
      "Monorepo",
      "NextJS",
      "React",
      "Tailwind CSS",
      "Vercel",
      "TypeScript",
      "Turborepo",
      "tRPC",
      "Node.js",
      "Playwright",
      "MDX",
      "Markdown",
      "GitHub",
    ],
  },
  {
    title: "VulnAware",
    featured: false,
    archived: true,
    description: "Detect vulnerabilities in your open source dependencies.",
    keywords: [
      "Spring Boot",
      "Angular",
      "Google Cloud",
      "Java",
      "TypeScript",
      "REST",
      "Angular Material",
      "SCSS",
      "GitHub",
    ],
  },
  {
    title: "Marble",
    featured: false,
    archived: true,
    description: "Open Source Microblogging Service.",
    keywords: [
      "Monorepo",
      "Microservices",
      "React",
      "Google Cloud",
      "TypeScript",
      "Go",
      "Bazel",
      "gRPC",
      "Envoy",
      "Material UI",
      "GitHub",
    ],
  },
];
