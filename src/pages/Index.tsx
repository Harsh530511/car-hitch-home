import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarCard from "@/components/CarCard";
import BookingModal from "@/components/BookingModal";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { CARS, CAR_TYPES, Car } from "@/data/cars";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";

const Index = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "rating">("price-asc");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchPickup, setSearchPickup] = useState("");
  const [searchDropoff, setSearchDropoff] = useState("");
  const [bookingCar, setBookingCar] = useState<Car | null>(null);

  const filteredCars = useMemo(() => {
    let cars = CARS.filter((c) => selectedType === "all" || c.type === selectedType);
    if (sortBy === "price-asc") cars.sort((a, b) => a.pricePerDay - b.pricePerDay);
    else if (sortBy === "price-desc") cars.sort((a, b) => b.pricePerDay - a.pricePerDay);
    else cars.sort((a, b) => b.rating - a.rating);
    return cars;
  }, [selectedType, sortBy]);

  const handleSearch = (location: string, pickup: string, dropoff: string) => {
    setSearchLocation(location);
    setSearchPickup(pickup);
    setSearchDropoff(dropoff);
    document.getElementById("cars")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBook = (car: Car) => {
    setBookingCar(car);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection onSearch={handleSearch} />

      {/* Cars Section */}
      <section id="cars" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              Choose Your Ride
            </h2>
            <p className="text-muted-foreground font-body max-w-md mx-auto">
              From budget-friendly hatchbacks to premium luxury sedans
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {CAR_TYPES.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-display font-medium transition-all ${
                    selectedType === type.value
                      ? "bg-accent text-accent-foreground accent-glow"
                      : "bg-secondary text-secondary-foreground hover:bg-accent/10"
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-secondary text-secondary-foreground text-sm font-body px-3 py-2 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-accent appearance-none pr-8"
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car, i) => (
              <CarCard key={car.id} car={car} index={i} onBook={handleBook} />
            ))}
          </div>

          {filteredCars.length === 0 && (
            <p className="text-center text-muted-foreground font-body py-12">No cars available for this category.</p>
          )}
        </div>
      </section>

      <HowItWorks />
      <Footer />

      {bookingCar && (
        <BookingModal
          car={bookingCar}
          onClose={() => setBookingCar(null)}
          initialLocation={searchLocation}
          initialPickup={searchPickup}
          initialDropoff={searchDropoff}
        />
      )}
    </div>
  );
};

export default Index;
