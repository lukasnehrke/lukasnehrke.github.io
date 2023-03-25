import { Metadata } from "next";

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "#index - lukasnehrke.dev",
};

export default function Home() {
  return (
    <main className="mx-auto flex px-4 pt-6 md:max-w-4xl md:pt-8">
      <span className="text-sm">There&apos;s nothing here (yet).</span>
    </main>
  );
}
