import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Rajesh Kumar", city: "Chennai", rating: 5, text: "Booked a drop taxi to Bangalore for a business trip. The driver was punctual, car was spotless, and the ride was incredibly smooth. Will definitely use again!" },
  { name: "Priya Sharma", city: "Bangalore", rating: 5, text: "Family trip to Ooty was made so comfortable. The Innova was spacious and the driver was very knowledgeable about scenic stops along the way." },
  { name: "Mohammed Asif", city: "Coimbatore", rating: 5, text: "Best drop taxi service I've used in South India. Transparent pricing with no hidden charges. The booking process was seamless." },
  { name: "Lakshmi Devi", city: "Madurai", rating: 5, text: "Travelled from Madurai to Chennai for a medical appointment. The driver was very caring and ensured we reached on time. Highly recommended!" },
  { name: "Suresh Babu", city: "Trichy", rating: 5, text: "I've tried many cab services but Drop Taxi is by far the most reliable. Clean cars, professional drivers, and great customer support." },
  { name: "Anitha Rajan", city: "Pondicherry", rating: 5, text: "Weekend getaway to Pondy from Chennai was amazing. The ECR route was beautiful and our driver suggested the best restaurants!" },
];

const doubled = [...testimonials, ...testimonials];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    let pos = 0;

    const scroll = () => {
      pos += 0.5;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animId = requestAnimationFrame(scroll);
    };
    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            What Our Riders Say
          </h2>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-hidden px-4"
        style={{ scrollBehavior: "auto" }}
      >
        {doubled.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-[350px] bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-sm"
          >
            <Quote className="w-8 h-8 text-secondary/30 mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
            <div className="flex items-center gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.city}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
