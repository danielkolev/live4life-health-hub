import React, { useState, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Мария К.",
    text: "Изключително доволна съм от обслужването в Live4Life. Лекарите са внимателни и професионални. Препоръчвам на всеки, който търси качествена медицинска грижа.",
    rating: 5,
    service: "Профилактичен преглед",
  },
  {
    id: 2,
    name: "Георги Д.",
    text: "Направих пълен профилактичен пакет за моята фирма. Организацията беше перфектна, а резултатите бяха готови много бързо. Ще продължим да работим с тях.",
    rating: 5,
    service: "Корпоративно обслужване",
  },
  {
    id: 3,
    name: "Елена П.",
    text: "Д-р Янев ме прегледа много внимателно и обясни всичко подробно. Чувствах се спокойна и в сигурни ръце. Благодаря!",
    rating: 5,
    service: "Консултация с ОПЛ",
  },
  {
    id: 4,
    name: "Иван С.",
    text: "Лабораторните изследвания бяха направени бързо и ефективно. Получих резултатите на имейла си същия ден. Много съм доволен от услугата.",
    rating: 5,
    service: "Лабораторни изследвания",
  },
  {
    id: 5,
    name: "Петя М.",
    text: "Кардиологичният преглед при Д-р Наунов беше много обстоен. Ехокардиографията е на отлично ниво. Препоръчвам горещо!",
    rating: 5,
    service: "Кардиология",
  },
  {
    id: 6,
    name: "Стефан Б.",
    text: "Много съм доволен от обслужването. Персоналът е любезен и компетентен. Центърът е чист и модерен. Определено ще се върна!",
    rating: 4,
    service: "Профилактичен преглед",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1" aria-label={`Оценка ${rating} от 5`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "text-gray-300"}`}
      />
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [api, setApi] = useState<any>(null);

  const scrollNext = useCallback(() => {
    if (api) api.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(scrollNext, 6000);
    return () => clearInterval(interval);
  }, [api, scrollNext]);

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50 py-[30px]" aria-labelledby="testimonials-heading">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold mb-4 text-secondary-dark">
            Какво казват нашите пациенти
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Доверието на нашите пациенти е най-голямата ни награда. Ето какво споделят те за своя опит с нас.
          </p>
        </div>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="w-full px-4"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="sm:basis-1/2 lg:basis-1/3">
                <Card className="h-full border border-gray-100 hover:shadow-lg transition-all duration-300 bg-white">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <Quote className="h-8 w-8 text-primary/20 flex-shrink-0" />
                      <StarRating rating={testimonial.rating} />
                    </div>
                    
                    <p className="text-gray-600 mb-6 flex-grow leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                      <p className="font-semibold text-secondary-dark">{testimonial.name}</p>
                      <p className="text-sm text-primary font-medium">{testimonial.service}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-end mt-4 gap-2">
            <CarouselPrevious className="static translate-y-0 left-auto" />
            <CarouselNext className="static translate-y-0 right-auto" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
