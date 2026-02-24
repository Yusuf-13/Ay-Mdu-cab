import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Chennai", "Bangalore", "Coimbatore", "Madurai", "Salem",
  "Trichy", "Pondicherry", "Vellore", "Tirunelveli", "Thanjavur",
  "Mysore", "Ooty", "Kodaikanal", "Kochi", "Tirupati",
  "Hosur", "Erode", "Dindigul", "Nagercoil", "Kumbakonam",
];

const CitiesSection = () => {
  return (
    <section id="cities" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Coverage
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Cities We Serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Drop taxi service available across 20+ cities in South India
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="group bg-card border border-border rounded-xl p-4 text-center hover:border-secondary hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <MapPin className="w-5 h-5 text-secondary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-semibold text-foreground text-sm">{city}</h3>
              <p className="text-xs text-accent font-medium mt-1">Drop Taxi Available</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;
