import clsx from "clsx";
import { Project } from "./projects";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <div className="relative flex overflow-hidden rounded-md border border-gray-200 dark:border-gray-700">
      <div className={clsx("absolute h-full w-2", project.color ?? "bg-gray-200")} />
      <div className="w-full px-5 py-3.5">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">{project.title}</p>
          <div className="text-zinc-800 dark:text-zinc-400">
            {project.actions?.map((action) => (
              <a key={action.href} href={action.href} target="_blank" rel="noopener">
                <action.icon size={18} />
              </a>
            ))}
          </div>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
      </div>
    </div>
  );
}
