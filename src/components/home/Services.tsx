import { Link } from "react-router-dom";
import { ArrowRight, Calendar, HeartPulse, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/ui/animated-section";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const services = [{
    id: 1,
    icon: <HeartPulse className="h-12 w-12 text-primary icon-bounce" />,
    title: "Профилактични прегледи",
    description: "Профилактичните прегледи и изследвания идентифицират и предотвратяват потенциални здравословни проблеми и дискомфорт.",
    link: "/services#preventive"
  }, {
    id: 2,
    icon: <Users className="h-12 w-12 text-primary icon-bounce" />,
    title: "Корпоративно обслужване",
    description: "Специализирани пакети за корпоративни клиенти с гъвкави условия и високо качество на обслужване.",
    link: "/services#corporate"
  }, {
    id: 3,
    icon: <Calendar className="h-12 w-12 text-primary icon-bounce" />,
    title: "Специализирани изследвания",
    description: "Доплер, ехокардиография, аудиометрия, ултразвукова диагностика и други съвременни изследвания.",
    link: "/services#consultations"
  }];

  const { elementRef, visibleItems } = useStaggeredAnimation(services.length, 150);

  return (
    <AnimatedSection animation="fade-up">
      <section className="section-padding bg-gray-50 py-[30px]">
        <div className="container-custom">
          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Нашите услуги</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Медицински Център Live4Life предлага висококачествени медицински услуги с фокус върху профилактиката и грижата за здравето.
              </p>
            </div>
          </AnimatedSection>

          <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`border border-gray-200 hover:shadow-lg hover-lift transition-all duration-500 ${
                  visibleItems.has(index) ? 'animate-fade-up' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
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
                  <Button variant="link" asChild className="hover-glow">
                    <Link to={service.link} className="flex items-center text-primary hover:text-primary-dark animated-underline">
                      Научете повече <ArrowRight className="ml-2 h-4 w-4 icon-bounce" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <AnimatedSection animation="scale-in" delay={600}>
            <div className="text-center mt-12">
              <Button size="lg" asChild className="bg-primary hover:bg-primary-dark text-white hover-lift">
                <Link to="/services">
                  Вижте всички услуги <ArrowRight className="ml-2 h-4 w-4 icon-bounce" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </AnimatedSection>
  );
};
export default ServicesSection;