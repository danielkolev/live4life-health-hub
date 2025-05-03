
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/Services";
import AboutSection from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";
import LocationMap from "@/components/home/LocationMap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpecialistsSection from "@/components/home/Specialists";
import LaboratorySection from "@/components/home/Laboratory";
import AwardSection from "@/components/home/Award";
import PriceListSection from "@/components/home/PriceList";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Начало";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <SpecialistsSection />
      <LaboratorySection />
      <PriceListSection />
      <AwardSection />
      <ContactCTA />
      <LocationMap />
      <Footer />
    </div>
  );
};

export default Index;
