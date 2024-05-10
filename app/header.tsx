import { ThemeToggle } from "@/components/theme-toggle";
import { Github } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Nav } from "@/app/nav";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Header(): JSX.Element {
  return (
    <header className="mx-auto max-w-4xl border-b px-4 pt-2 md:border-none md:pt-6">
      <div className="flex w-full flex-wrap items-center justify-between pb-2 md:border-b">
        <Nav />
        <div className="flex items-center justify-center">
          <ThemeToggle />
          <Link
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "rounded-full")}
            href="https://github.com/lukasnehrke"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
