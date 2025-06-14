
import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import OptimizedImage from "@/components/ui/optimized-image";

const LaboratorySection = () => {
  const labServices = [
    "Клинико-химични изследвания", 
    "Хематологични изследвания", 
    "Хормонални изследвания", 
    "Туморни маркери", 
    "Автоимунни изследвания", 
    "Микробиологични изследвания", 
    "Пробовземане и обработка на кръвни проби"
  ];
  
  return (
    <section id="laboratory" className="section-padding bg-gradient-to-b from-gray-50 to-white" role="region" aria-labelledby="lab-heading">
      <div className="container-custom">
        <header className="text-center mb-12 animate-fade-in">
          <h2 id="lab-heading" className="text-3xl md:text-4xl font-bold mb-4 text-secondary-dark">Лабораторни изследвания</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            В медицински център Live4Life предлагаме богата гама от лабораторни изследвания с високо качество и бързи резултати.
          </p>
        </header>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <article className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-medical">Предлагани изследвания</h3>
            <ul className="space-y-3" role="list">
              {labServices.map((service, index) => (
                <li key={index} className="flex items-center" role="listitem">
                  <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />
            <div className="flex justify-center">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
                <Link to="/contact" className="text-white">
                  Запишете час за изследване
                </Link>
              </Button>
            </div>
          </article>
          
          <aside className="rounded-lg overflow-hidden flex justify-center">
            <OptimizedImage 
              src="/lovable-uploads/3382e796-4c40-4a9c-b014-7874fc2a9e29.png" 
              alt="Лабораторни изследвания в МЦ Live4Life - модерна лаборатория с висококачествено оборудване за точни медицински анализи и бързи резултати" 
              className="max-w-sm h-auto rounded-lg shadow-md object-contain"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default LaboratorySection;
