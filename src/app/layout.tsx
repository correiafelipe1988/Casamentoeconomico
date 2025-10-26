import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Casamento Econômico | Planeje seu Dia Especial Sem Gastar uma Fortuna",
  description:
    "Oferecemos planejamento de casamento completo e acessível para que seu grande dia seja inesquecível. Assessoria, decoração, e mais. Fale conosco!",
  openGraph: {
    title: "Casamento Econômico | Planeje seu Dia Especial Sem Gastar uma Fortuna",
    description:
      "Planejamento de casamento acessível para um dia inesquecível.",
    url: "https://casamento-economico.com",
    siteName: "Casamento Econômico",
    images: [
      {
        url: "https://picsum.photos/seed/og-image/1200/630",
        width: 1200,
        height: 630,
        alt: "Casal feliz no dia do casamento",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
