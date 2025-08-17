import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, MessageSquare, Clock, Filter, CheckCircle, AlertCircle } from "lucide-react";

const Solution = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // Images for exercises section - converted to carousel format
  const exerciseImages = [
    "/lovable-uploads/0a778b6f-1582-4867-b659-cbf2a7bd90a4.png",
    "/lovable-uploads/48a92a74-4727-4fec-90cd-4e255785ad05.png",
    "/lovable-uploads/435ee866-b1f4-4f06-8a0b-d7981495160f.png"
  ];

  // Images for manual pages - strategic selection for different sections
  const manualPageImages = [
    "/lovable-uploads/07ff4029-69c1-4c4c-ad44-09c3fef5ffb9.png",
    "/lovable-uploads/1ec57c68-14ed-4068-99ef-c272c88d7087.png",
    "/lovable-uploads/401fc603-a6a2-4c69-91d8-8c60dac03068.png",
    "/lovable-uploads/6cd183cf-0aea-4ffb-910b-4e8da9885ab0.png"
  ];

  // Duplicate images for seamless infinite scroll
  const infiniteExerciseImages = [...exerciseImages, ...exerciseImages];
  const infiniteManualImages = [...manualPageImages, ...manualPageImages];

  const solutionFeatures = [
    {
      icon: DollarSign,
      title: "ACESSÍVEL",
      description: "Sem mensalidades, sem cursos caros. Um investimento único que cabe no seu orçamento. Menos que você gasta em um almoço executivo.",
      hasCarousel: true,
      images: infiniteManualImages,
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "SIMPLES",
      description: "Linguagem humana, zero jargões técnicos. Escrito como se eu estivesse explicando para minha avó.",
      hasCarousel: true,
      images: infiniteManualImages,
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "RÁPIDO",
      subtitle: "12 exercícios práticos de 5 minutos",
      description: "que cabem na agenda mais corrida:",
      finalText: "Saia com resultados reais com exercícios de 5 minutos ao final de cada capítulo",
      hasCarousel: true,
      images: infiniteExerciseImages,
      color: "text-purple-600"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 border border-blue-200 rounded-full"></div>
        <div className="absolute top-60 right-20 w-32 h-32 border border-green-200 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-purple-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Title Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-poppins text-sm text-red-500 font-semibold uppercase tracking-wider bg-red-50 px-4 py-2 rounded-full border border-red-100">
              A SOLUÇÃO
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6 leading-tight">
            O MANUAL QUE RESOLVE TODOS ESSES PROBLEMAS
          </h2>
          <p className="font-poppins text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 italic">
            Tudo de melhor sobre IA, filtrado e simplificado para pessoas ocupadas
          </p>
        </div>

        {/* Alert Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8 relative">
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 text-red-300">
              <AlertCircle size={24} />
            </div>
            
            <div className="text-center mb-6">
              <h3 className="font-poppins text-2xl md:text-3xl font-bold text-red-600 mb-4">
                🚨 Mas eu tenho uma solução diferente.
              </h3>
            </div>
            
            <div className="space-y-4 text-center">
              <p className="font-poppins text-lg md:text-xl text-gray-700 font-semibold">
                <strong>Estudei todos esses cursos caros e complicados.</strong>
              </p>
              <p className="font-poppins text-lg md:text-xl text-gray-700 font-semibold">
                <strong>Testei centenas de técnicas com mais de 100 profissionais.</strong>
              </p>
              <p className="font-poppins text-lg md:text-xl text-gray-700 font-semibold">
                <strong>Filtrei apenas o que realmente funciona no dia a dia.</strong>
              </p>
              
              <div className="mt-6 pt-6 border-t border-red-200">
                <p className="font-poppins text-xl md:text-2xl text-ai-black font-bold">
                  <strong>E agora reuni tudo de melhor no Manual IA Para Todos:</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Features Grid */}
        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto mb-16">
          {solutionFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Video/Image Carousel */}
                {feature.hasCarousel && (
                  <div className="w-full max-w-sm mb-8">
                    <div className="aspect-[3/4] bg-white rounded-2xl border-4 border-gray-200 shadow-xl overflow-hidden relative">
                      <div className="w-full h-full relative">
                        {/* Infinite scroll container */}
                        <div className="absolute inset-0 overflow-hidden">
                          <div 
                            className={`flex flex-col animate-infinite-scroll-${index}`}
                          >
                            {feature.images.map((image, imgIndex) => (
                              <div 
                                key={imgIndex} 
                                className="w-full flex-shrink-0 p-4 flex items-center justify-center"
                                style={{ height: '100%' }}
                              >
                                <img 
                                  src={image}
                                  alt={`${feature.title} - Manual Page ${(imgIndex % (feature.images.length / 2)) + 1}`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Card */}
                <Card className="p-8 w-full border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl bg-white group relative overflow-hidden">
                  {/* Enhanced gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-purple-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="bg-gray-100 p-4 rounded-full mb-6 inline-flex group-hover:bg-blue-100 transition-colors duration-300">
                      <IconComponent className={`${feature.color} group-hover:text-blue-600`} size={32} />
                    </div>
                    
                    <h3 className="font-bebas text-3xl md:text-4xl text-ai-black mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    
                    {feature.subtitle && (
                      <h4 className="font-poppins text-lg font-bold text-gray-800 mb-2">
                        {feature.subtitle}
                      </h4>
                    )}
                    
                    <p className="font-poppins text-gray-700 leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    
                    {feature.finalText && (
                      <p className="font-poppins text-blue-600 font-semibold leading-relaxed">
                        {feature.finalText}
                      </p>
                    )}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto mb-8 relative">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute top-6 right-8 w-2 h-2 bg-purple-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-8 w-2 h-2 bg-blue-200 rounded-full opacity-60"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <CheckCircle className="text-green-500" size={32} />
              </div>
              <p className="font-poppins text-xl md:text-2xl text-ai-black font-bold mb-2">
                Enquanto outros recursos te afundam em teoria...
              </p>
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed">
                O Manual IA Para Todos te coloca para <span className="text-blue-600 font-semibold">agir em minutos</span>.
              </p>
            </div>
          </div>
          
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-poppins font-bold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quero Ter Acesso Agora
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes infiniteScrollSolution0 {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        
        @keyframes infiniteScrollSolution1 {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes infiniteScrollSolution2 {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-infinite-scroll-0 {
          animation: infiniteScrollSolution0 18s linear infinite;
        }
        
        .animate-infinite-scroll-1 {
          animation: infiniteScrollSolution1 15s linear infinite;
        }

        .animate-infinite-scroll-2 {
          animation: infiniteScrollSolution2 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Solution;