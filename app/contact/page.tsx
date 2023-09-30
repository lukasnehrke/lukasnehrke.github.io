import { GlobeAltIcon, EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";
import GitHubIcon from "../../components/GitHubIcon";
import UrbitIcon from "../../components/UrbitIcon";
import type { Metadata } from "next";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "#contact - lukasnehrke.dev",
};

export default function Contact() {
  return (
    <main className="mx-auto flex px-4 pt-6 md:max-w-4xl md:pt-8">
      <ul className="relative columns-1 gap-8 space-y-2 text-sm sm:columns-2 md:columns-3">
        <li className="flex items-center">
          <a className="flex items-center" href="https://lukasnehrke.dev" rel="noopener noreferrer">
            <GlobeAltIcon className="hh-5 w-5" />
            <span className="ml-2 truncate">lukasnehrke.dev</span>
          </a>
        </li>
        <li className="flex items-center">
          <a className="flex items-center" href="mailto:lukasnehrke@protonmail.com">
            <EnvelopeIcon className="h-5 w-5" />
            <span className="ml-2 truncate">lukasnehrke@protonmail.com</span>
          </a>
        </li>
        <li className="flex items-center">
          <a className="flex items-center" href="https://github.com/lukasnehrke" rel="noopener noreferrer">
            <GitHubIcon className="h-5 w-5" />
            <span className="ml-2 truncate">@lukasnehrke</span>
          </a>
        </li>
        <li className="flex items-center">
          <UrbitIcon className="h-5 w-5" />
          <span className="ml-2 truncate">~ritsyx-nosfus</span>
        </li>
        <li className="flex items-center">
          <a className="flex items-center" href="#">
            <KeyIcon className="h-5 w-5" />
            <span className="ml-2 truncate">View GPG Key</span>
          </a>
        </li>
      </ul>
    </main>
  );
}
