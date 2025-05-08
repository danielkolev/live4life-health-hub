
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CorporateServices = () => {
  const corporateServices = [
    "Групови профилактични прегледи",
    "Офис посещения на лекари",
    "Медицински консултации",
    "Специализирани пакети за компании",
    "Годишни здравни планове за служители",
    "Здравни обучения и семинари"
  ];

  return (
    <section id="corporate" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-secondary">Корпоративно здравеопазване</h2>
            <p className="text-gray-600 mb-8">
              Медицински център Live4Life е профилиран в организирането и провеждането на 
              профилактични прегледи за индивидуални и корпоративни клиенти. Нашите корпоративни 
              пакети могат да бъдат персонализирани според нуждите и бюджета на компанията.
            </p>
            <ul className="space-y-3 mb-8">
              {corporateServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Свържете се с нас за оферта
            </Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
              alt="Корпоративни услуги"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateServices;
