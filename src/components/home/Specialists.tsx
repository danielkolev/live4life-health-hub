
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import React, { useEffect, useState, useCallback } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Featured specialists (show only on homepage)
const featuredSpecialists = [{
  id: 1,
  name: "Д-р Валентин Янев",
  specialty: "Общопрактикуващ лекар",
  image: "https://superdoc.bg/photos/doctors/large/VOwzrqZ05xQyhEBIUQzsubEwQPluMYrQpJLonPoc.jpg"
}, {
  id: 2,
  name: "Д-р Людмил Пеев",
  specialty: "Пластичен хирург",
  image: "/lovable-uploads/lyudmil-peev.jpg"
}, {
  id: 3,
  name: "Д-р Владимир Наунов",
  specialty: "Кардиолог",
  image: "/lovable-uploads/7e2d0a6d-d316-4d11-ab97-c33b19b51671.png"
}, {
  id: 4,
  name: "Д-р Енвер Атип",
  specialty: "Съдов хирург",
  image: "/lovable-uploads/5f3b6504-bf21-410f-9c00-08169df720a6.png"
}, {
  id: 5,
  name: "Д-р Байрам Боран",
  specialty: "Дерматолог",
  image: "/lovable-uploads/003cb386-7293-4bfc-9262-813bc69aa07a.png"
}, {
  id: 6,
  name: "Д-р Ива Великова",
  specialty: "Невролог",
  image: "https://superdoc.bg/photos/doctors/small/HhyOfilfrV5XGTV2feFFcWIyDMfCAPzJ9wk6ssWF.jpg"
}, {
  id: 7,
  name: "Д-р Юсуф Мусов",
  specialty: "Ендокринолог",
  image: "https://superdoc.bg/photos/doctors/small/Q1fn82wkix8zi1Dtj3cUY1HdS014wA3tAV4ErZuO.jpg"
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
          <p className="text-gray-600 max-w-2xl mx-auto">
            В Медицински център Live4Life работят висококвалифицирани специалисти с богат опит в своята област. 
            Разчитайте на професионално отношение и внимание към всеки пациент.
          </p>
        </div>

        <div className="mb-10">
          <Carousel opts={{
          align: "start",
          loop: true
        }} setApi={setApi} className="w-full px-4">
            <CarouselContent>
              {featuredSpecialists.map((specialist, index) => <CarouselItem key={specialist.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white/90 soft-shadow h-full">
                    <CardContent className="p-0">
                      <AspectRatio ratio={1 / 1} className="bg-gray-100">
                        {specialist.image ? <img 
                          src={specialist.image} 
                          alt={specialist.name} 
                          className={`w-full h-full object-cover transition-transform duration-300 hover:scale-105 ${
                            specialist.name === "Д-р Владимир Наунов" ? "object-center" : "object-top"
                          }`} 
                        /> : <div className="h-full w-full flex items-center justify-center bg-gray-100">
                            <User className="h-16 w-16 text-gray-300" />
                          </div>}
                      </AspectRatio>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-lg text-secondary-dark">{specialist.name}</h3>
                        <p className="text-medical text-sm">{specialist.specialty}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>)}
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
