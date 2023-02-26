import type { AppProps } from "next/app";
import Link from "next/link";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${inter.variable} font-sans`}>
        <header className="mx-auto flex max-w-4xl flex-wrap items-center justify-between px-4 pt-6 md:pt-8">
          <h1 className="mr-8 overflow-hidden whitespace-nowrap font-semibold">
            <Link href="/">&lt;lukasnehrke /&gt;</Link>
          </h1>
          <nav className="flex space-x-2 overflow-hidden py-3 text-sm text-indigo-600">
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <Component {...pageProps} />
      </div>
    </>
  );
}
