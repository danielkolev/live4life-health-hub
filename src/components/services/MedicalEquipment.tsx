
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MedicalEquipment = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Нашето оборудване</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            В Медицински център Live4Life разполагаме с модерно медицинско оборудване за прецизна диагностика и ефективно лечение.
          </p>
        </div>
        
        <Card className="overflow-hidden border-none shadow-lg max-w-3xl mx-auto">
          <CardContent className="p-0">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png" 
                alt="Медицинско оборудване в Live4Life" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MedicalEquipment;
