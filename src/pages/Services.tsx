
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Услуги";
  }, []);

  const individualServices = [
    "Общ профилактичен преглед",
    "Кардиологичен скрининг",
    "Лабораторни изследвания",
    "Ултразвукова диагностика",
    "Специализирани консултации",
    "Образна диагностика"
  ];

  const corporateServices = [
    "Групови профилактични прегледи",
    "Офис посещения на лекари",
    "Медицински консултации",
    "Специализирани пакети за компании",
    "Годишни здравни планове за служители",
    "Здравни обучения и семинари"
  ];
  
  const diagnosticServices = [
    "Доплер",
    "Мамография",
    "Аудиометрия",
    "Ехокардиография",
    "Авторефрактометрия",
    "Абдоминална ехография",
    "Трансвагинална ехография",
    "Ехография на щитовидната жлеза"
  ];

  const specialistServices = [
    "Офталмолог",
    "УНГ",
    "Гастроентеролог",
    "Акушер-гинеколог",
    "Съдов хирург",
    "Кардиолог"
  ];
  
  const additionalServices = [
    "Пробовземане",
    "Интравенозни инфузии",
    "Медицински манипулации",
    "Домашни посещения за медицински прегледи",
    "Домашни посещения за кръвни изследвания"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Нашите услуги</h1>
              <p className="text-xl text-gray-100">
                Медицински Център Live4Life предлага широк спектър от профилактични прегледи и специализирани консултации 
                за индивидуални и корпоративни клиенти.
              </p>
            </div>
          </div>
        </section>

        {/* Individual Services */}
        <section id="preventive" className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-secondary">Индивидуални профилактични прегледи</h2>
                <p className="text-gray-600 mb-8">
                  Профилактичните прегледи и изследвания идентифицират и предотвратяват потенциални здравословни проблеми, 
                  бъдещи усложнения и нежелан дискомфорт. Всеки преглед е съобразен с индивидуалните нужди на пациента, 
                  включвайки необходимите изследвания и консултации със специалисти.
                </p>
                <ul className="space-y-3 mb-8">
                  {individualServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  <Calendar className="mr-2 h-4 w-4" />
                  Запазете час за профилактика
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/9b756219-ddad-4c2a-806b-1360e117f5dd.png"
                  alt="Профилактични прегледи в МЦ Live4Life"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Diagnostic Services */}
        <section id="diagnostics" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/2b597714-1db7-4659-98cf-5f54a34aad00.png"
                  alt="Диагностични услуги"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6 text-secondary">Диагностични изследвания</h2>
                <p className="text-gray-600 mb-8">
                  При нас можете да запазите час за различни видове диагностични изследвания, 
                  извършвани с модерно оборудване и от опитни специалисти. Своевременната и 
                  точна диагностика е ключ към успешното лечение.
                </p>
                <ul className="space-y-3 mb-8">
                  {diagnosticServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Запазете час за изследване
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Services */}
        <section id="corporate" className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-secondary">Корпоративно здравеопазване</h2>
                <p className="text-gray-600 mb-8">
                  Медицински център Live4Life е профилиран в организирането и провеждането на 
                  профилактични прегледи за индивидуални и корпоративни клиенти. Нашите корпоративни 
                  пакети могат да бъдат персонализирани според нуждите и бюджета на компанията.
                </p>
                <ul className="space-y-3 mb-8">
                  {corporateServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Свържете се с нас за оферта
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800"
                  alt="Корпоративни услуги"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Consultations */}
        <section id="consultations" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Специализирани консултации</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                В Медицински център Live4Life можете да се консултирате със специалисти от различни медицински области.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialistServices.map((specialty, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">{specialty}</h3>
                  <p className="text-gray-600 mb-4">
                    Консултация със специалист {specialty.toLowerCase()}, включваща преглед и препоръки за лечение или допълнителни изследвания.
                  </p>
                  <Button variant="outline" className="text-primary border-primary hover:bg-primary/10">
                    <Calendar className="mr-2 h-4 w-4" />
                    Запазете час
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory Section */}
        <section id="laboratory" className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6 text-secondary">Лабораторни изследвания</h2>
                <p className="text-gray-600 mb-8">
                  В нашия медицински център се извършва пробовземане за всички видове лабораторни 
                  изследвания с бързи и точни резултати. Предлагаме и домашни посещения за 
                  медицински прегледи и кръвни изследвания.
                </p>
                <ul className="space-y-3 mb-8">
                  {additionalServices.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  Запазете час за изследване
                </Button>
              </div>
              <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/9b653a3f-0f28-4a6f-8e65-5a80f94b53c5.png"
                  alt="Специалисти в МЦ Live4Life"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Medical Equipment */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Нашето оборудване</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                В Медицински център Live4Life разполагаме с модерно медицинско оборудване за прецизна диагностика и ефективно лечение.
              </p>
            </div>
            
            <Card className="overflow-hidden border-none shadow-lg max-w-3xl mx-auto">
              <CardContent className="p-0">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png" 
                    alt="Медицинско оборудване в Live4Life" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary py-16">
          <div className="container-custom text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Грижа за вашето здраве</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Запазете своя час за профилактика при специалист или се свържете с нас за повече информация.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Запазете час
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/contact">
                  Свържете се с нас
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
