
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DiagnosticServices = () => {
  const diagnosticServices = [
    "Доплер", 
    "Ехомамография", 
    "Аудиометрия", 
    "Ехокардиография", 
    "Авторефрактометрия", 
    "Абдоминална ехография", 
    "Трансвагинална ехография", 
    "Ехография на щитовидната жлеза", 
    "Управление на хронични заболявания"
  ];
  
  return (
    <section id="diagnostics" className="section-padding bg-gray-50 py-[30px]">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-secondary">Диагностични изследвания</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            При нас можете да запазите час за различни видове диагностични изследвания, 
            извършвани с модерно оборудване и от опитни специалисти. Своевременната и 
            точна диагностика е ключ към успешното лечение.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {diagnosticServices.map((service, index) => (
            <Button 
              key={index} 
              variant="outline" 
              className="h-auto py-4 px-5 text-center justify-center border-gray-200 transition-all"
              asChild
            >
              <Link to={`#`}>
                {service}
              </Link>
            </Button>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-primary hover:bg-primary-dark text-white" asChild>
            <a href="https://superdoc.bg/klinika/mts-live-4-life" target="_blank" rel="noopener noreferrer">
              Запазете час за изследване
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticServices;
