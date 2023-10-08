"use client";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import IconButton from "./icon-button";

export default function Theme() {
  const [scheme, setScheme] = useState("system");

  useEffect(() => {
    if (sessionStorage) {
      const val = sessionStorage.getItem("scheme");
      if (val) {
        setScheme(val === "dark" ? val : "light");
      }
    }
  }, []);

  useEffect(() => {
    const isDarkPreferred = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = scheme === "dark" || (scheme !== "light" && isDarkPreferred);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [scheme]);

  const toggleScheme = () => {
    const newScheme = scheme === "dark" ? "light" : "dark";
    setScheme(newScheme);

    if (sessionStorage) {
      sessionStorage.setItem("scheme", newScheme === "dark" ? newScheme : "light");
    }
  };

  return (
    <IconButton onClick={toggleScheme}>
      <MoonIcon className="hidden h-5 w-5 dark:block" />
      <SunIcon className="h-5 w-5 dark:hidden" />
    </IconButton>
  );
}
