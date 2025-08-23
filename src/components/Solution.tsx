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
    "/lovable-uploads/1ec57c68-14ed-4068-99ef-c272c88d7087.png",
    "/lovable-uploads/401fc603-a6a2-4c69-91d8-8c60dac03068.png",
    "/lovable-uploads/6cd183cf-0aea-4ffb-910b-4e8da9885ab0.png",
    "/lovable-uploads/75fbd01a-85c6-43f4-bdd9-1d7114badae7.png"
  ];

  // ChatGPT scrolling images for accessible section
  const chatGptImages = [
    "/lovable-uploads/c7227f2a-0d74-41a1-b759-be8eab66e4f6.png",
    "/lovable-uploads/10d139d2-587f-4287-8b4d-29e3cdb8824a.png",
    "/lovable-uploads/12d9bc2f-23d7-48d3-a6b1-214766d6aa53.png",
    "/lovable-uploads/19e8a63d-0fe7-4828-868c-5acf461e91c7.png"
  ];

  // Duplicate images for seamless infinite scroll
  const infiniteExerciseImages = [...exerciseImages, ...exerciseImages];
  const infiniteManualImages = [...manualPageImages, ...manualPageImages];
  const infiniteChatGptImages = [...chatGptImages, ...chatGptImages];

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
          <div className="mb-8">
            <span className="font-poppins text-sm text-blue-600 font-semibold uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              A SOLUÇÃO
            </span>
          </div>
          <h1 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6 leading-tight">
            O Manual Que Resolve todos esses problemas
          </h1>
          <h2 className="font-poppins text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-8 font-medium leading-relaxed">
            Tudo de melhor sobre IA, filtrado e simplificado para profissionais ocupados
          </h2>
        </div>

        {/* Solution Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 relative">
            <div className="text-center">
              <h3 className="font-poppins text-xl md:text-2xl font-bold text-blue-700 mb-4">
                💡 Mas eu tenho uma solução diferente.
              </h3>
              
              <div className="space-y-3 text-center">
                <p className="font-poppins text-base md:text-lg text-gray-700">
                  <strong>Estudei todos esses cursos caros e complicados.</strong>
                </p>
                <p className="font-poppins text-base md:text-lg text-gray-700">
                  <strong>Testei centenas de técnicas com mais de 100 profissionais.</strong>
                </p>
                <p className="font-poppins text-base md:text-lg text-gray-700">
                  <strong>Filtrei apenas o que realmente funciona no dia a dia.</strong>
                </p>
                
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <p className="font-poppins text-lg md:text-xl text-ai-black font-bold">
                    <strong>E agora reuni tudo de melhor no Manual IA Para Todos:</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Solution Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {solutionFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div key={index} className="flex flex-col items-center">
                {/* Combined Card with Text and Images */}
                <Card className="p-6 w-full aspect-square border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl bg-white group relative overflow-hidden rounded-2xl">
                  {/* Enhanced gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-purple-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Background Images with Infinite Scroll */}
                  {feature.hasCarousel && (
                    <div className="absolute inset-0 opacity-10 overflow-hidden">
                      <div 
                        className={`flex flex-col animate-infinite-scroll-${index}`}
                        style={{ height: '200%' }}
                      >
                        {feature.images.map((image, imgIndex) => (
                          <div 
                            key={imgIndex} 
                            className="w-full flex-shrink-0 p-2 flex items-center justify-center"
                            style={{ height: '50%' }}
                          >
                            <img 
                              src={image}
                              alt={`${feature.title} - Background ${(imgIndex % (feature.images.length / 2)) + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-center text-center">
                    <div className="bg-gray-100 p-3 rounded-full mb-4 inline-flex mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                      <IconComponent className={`${feature.color} group-hover:text-blue-600`} size={28} />
                    </div>
                    
                    <h3 className="font-bebas text-2xl md:text-3xl text-ai-black mb-3 leading-tight">
                      {feature.title}
                    </h3>
                    
                    {feature.subtitle && (
                      <h4 className="font-poppins text-base font-bold text-gray-800 mb-2">
                        {feature.subtitle}
                      </h4>
                    )}
                    
                    <p className="font-poppins text-sm text-gray-700 leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    
                    {feature.finalText && (
                      <p className="font-poppins text-sm text-blue-600 font-semibold leading-relaxed">
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
            className="font-poppins font-bold text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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