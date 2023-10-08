import type { Metadata } from "next";
import projects from "./projects.json";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "#projects - lukasnehrke.dev",
};

export default function Projects() {
  return (
    <main className="mx-auto px-4 pt-6 md:max-w-4xl md:pt-8">
      <h1 className="mb-4 font-semibold">Featured Projects</h1>
      <ul className="space-y-2" role="list">
        {projects.map((project) => (
          <li key={project.title} className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
            <p className="text-base font-semibold text-zinc-800 dark:text-zinc-200">{project.title}</p>
            <p className="mb-4 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <ul className="flex flex-wrap">
              {project.keywords.map((keyword) => (
                <li key={keyword} className="mr-2">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-slate-700 dark:text-gray-100">
                    {keyword}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
