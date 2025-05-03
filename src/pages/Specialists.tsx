
import SpecialistsSection from "@/components/specialists/SpecialistsList";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";

const SpecialistsPage = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Нашите специалисти";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container-custom py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-dark">Нашите специалисти</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              В Медицински център Live4Life работят висококвалифицирани специалисти с богат опит в своята област. 
              Разчитайте на професионално отношение и внимание към всеки пациент.
            </p>
          </div>
        </div>
        <SpecialistsSection />
      </main>
      <Footer />
    </div>
  );
};

export default SpecialistsPage;
