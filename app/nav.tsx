"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = [
  { name: "#home", href: "/", segment: null },
  { name: "#projects", href: "/projects", segment: "projects" },
  { name: "#contact", href: "/contact", segment: "contact" },
] as const;

export function Nav(): JSX.Element {
  const segment = useSelectedLayoutSegment();
  return (
    <nav className="flex items-center justify-center space-x-2">
      {tabs.map((tab) => {
        const active = tab.segment === segment;
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={cn(buttonVariants({ variant: "ghost" }), "px-3 py-1.5", active ? "bg-accent" : undefined)}
          >
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
}
