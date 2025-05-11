
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const DiagnosticServices = () => {
  const diagnosticServices = [
    "Доплер",
    "Мамография",
    "Аудиометрия",
    "Ехокардиография",
    "Авторефрактометрия",
    "Абдоминална ехография",
    "Трансвагинална ехография",
    "Ехография на щитовидната жлеза",
    "Управление на хронични заболявания"
  ];
  
  return <section id="diagnostics" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
            <img alt="Диагностични услуги" className="w-full h-auto object-cover" src="/lovable-uploads/d78ded0d-8a4d-400d-a6ff-06884eeed6f5.jpg" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Диагностични изследвания</h2>
            <p className="text-gray-600 mb-8">
              При нас можете да запазите час за различни видове диагностични изследвания, 
              извършвани с модерно оборудване и от опитни специалисти. Своевременната и 
              точна диагностика е ключ към успешното лечение.
            </p>
            <ul className="space-y-3 mb-8">
              {diagnosticServices.map((service, index) => <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>{service}</span>
                </li>)}
            </ul>
            <Button className="bg-primary hover:bg-primary-dark text-white" asChild>
              <a href="https://superdoc.bg/klinika/mts-live-4-life" target="_blank" rel="noopener noreferrer">
                Запазете час за изследване
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default DiagnosticServices;
