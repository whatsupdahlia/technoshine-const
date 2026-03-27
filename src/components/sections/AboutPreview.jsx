import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import companyInfo from "../../data/companyInfo";

function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <SectionTitle
            eyebrow="Our Story"
            title="Built on craftsmanship, strengthened by experience."
            text={companyInfo.story}
          />
          <p className="mt-6 text-base leading-8 text-slate-600">
            Technoshine continues to deliver dependable construction and finishing
            solutions for projects that require quality, precision, and professional
            execution.
          </p>
          <div className="mt-8">
            <Button to="/about" variant="dark">
              Learn More
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                Vision
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                {companyInfo.vision}
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                Goal
              </p>
              <p className="mt-3 text-base leading-7 text-slate-700">
                {companyInfo.goal}
              </p>
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 sm:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
                Mission
              </p>
              <ul className="mt-4 space-y-3 text-base leading-7 text-slate-700">
                {companyInfo.mission.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default AboutPreview;