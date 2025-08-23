
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-blue-100 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden">
          {/* Badge */}
          <div className="text-center mb-6 px-4">
            <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              TESTADO NA PRÁTICA
            </span>
          </div>

          {/* Title */}
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight text-center px-4">
            O Webinar IA Para Todos
          </h2>

          {/* Text */}
          <p className="font-poppins text-lg text-gray-600 leading-relaxed mb-8 text-center px-4">
            Para testar o conteúdo do manual, reuni <span className="font-semibold text-ai-black">20 leigos em IA em 3 encontros ao vivo</span>, e todos saíram com resultados reais:
          </p>

          {/* Video */}
          <div className="relative mb-8 px-2">
            <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-xl border-2 border-gray-100">
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

          {/* Testimonials Carousel */}
          <div className="relative mb-6 px-2">
            <Card className="bg-white border-2 border-gray-100 p-6 mx-2 sm:mx-4">
              <div>
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
            </Card>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border-2 border-gray-200"
            >
              <ChevronLeft className="w-4 h-4 text-ai-blue" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border-2 border-gray-200"
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

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="text-left mb-16">
            <div className="mb-6">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                TESTADO NA PRÁTICA
              </span>
            </div>
            <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
              O Webinar IA Para Todos
            </h2>
            <p className="font-poppins text-xl text-gray-600 leading-relaxed max-w-4xl">
              Para testar o conteúdo do manual, reuni <span className="font-semibold text-ai-black">20 leigos em IA em 3 encontros ao vivo</span>, e todos saíram com resultados reais:
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl">
            <div className="space-y-8">
              <Card className="bg-white border-2 border-gray-100 p-8">
                <div>
                  <p className="font-poppins text-gray-700 mb-4 leading-relaxed italic">
                    "Descobri no curso que precisava mudar radicalmente minha interação com elas, pois estava cometendo vários erros e demorando muito para obter as respostas que preciso. Gratidão."
                  </p>
                  <div>
                    <p className="font-poppins font-bold text-ai-black">
                      Marta Romilda
                    </p>
                    <p className="font-poppins text-gray-500 text-sm">
                      Administradora
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-2 border-gray-100 p-8">
                <div>
                  <p className="font-poppins text-gray-700 mb-4 leading-relaxed italic">
                    "A aula foi bem didática e sensação q tive foi q a IA não ficará tão distante de nós depois de sua apresentação."
                  </p>
                  <div>
                    <p className="font-poppins font-bold text-ai-black">
                      Ana Isabel
                    </p>
                    <p className="font-poppins text-gray-500 text-sm">
                      Servidora Pública
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="relative">
              <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-xl border-2 border-gray-100">
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

        <div className="text-center mt-16">
          <Button 
            onClick={scrollToOffer}
            className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quero Acessar <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Webinar;
