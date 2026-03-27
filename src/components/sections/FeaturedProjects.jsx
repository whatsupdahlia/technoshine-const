import projects from "../../data/projects";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import Button from "../common/Button";

function FeaturedProjects() {
  const featured = projects.slice(0, 6);

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            eyebrow="Featured Projects"
            title="From renovation to modular construction, our work reflects precision and craftsmanship."
          />
          <Button to="/projects" variant="dark">
            See All Projects
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <Reveal key={project.title}>
              <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Scope: {project.scope}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FeaturedProjects;