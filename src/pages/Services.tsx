
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import IndividualServices from "@/components/services/IndividualServices";
import DiagnosticServices from "@/components/services/DiagnosticServices";
import CorporateServices from "@/components/services/CorporateServices";
import LaboratoryServices from "@/components/services/LaboratoryServices";
import MedicalEquipment from "@/components/services/MedicalEquipment";
import CallToAction from "@/components/services/CallToAction";

const Services = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Услуги";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <ServicesHero />
        
        {/* Individual Services */}
        <IndividualServices />
        
        {/* Diagnostic Services */}
        <DiagnosticServices />
        
        {/* Corporate Services */}
        <CorporateServices />
        
        {/* Laboratory Section */}
        <LaboratoryServices />
        
        {/* Medical Equipment */}
        <MedicalEquipment />
        
        {/* Call to Action */}
        <CallToAction />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
