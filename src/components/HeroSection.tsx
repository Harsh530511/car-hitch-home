import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Search } from "lucide-react";
import { LOCATIONS } from "@/data/cars";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onSearch: (location: string, pickupDate: string, dropoffDate: string) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [location, setLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [dropoffDate, setDropoffDate] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(location, pickupDate, dropoffDate);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient opacity-80" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
        >
          Drive Your Dream Car
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-primary-foreground/70 text-lg sm:text-xl mb-10 max-w-2xl mx-auto"
        >
          Premium car rentals across India at unbeatable prices
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          onSubmit={handleSearch}
          className="bg-card/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 card-shadow max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent appearance-none"
              >
                <option value="">Select City</option>
                {LOCATIONS.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                min={today}
                placeholder="Pickup Date"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent" />
              <input
                type="date"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
                min={pickupDate || today}
                placeholder="Dropoff Date"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-accent text-accent-foreground font-display font-semibold py-3 px-6 rounded-xl hover:brightness-110 transition-all accent-glow"
            >
              <Search className="h-5 w-5" />
              Search Cars
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default HeroSection;
