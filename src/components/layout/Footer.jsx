import Container from "../common/Container";
import companyInfo from "../../data/companyInfo";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-black">TECHNOSHINE</h3>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
            {companyInfo.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>{companyInfo.contact.phone}</li>
            <li>{companyInfo.contact.email}</li>
            <li>{companyInfo.contact.address}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-orange-400">About</h4>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Trusted construction, renovation, fit-out, and stone restoration partner with decades of experience.
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;