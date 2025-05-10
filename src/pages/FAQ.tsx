
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/faq/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";

const FAQ = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Често задавани въпроси";
  }, []);

  return (
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
  );
};

export default FAQ;
