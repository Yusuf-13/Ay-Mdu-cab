import { motion } from "framer-motion";
import { Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    title: "Temple Trail of Tamil Nadu",
    route: "Chennai → Kanchipuram → Trichy → Madurai → Rameswaram",
    description: "Embark on a spiritual journey through the ancient temples of Tamil Nadu, visiting UNESCO heritage sites and architectural marvels.",
    highlights: ["Meenakshi Temple", "Ranganathaswamy Temple", "Rameswaram Corridor", "Kanchipuram Silks"],
    duration: "4 Days",
    price: "₹12,500",
  },
  {
    title: "Kerala Backwaters Escape",
    route: "Coimbatore → Munnar → Thekkady → Alleppey → Kochi",
    description: "Unwind through the lush tea gardens, spice plantations, and serene backwaters of God's Own Country.",
    highlights: ["Munnar Tea Gardens", "Periyar Wildlife", "Houseboat Experience", "Fort Kochi"],
    duration: "5 Days",
    price: "₹16,800",
  },
  {
    title: "Bangalore Heritage Circuit",
    route: "Bangalore → Mysore → Coorg → Ooty → Bangalore",
    description: "A perfect blend of royal heritage, coffee estates, and misty hill stations in Karnataka and Tamil Nadu.",
    highlights: ["Mysore Palace", "Coorg Coffee Trails", "Ooty Botanical Garden", "Bandipur Safari"],
    duration: "3 Days",
    price: "₹9,500",
  },
];

const TourPackages = () => {
  return (
    <section id="packages" className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-4">
            Tour Packages
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Curated Travel Experiences
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Multi-city tour packages with dedicated driver, fuel, and complete comfort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-3">
                <Clock className="w-4 h-4" />
                <span>{pkg.duration}</span>
              </div>

              <h3 className="text-2xl font-heading font-bold mb-2">{pkg.title}</h3>
              <p className="text-xs text-secondary font-medium mb-4 font-heading">{pkg.route}</p>
              <p className="text-primary-foreground/70 text-sm mb-6">{pkg.description}</p>

              <div className="space-y-2 mb-8">
                {pkg.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-primary-foreground/10">
                <div>
                  <span className="text-xs text-primary-foreground/50">Starting from</span>
                  <p className="text-2xl font-heading font-bold text-secondary">{pkg.price}</p>
                </div>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold">
                  Book Package
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
