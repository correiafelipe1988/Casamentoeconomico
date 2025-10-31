import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado pela sua compra! | Casamento Econômico",
  description: "Parabéns! Sua compra foi aprovada. Verifique seu e-mail para acessar o conteúdo.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ObrigadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
