
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import IndividualServices from "@/components/services/IndividualServices";
import DiagnosticServices from "@/components/services/DiagnosticServices";
import CorporateServices from "@/components/services/CorporateServices";
import LaboratoryServices from "@/components/services/LaboratoryServices";
import CallToAction from "@/components/services/CallToAction";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const Services = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Услуги";
  }, []);

  const servicesPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Услуги - Медицински център Live4Life",
    "description": "Професионални медицински услуги, профилактични прегледи, лабораторни изследвания и консултации със специалисти",
    "url": "https://live4life-medical.com/services",
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Профилактични прегледи"
      },
      {
        "@type": "MedicalTest",
        "name": "Лабораторни изследвания"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Корпоративни здравни услуги"
      }
    ]
  };
  
  return (
    <>
      <SEOHead
        title="Медицински услуги - Live4Life | Профилактични прегледи и лабораторни изследвания"
        description="Професионални медицински услуги в София - профилактични прегледи, лабораторни изследвания, корпоративни здравни програми и консултации със специалисти."
        keywords="медицински услуги, профилактични прегледи, лабораторни изследвания, корпоративни програми, София"
        canonical="https://live4life-medical.com/services"
        ogImage="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
      />
      <SchemaMarkup type="MedicalOrganization" data={servicesPageSchema} />
      
      <div className="min-h-screen flex flex-col">
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
          
          {/* Laboratory Section - Now in second position */}
          <LaboratoryServices />
          
          {/* Diagnostic Services */}
          <DiagnosticServices />
          
          {/* Individual Services */}
          <IndividualServices />
          
          {/* Corporate Services */}
          <CorporateServices />
          
          {/* Call to Action */}
          <CallToAction />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Services;
