import { Car } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-lg border-b border-border">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
      <a href="#" className="flex items-center gap-2">
        <Car className="h-7 w-7 text-accent" />
        <span className="font-display font-bold text-xl text-foreground">DriveEasy</span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
        <a href="#cars" className="hover:text-foreground transition-colors">Cars</a>
        <a href="#how" className="hover:text-foreground transition-colors">How It Works</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <a
        href="#cars"
        className="bg-accent text-accent-foreground font-display font-semibold text-sm px-5 py-2 rounded-xl hover:brightness-110 transition-all"
      >
        Rent Now
      </a>
    </div>
  </nav>
);

export default Navbar;
