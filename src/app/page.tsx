'use client';

import { useEffect, useState } from 'react';

// Componente de notificação de compra
function PurchaseNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentCity, setCurrentCity] = useState('');

  const femaleNames = [
    'Ana', 'Maria', 'Juliana', 'Fernanda', 'Camila', 'Beatriz', 'Carolina',
    'Larissa', 'Amanda', 'Gabriela', 'Isabela', 'Mariana', 'Paula', 'Rafaela',
    'Bianca', 'Letícia', 'Natália', 'Patrícia', 'Renata', 'Tatiana', 'Vanessa',
    'Bruna', 'Carla', 'Débora', 'Jéssica', 'Lívia', 'Priscila', 'Roberta',
    'Sabrina', 'Viviane', 'Adriana', 'Daniela', 'Luciana', 'Mônica', 'Simone'
  ];

  const cities = [
    'São Paulo - SP', 'Rio de Janeiro - RJ', 'Belo Horizonte - MG',
    'Brasília - DF', 'Curitiba - PR', 'Porto Alegre - RS', 'Salvador - BA',
    'Fortaleza - CE', 'Recife - PE', 'Goiânia - GO', 'Campinas - SP',
    'Santos - SP', 'Florianópolis - SC', 'Vitória - ES', 'Manaus - AM',
    'Belém - PA', 'Natal - RN', 'João Pessoa - PB', 'Maceió - AL',
    'São Luís - MA', 'Cuiabá - MT', 'Campo Grande - MS', 'Teresina - PI'
  ];

  useEffect(() => {
    const showNotification = () => {
      const randomName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];

      setCurrentName(randomName);
      setCurrentCity(randomCity);
      setIsVisible(true);

      // Esconder após 5 segundos
      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    // Mostrar primeira notificação após 3 segundos
    const initialTimeout = setTimeout(showNotification, 3000);

    // Mostrar notificações a cada 15 segundos
    const interval = setInterval(showNotification, 15000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 animate-slide-in">
      <div className="bg-green-500 text-white rounded-lg shadow-2xl p-4 max-w-sm border-2 border-green-600">
        <div className="flex items-start gap-3">
          <div className="bg-white rounded-full p-2 flex-shrink-0">
            <svg
              className="w-6 h-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="flex-1">
            <p className="font-bold text-lg">
              {currentName} acabou de comprar!
            </p>
            <p className="text-sm text-green-50">
              {currentCity}
            </p>
            <p className="text-xs text-green-100 mt-1">
              há alguns segundos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqData = [
  {
    question: "Em quanto tempo eu irei receber meu acesso?",
    answer:
      "Logo após a aprovação do seu pagamento, você irá receber no seu e-mail de compra os seus dados de acesso.",
  },
  {
    question: "O pagamento é único? E se eu não gostar?",
    answer:
      "Sim! O pagamento é único (NÃO é mensal). Ah, se você não gostar dos conteúdos tem reembolso. Ou seja, você não corre nenhum risco.",
  },
];

function getUrgencyDates() {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

  const formatDate = (date: Date) => {
    return date.getDate();
  };

  return {
    day1: formatDate(twoDaysAgo),
    day2: formatDate(yesterday),
    day3: formatDate(today),
    month: today.toLocaleDateString('pt-BR', { month: 'long' }),
    monthCapitalized: today.toLocaleDateString('pt-BR', { month: 'long' }).charAt(0).toUpperCase() + today.toLocaleDateString('pt-BR', { month: 'long' }).slice(1)
  };
}

export default function Home() {
  const [urgencyDates, setUrgencyDates] = useState({ day1: 0, day2: 0, day3: 0, month: '', monthCapitalized: '' });

  useEffect(() => {
    setUrgencyDates(getUrgencyDates());
  }, []);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <PurchaseNotification />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* HERO SECTION */}
        <section className="relative py-12 md:py-20 px-4 overflow-hidden" style={{
          backgroundImage: 'url(https://i.postimg.cc/G3BgQHTJ/image.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-100/70 to-white/90"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg" style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}>
              Seu Casamento com Menos de 7k
            </h1>
            <p className="text-xl md:text-2xl text-gray-900 mb-12 leading-relaxed font-semibold">
              O Guia Completo Para Um Casamento Perfeito & Econômico! Mesmo com pouco tempo e muitos convidados!
            </p>
            <div className="my-12">
              <div className="max-w-2xl mx-auto">
                <img
                  src="https://i.postimg.cc/cH1J7R57/image.png"
                  alt="Casamento Econômico - Guia Completo"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* BANNER DE PREÇO */}
            <div className="my-8 bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto border-4 border-rose-500">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  DE <span className="line-through">R$97,00</span>
                </p>
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  POR APENAS
                </p>
                <p className="text-6xl md:text-7xl font-bold text-green-600 mb-4">
                  R$10
                </p>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  ÚLTIMO DIA!
                </p>
              </div>
            </div>

            <a
              href="#oferta"
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full text-lg inline-block transition-all transform hover:scale-105"
            >
              QUERO GARANTIR MINHA VAGA!
            </a>
          </div>
        </section>

        {/* BLOCO DE DÚVIDAS */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6 mb-10">
              <li className="flex items-start">
                <span className="text-red-500 mr-4 text-3xl flex-shrink-0">❓</span>
                <span className="text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed">Como ter o casamento e a festa dos meus sonhos economizando?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-4 text-3xl flex-shrink-0">❓</span>
                <span className="text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed">Quais são os elementos essenciais de um casamento?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-4 text-3xl flex-shrink-0">❓</span>
                <span className="text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed">Como organizar tudo sem assessoria?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-4 text-3xl flex-shrink-0">❓</span>
                <span className="text-2xl md:text-3xl text-gray-800 font-semibold leading-relaxed">Como preparar tudo em pouco tempo?</span>
              </li>
            </ul>
            <p className="text-2xl md:text-3xl text-gray-900 text-center font-medium leading-relaxed">
              Essas são as dúvidas que você provavelmente tem, e as respostas dessas e de várias outras perguntas é o que te fará economizar <strong className="text-red-600">MUITO…</strong>
            </p>
          </div>
        </section>

        {/* GRANDE PROMESSA */}
        <section className="py-16 px-4 bg-pink-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              E se eu te falar que é possível ter um casamento completo por menos de 7 mil reais sem perder a qualidade?
            </h2>
            <div className="text-lg md:text-xl text-gray-700 space-y-4 leading-relaxed">
              <p>
                E o melhor, você não precisa abrir mão de ter aquele lindo vestido, um cardápio delicioso para seus convidados ou daquela linda fotografia e filmagem.
              </p>
              <p>
                Tudo o que você precisa fazer é seguir o método de quem realmente entende os segredos desse mercado!
              </p>
              <p>
                É claro que o sucesso de uma festa envolve vários fatores pra ter uma boa organização.
              </p>
              <p className="font-bold text-2xl text-rose-600">
                Mas essa é a melhor parte! Pois nós vamos te ensinar a..
              </p>
              <p className="text-3xl font-bold text-gray-900 uppercase">
                ECONOMIZAR E ORGANIZAR TUDO DO ZERO!
              </p>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section className="py-8 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <img
              src="https://i.postimg.cc/CKsGL4q0/image.png"
              alt="Prova Social - Depoimentos"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* PROVA/AUTORIDADE */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-700 space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              Esse é exatamente o <strong className="text-2xl md:text-3xl text-rose-600">MESMO processo</strong> que eu e minhas noivinhas usamos para fazer <strong className="text-xl md:text-2xl">casamentos dos sonhos por menos de 7K reais.</strong>
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              Esse é um processo que apesar de ser muito valioso e secreto é <strong className="text-2xl md:text-3xl text-green-600">MUITO SIMPLES</strong> de ser replicado.
            </p>
            <p className="text-xl md:text-2xl leading-relaxed">
              E ainda, você poderá fazer isso <strong className="text-xl md:text-2xl underline">sem precisar de nenhum conhecimento</strong> na área de eventos.
            </p>
          </div>
        </section>

        {/* IMAGEM ILUSTRATIVA - ALIANÇAS */}
        <section className="py-8 px-4 bg-white">
          <div className="max-w-2xl mx-auto flex justify-center">
            <img
              src="https://i.postimg.cc/XJNSq3s8/image.png"
              alt="Alianças de Casamento"
              className="w-full max-w-md h-auto"
            />
          </div>
        </section>

        {/* O QUE VOCÊ IRÁ APRENDER */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-pink-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-16">
              O que você irá aprender
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Card 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-8 border-rose-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📋</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-3">Lista de Convidados: Chega de Confusão!</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Vou te mostrar a forma certa de fazer a lista sem aquele drama. Você saberá exatamente quem deve convidar pra esse momento.</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-8 border-rose-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🔐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-3">Segredos:</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Aqui está o que te fará economizar! Saber os segredos que o mercado de casamentos esconde de você, te fazendo pagar valores absurdos!</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-8 border-rose-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-3">Data Estratégica:</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Sabia que dependendo do horário, mês ou dia da semana escolhido para o casamento, você poderá economizar ainda mais?</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-8 border-rose-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">🍽️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-3">Buffet Econômico:</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Apresentaremos alternativas inteligentes para criar um menu delicioso e econômico que agradará a todos os seus convidados.</p>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-l-8 border-rose-500">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
                    <span className="text-3xl">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl text-gray-900 mb-3">Tem Pouco Tempo?</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">Caso tenha poucos meses para organizar o casamento, não se preocupe! Ensinaremos como contornar esse problema e ter um casamento incrível e barato mesmo com pouco tempo.</p>
                  </div>
                </div>
              </div>

              {/* Card 6 - Destaque */}
              <div className="bg-gradient-to-br from-rose-500 to-rose-600 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">✨</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-3">E MUITO, MUITO MAIS!</h3>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-center gap-2">
                        <span className="text-2xl">✓</span>
                        <span>Sem precisar ser especialista em eventos.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-2xl">✓</span>
                        <span>Mesmo sem saber por onde começar.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-2xl">✓</span>
                        <span>Sem precisar ter um casamento feio!</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* JANELA DE COMPRA (URGÊNCIA) */}
        <section className="py-12 px-4 bg-yellow-100 border-y-4 border-yellow-400">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl font-bold text-gray-900">
              ⏰ Comprando nos dias: <span className="text-rose-600">{urgencyDates.day1}, {urgencyDates.day2} e {urgencyDates.day3} de {urgencyDates.monthCapitalized}</span> você ganha alguns bônus extras.
            </p>
          </div>
        </section>

        {/* BÔNUS */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Bônus Exclusivos
            </h2>
            <div className="space-y-8">
              {/* Bônus 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-[#8B3A5C] text-white px-6 py-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-center">Bônus #1 - Checklist</h3>
                </div>
                <div className="p-8">
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Um Planner completo!</h4>
                  <div className="flex justify-center mb-6">
                    <img
                      src="https://i.postimg.cc/brffHbTW/image.png"
                      alt="Planner do Casamento"
                      className="w-80 h-auto"
                    />
                  </div>
                  <p className="text-lg text-gray-700 mb-4 text-center">
                    Você terá acesso a uma super "lista de tarefas" + Planner, com tudo que você precisa fazer desde o pedido de casamento, até o Grande dia.
                  </p>
                  <p className="text-lg text-gray-700 mb-4 text-center">
                    Com espaços para anotações, lista de convidados, playlist etc. Esse bônus é perfeito para manter tudo sob controle e não depender de ninguém na organização.
                  </p>
                  <p className="text-2xl font-bold text-red-600 text-center">Quanto iria custar: R$97</p>
                </div>
              </div>

              {/* Bônus 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-[#8B3A5C] text-white px-6 py-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-center">Bônus #2 - O Enxoval de Casamento Completo.</h3>
                </div>
                <div className="p-8">
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Tudo que sua casa precisa</h4>
                  <div className="flex justify-center mb-6">
                    <img
                      src="https://i.postimg.cc/nz4TQQPJ/image.png"
                      alt="Casal na Cozinha - Casa Nova"
                      className="w-full max-w-2xl h-auto rounded-lg"
                    />
                  </div>
                  <p className="text-lg text-gray-700 mb-4 text-center">
                    Você vai ter acesso à lista completa de enxoval de casa nova, com tudo que seu lar precisa!
                  </p>
                  <p className="text-lg italic text-gray-700 mb-4 text-center">
                    Perfeito para quem quer ter uma casa completa sem se esquecer de nada.
                  </p>
                  <p className="text-2xl font-bold text-red-600 text-center">Quanto iria custar: R$27</p>
                </div>
              </div>

              {/* Bônus 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-[#8B3A5C] text-white px-6 py-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-center">Bônus #3 - Tudo sobre casamento civil.</h3>
                </div>
                <div className="p-8">
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Chega de burocracia!</h4>
                  <p className="text-lg text-gray-700 mb-4 text-center">
                    Vou te explicar tudo sobre regime de bens, documentos necessários, antecedência, e até como conseguir se casar DE GRAÇA no civil! Tudo de bom né?!
                  </p>
                  <p className="text-2xl font-bold text-red-600 text-center">Quanto iria custar: R$67</p>
                </div>
              </div>

              {/* Bônus 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-[#8B3A5C] text-white px-6 py-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-center">Bônus #4 - Paleta de cores em minutos!</h3>
                </div>
                <div className="p-8">
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Acabou a confusão com as cores!</h4>
                  <p className="text-lg text-gray-700 mb-4 text-center">
                    Sabe aquela dúvida de: que cor para as madrinhas? Que cor para as mães? etc… Vamos resolver isso em minutos! Um casamento econômico e com cores combinando é o melhor dos dois mundos!
                  </p>
                  <p className="text-2xl font-bold text-red-600 text-center">Quanto iria custar: R$79</p>
                </div>
              </div>

              {/* Bônus 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                <div className="bg-[#8B3A5C] text-white px-6 py-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-center">Bônus #5 - A data perfeita para você!</h3>
                </div>
                <div className="p-8">
                  <h4 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Existe a data perfeita para cada casal</h4>
                  <p className="text-lg text-gray-700 mb-4 text-center">
                    Com base nas flores de cada época, na concorrência de cada mês e no clima da sua região, iremos te ajudar a escolher a data perfeita para o seu casamento! Seu grande dia deve ser escolhido com carinho.
                  </p>
                  <p className="text-2xl font-bold text-red-600 text-center">Quanto iria custar: R$59</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OFERTA - PLANOS */}
        <section id="oferta" className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Escolha Seu Plano
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* PLANO BÁSICO */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200">
                <div className="flex justify-center pt-6">
                  <div className="bg-gray-700 text-white px-8 py-3 rounded-full font-bold text-lg">
                    PLANO BÁSICO:
                  </div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900"><strong>O Ebook:</strong> <em>Segredos do Casamento Econômico 1.0</em></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900"><strong>1 ano de acesso.</strong></span>
                    </li>
                  </ul>
                  <div className="text-center mb-8">
                    <p className="text-6xl font-bold text-green-600 mb-2">R$ 10</p>
                    <p className="text-xl text-gray-900 font-semibold">À Vista</p>
                  </div>
                  <a
                    href="https://pay.kiwify.com.br/2y5jcan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl text-center transition-all text-lg"
                  >
                    QUERO ESSA OPÇÃO!
                  </a>
                </div>
              </div>

              {/* PLANO COMPLETO */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-pink-500 relative">
                <div className="flex flex-col items-center pt-6">
                  <div className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold text-lg mb-2">
                    PLANO COMPLETO:
                  </div>
                  <p className="text-gray-600 font-bold text-lg">(O MAIS VENDIDO)</p>
                </div>
                <div className="p-8">
                  <div className="flex justify-center mb-6">
                    <img
                      src="https://i.postimg.cc/j5FrWmws/image.png"
                      alt="Mockup Ebook - Os Segredos do Casamento Econômico 3.0"
                      className="w-64 h-auto"
                    />
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900"><strong>O Ebook Completo:</strong> <em>Os Segredos do Casamento Econômico 3.0</em></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900"><strong>Checklist + Planner:</strong> <em>Tudo que precisa ser organizado em ordem cronológica.</em></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900"><strong>O Enxoval de Casa Nova:</strong> <em>A lista completa de itens para a sua casa.</em></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900"><strong>Como escolher sua paleta de cores em minutos:</strong> <em>O passo a passo descomplicado.</em></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900"><strong>O Guia da data perfeita:</strong> <em>Segredos que o mercado de casamentos esconde de você sobre a escolha do grande dia.</em></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900"><strong>Tudo sobre casamento civil.</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900 font-bold">Bônus Surpresa.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900 font-bold">Acesso Vitalício.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900 font-bold">Atualizações.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 text-xl flex-shrink-0">✓</span>
                      <span className="text-gray-900 font-bold">7 dias de Garantia.</span>
                    </li>
                  </ul>
                  <div className="text-center mb-6">
                    <p className="text-5xl font-bold text-gray-900 mb-2">R$ 37</p>
                    <p className="text-lg text-gray-600">ou 5x de R$ 8,05</p>
                  </div>
                  <a
                    href="https://pay.kiwify.com.br/F1dZPQu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-6 rounded-xl text-center transition-all text-lg"
                  >
                    SIM! QUERO O PLANO COMPLETO!
                  </a>
                </div>
              </div>
            </div>
            <p className="text-center mt-8 text-xl font-bold text-rose-600">
              ⚠️ APROVEITE AGORA: Você NÃO vai encontrar esse preço depois.
            </p>
          </div>
        </section>

        {/* RESUMO/RECAP + CTA */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Não leu tudo? Vou Resumir para Você…
            </h2>
            <div className="text-lg md:text-xl text-gray-700 space-y-6 mb-8">
              <p className="text-xl md:text-2xl">
                O <strong className="text-2xl md:text-3xl text-rose-600">Casamento Econômico</strong> é um guia completo que vai te ensinar como fazer um <strong className="text-xl md:text-2xl">casamento incrível por menos de 7 mil reais.</strong>
              </p>
              <p className="text-lg md:text-xl">
                Você vai aprender os segredos que o mercado esconde, como <strong>escolher a data perfeita</strong>, fazer um <strong>buffet econômico e delicioso</strong>, <strong>organizar tudo sem assessoria</strong> e muito mais!
              </p>
              <p className="text-lg md:text-xl">
                Além disso, você ganha <strong className="text-xl md:text-2xl text-rose-600">5 bônus incríveis</strong> que vão facilitar ainda mais toda a organização do seu grande dia.
              </p>
              <p className="font-bold text-2xl md:text-3xl text-green-700 bg-green-100 p-4 rounded-lg border-2 border-green-500">
                E tudo isso por apenas <span className="text-3xl md:text-4xl">R$ 37</span> (ou <span className="text-3xl md:text-4xl">R$ 10</span> no plano básico).
              </p>
            </div>
            <div className="text-center">
              <a
                href="#oferta"
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full text-lg inline-block transition-all transform hover:scale-105"
              >
                QUERO COMEÇAR AGORA!
              </a>
            </div>
          </div>
        </section>

        {/* OBJEÇÃO "POR QUE É BARATO?" */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Legal… mas se é tão bom, <span className="text-red-600">por que está tão barato?</span>
            </h2>
            <div className="text-lg md:text-xl text-gray-700 space-y-6">
              <p className="text-xl md:text-2xl font-semibold">
                Ótima pergunta! E a resposta é simples:
              </p>
              <p className="text-lg md:text-xl">
                Meu objetivo não é ficar rica vendendo esse produto <span className="italic">(apesar de que seria legal haha)</span>.
              </p>
              <p className="text-xl md:text-2xl">
                Meu objetivo é ajudar o <strong className="text-2xl md:text-3xl text-rose-600">MÁXIMO de pessoas possível</strong> a realizarem o sonho do casamento <strong className="text-xl md:text-2xl">sem se endividar ou gastar todas as economias.</strong>
              </p>
              <p className="text-lg md:text-xl">
                Eu já passei por isso, sei como é difícil. E quando descobri esses segredos, <strong>tudo ficou mais fácil.</strong>
              </p>
              <p className="text-xl md:text-2xl">
                Por isso decidi cobrar um <strong className="text-2xl md:text-3xl text-green-600">valor simbólico</strong> que qualquer pessoa possa pagar. Porque eu <strong>realmente quero</strong> que você tenha acesso a essas informações.
              </p>
              <p className="font-bold text-2xl md:text-3xl text-gray-900 bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                Sem pegadinhas, sem letras miúdas ou nada do tipo.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <details key={index} className="bg-gray-50 p-6 rounded-lg cursor-pointer group">
                  <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
                    {item.question}
                    <span className="text-rose-600 text-2xl group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-4 text-gray-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* QUEM SOU (AUTORA) */}
        <section className="py-16 px-4 bg-gradient-to-b from-pink-50 to-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
              Opa! Muito Prazer!
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    Eu sou a <strong>Priscila</strong>… Essa noivinha na foto rsrs
                  </p>
                  <p>
                    E em 2022 eu me casei com exatamente <strong>6.697,70</strong>, mesmo tendo <strong>150 convidados!</strong>
                  </p>
                  <p>
                    Logo depois desse feito, muitas pessoas próximas começaram a pedir minha ajuda pra realizar seus casamentos gastando pouco.
                  </p>
                  <p>
                    Já ajudei mais de <strong>30 pessoas</strong> a realizarem seus casamento (pessoalmente) e nenhuma delas gastou mais de 6 mil reais em tudo!
                  </p>
                  <p>
                    E o melhor, nesse meio tempo eu descobri muitos segredos que o mercado de eventos esconde de você te fazendo gastar 10x mais do que deveria!
                  </p>
                  <p>
                    E hoje, decidi focar minha energia 100% na internet ajudando vocês a se organizarem por conta própria..
                  </p>
                  <p className="text-sm italic">
                    (ao invés de organizar os casamentos, ensino milhares de noivinhas a fazerem o próprio casamento gastando pouco)…
                  </p>
                  <p className="font-bold text-xl mt-4">
                    Fuii… Te espero na área de membros!
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://i.postimg.cc/4ybJMw2j/image.png"
                  alt="Priscila - Autora do Casamento Econômico"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="#oferta"
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-full text-lg inline-block transition-all transform hover:scale-105"
              >
                OK, VAMOS LÁ!
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER SIMPLES */}
        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm">© 2024 Casamento Econômico. Todos os direitos reservados.</p>
            <p className="text-sm mt-2 text-gray-400">@casamentoeconomico_</p>
          </div>
        </footer>
      </div>
    </>
  );
}
