import { Link } from "wouter";
import { HardHat, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 inline-flex">
              <div className="bg-primary p-2 rounded">
                <HardHat className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wider uppercase text-white">
                Build<span className="text-primary">Co</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed mt-4">
              Building your vision, brick by brick. We deliver exceptional construction and management services for residential and commercial projects.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white/5 p-2 rounded hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/5 p-2 rounded hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl mb-6 text-white border-b-2 border-primary/50 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-primary text-xs">▶</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-primary text-xs">▶</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-primary text-xs">▶</span> Our Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-foreground/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-primary text-xs">▶</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl mb-6 text-white border-b-2 border-primary/50 pb-2 inline-block">Our Services</h3>
            <ul className="space-y-3 text-secondary-foreground/70">
              <li className="flex items-center gap-2"><span className="text-primary text-xs">▶</span> Residential Construction</li>
              <li className="flex items-center gap-2"><span className="text-primary text-xs">▶</span> Commercial Construction</li>
              <li className="flex items-center gap-2"><span className="text-primary text-xs">▶</span> Renovation & Remodeling</li>
              <li className="flex items-center gap-2"><span className="text-primary text-xs">▶</span> Project Management</li>
              <li className="flex items-center gap-2"><span className="text-primary text-xs">▶</span> Architecture & Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl mb-6 text-white border-b-2 border-primary/50 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4 text-secondary-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Industrial Ave, Suite 400<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@buildco.example.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat - Sun: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/50">
          <p>© {new Date().getFullYear()} BuildCo Construction. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
