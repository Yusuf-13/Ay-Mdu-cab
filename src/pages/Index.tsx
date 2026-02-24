import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CarFleet from "@/components/CarFleet";
import PopularRoutes from "@/components/PopularRoutes";
import CitiesSection from "@/components/CitiesSection";
import TourPackages from "@/components/TourPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CarFleet />
      <PopularRoutes />
      <TourPackages />
      <CitiesSection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
