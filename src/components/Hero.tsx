import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      text: "Você conseguiu desbloquear a minha dificuldade com a tecnologia.",
      name: "Osvaldo Araki"
    },
    {
      text: "Eu interagia timidamente, agora mudou 80%",
      name: "Isabella Salim"
    }
  ];

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Manual Cover */}
          <div className="relative mb-8 flex justify-center">
            <div className="aspect-[3/4] w-64 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/12555f99-96ca-47c9-bc24-74a2677becf4.png" 
                alt="Capa do Manual Inteligência Artificial Para Todos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center mb-8">
            <h1 className="font-bebas text-4xl leading-tight text-ai-black mb-6">
              TUDO DE MELHOR SOBRE IA, EM UM SÓ MANUAL
            </h1>
            <p className="font-poppins text-lg text-gray-700 mb-6 leading-relaxed">
              Guia de IAs, exercícios práticos e linguagem simples - <span className="text-ai-blue font-semibold">lendo 5 minutos por dia</span>.
            </p>
          </div>

          {/* Button */}
          <div className="text-center mb-8">
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4 w-full max-w-sm"
            >
              Quero Acessar
            </Button>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mx-4">
              <p className="font-poppins text-gray-700 text-sm italic mb-2">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="font-poppins font-semibold text-ai-black text-sm">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4 text-ai-blue" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4 text-ai-blue" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentTestimonial ? 'bg-ai-blue' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Keep original */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                MANUAL IA PARA TODOS
              </span>
            </div>
            <h1 className="font-bebas text-5xl md:text-7xl leading-tight text-ai-black mb-6">
              TUDO DE MELHOR SOBRE IA, EM UM SÓ MANUAL
            </h1>
            <p className="font-poppins text-xl text-gray-700 mb-6 leading-relaxed">
              Guia de IAs, exercícios práticos e linguagem simples - <span className="text-ai-blue font-semibold">lendo 5 minutos por dia</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToOffer}
                size="lg" 
                className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
              >
                Quero Acessar
              </Button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-poppins text-gray-700 text-sm italic mb-2">
                  "Você conseguiu desbloquear a minha dificuldade com a tecnologia."
                </p>
                <p className="font-poppins font-semibold text-ai-black text-sm">
                  Osvaldo Araki
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-poppins text-gray-700 text-sm italic mb-2">
                  "Eu interagia timidamente, agora mudou 80%"
                </p>
                <p className="font-poppins font-semibold text-ai-black text-sm">
                  Isabella Salim
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-white shadow-2xl border-0">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/12555f99-96ca-47c9-bc24-74a2677becf4.png" 
                  alt="Capa do Manual Inteligência Artificial Para Todos"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
