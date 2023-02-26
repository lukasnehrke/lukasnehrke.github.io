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
        <header className="mx-auto flex max-w-4xl flex-wrap items-center justify-between px-4 pt-6 md:pt-8">
          <h1 className="mr-8 overflow-hidden whitespace-nowrap font-semibold">
            <Link href="/">&lt;lukasnehrke /&gt;</Link>
          </h1>
          <nav className="flex space-x-2 overflow-hidden py-3 text-sm text-indigo-600">
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
