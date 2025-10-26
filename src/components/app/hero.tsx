import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-image");

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24 lg:py-32">
        <div className="flex flex-col items-start space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tighter text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            O casamento dos seus sonhos,
            <span className="block text-primary"> sem pesar no bolso.</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Realize o grande dia com planejamento inteligente e econômico.
            Cuidamos de cada detalhe para que sua única preocupação seja dizer
            "sim".
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto">
              Começar a Planejar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto">
              Ver Serviços
            </Button>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Assessoria Completa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Orçamento Otimizado</span>
              </div>
          </div>
        </div>
        <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-soft md:h-[600px] lg:h-[700px]">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
}
