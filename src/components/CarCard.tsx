import { motion } from "framer-motion";
import { Star, Users, Fuel, Settings2 } from "lucide-react";
import { Car, formatPrice } from "@/data/cars";

interface CarCardProps {
  car: Car;
  index: number;
  onBook: (car: Car) => void;
}

const CarCard = ({ car, index, onBook }: CarCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {!car.available && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="bg-destructive text-destructive-foreground px-4 py-1.5 rounded-full font-display font-semibold text-sm">
              Unavailable
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1">
          <Star className="h-3.5 w-3.5 text-accent fill-accent" />
          <span className="text-xs font-semibold text-card-foreground">{car.rating}</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">{car.brand}</p>
            <h3 className="font-display font-bold text-lg text-card-foreground">{car.name}</h3>
          </div>
          <span className="bg-secondary text-secondary-foreground text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
            {car.type}
          </span>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground text-sm mb-4">
          <span className="flex items-center gap-1"><Users className="h-4 w-4" />{car.seats}</span>
          <span className="flex items-center gap-1"><Settings2 className="h-4 w-4" />{car.transmission}</span>
          <span className="flex items-center gap-1"><Fuel className="h-4 w-4" />{car.fuel}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div>
            <span className="font-display font-bold text-xl text-accent">{formatPrice(car.pricePerDay)}</span>
            <span className="text-muted-foreground text-xs ml-1">/day</span>
          </div>
          <button
            onClick={() => onBook(car)}
            disabled={!car.available}
            className="bg-primary text-primary-foreground font-display font-semibold text-sm px-5 py-2.5 rounded-xl hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CarCard;
