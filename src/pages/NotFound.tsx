
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Live4Life Medical Center | Страницата не е намерена";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="text-center px-4">
          <Heart className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-6xl font-bold text-secondary mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">
            Съжаляваме, но тази страница не съществува.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-white">
            <Link to="/" className="inline-flex items-center">
              <Home className="mr-2 h-5 w-5" /> Към началната страница
            </Link>
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
