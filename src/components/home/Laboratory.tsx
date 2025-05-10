import { Check, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const LaboratorySection = () => {
  const labServices = ["Клинико-химични изследвания", "Хематологични изследвания", "Хормонални изследвания", "Туморни маркери", "Автоимунни изследвания", "Микробиологични изследвания", "Пробовземане и обработка на кръвни проби", "Домашни посещения за кръвни изследвания"];
  return <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img alt="Лабораторни изследвания" className="rounded-lg shadow-lg" src="/lovable-uploads/6d5f2de5-796e-484b-8bbf-5f659f800742.jpg" />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Лабораторни изследвания</h2>
            <p className="text-gray-600 mb-6">
              В Медицински център Live4Life предлагаме широк спектър от кръвни и други 
              лабораторни изследвания с бързи и точни резултати. Извършва се пробовземане,
              интравенозни инфузии и всякакъв вид медицински манипулации.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {labServices.map((service, index) => <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>{service}</span>
                </div>)}
            </div>
            
            <Button asChild className="bg-primary hover:bg-primary-dark text-white">
              <Link to="/services#laboratory">
                Запазете час за изследвания <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default LaboratorySection;