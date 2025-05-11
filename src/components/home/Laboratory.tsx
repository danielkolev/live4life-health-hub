
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
    <section id="laboratory" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-secondary">Лабораторни изследвания</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            В нашия медицински център се извършва пробовземане за всички видове лабораторни 
            изследвания с бързи и точни резултати.
          </p>
          <Separator className="w-24 h-1 bg-primary mx-auto my-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">Предлагаме следните видове изследвания:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {labServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button className="bg-secondary hover:bg-secondary/90 text-white" asChild>
                <Link to="/services">Научете повече за нашите лабораторни услуги</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/ce9b6b38-5b11-40b0-ab89-019563548313.jpg" 
              alt="Лабораторни изследвания в МЦ Live4Life" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaboratorySection;
