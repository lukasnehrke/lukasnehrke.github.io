import { Metadata } from "next";

const projects = [
  {
    name: "Marble",
    description: "A simple microblogging service.",
    keywords: [
      "State: WIP",
      "Priority: low",
      "Go",
      "Typescript",
      "gRPC",
      "Bazel",
      "NextJS",
      "MongoDB",
      "Redis",
      "Microservices",
      "Kubernetes",
    ],
  },
  {
    name: "Lexica",
    description: "Static site generator (SSG) for E-Learning resources. ",
    keywords: ["State: planned", "Typescript", "Monorepo", "Jamstack"],
  },
];

export const runtime = "experimental-edge";

export const metadata: Metadata = {
  title: "#projects - lukasnehrke.dev",
};

export default function Projects() {
  return (
    <main className="mx-auto px-4 pt-6 md:max-w-4xl md:pt-8">
      <h1 className="mb-4 font-semibold">Featured Projects</h1>
      <ul className="space-y-2" role="list">
        {projects.map((project) => (
          <li key={project.name} className="rounded-xl border border-gray-200 p-4">
            <p className="text-base font-semibold text-zinc-800">{project.name}</p>
            <p className="mt-2 mb-4 text-sm text-zinc-600">{project.description}</p>
            <ul className="flex flex-wrap">
              {project.keywords.map((keyword) => (
                <li key={keyword} className="mr-2">
                  <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                    {keyword}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
}
