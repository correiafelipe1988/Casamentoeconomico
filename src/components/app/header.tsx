import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart, Menu } from "lucide-react";

export default function AppHeader() {
  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-7xl items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Casamento Econômico</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button>Fale Conosco</Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <a href="#" className="flex items-center gap-2 mb-8">
                <Heart className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">Casamento Econômico</span>
              </a>
              <nav className="flex flex-col gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button className="mt-8 w-full">Fale Conosco</Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
