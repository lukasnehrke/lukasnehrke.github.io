import type { ReactElement } from "react";

export interface ActionProps {
  text: string;
  icon: ReactElement;
  href?: string;
}

export function Action({ icon, text, href }: ActionProps) {
  if (href) {
    return (
      <a className="flex items-center" href={href} rel="noopener noreferrer">
        <div className="text-slate-700 dark:text-zinc-200">{icon}</div>
        <span className="ml-2 truncate">{text}</span>
      </a>
    );
  }

  return (
    <div className="flex items-center">
      <div className="text-slate-700 dark:text-zinc-200">{icon}</div>
      <span className="ml-2 truncate">{text}</span>
    </div>
  );
}
