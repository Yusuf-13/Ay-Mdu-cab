import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Phone, Calendar, Clock, Shield, Headphones, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const images = [hero1, hero2, hero3, hero1, hero2, hero3];

const Hero = () => {
  const [tripType, setTripType] = useState<"one-way" | "round-trip">("one-way");

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Scrolling Background */}
      <div className="absolute inset-0">
        <div className="animate-hero-scroll flex h-full" style={{ width: `${images.length * 100}vw` }}>
          {images.map((img, i) => (
            <div key={i} className="h-full flex-shrink-0" style={{ width: "100vw" }}>
              <img src={img} alt="" className="w-full h-full object-cover" loading={i < 2 ? "eager" : "lazy"} />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 overlay-dark" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex items-center py-28 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex flex-wrap gap-4 text-primary-foreground/70 text-sm"
              >
                <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-accent" /> Best prices guaranteed</span>
                <span className="flex items-center gap-1.5"><Headphones className="w-4 h-4 text-accent" /> 24/7 customer support</span>
                <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-accent" /> Verified drivers</span>
              </motion.div>
            </motion.div>

            {/* Right: Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="bg-card/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 shadow-2xl border border-border/50"
            >
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">Quick Booking Form</h3>

              {/* Trip Type */}
              <div className="mb-5">
                <Label className="text-muted-foreground text-xs mb-2 block">Trip Type</Label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setTripType("one-way")}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold font-heading transition-colors ${
                      tripType === "one-way"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    One Way
                  </button>
                  <button
                    onClick={() => setTripType("round-trip")}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold font-heading transition-colors ${
                      tripType === "round-trip"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    Round Trip
                  </button>
                </div>
              </div>

              {/* Pickup & Drop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label className="text-muted-foreground text-xs mb-1.5 block">Pick-up Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Enter city" className="pl-9 bg-muted/50 border-border" />
                  </div>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs mb-1.5 block">Drop-off Location *</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Enter city" className="pl-9 bg-muted/50 border-border" />
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <Label className="text-muted-foreground text-xs mb-1.5 block">Phone Number *</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input type="tel" placeholder="+91 XXXXX XXXXX" className="pl-9 bg-muted/50 border-border" />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label className="text-muted-foreground text-xs mb-1.5 block">Pick-up Date *</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="date" className="pl-9 bg-muted/50 border-border" />
                  </div>
                </div>
                <div>
                  <Label className="text-muted-foreground text-xs mb-1.5 block">Pick-up Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input type="time" className="pl-9 bg-muted/50 border-border" />
                  </div>
                </div>
              </div>

              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-semibold text-lg h-12 shadow-lg shadow-secondary/25">
                Book Your Ride
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
