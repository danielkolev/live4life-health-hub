
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

type ServicePrice = {
  service: string;
  price: string;
  category: string;
};

const services: ServicePrice[] = [
  { service: "Преглед при общопрактикуващ лекар", price: "60 лв.", category: "Консултации" },
  { service: "Консултация при кардиолог", price: "80 лв.", category: "Консултации" },
  { service: "Консултация при невролог", price: "80 лв.", category: "Консултации" },
  { service: "Консултация при ендокринолог", price: "80 лв.", category: "Консултации" },
  { service: "ЕКГ", price: "30 лв.", category: "Изследвания" },
  { service: "Ехокардиография", price: "100 лв.", category: "Изследвания" },
  { service: "Пълна кръвна картина", price: "20 лв.", category: "Лаборатория" },
  { service: "Биохимия", price: "40 лв.", category: "Лаборатория" },
  { service: "Хормонални изследвания", price: "60 лв.", category: "Лаборатория" },
  { service: "Общ профилактичен пакет", price: "180 лв.", category: "Пакети" },
];

const PriceListSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ценоразпис</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Предлагаме конкурентни цени за всички наши медицински услуги. 
            За корпоративни клиенти предлагаме специални пакетни цени.
          </p>
        </div>
        
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <Table>
            <TableCaption>Актуални цени към {new Date().toLocaleDateString('bg-BG')}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[400px]">Услуга</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead className="text-right">Цена</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.service}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="text-right">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-10 text-center">
          <p className="mb-6 text-gray-600">
            Запазете час за преглед или консултация с наш специалист
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
            <Calendar className="mr-2 h-5 w-5" />
            Запазете час в SuperDoc
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;
