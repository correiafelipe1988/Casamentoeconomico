import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 flex flex-col items-center text-center shadow-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Prontos para dar o próximo passo?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Vamos conversar sobre o seu grande dia! Agende uma conversa sem compromisso e descubra como podemos realizar seu sonho.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Agendar uma Conversa
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
