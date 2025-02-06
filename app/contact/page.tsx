import UrbitIcon from "../../components/icons/urbit-icon";
import type { Metadata } from "next";
import { Compass, Github, Mail } from "lucide-react";
import { Action } from "./action";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "#contact",
};

export default function ContactPage() {
  return (
    <main className="mx-auto flex px-4 pt-6 md:max-w-4xl md:pt-8">
      <ul className="relative columns-1 gap-8 space-y-2.5 text-sm">
        <li>
          <Action icon={<Compass size={20} />} href="https://lukasnehrke.com" text="lukasnehrke.com" />
        </li>
        <li>
          <Action
            icon={<Mail size={20} />}
            href="mailto:lukasnehrke@protonmail.com"
            text="lukasnehrke@protonmail.com"
          />
        </li>
        <li>
          <Action icon={<Github size={20} />} href="https://github.com/lukasnehrke" text="@lukasnehrke" />
        </li>
        <li className="flex items-center">
          <Action icon={<UrbitIcon className="h-5 w-5" />} text="~ritsyx-nosfus" />
        </li>
      </ul>
    </main>
  );
}
