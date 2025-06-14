
import { Award, Star } from "lucide-react";

const AwardSection = () => {
  return (
    <section className="bg-gray-100 py-16 section-reveal">
      <div className="container-custom text-center">
        <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto hover-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center animate-slide-in-left">
              <div className="mb-6 flex justify-center md:justify-start">
                <div className="relative">
                  <Award className="h-12 w-12 text-primary animate-float" fill="#E0AE18" />
                  <Star className="h-4 w-4 text-primary absolute -top-1 -right-1 animate-pulse" fill="#E0AE18" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 hover-text">Златна Фирма 2025</h2>
              <p className="text-lg text-gray-700 mb-6 text-left leading-relaxed">
                Гордеем се, че Медицински център Live4Life е удостоен с престижната награда 
                <span className="font-semibold text-primary hover-underline"> "Златна Фирма 2025"</span> за изключително качество 
                на предлаганите медицински услуги и високо клиентско доверие.
              </p>
              <div className="flex justify-center md:justify-start">
                <img 
                  src="/lovable-uploads/2d8e2758-f909-4ca8-84de-9598b438c871.png"
                  alt="Лого Live4Life"
                  className="h-20 hover-image"
                />
              </div>
            </div>
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative group">
                <img 
                  src="/lovable-uploads/82ba0413-76dc-42b1-8e31-a79b3f160fc8.png"
                  alt="Плакет Златна fi 2025"
                  className="max-h-[350px] object-contain enhanced-shadow rounded-lg hover-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
