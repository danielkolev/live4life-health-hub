
import React from "react";
import { Button } from "@/components/ui/button";
import OptimizedImage from "@/components/ui/optimized-image";
import { Calendar, Heart, Users, Award, Clock } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-dark to-gray-900 text-white min-h-[85vh] flex items-center pt-16" role="banner">
      <div className="absolute inset-0 bg-pattern opacity-10" aria-hidden="true"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <header className="animate-fade-up text-center lg:text-left">
            <div className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-primary/30">
              ✨ Договор с НЗОК • Работим със здравна каса
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Медицински център <span className="text-primary">Live4Life</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl mx-auto lg:mx-0">
              Професионализмът на нашите специалисти, медицинското оборудване и персоналното отношение към всеки пациент са гаранция за високото качество на услугата.
            </p>
            <nav className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" aria-label="Основни действия">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => window.open('https://superdoc.bg/klinika/mts-live-4-life', '_blank', 'noopener,noreferrer')}
              >
                <Calendar className="mr-2 h-5 w-5" aria-hidden="true" />
                Запазете час в SuperDoc
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:bg-white hover:text-secondary"
                onClick={() => scrollToSection('about')}
                aria-label="Научете повече за нашите услуги"
              >
                <Heart className="mr-2 h-5 w-5" aria-hidden="true" />
                Научете повече
              </Button>
            </nav>
          </header>
          
          <div className="animate-fade-in hidden lg:block">
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <OptimizedImage
                  src="/lovable-uploads/401a9304-2236-4478-9e46-74d49820bdb8.jpg"
                  alt="Медицински център Live4Life - модерен център за профилактични прегледи в София"
                  width={600}
                  height={400}
                  priority={true}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-secondary-dark">8+</p>
                    <p className="text-xs text-gray-500">Специалисти</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary-dark">Златна Фирма</p>
                    <p className="text-xs text-gray-500">2025</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-secondary-dark">07:30 - 19:30</p>
                    <p className="text-xs text-gray-500">Пон - Пет</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: simplified visual */}
          <div className="animate-fade-in flex justify-center lg:hidden">
            <a 
              href="https://superdoc.bg/klinika/mts-live-4-life" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 backdrop-blur-sm p-8 rounded-full block"
              aria-label="Посетете нашата страница в SuperDoc"
            >
              <OptimizedImage
                src="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png" 
                alt="Live4Life Medical Center логотип" 
                width={300}
                height={200}
                priority={true}
                className="max-w-[200px]"
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
