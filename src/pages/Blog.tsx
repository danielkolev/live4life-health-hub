
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogList from "@/components/blog/BlogList";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogCategories from "@/components/blog/BlogCategories";
import SEOHead from "@/components/seo/SEOHead";
import SchemaMarkup from "@/components/seo/SchemaMarkup";

const Blog = () => {
  useEffect(() => {
    document.title = "Live4Life Medical Center | Блог";
  }, []);

  const blogPageSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Здравен блог - Медицински център Live4Life",
    "description": "Полезни статии, здравни съвети и новости от медицински специалисти",
    "url": "https://live4life-medical.com/blog"
  };

  return (
    <>
      <SEOHead
        title="Здравен блог - Live4Life | Полезни съвети и медицински статии"
        description="Полезни статии, здравни съвети и новости от нашите медицински специалисти в Медицински център Live4Life. Актуална здравна информация."
        keywords="здравен блог, медицински съвети, здравни статии, новини, Live4Life, медицина, профилактика"
        canonical="https://live4life-medical.com/blog"
        ogImage="/lovable-uploads/fa20142c-c218-4352-9a85-856f2a5e3198.png"
      />
      <SchemaMarkup type="WebPage" data={blogPageSchema} />
      
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
    </>
  );
};

export default Blog;
