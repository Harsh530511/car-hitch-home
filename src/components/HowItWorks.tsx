import { motion } from "framer-motion";
import { ClipboardCheck, Car, MapPin } from "lucide-react";

const steps = [
  { icon: MapPin, title: "Choose Location & Date", description: "Select your city and travel dates" },
  { icon: Car, title: "Pick Your Car", description: "Browse from our wide range of vehicles" },
  { icon: ClipboardCheck, title: "Confirm & Drive", description: "Complete booking and hit the road" },
];

const HowItWorks = () => (
  <section id="how" className="py-20 bg-secondary">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-12"
      >
        How It Works
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
              <step.icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-display font-semibold text-lg text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm font-body">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
