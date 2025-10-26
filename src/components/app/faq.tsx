import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqData: FaqItem[];
}

export default function FaqSection({ faqData }: FaqSectionProps) {
  return (
    <section id="faq" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Perguntas Frequentes
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            Tire suas dúvidas sobre como podemos ajudar a tornar seu casamento
            perfeito e econômico.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-background/80 rounded-lg mb-4 shadow-soft px-4">
              <AccordionTrigger className="text-lg font-medium text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
