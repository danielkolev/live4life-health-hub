
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/faq/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";
import { Helmet } from "react-helmet";

const FAQ = () => {
  useEffect(() => {
    // This is for legacy browsers, meta title is now handled by Helmet
    document.title = "Често задавани въпроси | Медицински Център Live4Life";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Често задавани въпроси | Медицински Център Live4Life</title>
        <meta name="description" content="Отговори на често задавани въпроси за услугите, които предлага Медицински Център Live4Life, работно време, цени и начини за записване на час." />
        <meta name="keywords" content="въпроси, отговори, медицински център, здравна информация, Live4Life, записване, прегледи" />
        <link rel="canonical" href="https://live4life.bg/faq" />
      </Helmet>
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
