
import { Button } from "@/components/ui/button";
import { Calendar, Heart } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-secondary to-gray-200 text-white min-h-[85vh] flex items-center pt-16" role="banner">
      <div className="absolute inset-0 bg-pattern opacity-10" aria-hidden="true"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <header className="animate-fade-up text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Медицински център <span className="text-primary">Live4Life</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white max-w-xl mx-auto lg:mx-0">
              Професионализмът на нашите специалисти, медицинското оборудване и персоналното отношение към всеки пациент са гаранция за високото качество на услугата.
            </p>
            <nav className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" aria-label="Основни действия">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white transition-all duration-300">
                <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                <a href="https://superdoc.bg/klinika/mts-live-4-life" target="_blank" rel="noopener noreferrer">
                  Запазете час в SuperDoc
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white hover:text-secondary"
                onClick={() => scrollToSection('about')}
                aria-label="Научете повече за нашите услуги"
              >
                <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
                Научете повече
              </Button>
            </nav>
          </header>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <a 
              href="https://superdoc.bg/klinika/mts-live-4-life" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-full block"
              aria-label="Посетете нашата страница в SuperDoc"
            >
              <img 
                src="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png" 
                alt="Live4Life Medical Center - Логотип на медицинския център с модерен дизайн и медицинска символика" 
                className="max-w-[200px] md:max-w-sm"
                loading="eager"
              />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white w-full h-auto">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
