
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const SpecializedConsultations = () => {
  const specialistServices = [
    "Офталмолог",
    "УНГ",
    "Гастроентеролог",
    "Акушер-гинеколог",
    "Съдов хирург",
    "Кардиолог"
  ];

  return (
    <section id="consultations" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Специализирани консултации</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            В Медицински център Live4Life можете да се консултирате със специалисти от различни медицински области.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialistServices.map((specialty, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2 text-secondary">{specialty}</h3>
              <p className="text-gray-600 mb-4">
                Консултация със специалист {specialty.toLowerCase()}, включваща преглед и препоръки за лечение или допълнителни изследвания.
              </p>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                <Calendar className="mr-2 h-4 w-4" />
                Запазете час
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializedConsultations;
