import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Heart, HeartPulse, Users, Medal, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

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
  
  const clinicImages = [
    {
      src: "/lovable-uploads/6ff7a396-d673-45a7-9e72-2f6e2bc4f249.png",
      alt: "Чакалня с жълти фотьойли и логото на Live4Life"
    },
    {
      src: "/lovable-uploads/19882ede-481e-479e-ac01-9cffacbce751.png",
      alt: "Рецепция на медицински център Live4Life"
    },
    {
      src: "/lovable-uploads/1476a06d-d45c-4206-b84c-abb1f4c0f3d4.png",
      alt: "Коридор с чакалня в медицински център Live4Life"
    },
    {
      src: "/lovable-uploads/e072d148-eccf-47cd-995e-aeb170fe4670.png",
      alt: "Чакалня и коридор на медицински център Live4Life"
    },
    {
      src: "/lovable-uploads/ee8c308b-4623-4c01-974c-6bbf2368a19d.png",
      alt: "Рецепция на медицински център Live4Life отблизо"
    },
    {
      src: "/lovable-uploads/e3682f61-c892-44cb-9192-eac189a0a711.png",
      alt: "Рецепция и чакалня на медицински център Live4Life"
    },
    {
      src: "/lovable-uploads/c005b74d-230e-445f-8ef2-7d472b6750ea.png",
      alt: "Лого на стената на медицински център Live4Life"
    },
    {
      src: "/lovable-uploads/ad10f96b-628e-4aa0-bb4a-caaae8080fbc.png",
      alt: "Награда Златна фирма 2025 на медицински център Live4Life"
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

        {/* Clinic Images - Only keep the carousel */}
        <section className="section-padding bg-white">
          <div className="container-custom">            
            {/* Clinic images carousel */}
            <div className="my-12">
              <h3 className="text-xl font-semibold mb-6 text-center text-secondary">Разгледайте нашия център</h3>
              <div className="max-w-4xl mx-auto">
                <Carousel className="w-full">
                  <CarouselContent>
                    {clinicImages.map((image, index) => (
                      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardContent className="p-0">
                              <AspectRatio ratio={3/4} className="bg-gray-100">
                                <img 
                                  src={image.src} 
                                  alt={image.alt}
                                  className="w-full h-full object-cover" 
                                />
                              </AspectRatio>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex left-0" />
                  <CarouselNext className="hidden md:flex right-0" />
                </Carousel>
              </div>
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

        {/* Award Section - Moved from Homepage */}
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
      </div>

      <Footer />
    </div>
  );
};

export default About;
