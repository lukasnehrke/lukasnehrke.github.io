"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: ReactNode }): JSX.Element {
  return (
    <ThemeProvider enableSystem attribute="class" defaultTheme="light" disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
