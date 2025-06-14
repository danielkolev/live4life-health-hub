
import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

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
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white section-reveal" id="laboratory">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-dark">Лабораторни изследвания</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            В медицински център Live4Life предлагаме богата гама от лабораторни изследвания с високо качество и бързи резултати.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-8 rounded-xl hover-card animate-slide-in-left">
            <h3 className="text-xl font-bold mb-6 text-medical">Предлагани изследвания</h3>
            <ul className="space-y-4">
              {labServices.map((service, index) => (
                <li key={index} className="flex items-center group hover-text transition-all duration-200">
                  <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-gray-700 group-hover:text-gray-900">{service}</span>
                </li>
              ))}
            </ul>
            <Separator className="my-6" />
            <div className="flex justify-center">
              <Button className="bg-primary hover:bg-primary-dark text-white hover-button button-glow">
                <Calendar className="mr-2 h-4 w-4" />
                <Link to="/contact" className="text-white">
                  Запишете час за изследване
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden flex justify-center animate-slide-in-right">
            <div className="relative group">
              <img 
                src="/lovable-uploads/3382e796-4c40-4a9c-b014-7874fc2a9e29.png" 
                alt="Лабораторни изследвания в МЦ Live4Life" 
                className="max-w-sm h-auto rounded-lg enhanced-shadow hover-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaboratorySection;
