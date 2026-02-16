import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, Mail, MapPin, Calendar, IndianRupee } from "lucide-react";
import { Car, formatPrice, LOCATIONS } from "@/data/cars";
import { toast } from "sonner";

interface BookingModalProps {
  car: Car;
  onClose: () => void;
  initialLocation?: string;
  initialPickup?: string;
  initialDropoff?: string;
}

const BookingModal = ({ car, onClose, initialLocation = "", initialPickup = "", initialDropoff = "" }: BookingModalProps) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: initialLocation,
    dropoffLocation: initialLocation,
    pickupDate: initialPickup,
    dropoffDate: initialDropoff,
  });

  const days = form.pickupDate && form.dropoffDate
    ? Math.max(1, Math.ceil((new Date(form.dropoffDate).getTime() - new Date(form.pickupDate).getTime()) / 86400000))
    : 1;

  const totalPrice = car.pricePerDay * days;
  const gst = Math.round(totalPrice * 0.18);
  const grandTotal = totalPrice + gst;

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.pickupLocation || !form.pickupDate || !form.dropoffDate) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success(
      `Booking confirmed! ${car.brand} ${car.name} for ${days} day(s). Total: ${formatPrice(grandTotal)}`,
      { duration: 5000 }
    );
    onClose();
  };

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto card-shadow"
        >
          <div className="sticky top-0 bg-card border-b border-border p-5 flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 className="font-display font-bold text-xl text-card-foreground">Book Your Ride</h2>
              <p className="text-muted-foreground text-sm">{car.brand} {car.name}</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-secondary rounded-xl transition-colors">
              <X className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-body font-medium text-card-foreground mb-1.5 block">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-body font-medium text-card-foreground mb-1.5 block">Phone *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-body font-medium text-card-foreground mb-1.5 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input value={form.email} onChange={(e) => update("email", e.target.value)} type="email" placeholder="email@example.com" className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-body font-medium text-card-foreground mb-1.5 block">Pickup City *</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select value={form.pickupLocation} onChange={(e) => update("pickupLocation", e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent appearance-none" required>
                    <option value="">Select</option>
                    {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-body font-medium text-card-foreground mb-1.5 block">Dropoff City</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <select value={form.dropoffLocation} onChange={(e) => update("dropoffLocation", e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent appearance-none">
                    <option value="">Same as pickup</option>
                    {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-body font-medium text-card-foreground mb-1.5 block">Pickup Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input type="date" value={form.pickupDate} min={today} onChange={(e) => update("pickupDate", e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
                </div>
              </div>
              <div>
                <label className="text-sm font-body font-medium text-card-foreground mb-1.5 block">Dropoff Date *</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input type="date" value={form.dropoffDate} min={form.pickupDate || today} onChange={(e) => update("dropoffDate", e.target.value)} className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent" required />
                </div>
              </div>
            </div>

            {/* Price Summary */}
            <div className="bg-secondary rounded-xl p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{formatPrice(car.pricePerDay)} × {days} day(s)</span>
                <span className="text-card-foreground font-medium">{formatPrice(totalPrice)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">GST (18%)</span>
                <span className="text-card-foreground font-medium">{formatPrice(gst)}</span>
              </div>
              <div className="border-t border-border pt-2 flex justify-between">
                <span className="font-display font-bold text-card-foreground">Total</span>
                <span className="font-display font-bold text-xl text-accent flex items-center gap-1">
                  <IndianRupee className="h-5 w-5" />
                  {grandTotal.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-display font-bold py-3.5 rounded-xl hover:brightness-110 transition-all accent-glow text-lg"
            >
              Confirm Booking
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;
