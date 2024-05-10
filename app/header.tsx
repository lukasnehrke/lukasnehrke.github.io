import { ThemeToggle } from "@/components/theme-toggle";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Nav } from "@/app/nav";

export function Header(): JSX.Element {
  return (
    <header className="mx-auto max-w-4xl border-b px-4 pt-2 md:border-none md:pt-6">
      <div className="flex w-full flex-wrap items-center justify-between pb-2 md:border-b">
        <Nav />
        <div className="flex items-center justify-center">
          <ThemeToggle />
          <a href="https://github.com/lukasnehrke" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
