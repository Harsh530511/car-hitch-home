import { Car } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="hero-gradient text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Car className="h-6 w-6 text-accent" />
            <span className="font-display font-bold text-lg">Drive Easy</span>
          </div>
          <p className="text-primary-foreground/60 text-sm font-body leading-relaxed">
            India's trusted car rental service. Premium vehicles, transparent pricing, hassle-free experience.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60 font-body">
            <li><a href="#cars" className="hover:text-accent transition-colors">Browse Cars</a></li>
            <li><a href="#how" className="hover:text-accent transition-colors">How It Works</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Cities</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60 font-body">
            <li>Mumbai</li><li>Delhi</li><li>Bangalore</li><li>Hyderabad</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60 font-body">
            <li>📞 +91 98765 43210</li>
            <li>✉️ hello@driveeasy.in</li>
            <li>📍 Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/40 font-body">
        © 2026 Drive Easy. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
