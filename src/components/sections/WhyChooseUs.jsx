import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";

const points = [
  "30+ years of industry experience",
  "Quality-focused project execution",
  "Skilled workmanship and premium finishing",
  "Responsive planning and client coordination",
  "Trusted by commercial, residential, and institutional clients",
  "Strong background in stone restoration and modular construction",
];

function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionTitle
            eyebrow="Why Choose Us"
            title="A trusted construction partner for projects that demand quality, durability, and detail."
            text="Technoshine combines technical expertise, disciplined execution, and premium finishing standards in every project."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((point) => (
            <Reveal key={point}>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <p className="text-lg font-semibold leading-8 text-slate-100">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;