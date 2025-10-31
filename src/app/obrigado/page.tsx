'use client';

import { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    // Disparar evento Purchase do Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 37.00,
        currency: 'BRL',
        content_name: 'Casamento Econômico - Plano Completo',
        content_type: 'product'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Check Verde Animado */}
        <div className="inline-flex items-center justify-center w-32 h-32 bg-green-500 rounded-full mb-8 animate-bounce shadow-2xl">
          <svg
            className="w-20 h-20 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Mensagem Principal */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Parabéns! 🎉
        </h1>

        <p className="text-2xl md:text-3xl text-green-600 font-bold mb-8">
          Sua compra foi aprovada com sucesso!
        </p>

        {/* Card com Instruções */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-8">
          <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              📧 Verifique seu E-mail
            </h2>
            <p className="text-lg text-gray-700">
              Enviamos todos os detalhes e seu acesso para o e-mail cadastrado na compra.
            </p>
          </div>

          <p className="text-gray-600 text-lg">
            Não esqueça de verificar a caixa de <strong>spam</strong> ou <strong>promoções</strong>!
          </p>
        </div>

        {/* Mensagem Final */}
        <p className="text-xl text-gray-700">
          Obrigada por confiar no <strong className="text-rose-600">Casamento Econômico</strong>! 💕
        </p>
      </div>
    </div>
  );
}
