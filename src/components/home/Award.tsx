
import { Award, Star } from "lucide-react";

const AwardSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container-custom text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex justify-center md:justify-start">
                <Award className="h-12 w-12 text-primary" fill="#E0AE18" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Златна Фирма 2025</h2>
              <p className="text-lg text-gray-600 mb-6 text-left">
                Гордеем се, че Медицински център Live4Life е удостоен с престижната награда 
                <span className="font-semibold text-primary"> "Златна Фирма 2025"</span> за изключително качество 
                на предлаганите медицински услуги и високо клиентско доверие.
              </p>
              <div className="flex justify-center md:justify-start">
                <img 
                  src="/lovable-uploads/2d8e2758-f909-4ca8-84de-9598b438c871.png"
                  alt="Лого Live4Life"
                  className="h-20"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/82ba0413-76dc-42b1-8e31-a79b3f160fc8.png"
                alt="Плакет Златна Фирма 2025"
                className="max-h-[350px] object-contain shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
