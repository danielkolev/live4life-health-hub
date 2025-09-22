
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/faq/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const FAQ = () => {
  useEffect(() => {
    document.title = "Често задавани въпроси | Медицински Център Live4Life";
  }, []);

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Често задавани въпроси - Медицински център Live4Life",
    "description": "Отговори на често задавани въпроси за услугите на Медицински център Live4Life",
    "url": "https://live4life-medical.com/faq"
  };

  return (
    <>
      <SEOHead
        title="Често задавани въпроси - Live4Life | Отговори на въпросите ви"
        description="Отговори на често задавани въпроси за услугите, които предлага Медицински Център Live4Life, работно време, цени и начини за записване на час."
        keywords="въпроси, отговори, медицински център, здравна информация, Live4Life, записване, прегледи"
        canonical="https://live4life-medical.com/faq"
        ogImage="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
      />
      <SchemaMarkup type="WebPage" data={faqPageSchema} />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container-custom py-12">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-dark">Често задавани въпроси</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Намерете отговори на най-често задаваните въпроси относно услугите и работата на медицински център Live4Life.
              </p>
            </div>
          </div>
          <FAQSection />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
