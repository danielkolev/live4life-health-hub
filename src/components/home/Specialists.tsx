
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

type Specialist = {
  id: number;
  name: string;
  specialty: string;
  image: string;
  superdocLink: string;
};

const specialists: Specialist[] = [
  {
    id: 1,
    name: "Д-р Валентин Янев",
    specialty: "Общопрактикуващ лекар, Вътрешни болести",
    image: "https://superdoc.bg/photos/doctors/large/VOwzrqZ05xQyhEBIUQzsubEwQPluMYrQpJLonPoc.jpg",
    superdocLink: "https://superdoc.bg/lekar/valentin-yanev"
  },
  {
    id: 2,
    name: "Д-р Росен Разбойников",
    specialty: "Съдов хирург, Кардиохирург",
    image: "https://superdoc.bg/photos/doctors/small/qjKjFolEFJaZrXY4J8Oilsrac8HEDrF1MJkp7YkD.jpg",
    superdocLink: "https://superdoc.bg/lekar/rosen-razboynikov"
  },
  {
    id: 3,
    name: "Д-р Юсуф Мусов",
    specialty: "Ендокринолог",
    image: "https://superdoc.bg/photos/doctors/small/Q1fn82wkix8zi1Dtj3cUY1HdS014wA3tAV4ErZuO.jpg",
    superdocLink: "https://superdoc.bg/lekar/yusuf-musov"
  },
  {
    id: 4,
    name: "Д-р Ива Великова",
    specialty: "Невролог",
    image: "https://superdoc.bg/photos/doctors/small/HhyOfilfrV5XGTV2feFFcWIyDMfCAPzJ9wk6ssWF.jpg",
    superdocLink: "https://superdoc.bg/lekar/iva-velikova"
  },
  {
    id: 5,
    name: "Д-р Тодор Калчев",
    specialty: "Ортопед",
    image: "https://superdoc.bg/photos/doctors/small/ZmMe5qAz3QNsgTiwDOH3Z8ZpVT25nuLimTeqwhDl.jpg",
    superdocLink: "https://superdoc.bg/lekar/todor-kalchev"
  },
  {
    id: 6,
    name: "Д-р Йордан Томов",
    specialty: "Уролог",
    image: "https://superdoc.bg/photos/doctors/small/45JlGnlo78RPTM78XoEASGVyJOFpUKUDYEt3TuMH.jpg",
    superdocLink: "https://superdoc.bg/lekar/yordan-tomov"
  },
  {
    id: 7,
    name: "Д-р Анастасия Аврамова",
    specialty: "Акушер-гинеколог",
    image: "https://superdoc.bg/photos/doctors/small/kiWBQLJ4GEMpP72pwJorYf55voBVEiw7k9OHGrz0.jpg",
    superdocLink: "https://superdoc.bg/lekar/anastasia-avramova"
  },
];

const SpecialistsSection = () => {
  return (
    <section className="section-padding bg-gray-50" id="specialists">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Нашите специалисти</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            В Медицински център Live4Life работят висококвалифицирани специалисти с богат опит в своята област. 
            Разчитайте на професионално отношение и внимание към всеки пациент.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist) => (
            <Card key={specialist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="bg-secondary h-56 flex items-center justify-center overflow-hidden">
                  {specialist.image ? (
                    <img 
                      src={specialist.image} 
                      alt={specialist.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="h-16 w-16 text-white opacity-50" />
                  )}
                </div>
                <div className="p-5">
                  <Badge className="bg-primary text-white mb-2">{specialist.specialty}</Badge>
                  <h3 className="font-bold text-xl mb-3">{specialist.name}</h3>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    <a 
                      href={specialist.superdocLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full h-full"
                    >
                      Запазете час
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-lg font-medium">
            Квалифицирани специалисти от различни медицински специалности на едно място
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
