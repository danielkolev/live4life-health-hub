
import Hero from "@/components/home/Hero";
import ServicesSection from "@/components/home/Services";
import AboutSection from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";
import LocationMap from "@/components/home/LocationMap";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SpecialistsSection from "@/components/home/Specialists";
import AwardSection from "@/components/home/Award";
import LaboratorySection from "@/components/home/Laboratory";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { useEffect } from "react";

const Index = () => {
  const medicalOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Медицински център Live4Life",
    "description": "Професионални профилактични прегледи и медицински услуги за индивидуални и корпоративни клиенти",
    "url": "https://live4life-medical.com",
    "logo": "/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png",
    "image": "/lovable-uploads/9ea23109-c9b6-433d-9838-a2fa74b52ab0.png",
    "telephone": "+359890209898",
    "email": "lifeforlife@abv.bg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Христо Данов 11, вх. Г",
      "addressLocality": "София",
      "addressRegion": "София-град",
      "postalCode": "1700",
      "addressCountry": "BG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.6492958",
      "longitude": "23.354954"
    },
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "medicalSpecialty": [
      "Общопрактикуваща медицина",
      "Кардиология",
      "Неврология",
      "Дерматология",
      "Ендокринология",
      "Лабораторни изследвания"
    ],
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
        "name": "Ултразвукова диагностика"
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="Медицински център Live4Life - Профилактични прегледи и медицински услуги в София"
        description="Медицински център Live4Life предлага професионални профилактични прегледи, лабораторни изследвания и консултации със специалисти. Запазете час онлайн."
        keywords="медицински център, профилактични прегледи, лабораторни изследвания, София, здравеопазване, лекари специалисти"
        canonical="https://live4life-medical.com"
        ogImage="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
      />
      <SchemaMarkup type="MedicalOrganization" data={medicalOrganizationSchema} />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow" role="main">
          <Hero />
          <AwardSection />
          <AboutSection />
          <LaboratorySection />
          <ServicesSection />
          <SpecialistsSection />
          <ContactCTA />
          <LocationMap />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
