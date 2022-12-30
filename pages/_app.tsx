import type { AppProps } from "next/app";
import Link from "next/link";
import { Inter } from "@next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <header className="mx-auto flex max-w-4xl items-center justify-between pt-8">
        <h1 className="font-semibold">
          <Link href="/">[ lukasnehrke ]</Link>
        </h1>
        <nav className="flex space-x-4 text-sm text-indigo-600">
          <Link href="#">Projects</Link>
          <Link href="#">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  );
}
