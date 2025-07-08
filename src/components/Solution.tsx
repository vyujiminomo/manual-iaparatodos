
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, Target, Lightbulb, BookOpen, Users, Clock, Shield, Zap, Filter } from "lucide-react";

const Solution = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Images for Princípios section only
  const principleImages = [
    "/lovable-uploads/07ff4029-69c1-4c4c-ad44-09c3fef5ffb9.png",
    "/lovable-uploads/1ec57c68-14ed-4068-99ef-c272c88d7087.png",
    "/lovable-uploads/95bfc734-b20c-4dc1-a53f-ed633d13e36f.png",
    "/lovable-uploads/4faf59a6-dab3-4edc-8df4-763d2e0f0250.png",
    "/lovable-uploads/8ed7a803-fa2b-4bb1-be1f-3651936a6689.png"
  ];

  // Images for Prática section
  const practiceImages = [
    "/lovable-uploads/0a778b6f-1582-4867-b659-cbf2a7bd90a4.png",
    "/lovable-uploads/48a92a74-4727-4fec-90cd-4e255785ad05.png",
    "/lovable-uploads/435ee866-b1f4-4f06-8a0b-d7981495160f.png"
  ];

  // Images for Pensamento section - conversation examples
  const thinkingImages = [
    "/lovable-uploads/7fe09aaa-a0c0-4a0a-955a-0524e1055922.png",
    "/lovable-uploads/1cd60e77-bac8-4c8a-a4fd-5a8a3af1ebe5.png",
    "/lovable-uploads/b16aaa39-a1d3-4600-8e7f-995ef0d0ab46.png",
    "/lovable-uploads/8b6554b3-8fea-4638-8544-06568d76c98e.png",
    "/lovable-uploads/b44a23ed-7132-4008-aeda-7ff0c996406e.png",
    "/lovable-uploads/c7227f2a-0d74-41a1-b759-be8eab66e4f6.png"
  ];

  // Duplicate images for seamless infinite scroll
  const infinitePrincipleImages = [...principleImages, ...principleImages];
  const infinitePracticeImages = [...practiceImages, ...practiceImages];
  const infiniteThinkingImages = [...thinkingImages, ...thinkingImages];

  const pppMethod = [
    {
      icon: Brain,
      title: "Princípios",
      description: "Aprenda os fundamentos universais da IA que nunca mudam, mesmo quando as ferramentas evoluem",
      hasCarousel: true,
      images: infinitePrincipleImages,
      animationDuration: "15s"
    },
    {
      icon: Target,
      title: "Prática", 
      description: "Saia com resultados reais com exercícios de 5 minutos ao final de cada capítulo",
      hasCarousel: true,
      images: infinitePracticeImages,
      animationDuration: "12s"
    },
    {
      icon: Lightbulb,
      title: "Pensamento",
      description: "Fique mais inteligente transformando a IA numa parceira de pensamento",
      hasCarousel: true,
      images: infiniteThinkingImages,
      animationDuration: "18s"
    }
  ];

  const uniqueFeatures = [
    {
      icon: BookOpen,
      title: "Diga não ao 'tecniquês'",
      description: "Linguagem simples que qualquer profissional entende",
      color: "bg-blue-500",
      image: "/lovable-uploads/d910c3c6-b122-45d0-9eca-5573475bfb9f.png"
    },
    {
      icon: Users,
      title: "Biblioteca de Prompts por profissão",
      description: "Médicos, professores, advogados…",
      color: "bg-green-500",
      image: null
    },
    {
      icon: Clock,
      title: "Você aprende usando",
      description: "Cada capítulo termina com exercícios de 5 minutos",
      color: "bg-purple-500",
      image: null
    },
    {
      icon: Shield,
      title: "Atemporalidade",
      description: "Os princípios funcionam hoje e continuarão funcionando em décadas",
      color: "bg-orange-500",
      image: null
    },
    {
      icon: Zap,
      title: "Parceria de Pensamento",
      description: "Em vez de te deixar dependente da IA, ele te ensina a pensar melhor com ela",
      color: "bg-pink-500",
      image: null
    },
    {
      icon: Filter,
      title: "Filtrado e Testado",
      description: "Filtrei tudo de melhor que existe sobre IAs nesse manual",
      color: "bg-teal-500",
      image: null
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
              MÉTODO PPP
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
            O SISTEMA ANTI-OBSOLESCÊNCIA QUE FUNCIONA MESMO QUANDO TUDO MUDA
          </h2>
          <p className="font-poppins text-xl text-gray-700 max-w-4xl mx-auto">
            A boa notícia: Você não precisa perseguir atualizações e truques temporários para aproveitar a IA ao máximo.
          </p>
        </div>

        {/* PPP Method Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-bebas text-4xl md:text-5xl text-ai-black mb-4">MÉTODO PPP</h3>
            <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
              O Manual IA Para Todos é um sistema completo baseado no método PPP:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {pppMethod.map((item, index) => {
              const IconComponent = item.icon;
              
              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Infinite Scroll Container */}
                  {item.hasCarousel ? (
                    <div className="w-full max-w-sm mb-8">
                      <div className="aspect-[3/4] bg-white rounded-2xl border-4 border-gray-200 shadow-lg overflow-hidden relative">
                        <div className="w-full h-full relative">
                          {/* Infinite scroll container */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div 
                              className={`flex flex-col animate-infinite-scroll-${index}`}
                            >
                              {item.images.map((image, imgIndex) => (
                                <div 
                                  key={imgIndex} 
                                  className="w-full flex-shrink-0 p-4 flex items-center justify-center"
                                  style={{ height: '100%' }}
                                >
                                  <img 
                                    src={image}
                                    alt={`${item.title} - Slide ${(imgIndex % (item.images.length / 2)) + 1}`}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // This shouldn't happen anymore since all have carousels now
                    <div className="w-full max-w-sm mb-8">
                      <div className="aspect-[3/4] bg-gray-100 rounded-2xl border-4 border-gray-200 shadow-lg flex items-center justify-center">
                        <IconComponent size={60} className="text-gray-400" />
                      </div>
                    </div>
                  )}

                  {/* Content Card */}
                  <Card className="p-6 w-full border-2 border-gray-100 hover:border-ai-blue transition-colors bg-white shadow-sm">
                    <div className="text-center">
                      <div className="text-ai-blue mb-4 flex justify-center">
                        <IconComponent size={40} />
                      </div>
                      <h4 className="font-bebas text-3xl text-ai-black mb-4">{item.title}</h4>
                      <p className="font-poppins text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-ai-blue/10 to-purple-500/10 border border-ai-blue/20 rounded-xl p-8 max-w-4xl mx-auto">
              <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                <strong>Diferente de outros recursos</strong> que ficam obsoletos em meses, este manual foi projetado para ser 
                <strong className="text-ai-blue"> valor duradouro</strong>, focando no que realmente importa: os fundamentos que 
                funcionarão hoje, amanhã e nos próximos anos.
              </p>
            </div>
          </div>
        </div>

        {/* Unique Features Section - New Style */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                ESPECIALIDADES
              </span>
            </div>
            <h3 className="font-bebas text-5xl text-ai-black mb-6">O QUE TORNA ESTE MANUAL ÚNICO:</h3>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {uniqueFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="overflow-hidden border-2 border-gray-100 hover:border-ai-blue transition-all duration-300 hover:shadow-lg bg-white group">
                  {/* Image Section */}
                  <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden">
                    {feature.image ? (
                      <img 
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <div className={`${feature.color} p-8 rounded-full`}>
                          <IconComponent className="text-white" size={48} />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`${feature.color} p-2 rounded-full flex-shrink-0 mt-1`}>
                        <IconComponent className="text-white" size={16} />
                      </div>
                      <h4 className="font-poppins font-bold text-ai-black text-lg leading-tight">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="font-poppins text-gray-700 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-ai-blue/5 border border-ai-blue/20 rounded-lg p-6 mb-8">
            <p className="font-poppins text-lg text-gray-700">
              Enquanto outros recursos te afundam em teoria, o Manual IA Para Todos te coloca para agir <span className="text-ai-blue font-semibold">em minutos</span>.
            </p>
          </div>
          
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
          >
            Quero acessar o Manual
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes infiniteScrollPrinciples {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes infiniteScrollPractice {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes infiniteScrollThinking {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-infinite-scroll-0 {
          animation: infiniteScrollPrinciples 15s linear infinite;
        }
        
        .animate-infinite-scroll-1 {
          animation: infiniteScrollPractice 12s linear infinite;
        }

        .animate-infinite-scroll-2 {
          animation: infiniteScrollThinking 18s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Solution;
