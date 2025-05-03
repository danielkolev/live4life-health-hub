import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Начало", path: "/" },
    { name: "За нас", path: "/about" },
    { name: "Услуги", path: "/services" },
    { name: "Специалисти", path: "/specialists" },
    { name: "Контакти", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-gradient-to-r from-secondary/90 to-secondary-dark/90 backdrop-blur-sm py-4 lg:py-6"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/b8ad1cc4-d237-4e87-a846-fa0b3ac117ad.png"
            alt="Live4Life Medical Center"
            className="h-12 md:h-14"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? "text-secondary-dark hover:text-primary" 
                  : "text-white hover:text-primary-light"
              } ${location.pathname === item.path ? "text-primary font-semibold" : ""}`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="default" 
            className={`${
              isScrolled 
                ? "bg-primary text-white hover:bg-primary-dark" 
                : "bg-white/95 text-secondary hover:bg-white hover:text-primary"
            } transition-all duration-300 shadow-sm backdrop-blur-sm`}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <a href="https://superdoc.bg" target="_blank" rel="noopener noreferrer">
              Запазете час
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            isScrolled ? "text-secondary-dark" : "text-white"
          } hover:text-primary`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-secondary/95 to-secondary-dark/95 backdrop-blur-md text-white shadow-lg py-4">
            <div className="container-custom flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-primary-light font-medium transition-colors py-2 ${
                    location.pathname === item.path ? "text-primary font-semibold" : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                className="bg-white/90 backdrop-blur-sm text-secondary-dark hover:bg-white hover:text-primary w-full justify-center transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="mr-2 h-4 w-4" />
                <a href="https://superdoc.bg" target="_blank" rel="noopener noreferrer">
                  Запазете час
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
