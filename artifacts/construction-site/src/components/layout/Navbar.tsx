import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded transform group-hover:-rotate-12 transition-transform duration-300">
              <HardHat className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`font-display font-bold text-2xl tracking-wider uppercase ${isScrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
              Build<span className="text-primary">Co</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-semibold uppercase tracking-wider text-sm transition-colors hover:text-primary ${
                  location === link.path 
                    ? "text-primary" 
                    : isScrolled ? "text-foreground/80" : "text-white/90 drop-shadow-sm hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="font-display uppercase tracking-widest bg-primary hover:bg-primary/90 text-white rounded-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-xl">
          <nav className="flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-lg uppercase tracking-wider ${
                  location === link.path ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full font-display uppercase tracking-widest rounded-none">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
