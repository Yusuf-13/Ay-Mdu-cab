import { Car, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-6 h-6 text-secondary" />
              <span className="font-heading font-bold text-lg">
                Drop<span className="text-secondary">Taxi</span>
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              South India's most trusted intercity drop taxi service. Safe, comfortable, and affordable rides across Tamil Nadu, Karnataka & Kerala.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "Our Cars", "Routes", "Tour Packages", "Cities", "About Us"].map((link) => (
                <a key={link} href="#" className="block text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Top Cities */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Top Cities</h4>
            <div className="space-y-2">
              {["Chennai", "Bangalore", "Coimbatore", "Madurai", "Mysore", "Pondicherry"].map((city) => (
                <a key={city} href="#" className="block text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                  {city}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/60">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>bookings@droptaxi.in</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>123 Anna Salai, T. Nagar, Chennai – 600017</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/40">
          <p>© 2026 DropTaxi. All rights reserved. | Built for South India's roads.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
