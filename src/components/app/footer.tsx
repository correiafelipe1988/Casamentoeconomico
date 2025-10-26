import { Button } from "@/components/ui/button";
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

export default function AppFooter() {
  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, href: "#", name: "Instagram" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", name: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", name: "Twitter" },
  ];

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-bold">Casamento Econômico</span>
          </a>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Casamento Econômico. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} aria-label={link.name}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
