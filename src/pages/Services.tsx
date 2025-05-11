import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import IndividualServices from "@/components/services/IndividualServices";
import DiagnosticServices from "@/components/services/DiagnosticServices";
import CorporateServices from "@/components/services/CorporateServices";
import LaboratoryServices from "@/components/services/LaboratoryServices";
import CallToAction from "@/components/services/CallToAction";
const Services = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Услуги";
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <ServicesHero />
        
        {/* Service Philosophy */}
        <section className="section-padding bg-white py-[30px]">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-secondary">Нашата философия</h2>
              <p className="text-lg text-gray-600 mb-4">
                В Медицински център Live4Life вярваме, че вашият комфорт и благополучие са в основата на всичко, което правим!
              </p>
              <p className="text-lg text-gray-600 font-semibold">
                Вашето здраве е наш приоритет!
              </p>
            </div>
          </div>
        </section>
        
        {/* Diagnostic Services - Now in second position */}
        <DiagnosticServices />
        
        {/* Individual Services */}
        <IndividualServices />
        
        {/* Corporate Services */}
        <CorporateServices />
        
        {/* Laboratory Section */}
        <LaboratoryServices />
        
        {/* Call to Action */}
        <CallToAction />
      </div>

      <Footer />
    </div>;
};
export default Services;