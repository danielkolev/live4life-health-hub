
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">За Медицински Център Live4Life</h2>
            <p className="text-gray-600 mb-6">
              Медицинският център <span className="text-primary font-semibold">Live4Life</span> е профилиран в организирането и провеждането на профилактични прегледи за индивидуални и корпоративни клиенти.
            </p>
            <p className="text-gray-600 mb-6">
              Професионализмът на нашите специалисти, модерното медицинско оборудване и персоналното отношение към всеки пациент са гаранция за високото качество на услугата, което предлагаме.
            </p>
            <p className="text-gray-600 mb-8">
              Нашата цел е да предложим на нашите пациенти най-доброто медицинско обслужване и грижа, защото вярваме, че профилактиката и ранната диагностика са ключът към доброто здраве.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-dark text-white">
              <Link to="/about" className="flex items-center">
                Научете повече за нас <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary rounded-lg transform -rotate-3"></div>
              <div className="relative bg-gray-100 h-64 w-64 md:h-80 md:w-80 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/lovable-uploads/35225f20-87a8-4ff5-bdd0-d2c9daa46aa8.png"
                  alt="Live4Life Medical Center"
                  className="h-48 md:h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
