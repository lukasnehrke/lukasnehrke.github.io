import React from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Tabs from "../components/tabs";
import Theme from "../components/theme";
import "../styles/globals.css";
import IconButton from "../components/icon-button";
import Providers from "./providers";
import { Github } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="dark:bg-slate-900 dark:text-white">
        <Providers>
          <header className="mx-auto max-w-4xl border-b px-4 pt-2 md:border-none md:pt-6">
            <div className="flex w-full flex-wrap items-center justify-between pb-2 md:border-b">
              <Tabs />
              <div className="flex items-center justify-center">
                <Theme />
                <a href="https://github.com/lukasnehrke" target="_blank" rel="noopener noreferrer">
                  <IconButton>
                    <Github size={18} />
                  </IconButton>
                </a>
              </div>
            </div>
          </header>
          {children}
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
