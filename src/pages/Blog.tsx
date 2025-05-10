
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogList from "@/components/blog/BlogList";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogCategories from "@/components/blog/BlogCategories";

const Blog = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Блог";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container-custom py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-dark">Здравен блог</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Полезни статии, здравни съвети и новости от нашите медицински специалисти.
            </p>
          </div>
          
          <BlogFeatured />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="md:col-span-2">
              <BlogList />
            </div>
            <div className="md:col-span-1">
              <BlogCategories />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
