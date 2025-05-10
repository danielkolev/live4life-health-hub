
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/faq/FAQSection";
import ContactCTA from "@/components/home/ContactCTA";

const FAQ = () => {
  useEffect(() => {
    document.title = "Често задавани въпроси | Медицински Център Live4Life";
    
    // Add meta description dynamically
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Отговори на често задавани въпроси за услугите, които предлага Медицински Център Live4Life, работно време, цени и начини за записване на час.");
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Отговори на често задавани въпроси за услугите, които предлага Медицински Център Live4Life, работно време, цени и начини за записване на час.";
      document.head.appendChild(meta);
    }
    
    // Add keywords meta tag
    const keywordsMeta = document.createElement('meta');
    keywordsMeta.name = "keywords";
    keywordsMeta.content = "въпроси, отговори, медицински център, здравна информация, Live4Life, записване, прегледи";
    document.head.appendChild(keywordsMeta);
    
    // Add canonical link
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = "canonical";
    canonicalLink.href = "https://live4life.bg/faq";
    document.head.appendChild(canonicalLink);
    
    // Clean up function to remove the dynamically added meta tags
    return () => {
      document.head.removeChild(keywordsMeta);
      document.head.removeChild(canonicalLink);
    };
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
