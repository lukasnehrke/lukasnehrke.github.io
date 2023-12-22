import type { Metadata } from "next";
import { projects } from "./projects";
import { ProjectCard } from "./card";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "#projects - lukasnehrke.dev",
};

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const other = projects.filter((project) => !project.featured);

  return (
    <main className="mx-auto px-4 pt-6 md:max-w-4xl md:pt-8">
      <h1 className="mb-4 font-semibold">Featured Projects</h1>
      <ol className="space-y-2" role="list">
        {featured.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ol>

      <h1 className="mb-4 mt-8 font-semibold">Other Projects</h1>
      <ol className="space-y-2" role="list">
        {other.map((project) => (
          <li key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ol>

      <div className="mt-8 flex items-center justify-center">
        <a href="https://github.com/lukasnehrke" className="text-sm text-indigo-500" rel="noopener noreferrer">
          View more contributions on GitHub »
        </a>
      </div>
    </main>
  );
}
