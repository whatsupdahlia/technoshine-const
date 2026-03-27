import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/layout/PageBanner";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import companyInfo from "../data/companyInfo";

function About() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="About Technoshine Construction"
        subtitle="A trusted construction and finishing partner built on experience, quality, and premium workmanship."
        image="https://picsum.photos/seed/about-banner/1600/900"
      />

      <section className="bg-white py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Our Story" title="More than three decades of expertise." text={companyInfo.story} />
          </div>
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>{companyInfo.vision}</p>
            <p>{companyInfo.goal}</p>
            {companyInfo.mission.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-24">
        <Container>
          <SectionTitle eyebrow="Core Values" title="The values that shape every project we deliver." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {companyInfo.coreValues.map((value) => (
              <div key={value.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{value.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default About;