
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, HeartPulse, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: <HeartPulse className="h-12 w-12 text-primary" />,
      title: "Профилактични прегледи",
      description: "Профилактичните прегледи и изследвания идентифицират и предотвратяват потенциални здравословни проблеми и дискомфорт.",
      link: "/services#preventive"
    },
    {
      id: 2,
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Корпоративно обслужване",
      description: "Специализирани пакети за корпоративни клиенти с гъвкави условия и високо качество на обслужване.",
      link: "/services#corporate"
    },
    {
      id: 3,
      icon: <Calendar className="h-12 w-12 text-primary" />,
      title: "Специализирани изследвания",
      description: "Доплер, ехокардиография, аудиометрия, ултразвукова диагностика и други съвременни изследвания.",
      link: "/services#consultations"
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Нашите услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Медицински Център Live4Life предлага висококачествени медицински услуги с фокус върху профилактиката и грижата за здравето.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-col items-center text-center">
                {service.icon}
                <CardTitle className="mt-4 text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="link" asChild>
                  <Link to={service.link} className="flex items-center text-primary hover:text-primary-dark">
                    Научете повече <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-white">
            <Link to="/services">
              Вижте всички услуги <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
