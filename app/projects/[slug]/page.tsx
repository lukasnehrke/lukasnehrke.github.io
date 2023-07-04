import projects from "../projects.json";
import { notFound } from "next/navigation";
import Keyword from "../../../components/Keyword";

const getProjectFromSlug = async (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProjectFromSlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="prose prose-slate max-w-none">
      <h1>{project.title}</h1>

      <h2>Keywords</h2>
      <div className="not-prose space-x-1 space-y-2">
        {project.keywords.map((keyword) => (
          <Keyword key={keyword} title={keyword} />
        ))}
      </div>
    </article>
  );
}
