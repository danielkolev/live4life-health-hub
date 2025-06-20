
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const Contact = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Контакти";
  }, []);

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Адрес",
      content: "ж.к. Студентски комплекс, ул. Христо Данов 11, вх. Г, Sofia, Bulgaria"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Телефон",
      content: "+359 89 020 9898"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Имейл",
      content: "lifeforlife@abv.bg"
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Работно време",
      content: "Понеделник - Петък: 8:00 - 19:00\nСъбота: 9:00 - 14:00\nНеделя: Затворено"
    }
  ];

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Контакти - Медицински център Live4Life",
    "description": "Свържете се с медицински център Live4Life за записване на час и консултации",
    "url": "https://live4life-medical.com/contact"
  };

  return (
    <>
      <SEOHead
        title="Контакти - Медицински център Live4Life | Свържете се с нас"
        description="Свържете се с медицински център Live4Life за записване на час, консултации и въпроси. Телефон: +359 89 020 9898, ул. Христо Данов 11, София."
        keywords="контакти, медицински център, записване час, София, Live4Life, телефон, адрес"
        canonical="https://live4life-medical.com/contact"
        ogImage="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
      />
      <SchemaMarkup type="WebPage" data={contactPageSchema} />
      
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <div className="pt-20">
          {/* Hero Section */}
          <section className="bg-secondary text-white py-20">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Свържете се с нас</h1>
                <p className="text-xl text-gray-100">
                  Имате въпроси или искате да запазите час? Не се колебайте да се свържете с нас.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="section-padding">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-secondary text-center">Информация за контакт</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
                      <div className="mr-4 mt-1">{info.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                        <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Map */}
          <section className="pb-16">
            <div className="container-custom">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.383154956611!2d23.354954099999994!3d42.6492958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa847a3f7cc6b7%3A0x6c41af01794a3dab!2sul.%20%22Hristo%20Danov%22%2011%2C%201700%20Studentski%20Kompleks%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1713804592863!5m2!1sen!2sbg"
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Live4Life Medical Center Location"
                ></iframe>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
