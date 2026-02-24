import { motion } from "framer-motion";
import { MapPin, Clock, Route, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const routes = [
  {
    name: "Chennai → Bangalore",
    category: "Business",
    distance: "350 km",
    time: "5.5 hrs",
    price: "₹3,500",
    description: "The most popular IT corridor route connecting two tech capitals of South India.",
    highlights: ["NH48 Highway", "Vellore Fort Stop", "Toll Included"],
  },
  {
    name: "Chennai → Pondicherry",
    category: "Scenic",
    distance: "170 km",
    time: "3 hrs",
    price: "₹1,800",
    description: "A beautiful coastal drive to the French Quarter with stunning ECR views.",
    highlights: ["East Coast Road", "Mahabalipuram", "Beach Views"],
  },
  {
    name: "Bangalore → Mysore",
    category: "Scenic",
    distance: "150 km",
    time: "3 hrs",
    price: "₹1,600",
    description: "Explore the city of palaces through the scenic Bangalore-Mysore expressway.",
    highlights: ["Expressway", "Srirangapatna", "Palace Visit"],
  },
  {
    name: "Chennai → Madurai",
    category: "Religious",
    distance: "460 km",
    time: "7.5 hrs",
    price: "₹4,800",
    description: "Journey to the temple city, home of the magnificent Meenakshi Temple.",
    highlights: ["Trichy Stop", "Temple City", "Cultural Route"],
  },
  {
    name: "Bangalore → Ooty",
    category: "Scenic",
    distance: "270 km",
    time: "5.5 hrs",
    price: "₹3,200",
    description: "Escape to the Queen of Hill Stations through 36 hairpin bends of the Nilgiris.",
    highlights: ["Nilgiri Hills", "36 Hairpin Bends", "Tea Gardens"],
  },
  {
    name: "Chennai → Coimbatore",
    category: "Business",
    distance: "500 km",
    time: "8 hrs",
    price: "₹5,200",
    description: "Connect to the Manchester of South India through scenic Salem bypass.",
    highlights: ["Salem Bypass", "Industrial Hub", "AC Comfort"],
  },
];

const categoryColors: Record<string, string> = {
  Scenic: "bg-accent/10 text-accent",
  Religious: "bg-orange-100 text-orange-600",
  Business: "bg-secondary/10 text-secondary",
};

const PopularRoutes = () => {
  return (
    <section id="routes" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Popular Routes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Top Destinations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the most-booked intercity routes across South India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, i) => (
            <motion.div
              key={route.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-xl hover:border-secondary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-heading font-bold text-foreground">{route.name}</h3>
                  <span className={`inline-block mt-1 text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[route.category]}`}>
                    {route.category}
                  </span>
                </div>
                <Route className="w-5 h-5 text-secondary" />
              </div>

              <p className="text-sm text-muted-foreground mb-4">{route.description}</p>

              <div className="flex gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{route.distance}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{route.time}</span>
                </div>
              </div>

              <div className="space-y-1.5 mb-5">
                {route.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Sparkles className="w-3 h-3 text-accent" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <span className="text-xs text-muted-foreground">Starting from</span>
                  <p className="text-xl font-heading font-bold text-foreground">{route.price}</p>
                </div>
                <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold">
                  Book Route
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutes;
