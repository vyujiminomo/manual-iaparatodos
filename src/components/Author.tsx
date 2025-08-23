
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
    <section id="autor" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                SOBRE MIM
              </span>
            </div>
            <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
              Quem é Vitor Yuji?
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              {/* Mobile/Tablet: Show images after title, before text */}
              <div className="space-y-6 lg:hidden">
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
              
              <div className="space-y-6 text-gray-700 font-poppins leading-relaxed text-lg">
                <p className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <strong className="text-ai-black">Vitor Yuji tem apenas 15 anos</strong> e já é referência em IA Generativa no Nordeste.
                </p>
                
                <p className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
                  Membro do time da <strong className="text-ai-blue">Adapta.org</strong>, a maior empresa de IA Generativa do Brasil, foi selecionado pelo CEO Max Peters para integrar a equipe como jovem aprendiz.
                </p>
                
                <p className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
                  Foi <strong className="text-green-600">3x competidor</strong> no torneio de robótica First Lego League, em que venceu o prêmio de Excelência em Engenharia. Hoje, é mentor das principais equipes sergipanas.
                </p>
                
                <p className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
                  É co-fundador do <strong className="text-emerald-600">Mangue Mania</strong>, a primeira metodologia ativa infantil sobre manguezais de Sergipe, com <strong>mais de 400 alunos impactados</strong>.
                </p>
                
                <p className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
                  Já palestrou sobre IA para instituições como <strong className="text-ai-black">Instituto JCPM, Colégio Master e SuperClass</strong>.
                </p>
                
                <p className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-sm">
                  É também músico no <strong className="text-purple-600">Movimento Escalada</strong>, um dos principais grupos de jovens cristãos do Nordeste.
                </p>
                
                <p className="bg-gradient-to-r from-ai-blue/10 to-green-500/10 p-6 rounded-2xl border-2 border-ai-blue/20 shadow-md">
                  <strong className="text-ai-black">Desde então, vem transmitindo todo seu conhecimento que adquiriu nos últimos anos para milhares de pessoas, com a missão de tornar a IA acessível para todos.</strong>
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
