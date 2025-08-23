
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Author = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="autor" className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-ai-black text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-ai-blue/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-ai-blue/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ai-blue/20 rounded-full mb-4">
                <div className="w-8 h-8 bg-ai-blue rounded-full"></div>
              </div>
              <div className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                SOBRE MIM
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-bebas text-4xl md:text-5xl text-white mb-6">Quem é Vitor Yuji?</h3>
              
              {/* Mobile/Tablet: Show images after title, before text */}
              <div className="space-y-6 lg:hidden">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/95d51d12-d306-4a6e-a135-f37e2521d0d1.png" 
                    alt="Vitor Yuji palestrando para jovens" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/lovable-uploads/dbb1e59a-4b1a-4bb5-8659-005a775bc0a8.png" 
                    alt="Vitor Yuji com sua equipe e alunos" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-6 text-gray-300 font-poppins leading-relaxed">
                <p>
                  Pesquisador independente de IA e trainee da Adapta.org, a maior empresa de IA generativa para negócios da América Latina, já palestrou para públicos de diferentes idades.
                </p>
                
                <p>
                  Aos 12 anos, iniciou sua jornada na robótica pelo torneio First Lego League (FLL), participando de três temporadas e criando o Mangue Mania, uma das principais metodologias ativas sobre manguezais de Sergipe, com mais de 400 alunos impactados.
                </p>
                
                <p>
                  Em 2024, foi selecionado por Max Peters, referência nacional em IA generativa e mentor de centenas de empresários, para ser jovem aprendiz da ADAPTA aos 16 anos.
                </p>
                
                <p>
                  É também músico no Movimento Escalada e o único adolescente brasileiro com mais de 8 mil impressões no LinkedIn.
                </p>
                
                <p>
                  Desde então, vem transmitindo todo seu conhecimento que adquiriu nos últimos anos para milhares de pessoas, com a missão de tornar a IA acessível para todos.
                </p>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={scrollToOffer}
                  size="lg" 
                  className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
                >
                  Quero Acessar
                </Button>
              </div>
            </div>

            {/* Desktop: Show images on the right side */}
            <div className="space-y-6 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/95d51d12-d306-4a6e-a135-f37e2521d0d1.png" 
                  alt="Vitor Yuji palestrando para jovens" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/dbb1e59a-4b1a-4bb5-8659-005a775bc0a8.png" 
                  alt="Vitor Yuji com sua equipe e alunos" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
