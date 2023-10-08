"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const tabs = [
  { name: "#home", href: "/" },
  { name: "#projects", href: "/projects" },
  { name: "#contact", href: "/contact" },
];

export default function Tabs() {
  const pathname = usePathname();
  const [selectedTab, setSelectedTab] = useState<string>();

  useEffect(() => {
    setSelectedTab(tabs.find((tab) => tab.href.substring(1) === pathname.slice(1))?.name);
  }, [pathname]);

  return (
    <nav className="flex items-center justify-center space-x-2" role="tablist">
      {tabs.map((tab, index) => {
        const isSelected = tab.name === selectedTab;
        const cn = clsx(
          "text-sm font-medium text-gray-900 py-2 px-3 rounded-md transition-colors hover:bg-slate-100 hover:bg-opacity-80 hover:dark:bg-gray-700 dark:text-white",
          { "bg-slate-100 dark:bg-gray-700": isSelected },
        );

        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={cn}
            role="tab"
            aria-selected={isSelected}
            aria-controls={tab.name.slice(1)}
          >
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
}
