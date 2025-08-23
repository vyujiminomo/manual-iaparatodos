
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Webinar = () => {
  const videoId = "RoT5Rt6qaFI";
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Descobri no curso que precisava mudar radicalmente minha interação com elas, pois estava cometendo vários erros e demorando muito para obter as respostas que preciso. Gratidão.",
      name: "Marta Romilda",
      role: "Administradora"
    },
    {
      text: "A aula foi bem didática e sensação q tive foi q a IA não ficará tão distante de nós depois de sua apresentação.",
      name: "Ana Isabel",
      role: "Servidora Pública"
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
        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden">
          {/* Video */}
          <div className="relative mb-6 px-2">
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

          {/* Badge */}
          <div className="text-center mb-3 px-4">
            <span className="font-poppins text-xs sm:text-sm text-ai-blue font-semibold uppercase tracking-wider">
              TESTADO NA PRÁTICA
            </span>
          </div>

          {/* Title */}
          <h2 className="font-bebas text-3xl sm:text-4xl text-ai-black mb-4 leading-tight text-center px-4">
            O Webinar IA Para Todos
          </h2>

          {/* Text */}
          <p className="font-poppins text-sm sm:text-base text-gray-700 leading-relaxed mb-6 text-center px-4">
            Para testar o conteúdo do manual, reuni <span className="font-semibold text-ai-black">20 leigos em IA em 3 encontros ao vivo</span>, e todos saíram com resultados reais:
          </p>

          {/* Testimonials Carousel */}
          <div className="relative mb-6 px-2">
            <div className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-100 mx-2 sm:mx-4">
              <p className="font-poppins text-gray-700 mb-3 text-xs sm:text-sm leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div>
                <p className="font-poppins font-bold text-ai-black text-xs sm:text-sm">
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
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-lg border border-gray-200 hover:bg-gray-50"
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 text-ai-blue" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1.5 sm:p-2 shadow-lg border border-gray-200 hover:bg-gray-50"
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-ai-blue" />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-3 space-x-2">
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

        {/* Desktop Layout - Original */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-4">
                <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                  TESTADO NA PRÁTICA
                </span>
              </div>
              <h2 className="font-bebas text-4xl md:text-5xl text-ai-black mb-6 leading-tight">
                O Webinar IA Para Todos
              </h2>
              <p className="font-poppins text-lg text-gray-700 leading-relaxed mb-8">
                Para testar o conteúdo do manual, reuni <span className="font-semibold text-ai-black">20 leigos em IA em 3 encontros ao vivo</span>, e todos saíram com resultados reais:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <p className="font-poppins text-gray-700 mb-4 text-sm leading-relaxed italic">
                    "Descobri no curso que precisava mudar radicalmente minha interação com elas, pois estava cometendo vários erros e demorando muito para obter as respostas que preciso. Gratidão."
                  </p>
                  <div>
                    <p className="font-poppins font-bold text-ai-black text-sm">
                      Marta Romilda
                    </p>
                    <p className="font-poppins text-gray-500 text-xs">
                      Administradora
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <p className="font-poppins text-gray-700 mb-4 text-sm leading-relaxed italic">
                    "A aula foi bem didática e sensação q tive foi q a IA não ficará tão distante de nós depois de sua apresentação."
                  </p>
                  <div>
                    <p className="font-poppins font-bold text-ai-black text-sm">
                      Ana Isabel
                    </p>
                    <p className="font-poppins text-gray-500 text-xs">
                      Servidora Pública
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
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

export default Webinar;
