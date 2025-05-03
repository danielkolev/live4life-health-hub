
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SpecialistsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50" id="specialists">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary-dark">Нашите специалисти</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            В Медицински център Live4Life работят висококвалифицирани специалисти с богат опит в своята област. 
            Разчитайте на професионално отношение и внимание към всеки пациент.
          </p>
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-medium text-gray-600 mb-6">
            Квалифицирани лекари от различни медицински специалности на едно място
          </p>
          <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-white">
            <Link to="/specialists">
              Вижте всички специалисти <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;
