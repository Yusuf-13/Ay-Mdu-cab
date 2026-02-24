import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const images = [hero1, hero2, hero3, hero1, hero2, hero3];

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Scrolling Background */}
      <div className="absolute inset-0">
        <div className="animate-hero-scroll flex h-full" style={{ width: `${images.length * 100}vw` }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="h-full flex-shrink-0"
              style={{ width: "100vw" }}
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
                loading={i < 2 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 overlay-dark" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-6"
            >
              <MapPin className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-primary-foreground">South India's Trusted Drop Taxi</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-primary-foreground leading-tight mb-6"
            >
              Your Journey,{" "}
              <span className="text-gradient">Our Passion</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg"
            >
              Premium intercity taxi service across Tamil Nadu, Karnataka & Kerala. Safe, comfortable, and always on time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg px-8 h-14 shadow-lg shadow-secondary/25"
              >
                Book Your Ride
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-heading font-medium text-lg px-8 h-14"
              >
                <a href="#routes">View Routes</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
