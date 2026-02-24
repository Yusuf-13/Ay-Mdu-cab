import { motion } from "framer-motion";
import { Users, Briefcase, Fuel, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const cars = [
  {
    type: "Sedan",
    model: "Swift Dzire / Etios",
    oneWay: "₹11/km",
    roundTrip: "₹9/km",
    passengers: 4,
    luggage: 3,
    features: ["AC", "Music System", "GPS Tracking", "Clean Interiors"],
    popular: false,
  },
  {
    type: "SUV",
    model: "Innova / Ertiga",
    oneWay: "₹14/km",
    roundTrip: "₹12/km",
    passengers: 6,
    luggage: 4,
    features: ["AC", "Spacious", "GPS Tracking", "Charging Ports"],
    popular: true,
  },
  {
    type: "Premium",
    model: "Innova Crysta / Camry",
    oneWay: "₹18/km",
    roundTrip: "₹15/km",
    passengers: 6,
    luggage: 4,
    features: ["Premium AC", "Leather Seats", "WiFi", "Refreshments"],
    popular: false,
  },
  {
    type: "Tempo Traveller",
    model: "Force Traveller",
    oneWay: "₹22/km",
    roundTrip: "₹18/km",
    passengers: 12,
    luggage: 8,
    features: ["Push-back Seats", "AC", "Music", "Luggage Space"],
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CarFleet = () => {
  return (
    <section id="cars" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Choose Your Perfect Ride
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Well-maintained vehicles with experienced drivers for every budget and group size
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cars.map((car) => (
            <motion.div
              key={car.type}
              variants={cardVariants}
              className={`group relative bg-card rounded-xl border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${
                car.popular ? "border-secondary ring-2 ring-secondary/20" : "border-border"
              }`}
            >
              {car.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div className="p-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Fuel className="w-6 h-6 text-secondary" />
                </div>

                <h3 className="text-xl font-heading font-bold text-foreground mb-1">{car.type}</h3>
                <p className="text-sm text-muted-foreground mb-4">{car.model}</p>

                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{car.passengers}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Briefcase className="w-4 h-4" />
                    <span>{car.luggage} bags</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {car.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Star className="w-3 h-3 text-accent" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">One Way</span>
                    <span className="font-heading font-bold text-foreground">{car.oneWay}</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-muted-foreground">Round Trip</span>
                    <span className="font-heading font-bold text-accent">{car.roundTrip}</span>
                  </div>
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold group-hover:shadow-lg transition-shadow">
                  Book Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CarFleet;
