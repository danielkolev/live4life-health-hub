
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Начало", path: "/" },
    { name: "За нас", path: "/about" },
    { name: "Услуги", path: "/services" },
    { name: "Специалисти", path: "/specialists" },
    { name: "Контакти", path: "/contact" },
    { name: "ЧЗВ", path: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white py-4 lg:py-6"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
            alt="Live4Life Medical Center"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors duration-300 text-secondary-dark hover:text-primary ${
                location.pathname === item.path ? "text-primary font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="default" 
            className="bg-primary text-white hover:bg-primary-dark transition-all duration-300 shadow-sm ml-4"
            asChild
          >
            <a href="https://superdoc.bg/klinika/mts-live-4-life" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-4 w-4" />
              Запазете час
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden transition-colors duration-300 text-secondary-dark hover:text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu with animation */}
        <div
          ref={menuRef}
          className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? "max-h-[500px] opacity-100 border-t border-gray-100" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="container-custom flex flex-col space-y-4 py-4">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-primary font-medium transition-all duration-300 py-2 ${
                  location.pathname === item.path ? "text-primary font-semibold" : "text-secondary-dark"
                }`}
                style={{ 
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-10px)',
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              className="bg-primary text-white hover:bg-primary-dark w-full justify-center transition-all duration-300"
              asChild
            >
              <a 
                href="https://superdoc.bg/klinika/mts-live-4-life" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Запазете час
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
