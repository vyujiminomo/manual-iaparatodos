
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Webinar = () => {
  const videoId = "RoT5Rt6qaFI";
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Marta Romilda",
      role: "Administradora",
      text: "Descobri no curso que precisava mudar radicalmente minha interação com elas, pois estava cometendo vários erros e demorando muito para obter as respostas que preciso. Gratidão."
    },
    {
      name: "Ana Isabel",
      role: "Servidora Pública", 
      text: "A aula foi bem didática e sensação q tive foi q a IA não ficará tão distante de nós depois de sua apresentação."
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Video Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&controls=1`}
              title="Webinar IA Para Todos"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Testado na Prática Badge */}
        <div className="text-center mb-8">
          <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
            TESTADO NA PRÁTICA
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="font-bebas text-4xl md:text-5xl text-ai-black leading-tight">
            O Webinar IA Para Todos
          </h2>
        </div>

        {/* Text Content */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="font-poppins text-lg text-gray-700 leading-relaxed">
            Para testar o conteúdo do manual, reuni <span className="font-semibold text-ai-black">20 leigos em IA em 3 encontros ao vivo</span>, e todos saíram com resultados reais:
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-2xl mx-auto relative mb-12">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mx-8">
            <p className="font-poppins text-gray-700 mb-4 text-sm leading-relaxed italic">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div>
              <p className="font-poppins font-bold text-ai-black text-sm">
                {testimonials[currentTestimonial].name}
              </p>
              <p className="font-poppins text-gray-500 text-xs">
                {testimonials[currentTestimonial].role}
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

        {/* CTA Button */}
        <div className="text-center">
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

export default Webinar;
