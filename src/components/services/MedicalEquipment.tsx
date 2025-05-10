
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Microscope } from "lucide-react";

const equipmentData = [
  "Ехограф GE Healthcare Versana Premier",
  "ЕКГ апарат Schiller CARDIOVIT AT-102",
  "Аудиометър GSI 18",
  "Авторефрактометър Huvitz HRK-8000A",
  "Дигитален рентгенов апарат Siemens Multix Impact"
];

const MedicalEquipment = () => {
  return (
    <section id="equipment" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Медицинско оборудване</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            В нашия медицински център разполагаме със съвременна апаратура, гарантираща високо качество на диагностиката и лечението.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-2">
                  <Microscope className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold text-secondary">{item}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-primary hover:bg-primary-dark text-gray-900 font-medium" 
            size="lg" 
            asChild
          >
            <a href="https://superdoc.bg/klinika/mts-live-4-life" target="_blank" rel="noopener noreferrer">
              Запазете час за изследване
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(MedicalEquipment);
