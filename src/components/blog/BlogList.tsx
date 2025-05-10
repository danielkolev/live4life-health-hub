
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const blogPosts = [
  {
    id: 4,
    title: "Слънцезащита през лятото - колко е важна и как да я прилагаме правилно",
    excerpt: "С настъпването на летните месеци е изключително важно да осигурим адекватна защита на кожата от вредните UV лъчи.",
    date: "18 април, 2023",
    category: "Дерматология",
    image: "/lovable-uploads/9b653a3f-0f28-4a6f-8e65-5a80f94b53c5.png",
    author: "Д-р Анна Петрова"
  },
  {
    id: 5,
    title: "Алергиите през пролетта - симптоми и лечение",
    excerpt: "Пролетните алергии засягат много хора. Научете как да разпознаете симптомите и какви са възможностите за лечение.",
    date: "10 април, 2023",
    category: "Алергология",
    image: "/lovable-uploads/9b756219-ddad-4c2a-806b-1360e117f5dd.png",
    author: "Д-р Мартин Димитров"
  },
  {
    id: 6,
    title: "Предотвратяване на сърдечно-съдови заболявания",
    excerpt: "Сърдечно-съдовите заболявания са водеща причина за смърт. Научете какви превантивни мерки можете да вземете.",
    date: "3 април, 2023",
    category: "Кардиология",
    image: "/lovable-uploads/9dcd0c65-d1b0-4b55-9ab0-4a786995dfd0.png",
    author: "Д-р Росен Разбойников"
  },
  {
    id: 7,
    title: "Здрав сън - ключът към доброто здраве",
    excerpt: "Качеството на съня е изключително важно за общото здравословно състояние. Научете как да подобрите своя сън.",
    date: "25 март, 2023",
    category: "Неврология",
    image: "/lovable-uploads/82ba0413-76dc-42b1-8e31-a79b3f160fc8.png",
    author: "Д-р Ива Великова"
  },
];

const BlogList = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-secondary-dark mb-6">Последни публикации</h2>
      
      {blogPosts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5">
            <AspectRatio ratio={4/3}>
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
          
          <div className="p-6 md:w-3/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">{post.category}</span>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-secondary-dark hover:text-primary transition-colors">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
            </div>
            
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-sm text-gray-500">{post.author}</span>
              </div>
              
              <Button variant="link" asChild className="text-primary p-0 hover:text-primary-dark">
                <Link to={`/blog/${post.id}`}>Прочетете повече</Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
      
      <div className="flex justify-center mt-8">
        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
          Вижте още публикации
        </Button>
      </div>
    </div>
  );
};

export default BlogList;
