import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/layout/PageBanner";
import ContactPreview from "../components/sections/ContactPreview";

function Contact() {
  return (
    <>
      <Navbar />
      <PageBanner
        title="Contact Technoshine"
        subtitle="Discuss your construction, renovation, finishing, or modular project with our team."
        image="https://picsum.photos/seed/contact-banner/1600/900"
      />
      <ContactPreview />
      <Footer />
    </>
  );
}

export default Contact;