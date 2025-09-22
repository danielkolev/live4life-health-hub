
import React, { useEffect } from "react";
import SpecialistsSection from "@/components/specialists/SpecialistsList";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const SpecialistsPage = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Нашите специалисти";
  }, []);

  const specialistsPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Специалисти - Медицински център Live4Life",
    "description": "Висококвалифицирани медицински специалисти с богат опит в Медицински център Live4Life",
    "url": "https://live4life-medical.com/specialists"
  };

  return (
    <>
      <SEOHead
        title="Медицински специалисти - Live4Life | Експертен екип лекари в София"
        description="Висококвалифицирани медицински специалисти с богат опит в Медицински център Live4Life. Професионално отношение и грижа за всеки пациент."
        keywords="медицински специалисти, лекари, експерти, Sofia, Live4Life, кардиолог, невролог, дерматолог"
        canonical="https://live4life-medical.com/specialists"
        ogImage="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
      />
      <SchemaMarkup type="WebPage" data={specialistsPageSchema} />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <div className="container-custom py-[20px]">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-dark">Нашите специалисти</h1>
              <p className="text-gray-600 max-w-3xl mx-auto">
                В Медицински център Live4Life работят висококвалифицирани специалисти с богат опит в своята област. 
                Разчитайте на професионално отношение и внимание към всеки пациент.
              </p>
            </div>
          </div>
          
          <SpecialistsSection />
          
          {/* Team section moved after specialists list */}
          <section className="section-padding bg-gray-50 py-[20px]">
            <div className="container-custom">
              <div className="bg-primary/10 rounded-lg p-8 mt-8">
                <p className="text-center text-xl text-gray-700">
                  "В нашия медицински център, всеки член на екипа споделя обща цел - да предоставя най-добрата възможна грижа 
                  за нашите пациенти. Вярваме в силата на профилактиката и ранната диагностика като ключови фактори за дълъг и здравословен живот."
                </p>
                <p className="text-center mt-4 font-semibold text-primary">
                  - Екипът на Live4Life
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SpecialistsPage;
