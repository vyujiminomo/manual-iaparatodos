import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Brain, Target, Lightbulb, BookOpen, Users, Clock, Shield, Zap, Filter } from "lucide-react";
import { useState, useEffect } from "react";

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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance images every 1.5 seconds with scroll animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // After a short delay, change the image
      setTimeout(() => {
        setCurrentImageIndex(prev => (prev + 1) % principleImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const pppMethod = [
    {
      icon: Brain,
      title: "Princípios",
      description: "Aprenda os fundamentos universais da IA que nunca mudam, mesmo quando as ferramentas evoluem",
      hasCarousel: true
    },
    {
      icon: Target,
      title: "Prática", 
      description: "Saia com resultados reais com exercícios de 5 minutos ao final de cada capítulo",
      hasCarousel: false
    },
    {
      icon: Lightbulb,
      title: "Pensamento",
      description: "Fique mais inteligente transformando a IA numa parceira de pensamento",
      hasCarousel: false
    }
  ];

  const uniqueFeatures = [
    {
      icon: BookOpen,
      title: "Diga não ao 'tecniquês'",
      description: "Linguagem simples que qualquer profissional entende",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "Biblioteca de Prompts por profissão",
      description: "Médicos, professores, advogados…",
      color: "bg-green-500"
    },
    {
      icon: Clock,
      title: "Você aprende usando",
      description: "Cada capítulo termina com exercícios de 5 minutos",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Atemporalidade",
      description: "Os princípios funcionam hoje e continuarão funcionando em décadas",
      color: "bg-orange-500"
    },
    {
      icon: Zap,
      title: "Parceria de Pensamento",
      description: "Em vez de te deixar dependente da IA, ele te ensina a pensar melhor com ela",
      color: "bg-pink-500"
    },
    {
      icon: Filter,
      title: "Filtrado e Testado",
      description: "Filtrei tudo de melhor que existe sobre IAs nesse manual",
      color: "bg-teal-500"
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
                  {/* Image Carousel Container - only for Princípios */}
                  {item.hasCarousel ? (
                    <div className="w-full max-w-sm mb-8">
                      <div className="aspect-[3/4] bg-white rounded-2xl border-4 border-gray-200 shadow-lg overflow-hidden">
                        <div className="w-full h-full relative">
                          {/* Scrolling container with vertical animation */}
                          <div 
                            className="absolute inset-0 transition-transform duration-700 ease-in-out"
                            style={{ 
                              transform: `translateY(${isTransitioning ? '-10px' : '0px'})`,
                              opacity: isTransitioning ? 0.3 : 1
                            }}
                          >
                            <div className="w-full h-full p-4 flex items-center justify-center">
                              <img 
                                src={principleImages[currentImageIndex]}
                                alt={`${item.title} - Slide ${currentImageIndex + 1}`}
                                className="w-full h-full object-contain transition-all duration-700 ease-in-out"
                              />
                            </div>
                          </div>
                          
                          {/* Dots indicator */}
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                            {principleImages.map((_, dotIndex) => (
                              <div
                                key={dotIndex}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                  dotIndex === currentImageIndex ? 'bg-ai-blue scale-125' : 'bg-white/50'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Placeholder for other sections
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

        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="mb-4">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                ESPECIALIDADES
              </span>
            </div>
            <h3 className="font-bebas text-4xl text-ai-black">O QUE TORNA ESTE MANUAL ÚNICO:</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {uniqueFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="p-6 border-2 border-gray-100 hover:border-ai-blue transition-all duration-300 hover:shadow-lg bg-white group">
                  <div className="flex flex-col items-center text-center">
                    <div className={`${feature.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    <h4 className="font-poppins font-bold text-ai-black mb-3 text-lg">
                      {feature.title}
                    </h4>
                    <p className="font-poppins text-gray-700 text-sm leading-relaxed">
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
    </section>
  );
};

export default Solution;
