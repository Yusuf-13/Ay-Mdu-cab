import { motion } from "framer-motion";
import { Shield, DollarSign, Clock, Route, Camera, Headphones } from "lucide-react";

const features = [
  { icon: Shield, title: "Expert Drivers", description: "Verified, trained drivers with 5+ years of intercity experience and local knowledge." },
  { icon: DollarSign, title: "Transparent Pricing", description: "No hidden charges. What you see is what you pay – toll, parking all included upfront." },
  { icon: Clock, title: "Flexible Timings", description: "Book your ride any time – early morning, late night, or holiday. We're always ready." },
  { icon: Route, title: "Best Routes", description: "Optimized routes for faster, safer travel. Our drivers know every shortcut and rest stop." },
  { icon: Camera, title: "Photo Stops", description: "Request scenic stops along the way. We make your journey as memorable as the destination." },
  { icon: Headphones, title: "24/7 Support", description: "Round-the-clock customer support via phone, WhatsApp, and email for complete peace of mind." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose Drop Taxi
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by 50,000+ travellers across South India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-secondary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <f.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
