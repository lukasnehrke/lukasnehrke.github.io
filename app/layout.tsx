import React from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Tabs from "../components/tabs";
import Theme from "../components/theme";
import "./globals.css";
import IconButton from "../components/icon-button";
import Providers from "./providers";
import { Github } from "lucide-react";
import { cn } from "../lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
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
