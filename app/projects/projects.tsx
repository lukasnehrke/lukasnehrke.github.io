import { ExternalLink, LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  subtitle?: string;
  featured?: boolean;
  archived?: boolean;
  color?: string;
  keywords?: string[];
  actions?: {
    icon: LucideIcon;
    href: string;
  }[];
}

export const projects: Project[] = [
  {
    featured: true,
    title: "SCA Tool",
    description: "Making open source safe, easy, and fun to use.",
    color: "bg-gradient-to-br from-green-400 to-green-500",
    actions: [{ icon: ExternalLink, href: "https://scatool.com" }],
    keywords: [],
  },
  {
    featured: true,
    title: "QDAcity",
    description: "Web application for qualitative data analysis (QDA).",
    color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    actions: [{ icon: ExternalLink, href: "https://qdacity.com/" }],
    keywords: [],
  },
  {
    title: "Vulpo",
    featured: true,
    archived: false,
    description: "An elegant CMS for e-learning content.",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    actions: [{ icon: ExternalLink, href: "https://vulpo.org/" }],
    keywords: [],
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
    description: "An Open Source Microblogging Service.",
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
] as const;
