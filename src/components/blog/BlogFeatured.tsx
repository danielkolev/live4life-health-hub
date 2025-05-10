
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const BlogFeatured = () => {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl overflow-hidden shadow-md bg-white">
          <AspectRatio ratio={16/9}>
            <img 
              src="/lovable-uploads/9ea23109-c9b6-433d-9838-a2fa74b52ab0.png" 
              alt="Профилактичните прегледи - инвестиция в здравето" 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
          
          <div className="p-6">
            <div className="flex items-center mb-4 text-sm text-gray-500">
              <Calendar className="h-4 w-4 mr-1" />
              <span>10 май, 2023</span>
              <span className="mx-2">•</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">Профилактика</span>
            </div>
            
            <h2 className="text-2xl font-bold mb-3 text-secondary-dark hover:text-primary transition-colors">
              <Link to="/blog/1">Профилактичните прегледи - инвестиция в здравето</Link>
            </h2>
            
            <p className="text-gray-600 mb-4">
              Редовните профилактични прегледи са ключов елемент за грижата за собственото здраве. Те помагат за ранното 
              установяване на потенциални здравословни проблеми преди те да се превърнат в сериозни заболявания.
            </p>
            
            <Button variant="link" asChild className="text-primary p-0 hover:text-primary-dark">
              <Link to="/blog/1">Прочетете повече</Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-1/3">
              <AspectRatio ratio={1/1} className="h-full">
                <img 
                  src="/lovable-uploads/35225f20-87a8-4ff5-bdd0-d2c9daa46aa8.png" 
                  alt="Значението на редовната физическа активност" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="p-4 md:w-2/3 flex flex-col justify-center">
              <div className="flex items-center mb-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>2 май, 2023</span>
                <span className="mx-2">•</span>
                <span className="bg-medical/10 text-medical px-2 py-1 rounded-md text-xs">Здравословен живот</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-dark hover:text-primary transition-colors">
                <Link to="/blog/2">Значението на редовната физическа активност</Link>
              </h3>
              <Button variant="link" asChild className="text-primary p-0 hover:text-primary-dark self-start">
                <Link to="/blog/2">Прочетете повече</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:w-1/3">
              <AspectRatio ratio={1/1} className="h-full">
                <img 
                  src="/lovable-uploads/401a9304-2236-4478-9e46-74d49820bdb8.jpg" 
                  alt="Здравословно хранене и режим" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="p-4 md:w-2/3 flex flex-col justify-center">
              <div className="flex items-center mb-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>25 април, 2023</span>
                <span className="mx-2">•</span>
                <span className="bg-medical/10 text-medical px-2 py-1 rounded-md text-xs">Хранене</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary-dark hover:text-primary transition-colors">
                <Link to="/blog/3">Здравословно хранене и режим</Link>
              </h3>
              <Button variant="link" asChild className="text-primary p-0 hover:text-primary-dark self-start">
                <Link to="/blog/3">Прочетете повече</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;
