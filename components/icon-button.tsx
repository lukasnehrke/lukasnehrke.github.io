import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function IconButton({ children, ...props }: Props) {
  return (
    <button
      className="rounded-full p-2 text-slate-700 hover:bg-slate-100 dark:text-white hover:dark:bg-slate-700"
      {...props}
    >
      {children}
    </button>
  );
}
