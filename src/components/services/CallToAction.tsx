
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container-custom text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Грижа за вашето здраве</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Запазете своя час за профилактика при специалист или се свържете с нас за повече информация.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 font-medium">
            <Calendar className="mr-2 h-5 w-5" />
            Запазете час
          </Button>
          <Button size="lg" variant="outline" asChild className="border-white text-gray-900 bg-white hover:bg-white/90 font-medium">
            <Link to="/contact">
              Свържете се с нас
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
