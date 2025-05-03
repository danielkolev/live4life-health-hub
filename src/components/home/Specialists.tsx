
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

type Specialist = {
  id: number;
  name: string;
  specialty: string;
  experience?: string;
  education?: string;
  image?: string;
};

const specialists: Specialist[] = [
  {
    id: 1,
    name: "Д-р Иван Петров",
    specialty: "Кардиология",
    experience: "15+ години опит",
  },
  {
    id: 2,
    name: "Д-р Мария Иванова",
    specialty: "Ендокринология",
    experience: "10+ години опит",
  },
  {
    id: 3,
    name: "Д-р Георги Димитров",
    specialty: "Неврология",
    experience: "12+ години опит",
  },
  {
    id: 4,
    name: "Д-р Елена Колева",
    specialty: "Гастроентерология",
    experience: "8+ години опит",
  },
];

const SpecialistsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
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
                <div className="bg-secondary h-32 flex items-center justify-center">
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
                  <h3 className="font-bold text-xl mb-2">{specialist.name}</h3>
                  {specialist.experience && (
                    <p className="text-gray-600 text-sm">{specialist.experience}</p>
                  )}
                  {specialist.education && (
                    <p className="text-gray-600 text-sm mt-1">{specialist.education}</p>
                  )}
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
