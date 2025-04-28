
import { Button } from "@/components/ui/button";
import { Calendar, Heart } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary to-secondary-dark text-white min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Медицински център <span className="text-primary">Live4Life</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100 max-w-xl">
              Професионализмът на нашите специалисти, медицинското оборудване и персоналното отношение към всеки пациент са гаранция за високото качество на услугата.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
                <Calendar className="mr-2 h-5 w-5" />
                Запазете час
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Heart className="mr-2 h-5 w-5" />
                Научете повече
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <img
              src="/lovable-uploads/9dcd0c65-d1b0-4b55-9ab0-4a786995dfd0.png"
              alt="Live4Life Medical Center Logo"
              className="max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="fill-white w-full h-auto"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
