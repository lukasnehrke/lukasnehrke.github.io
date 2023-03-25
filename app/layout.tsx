import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import "../styles/globals.css";

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
      <body>
        <header className="mx-auto max-w-4xl border-b px-4 pt-2 md:border-none md:pt-8">
          <div className="flex w-full flex-wrap items-center justify-between md:border-b">
            <h1 className="mr-8 overflow-hidden whitespace-nowrap font-semibold">
              <Link href="/">LN</Link>
            </h1>
            <nav className="flex space-x-2 overflow-hidden py-3 text-sm text-indigo-600">
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
