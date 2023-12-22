"use client";

import { Moon, Sun } from "lucide-react";
import IconButton from "./icon-button";
import { useTheme } from "next-themes";

export default function Theme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconButton onClick={toggleTheme}>
      <Moon className="hidden dark:block" size={18} />
      <Sun className="dark:hidden" size={18} />
    </IconButton>
  );
}
