import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Seu Casamento com Menos de 7k | Casamento Econômico",
  description:
    "O Guia Completo Para Um Casamento Perfeito & Econômico! Mesmo com pouco tempo e muitos convidados!",
  openGraph: {
    title: "Seu Casamento com Menos de 7k | Casamento Econômico",
    description:
      "O Guia Completo Para Um Casamento Perfeito & Econômico! Mesmo com pouco tempo e muitos convidados!",
    url: "https://casamento-economico.com",
    siteName: "Casamento Econômico",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Casamento Econômico - Guia Completo",
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
        <link rel="icon" type="image/png" href="/favicon.png" />
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
