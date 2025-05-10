
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const categories = [
  { name: "Профилактика", count: 8 },
  { name: "Здравословен живот", count: 12 },
  { name: "Кардиология", count: 5 },
  { name: "Неврология", count: 4 },
  { name: "Дерматология", count: 6 },
  { name: "Педиатрия", count: 7 },
  { name: "Алергология", count: 3 },
  { name: "Хранене", count: 9 },
  { name: "Новини", count: 4 },
];

const BlogCategories = () => {
  return (
    <div className="space-y-8">
      {/* Search Box */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-secondary-dark mb-4">Търсене</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Търсене в блога..."
            className="border border-gray-300 rounded-l-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button className="rounded-l-none">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Categories */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-secondary-dark mb-4">Категории</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="border-b border-gray-100 last:border-none">
              <Link
                to={`/blog/category/${category.name.toLowerCase()}`}
                className="flex justify-between items-center py-2 hover:text-primary transition-colors text-gray-600"
              >
                <span>{category.name}</span>
                <span className="text-sm bg-gray-100 text-gray-600 rounded-full px-2 py-1">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Popular Posts */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-secondary-dark mb-4">Популярни статии</h3>
        <div className="space-y-4">
          <div className="flex gap-3">
            <img 
              src="/lovable-uploads/9ea23109-c9b6-433d-9838-a2fa74b52ab0.png" 
              alt="Популярна статия" 
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <Link to="/blog/1" className="font-medium text-secondary-dark hover:text-primary transition-colors">
                Профилактичните прегледи - инвестиция в здравето
              </Link>
              <p className="text-sm text-gray-500 mt-1">10 май, 2023</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <img 
              src="/lovable-uploads/35225f20-87a8-4ff5-bdd0-d2c9daa46aa8.png" 
              alt="Популярна статия" 
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <Link to="/blog/2" className="font-medium text-secondary-dark hover:text-primary transition-colors">
                Значението на редовната физическа активност
              </Link>
              <p className="text-sm text-gray-500 mt-1">2 май, 2023</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <img 
              src="/lovable-uploads/401a9304-2236-4478-9e46-74d49820bdb8.jpg" 
              alt="Популярна статия" 
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <Link to="/blog/3" className="font-medium text-secondary-dark hover:text-primary transition-colors">
                Здравословно хранене и режим
              </Link>
              <p className="text-sm text-gray-500 mt-1">25 април, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
