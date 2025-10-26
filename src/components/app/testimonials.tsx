import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    name: "Juliana & Marcos",
    avatarId: "testimonial-1",
    quote:
      "A equipe transformou nosso sonho em realidade com um orçamento que cabia no nosso bolso. Foi tudo perfeito, muito além do que imaginávamos. Gratidão eterna!",
  },
  {
    name: "Fernanda S.",
    avatarId: "testimonial-2",
    quote:
      "Eu não tinha ideia de por onde começar. Eles me guiaram em cada passo, com paciência e profissionalismo. Recomendo de olhos fechados!",
  },
  {
    name: "Lucas & Beatriz",
    avatarId: "testimonial-3",
    quote:
      "Conseguimos ter a festa que sempre quisemos sem começar a vida a dois endividados. A assessoria foi o nosso melhor investimento para o casamento!",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            O que nossos noivos dizem
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            Histórias reais de casais que confiaram em nosso trabalho para realizar seu sonho.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => {
              const avatar = PlaceHolderImages.find(
                (img) => img.id === testimonial.avatarId
              );
              return (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full bg-secondary/30 border-transparent shadow-soft flex flex-col">
                      <CardContent className="flex flex-1 flex-col items-center justify-center p-6 text-center">
                        <p className="flex-1 text-muted-foreground italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            {avatar && (
                              <AvatarImage
                                src={avatar.imageUrl}
                                alt={`Avatar de ${testimonial.name}`}
                                data-ai-hint={avatar.imageHint}
                              />
                            )}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="font-semibold text-foreground">
                            {testimonial.name}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex"/>
          <CarouselNext className="hidden sm:flex"/>
        </Carousel>
      </div>
    </section>
  );
}
