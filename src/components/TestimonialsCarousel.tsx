
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Jorge Leite",
      text: "Gostei muito do fato de, inicialmente, fazer o pessoal entender os termos mais usados para, em seguida, focar na parte prática."
    },
    {
      name: "Arthur Lemos", 
      text: "Abriu a minha cabeça sobre engenharia de prompt. E ensinou que a gente pode usar sim na vida real com aplicabilidade."
    },
    {
      name: "Carla Carvalho",
      text: "Gostei das Personas no  prompt. Perdi o medo de utilizar IA e já está sendo ferramenta indispensável no meu dia a dia"
    },
    {
      name: "Bruno Correira",
      text: "Não tente se substituir, tente ser 10x melhor. O conceito acima melhorou muito na minha produtividade no trabalho."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="depoimentos" className="py-16 bg-ai-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
              DEPOIMENTOS
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-ai-black mb-8">
            Veja o que dizem os alunos do método
          </h2>
        </div>
        
        {/* Mobile and Tablet Layout - Single testimonial with carousel */}
        <div className="lg:hidden">
          <div className="relative mb-8">
            <Card className="bg-white p-8 rounded-xl border-0 shadow-md mx-4">
              <div className="flex flex-col h-full">
                <div className="text-4xl text-ai-blue mb-4 font-serif">"</div>
                <p className="font-poppins text-gray-600 mb-6 text-base leading-relaxed flex-grow">
                  {testimonials[currentTestimonial].text}
                </p>
                <div className="mt-auto">
                  <p className="font-poppins font-bold text-ai-black text-base">
                    – {testimonials[currentTestimonial].name}
                  </p>
                </div>
              </div>
            </Card>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-ai-blue/20 hover:bg-ai-blue hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border border-ai-blue/20 hover:bg-ai-blue hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
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

        {/* Desktop Layout - Original carousel */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2">
                  <Card className="bg-white p-8 rounded-xl border-0 shadow-md h-full">
                    <div className="flex flex-col h-full">
                      <div className="text-4xl text-ai-blue mb-4 font-serif">"</div>
                      <p className="font-poppins text-gray-600 mb-6 text-base leading-relaxed flex-grow">
                        {testimonial.text}
                      </p>
                      <div className="mt-auto">
                        <p className="font-poppins font-bold text-ai-black text-base">
                          – {testimonial.name}
                        </p>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white border-ai-blue/20 hover:bg-ai-blue hover:text-white" />
            <CarouselNext className="right-4 bg-white border-ai-blue/20 hover:bg-ai-blue hover:text-white" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
          >
            Quero Acessar <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
