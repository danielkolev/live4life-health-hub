import React from "react";
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
import HealthInsuranceBanner from "@/components/home/HealthInsuranceBanner";
import TestimonialsSection from "@/components/home/Testimonials";
import EnhancedSEOHead from "@/components/seo/EnhancedSEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import { generateMedicalOrganizationSchema, generateWebPageSchema } from "@/utils/seoUtils";

const Index = () => {
  const medicalOrganizationSchema = generateMedicalOrganizationSchema(
    "Медицински център Live4Life",
    "Професионални профилактични прегледи и медицински услуги за индивидуални и корпоративни клиенти",
    "https://live4life-medical.com",
    {
      streetAddress: "ул. Христо Данов 11, вх. Г",
      city: "София",
      region: "София-град",
      postalCode: "1700",
      country: "BG"
    },
    {
      telephone: "+359890209898",
      email: "lifeforlife@abv.bg"
    },
    {
      latitude: "42.6492958",
      longitude: "23.354954"
    },
    [
      "Профилактични прегледи",
      "Лабораторни изследвания", 
      "Ултразвукова диагностика",
      "Консултации със специалисти",
      "Корпоративно здравеопазване"
    ],
    [
      "Общопрактикуваща медицина",
      "Кардиология", 
      "Неврология",
      "Дерматология",
      "Ендокринология",
      "Пластична хирургия"
    ]
  );

  const webPageSchema = generateWebPageSchema(
    "Медицински център Live4Life - Начало",
    "Медицински център Live4Life предлага професионални профилактични прегледи, лабораторни изследвания и консултации със специалисти в София.",
    "https://live4life-medical.com"
  );

  return (
    <>
      <EnhancedSEOHead
        title="Медицински център Live4Life - Профилактични прегледи и медицински услуги в София"
        description="Медицински център Live4Life предлага професионални профилактични прегледи, лабораторни изследвания и консултации със специалисти. Работим със здравна каса. Запазете час онлайн."
        keywords="медицински център софия, профилактични прегледи, лабораторни изследвания, здравна каса, нзок, лекари специалисти, корпоративно здравеопазване, превантивна медицина"
        canonical="https://live4life-medical.com"
        ogImage="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
        ogType="website"
        siteName="Медицински център Live4Life"
      />
      <SchemaMarkup type="MedicalOrganization" data={medicalOrganizationSchema} />
      <SchemaMarkup type="WebPage" data={webPageSchema} />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow" role="main">
          <Hero />
          <AwardSection />
          <AboutSection />
          <LaboratorySection />
          <ServicesSection />
          <SpecialistsSection />
          <TestimonialsSection />
          <ContactCTA />
          <LocationMap />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
