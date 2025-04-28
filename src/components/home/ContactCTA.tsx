import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
const ContactCTA = () => {
  return <section className="bg-primary py-16">
      <div className="container-custom text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Свържете се с нас</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Имате въпроси или искате да запазите час? Свържете се с нашия екип.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="lg" variant="outline" className="border-white hover:bg-white transition-all duration-300 text-secondary-dark">
            <Phone className="mr-2 h-5 w-5" />
            <a href="tel:+359890209898">+359 89 020 9898</a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-dark transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            <a href="mailto:lifeforlife@abv.bg">lifeforlife@abv.bg</a>
          </Button>
        </div>
        <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-100 hover:text-primary-dark transition-all duration-300">
          <Link to="/contact">Свържете се с нас</Link>
        </Button>
      </div>
    </section>;
};
export default ContactCTA;