
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

// Featured specialists (show only 3 on homepage)
const featuredSpecialists = [
  {
    id: 1,
    name: "Д-р Валентин Янев",
    specialty: "Общопрактикуващ лекар",
    image: "https://superdoc.bg/photos/doctors/large/VOwzrqZ05xQyhEBIUQzsubEwQPluMYrQpJLonPoc.jpg",
  },
  {
    id: 2,
    name: "Д-р Росен Разбойников",
    specialty: "Съдов хирург",
    image: "https://superdoc.bg/photos/doctors/small/qjKjFolEFJaZrXY4J8Oilsrac8HEDrF1MJkp7YkD.jpg",
  },
  {
    id: 3,
    name: "Д-р Ива Великова",
    specialty: "Невролог",
    image: "https://superdoc.bg/photos/doctors/small/HhyOfilfrV5XGTV2feFFcWIyDMfCAPzJ9wk6ssWF.jpg",
  }
];

const SpecialistsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="specialists">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-dark">Нашите специалисти</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            В Медицински център Live4Life работят висококвалифицирани специалисти с богат опит в своята област. 
            Разчитайте на професионално отношение и внимание към всеки пациент.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredSpecialists.map((specialist, index) => (
            <Card 
              key={specialist.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 bg-white/90 backdrop-blur-sm soft-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="h-48 overflow-hidden relative">
                  {specialist.image ? (
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/40 to-transparent z-0"></div>
                      <img 
                        src={specialist.image} 
                        alt={specialist.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gray-100">
                      <User className="h-16 w-16 text-gray-300" />
                    </div>
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg text-secondary-dark">{specialist.name}</h3>
                  <p className="text-medical text-sm">{specialist.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button size="lg" asChild className="bg-medical hover:bg-medical-dark text-white">
            <Link to="/specialists">
              Вижте всички специалисти <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
