
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="bg-primary py-[30px] my-[30px] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-10"></div>
      <div className="container-custom text-center text-white relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Свържете се с нас</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-50 animate-fade-in">
          Имате въпроси или искате да запазите час? Свържете се с нашия екип.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white hover:bg-white transition-all duration-300 hover:text-primary-dark text-primary-dark bg-white hover-button button-glow animate-slide-in-left"
          >
            <Phone className="mr-2 h-5 w-5" />
            <a href="tel:+359890209898" className="text-inherit">+359 89 020 9898</a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white hover:bg-white transition-all duration-300 hover:text-primary-dark text-primary-dark bg-white hover-button button-glow animate-slide-in-right"
          >
            <Mail className="mr-2 h-5 w-5" />
            <a href="mailto:lifeforlife@abv.bg" className="text-inherit">lifeforlife@abv.bg</a>
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-secondary text-white hover:bg-secondary-light transition-all duration-300 hover-button button-glow animate-scale-in"
          >
            <Calendar className="mr-2 h-5 w-5" />
            <a href="https://superdoc.bg/klinika/mts-live-4-life" target="_blank" rel="noopener noreferrer">
              Запазете час в SuperDoc
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
