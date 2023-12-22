import clsx from "clsx";
import { Project } from "./projects";
import { cloneElement } from "react";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative flex overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
      <div className={clsx("absolute h-full w-2", project.color ?? "bg-gray-200")} />
      <div className="w-full px-5 py-3">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{project.title}</p>
          <div className="text-zinc-800 dark:text-zinc-400">
            {project.actions?.map((action) => (
              <a key={action.href} href={action.href} target="_blank" rel="noopener">
                {cloneElement(action.icon, { size: 18 })}
              </a>
            ))}
          </div>
        </div>
        <p className="mb-3 mt-1 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
        <ul className="flex flex-wrap">
          {project.keywords?.map((keyword) => (
            <li key={keyword} className="mr-1">
              <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-slate-700 dark:text-gray-100">
                {keyword}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
