import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, Gem, PartyPopper, CalendarDays } from "lucide-react";

const features = [
  {
    icon: <Wallet className="h-8 w-8 text-primary" />,
    title: "Orçamento Inteligente",
    description: "Maximizamos seu orçamento para um casamento incrível sem dívidas. Foco no que é essencial para vocês.",
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: "Fornecedores de Qualidade",
    description: "Acesso à nossa rede de parceiros confiáveis que oferecem o melhor custo-benefício.",
  },
  {
    icon: <PartyPopper className="h-8 w-8 text-primary" />,
    title: "Decoração Criativa",
    description: "Criamos ambientes charmosos e personalizados que encantam, aproveitando ao máximo cada recurso.",
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    title: "Assessoria sem Estresse",
    description: "Cuidamos de toda a logística e burocracia para que vocês aproveitem cada momento sem preocupações.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="servicos" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Serviços Pensados para o seu Grande Dia
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            Oferecemos tudo que você precisa para um casamento perfeito e econômico.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-background/80 shadow-soft border-transparent hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="text-center pt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
