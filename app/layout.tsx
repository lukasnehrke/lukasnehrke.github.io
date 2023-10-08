import React from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Tabs from "../components/tabs";
import Theme from "../components/theme";
import "../styles/globals.css";
import GitHubIcon from "../components/GitHubIcon";
import IconButton from "../components/icon-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark:bg-slate-900 dark:text-white">
        <header className="mx-auto max-w-4xl border-b px-4 pt-2 md:border-none md:pt-6">
          <div className="flex w-full flex-wrap items-center justify-between pb-2 md:border-b">
            <Tabs />
            <div className="flex items-center justify-center">
              <Theme />
              <a href="https://github.com/lukasnehrke" target="_blank" rel="noopener noreferrer">
                <IconButton>
                  <GitHubIcon className="h-5 w-5" />
                </IconButton>
              </a>
            </div>
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
