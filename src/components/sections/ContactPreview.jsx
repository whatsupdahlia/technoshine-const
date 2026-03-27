import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import companyInfo from "../../data/companyInfo";

function ContactPreview() {
  return (
    <section className="bg-white py-24">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Contact Us"
            title="Ready to discuss your project?"
            text="Reach out to Technoshine for construction, renovation, modular works, and finishing solutions."
          />
          <div className="mt-8 space-y-4 text-base leading-8 text-slate-700">
            <p><span className="font-bold">Phone:</span> {companyInfo.contact.phone}</p>
            <p><span className="font-bold">Email:</span> {companyInfo.contact.email}</p>
            <p><span className="font-bold">Address:</span> {companyInfo.contact.address}</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <form className="grid gap-4">
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Full Name" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Email Address" />
            <input className="rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Phone Number" />
            <textarea className="min-h-[150px] rounded-2xl border border-slate-200 px-4 py-3 outline-none" placeholder="Tell us about your project" />
            <button className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Send Inquiry
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}

export default ContactPreview;