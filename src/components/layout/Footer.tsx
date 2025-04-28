
import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/35225f20-87a8-4ff5-bdd0-d2c9daa46aa8.png"
                alt="Live4Life Medical Center"
                className="h-16"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Медицински Център, профилиран в организиране и провеждане на профилактични прегледи за индивидуални и корпоративни клиенти.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Контакти</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span>ж.к. Студентски комплекс, ул. Христо Данов 11, вх. Г, Sofia, Bulgaria</span>
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <a href="tel:+359890209898" className="hover:text-primary-light transition-colors">+359 89 020 9898</a>
              </p>
              <p className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <a href="mailto:lifeforlife@abv.bg" className="hover:text-primary-light transition-colors">lifeforlife@abv.bg</a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Бързи връзки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-light transition-colors">
                  Начало
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-light transition-colors">
                  За нас
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-light transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-light transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Работно време</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Понеделник - Петък:</span>
                <span>8:00 - 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Събота:</span>
                <span>9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Неделя:</span>
                <span>Затворено</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Medical Center Live4Life. Всички права запазени.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-sm text-gray-400 flex items-center">
                Направено с <Heart className="mx-1 h-4 w-4 text-red-500" /> от Live4Life
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
