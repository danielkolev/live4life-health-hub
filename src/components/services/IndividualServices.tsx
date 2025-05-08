
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";

const IndividualServices = () => {
  const individualServices = [
    "Общ профилактичен преглед",
    "Кардиологичен скрининг",
    "Лабораторни изследвания",
    "Ултразвукова диагностика",
    "Специализирани консултации",
    "Образна диагностика"
  ];

  return (
    <section id="preventive" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondary">Индивидуални профилактични прегледи</h2>
            <p className="text-gray-600 mb-8">
              Профилактичните прегледи и изследвания идентифицират и предотвратяват потенциални здравословни проблеми, 
              бъдещи усложнения и нежелан дискомфорт. Всеки преглед е съобразен с индивидуалните нужди на пациента, 
              включвайки необходимите изследвания и консултации със специалисти.
            </p>
            <ul className="space-y-3 mb-8">
              {individualServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              <Calendar className="mr-2 h-4 w-4" />
              Запазете час за профилактика
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/9b756219-ddad-4c2a-806b-1360e117f5dd.png"
              alt="Профилактични прегледи в МЦ Live4Life"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndividualServices;
