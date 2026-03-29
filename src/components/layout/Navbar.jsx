import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import navLinks from "../../data/navLinks";
import Container from "../common/Container";
import Button from "../common/Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-orange-500" />
          <div>
            <p className="text-lg font-black tracking-wide text-white">TECHNOSHINE</p>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Construction</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive ? "text-orange-400" : "text-slate-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact">Get a Quote</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 px-3 py-2 text-white lg:hidden"
        >
          Menu
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 lg:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {link.name}
              </NavLink>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;