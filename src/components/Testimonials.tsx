
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "Gabriela Coelho",
      text: "O ChatGPT começou a me entregar exatamente o que eu queria. Minhas amigas até dizem que meu ChatGPT é mais obediente que o delas kkkk."
    },
    {
      name: "Isadora Helena", 
      text: "Achava que IA era coisa complicada, mas ele explicou de uma forma simples e leve. Depois de ler, comecei a usar a IA nos meus estudos e projetos. É um conteúdo que serve pra todo mundo, independente da idade ou do quanto já entende de tecnologia."
    },
    {
      name: "Arthur Lucena",
      text: "Agora é uma ferramenta essencial pra mim. Mudou totalmente meu jeito de pesquisar e estudar."
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
              RECOMENDADO
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-ai-black mb-8">
            O que dizem os alunos do método:
          </h2>
        </div>
        
        <div className="max-w-2xl mx-auto relative">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm mx-8">
            <p className="font-poppins text-gray-600 mb-6 text-base leading-relaxed">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div>
              <p className="font-poppins font-bold text-ai-black text-base">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5 text-ai-blue" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5 text-ai-blue" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-ai-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
          >
            Quero Acessar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
