import AppHeader from "@/components/app/header";
import HeroSection from "@/components/app/hero";
import FeaturesSection from "@/components/app/features";
import TestimonialsSection from "@/components/app/testimonials";
import FaqSection from "@/components/app/faq";
import CtaSection from "@/components/app/cta";
import AppFooter from "@/components/app/footer";

const faqData = [
  {
    question: "Como vocês conseguem oferecer preços mais baixos?",
    answer:
      "Nós otimizamos nossos processos e temos uma vasta rede de fornecedores parceiros, o que nos permite negociar melhores preços sem comprometer a qualidade dos serviços.",
  },
  {
    question: "O que está incluso no pacote de planejamento completo?",
    answer:
      "O pacote completo inclui assessoria, cerimonial, busca por fornecedores, decoração, gestão de orçamento, cronograma do evento e coordenação no dia do casamento.",
  },
  {
    question: "Posso personalizar os pacotes de serviço?",
    answer:
      "Sim! Todos os nossos pacotes são flexíveis. Entendemos que cada casamento é único, e trabalhamos com você para montar um plano que atenda perfeitamente às suas necessidades e orçamento.",
  },
  {
    question: "Vocês atendem em outras cidades ou estados?",
    answer:
      "Atualmente, nosso foco de atuação é na região metropolitana, mas podemos avaliar a possibilidade de atender eventos em outras localidades mediante consulta. Entre em contato para conversarmos!",
  },
];

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="flex min-h-screen w-full flex-col">
        <AppHeader />
        <main className="flex-1">
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <FaqSection faqData={faqData} />
          <CtaSection />
        </main>
        <AppFooter />
      </div>
    </>
  );
}
