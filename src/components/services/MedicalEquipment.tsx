import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Microscope } from "lucide-react";
const MedicalEquipment = () => {
  const equipment = ["Ехограф GE Healthcare Versana Premier", "ЕКГ апарат Schiller CARDIOVIT AT-102", "Аудиометър GSI 18", "Авторефрактометър Huvitz HRK-8000A", "Дигитален рентгенов апарат Siemens Multix Impact"];
  return <section id="equipment" className="section-padding bg-gray-50 py-12">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-primary/10 mb-4">
            <Microscope className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Модерно медицинско оборудване</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Медицински център Live4Life разполага със съвременно оборудване, което позволява точна и бърза диагностика за вашето здраве.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, index) => <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center h-40 bg-gray-50 rounded-md mb-4">
                  <img src="/lovable-uploads/9ea23109-c9b6-433d-9838-a2fa74b52ab0.png" alt="Медицинско оборудване" className="h-32 object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{item}</h3>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200 shadow">
          <h3 className="text-2xl font-bold mb-4 text-center text-secondary">Диагностични услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-semibold">Абдоминална ехография</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-semibold">Доплер ехография</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-semibold">Ехокардиография</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-semibold">Трансвагинелна ехография</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-semibold">Ехография на щитовидна жлеза</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-semibold">Аудиометрия</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-md">
              <p className="font-semibold">Авторефрактометрия</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MedicalEquipment;