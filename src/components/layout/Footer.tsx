import React from "react";
import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-secondary-dark pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
                alt="Live4Life Medical Center"
                className="h-16"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Медицински Център, профилиран в организиране и провеждане на профилактични прегледи за индивидуални и корпоративни клиенти.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Контакти</h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="mr-2 mt-1">📍</span>
                <span className="text-gray-600">ж.к. Студентски комплекс, ул. Христо Данов 11, вх. Г, Sofia, Bulgaria</span>
              </p>
              <p className="flex items-center text-gray-600">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                <a href="tel:+359890209898" className="hover:text-primary transition-colors">+359 89 020 9898</a>
              </p>
              <p className="flex items-center text-gray-600">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                <a href="mailto:lifeforlife@abv.bg" className="hover:text-primary transition-colors">lifeforlife@abv.bg</a>
              </p>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Бързи връзки</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Начало</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">За нас</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Контакти</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary">Работно време</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>Понеделник - Петък:</span>
                <span>07:30 - 19:30</span>
              </li>
              <li className="flex justify-between">
                <span>Събота - Неделя:</span>
                <span>Неработни дни</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Medical Center Live4Life. Всички права запазени.
            </p>
            <div className="flex items-center mt-4 md:mt-0 space-x-3">
              <span className="text-sm text-gray-500 flex items-center">
                Направено с <Heart className="mx-1 h-4 w-4 text-red-400" /> от Live4Life
              </span>
              <span className="text-sm text-gray-500">
                Дизайн от <a href="https://smartsitedigital.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SmartSiteDigital</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
