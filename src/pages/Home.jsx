import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import AboutPreview from "../components/sections/AboutPreview";
import ServicesPreview from "../components/sections/ServicesPreview";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ClientsSection from "../components/sections/ClientsSection";
import CTASection from "../components/sections/CTASection";
import ContactPreview from "../components/sections/ContactPreview";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedProjects />
      <WhyChooseUs />
      <ClientsSection />
      <CTASection />
      <ContactPreview />
      <Footer />
    </>
  );
}

export default Home;