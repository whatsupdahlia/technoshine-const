import Container from "../common/Container";
import Button from "../common/Button";

function CTASection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-20 text-white">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-100">
            Build with confidence
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Let’s turn your construction and finishing requirements into quality-built spaces.
          </h2>
        </div>
        <Button to="/contact" variant="dark">
          Request a Consultation
        </Button>
      </Container>
    </section>
  );
}

export default CTASection;