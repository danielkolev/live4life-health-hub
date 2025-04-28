
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    { name: "Контакти", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4 lg:py-6"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/lovable-uploads/9dcd0c65-d1b0-4b55-9ab0-4a786995dfd0.png"
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
                  ? "text-secondary hover:text-primary" 
                  : "text-white hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button 
            variant="default" 
            className={`${
              isScrolled 
                ? "bg-primary hover:bg-primary-dark" 
                : "bg-white/20 hover:bg-primary text-white backdrop-blur-sm"
            } transition-all duration-300`}
          >
            <Calendar className="mr-2 h-4 w-4" /> Запазете час
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden transition-colors duration-300 ${
            isScrolled ? "text-secondary" : "text-white"
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            <div className="container-custom flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-secondary hover:text-primary font-medium transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                variant="default" 
                className="bg-primary hover:bg-primary-dark w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="mr-2 h-4 w-4" /> Запазете час
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
