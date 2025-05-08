
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, HeartPulse, Users, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | За нас";
  }, []);

  const values = [
    {
      icon: <HeartPulse className="h-10 w-10 text-primary" />,
      title: "Качествена грижа",
      description: "Предоставяме висококачествена медицинска грижа с индивидуален подход към всеки пациент."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Професионален екип",
      description: "Нашият екип от специалисти е с богат опит и непрекъснато актуализира своите знания и умения."
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Фокус върху профилактиката",
      description: "Вярваме, че профилактиката и ранната диагностика са ключът към доброто здраве и благосъстояние."
    },
    {
      icon: <Medal className="h-10 w-10 text-primary" />,
      title: "Съвременно оборудване",
      description: "Разполагаме с модерно медицинско оборудване за прецизна диагностика и ефективно лечение."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-secondary text-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">За нас</h1>
              <p className="text-xl text-gray-100">
                Медицинският център Live4Life е профилиран в организирането и провеждането на профилактични прегледи за индивидуални и корпоративни клиенти.
              </p>
            </div>
          </div>
        </section>

        {/* Clinic Images */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-10 text-center text-secondary">Нашият медицински център</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="/lovable-uploads/2d8e2758-f909-4ca8-84de-9598b438c871.png" 
                      alt="Чакалня на медицински център Live4Life" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src="/lovable-uploads/9dcd0c65-d1b0-4b55-9ab0-4a786995dfd0.png" 
                      alt="Кът за изчакване в медицински център Live4Life" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-secondary">Нашата мисия</h2>
                <p className="text-gray-600 mb-4">
                  Мисията на Медицински център Live4Life е да предоставя висококачествени медицински услуги, 
                  фокусирани върху профилактиката и ранната диагностика на заболяванията.
                </p>
                <p className="text-gray-600">
                  Стремим се да бъдем надежден партньор в грижата за здравето на нашите пациенти, 
                  съчетавайки професионализъм, модерно оборудване и индивидуален подход.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 text-secondary">Нашата визия</h2>
                <p className="text-gray-600 mb-4">
                  Визията ни е да бъдем водещ медицински център в областта на профилактичната медицина, 
                  разпознаваем с високото качество на услугите и грижата за пациентите.
                </p>
                <p className="text-gray-600">
                  Стремим се да създаваме култура на превенция и ранна диагностика, 
                  подпомагайки хората да водят по-здравословен и пълноценен живот.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Нашите ценности</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                В основата на нашата дейност стоят ценности, които определят качеството на услугите, 
                които предлагаме, и отношението към нашите пациенти.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex">
                  <div className="mr-4 mt-1">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Нашият екип</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Екипът на Медицински център Live4Life се състои от висококвалифицирани специалисти с богат опит 
                в различни области на медицината.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-8 mt-8">
              <p className="text-center text-xl text-gray-700">
                "В нашия медицински център, всеки член на екипа споделя обща цел - да предоставя най-добрата възможна грижа 
                за нашите пациенти. Вярваме в силата на профилактиката и ранната диагностика като ключови фактори за дълъг и здравословен живот."
              </p>
              <p className="text-center mt-4 font-semibold text-primary">
                - Екипът на Live4Life
              </p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
