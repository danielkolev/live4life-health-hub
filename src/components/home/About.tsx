
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const AboutSection = () => {
  return (
    <section className="section-padding py-[30px] section-reveal">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary hover-text">За Медицински Centre Live4Life</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Медицинският център <span className="text-primary font-semibold">Live4Life</span> е профилиран в организирането и провеждането на профилактични прегледи за индивидуални и корпоративни клиенти.
            </p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Професионализмът на нашите специалисти, модерното медицинско оборудване и персоналното отношение към всеки пациент са гаранция за високото качество на услугата, което предлагаме.
            </p>
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              Нашата цел е да идентифицираме и предотвратяваме потенциални здравословни проблеми, бъдещи усложнения и нежелан дискомфорт.
            </p>
            <Button asChild className="bg-primary hover:bg-primary-dark text-white hover-button button-glow">
              <Link to="/about" className="flex items-center animated-underline">
                Научете повече за нас <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-4 border-2 border-primary rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative rounded-lg overflow-hidden w-4/5 mx-auto hover-image">
                <AspectRatio ratio={1 / 1} className="w-full">
                  <img 
                    src="/lovable-uploads/9ea23109-c9b6-433d-9838-a2fa74b52ab0.png" 
                    alt="Съвременни медицински технологии в МЦ Live4Life" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" 
                  />
                </AspectRatio>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full animate-float opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
