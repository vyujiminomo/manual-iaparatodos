
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsCarousel = () => {
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

  return (
    <section id="depoimentos" className="py-16 bg-gray-50">
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
        
        <div className="max-w-6xl mx-auto">
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
                  <Card className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm h-full">
                    <div className="flex flex-col h-full">
                      <div className="text-4xl text-ai-blue mb-4 font-serif">"</div>
                      <p className="font-poppins text-gray-700 mb-6 text-base leading-relaxed flex-grow">
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
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
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

export default TestimonialsCarousel;
