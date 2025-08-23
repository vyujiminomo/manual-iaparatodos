
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Author = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="autor" className="py-16 bg-ai-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                SOBRE MIM
              </span>
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
                  Vitor Yuji tem apenas 15 anos e já é referência em IA Generativa no Nordeste.
                </p>
                
                <p>
                  Membro do time da Adapta.org, a maior empresa de IA Generativa do Brasil, foi selecionado pelo CEO Max Peters para integrar a equipe como jovem aprendiz.
                </p>
                
                <p>
                  Foi 3x competidor no torneio de robótica First Lego League, em que venceu o prêmio de Excelência em Engenharia. Hoje, é mentor das principais equipes sergipanas.
                </p>
                
                <p>
                  É co-fundador do Mangue Mania, a primeira metodologia ativa infantil sobre manguezais de Sergipe, com mais de 400 alunos impactados.
                </p>
                
                <p>
                  Já palestrou sobre IA para instituições como Instituto JCPM, Colégio Master e SuperClass.
                </p>
                
                <p>
                  É também músico no Movimento Escalada, um dos principais grupos de jovens cristãos do Nordeste.
                </p>
                
                <p>
                  Desde então, vem transmitindo todo seu conhecimento que adquiriu nos últimos anos para milhares de pessoas, com a missão de tornar a IA acessível para todos.
                </p>
              </div>

              <div className="pt-8">
                <Button 
                  onClick={scrollToOffer}
                  size="lg" 
                  className="bg-gradient-to-r from-ai-blue to-blue-600 hover:from-ai-blue/90 hover:to-blue-600/90 text-white font-poppins font-semibold text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Quero Acessar <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Desktop: Show images on the right side */}
            <div className="space-y-6 hidden lg:block">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/lovable-uploads/95d51d12-d306-4a6e-a135-f37e2521d0d1.png" 
                  alt="Vitor Yuji palestrando para jovens" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
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
