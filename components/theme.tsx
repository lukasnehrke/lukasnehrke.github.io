"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import IconButton from "./icon-button";
import { useTheme } from "next-themes";

export default function Theme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <IconButton onClick={toggleTheme}>
      <MoonIcon className="hidden h-5 w-5 dark:block" />
      <SunIcon className="h-5 w-5 dark:hidden" />
    </IconButton>
  );
}
