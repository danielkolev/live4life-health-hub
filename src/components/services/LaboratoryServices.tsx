
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const LaboratoryServices = () => {
  const additionalServices = ["Пробовземане", "Интравенозни инфузии", "Медицински манипулации", "Домашни посещения за медицински прегледи"];
  
  return <section id="laboratory" className="section-padding py-[29px]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-secondary">Лабораторни изследвания</h2>
            <p className="text-gray-600 mb-8">
              В нашия медицински център се извършва пробовземане за всички видове лабораторни 
              изследвания с бързи и точни резултати. Предлагаме и домашни посещения за 
              медицински прегледи и кръвни изследвания.
            </p>
            <ul className="space-y-3 mb-8">
              {additionalServices.map((service, index) => <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>{service}</span>
                </li>)}
            </ul>
            <Button className="bg-primary hover:bg-primary-dark text-gray-900 font-medium" asChild>
              <Link to="/contact">
                Запазете час за изследване
              </Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
            <img alt="Специалисти в МЦ Live4Life" className="w-full h-auto object-cover" src="/lovable-uploads/ce9b6b38-5b11-40b0-ab89-019563548313.jpg" />
          </div>
        </div>
      </div>
    </section>;
};

export default LaboratoryServices;
