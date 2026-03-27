import clients from "../../data/clients";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import Reveal from "../common/Reveal";

function ClientsSection() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <SectionTitle
          eyebrow="Trusted By"
          title="A track record built on dependable delivery and trusted client relationships."
          text="Technoshine has served high-end hotels, commercial properties, developers, and institutional clients."
          center
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <Reveal key={client}>
              <div className="rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center text-sm font-semibold text-slate-700 shadow-sm">
                {client}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ClientsSection;