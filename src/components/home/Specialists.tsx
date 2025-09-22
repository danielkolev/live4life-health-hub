
import React, { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import OptimizedImage from "@/components/ui/optimized-image";

// Featured specialists with SuperDoc links
const featuredSpecialists = [{
  id: 1,
  name: "Д-р Валентин Янев",
  specialty: "Общопрактикуващ лекар",
  image: "https://superdoc.bg/photos/doctors/large/VOwzrqZ05xQyhEBIUQzsubEwQPluMYrQpJLonPoc.jpg",
  superdocLink: "https://superdoc.bg/lekar/valentin-yanev"
}, {
  id: 2,
  name: "Д-р Людмил Пеев",
  specialty: "Пластичен хирург",
  image: "/lovable-uploads/lyudmil-peev.jpg",
  superdocLink: "https://superdoc.bg/lekar/d-r-lyudmil-peev-6243"
}, {
  id: 3,
  name: "Д-р Владимир Наунов",
  specialty: "Кардиолог",
  image: "/lovable-uploads/7e2d0a6d-d316-4d11-ab97-c33b19b51671.png",
  superdocLink: "https://superdoc.bg/lekar/d-r-vladimir-naunov"
}, {
  id: 4,
  name: "Д-р Енвер Атип",
  specialty: "Съдов хирург",
  image: "/lovable-uploads/5f3b6504-bf21-410f-9c00-08169df720a6.png",
  superdocLink: "https://superdoc.bg/lekar/enver-atip"
}, {
  id: 5,
  name: "Д-р Байрам Боран",
  specialty: "Дерматолог",
  image: "/lovable-uploads/003cb386-7293-4bfc-9262-813bc69aa07a.png",
  isContactLink: true // Няма SuperDoc линк
}, {
  id: 6,
  name: "Д-р Ива Великова",
  specialty: "Невролог",
  image: "https://superdoc.bg/photos/doctors/small/HhyOfilfrV5XGTV2feFFcWIyDMfCAPzJ9wk6ssWF.jpg",
  superdocLink: "https://superdoc.bg/lekar/iva-velikova"
}, {
  id: 7,
  name: "Д-р Юсуф Мусов",
  specialty: "Ендокринолог",
  image: "https://superdoc.bg/photos/doctors/small/Q1fn82wkix8zi1Dtj3cUY1HdS014wA3tAV4ErZuO.jpg",
  superdocLink: "https://superdoc.bg/lekar/yusuf-musov"
}, {
  id: 8,
  name: "Д-р Тодор Калчев",
  specialty: "Ортопед",
  image: "https://superdoc.bg/photos/doctors/small/ZmMe5qAz3QNsgTiwDOH3Z8ZpVT25nuLimTeqwhDl.jpg",
  superdocLink: "https://superdoc.bg/lekar/todor-kalchev"
}];

const SpecialistsSection = () => {
  const [api, setApi] = useState<any>(null);

  // Функция за автоматична смяна на слайдера
  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  // Активираме автоматичната смяна на всеки 5 секунди
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(scrollNext, 5000);

    // Почистване на интервала при unmount
    return () => clearInterval(interval);
  }, [api, scrollNext]);
  
  return <section id="specialists" className="section-padding bg-gradient-to-b from-white to-gray-50 py-[30px]">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-dark">Нашите специалисти</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            В Медицински център Live4Life работят висококвалифицирани специалисти с богат опит в своята област. 
            Разчитайте на професионално отношение и внимание към всеки пациент.
          </p>
          <p className="text-sm text-primary font-medium">
            ✨ Кликнете на специалист за запазване на час в SuperDoc
          </p>
        </div>

        <div className="mb-10">
          <Carousel opts={{
          align: "start",
          loop: true
        }} setApi={setApi} className="w-full px-4">
            <CarouselContent>
              {featuredSpecialists.map((specialist, index) => (
                <CarouselItem key={specialist.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card 
                    className={`overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 bg-white soft-shadow h-full ${
                      specialist.superdocLink ? 'cursor-pointer hover:scale-[1.02]' : ''
                    }`}
                    onClick={() => {
                      if (specialist.superdocLink) {
                        window.open(specialist.superdocLink, '_blank', 'noopener,noreferrer');
                      }
                    }}
                  >
                    <CardContent className="p-0 h-full flex flex-col">
                      {/* Изображение */}
                      <div className="relative overflow-hidden">
                        <AspectRatio ratio={3 / 4} className="bg-gray-100">
                          {specialist.image ? (
                            <OptimizedImage
                              src={specialist.image} 
                              alt={`${specialist.name} - ${specialist.specialty} в медицински център Live4Life`}
                              width={300}
                              height={400}
                              className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 object-top`} 
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-gray-100">
                              <User className="h-16 w-16 text-gray-300" />
                            </div>
                          )}
                        </AspectRatio>
                        
                        {/* SuperDoc badge */}
                        {specialist.superdocLink && (
                          <div className="absolute top-3 right-3 bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
                            SuperDoc
                          </div>
                        )}
                      </div>
                      
                      {/* Информация за специалиста */}
                      <div className="p-4 flex-grow flex flex-col justify-between bg-gradient-to-b from-white to-gray-50">
                        <div className="text-center">
                          <h3 className="font-bold text-base text-secondary-dark mb-2 line-clamp-2 leading-tight">
                            {specialist.name}
                          </h3>
                          <p className="text-medical text-sm font-medium mb-3 line-clamp-2">
                            {specialist.specialty}
                          </p>
                        </div>
                        
                        {/* Бутон за час */}
                        <Button
                          size="sm"
                          variant={specialist.superdocLink ? "default" : "outline"}
                          className={`w-full transition-all duration-300 ${
                            specialist.superdocLink 
                              ? 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg' 
                              : 'border-primary/80 text-primary hover:bg-primary hover:text-white'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (specialist.superdocLink) {
                              window.open(specialist.superdocLink, '_blank', 'noopener,noreferrer');
                            } else {
                              // Redirect to contact page for specialists without SuperDoc link
                              window.location.href = '/contact';
                            }
                          }}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          Запазете час
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end mt-4 gap-2">
              <CarouselPrevious className="static translate-y-0 left-auto" />
              <CarouselNext className="static translate-y-0 right-auto" />
            </div>
          </Carousel>
        </div>

        <div className="mt-6 text-center">
          <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-white">
            <Link to="/specialists">
              Вижте всички специалисти <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default SpecialistsSection;
