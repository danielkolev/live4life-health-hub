
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Как мога да запазя час за преглед?",
      answer: "Можете да запазите час чрез онлайн платформата SuperDoc, като натиснете бутона 'Запазете час' в горната част на сайта. Също така можете да се свържете с нас по телефона на +359 89 020 9898."
    },
    {
      question: "Какви специалисти работят в медицинския център?",
      answer: "В Медицински център Live4Life работят висококвалифицирани специалисти от различни медицински направления, включително общопрактикуващи лекари, кардиолози, невролози, ендокринолози, ортопеди, гинеколози и много други. Можете да видите пълен списък в раздел 'Специалисти'."
    },
    {
      question: "Работите ли със здравната каса?",
      answer: "Медицински център Live4Life има сключен договор с НЗОК за определени медицински услуги. Моля, свържете се с нашия екип за повече информация относно конкретната услуга, която ви интересува."
    },
    {
      question: "Колко време отнема един профилактичен преглед?",
      answer: "Стандартният профилактичен преглед отнема около 30-45 минути. При по-обширни прегледи или допълнителни изследвания, времетраенето може да бъде по-дълго."
    },
    {
      question: "Какви документи трябва да нося за преглед?",
      answer: "Моля, носете личната си карта и здравноосигурителна книжка. Ако имате предишни изследвания или епикризи, добре е да ги донесете за по-пълна информация."
    },
    {
      question: "Предлагате ли домашни посещения?",
      answer: "Да, медицинският ни център предлага домашни посещения за определени случаи. Моля, свържете се с нас предварително, за да обсъдим вашия конкретен случай и възможностите за домашно посещение."
    },
    {
      question: "Има ли паркинг в близост до центъра?",
      answer: "Да, разполагаме с паркоместа пред сградата на медицинския център за наши пациенти."
    },
    {
      question: "Какви са възможностите за разплащане?",
      answer: "Приемаме разплащане в брой, с банкова карта, както и по банков път."
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border border-gray-200 px-6">
              <AccordionTrigger className="text-lg font-medium text-secondary-dark hover:text-primary py-5">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Имате въпрос, който не намерихте отговор тук? 
            <a href="/contact" className="text-primary ml-1 font-medium hover:underline">
              Свържете се с нас
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
