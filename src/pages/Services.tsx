
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
        
        {/* Service Philosophy - Styled version */}
        <section className="section-padding bg-white py-[30px]">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 shadow-md border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-32 h-32 mb-4 md:mb-0">
                  <img 
                    src="/lovable-uploads/5056946d-3cf9-48fd-8ac2-6735c7f60235.png" 
                    alt="Live4Life Logo" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold mb-5 text-secondary">Нашата философия</h2>
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600">
                      В Медицински център Live4Life вярваме, че вашият комфорт и благополучие са в основата на всичко, което правим!
                    </p>
                    <p className="text-lg text-gray-700 font-semibold border-l-4 border-primary pl-4 italic">
                      Вашето здраве е наш приоритет!
                    </p>
                  </div>
                </div>
              </div>
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
