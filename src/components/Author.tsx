
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
              <h3 className="font-bebas text-4xl md:text-5xl text-white mb-6">QUEM É VITOR YUJI?</h3>
              
              <div className="space-y-6 text-gray-300 font-poppins leading-relaxed">
                <p>
                  <strong className="text-white">Pesquisador independente de IA</strong> e trainee da Adapta.org, a maior empresa de IA generativa para negócios da América Latina, já palestrou para públicos de diferentes idades.
                </p>
                
                <p>
                  Aos 12 anos, iniciou sua jornada na robótica pelo torneio First Lego League (FLL), participando de três temporadas e criando o <strong className="text-ai-blue">Mangue Mania</strong>, uma das principais metodologias ativas sobre manguezais de Sergipe, com mais de 400 alunos impactados.
                </p>
                
                <p>
                  Em 2024, foi selecionado por <strong className="text-white">Max Peters</strong>, referência nacional em IA generativa e mentor de centenas de empresários, para ser jovem aprendiz da ADAPTA aos 16 anos.
                </p>
                
                <p>
                  É também músico no <strong className="text-white">Movimento Escalada</strong> e o único adolescente brasileiro com mais de 8 mil impressões no LinkedIn.
                </p>
                
                <p>
                  Desde então, vem transmitindo todo seu conhecimento que adquiriu nos últimos anos para milhares de pessoas, com a missão de <strong className="text-ai-blue">tornar a IA acessível para todos</strong>.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40 font-poppins">
                  16 anos
                </Badge>
                <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40 font-poppins">
                  ADAPTA.org
                </Badge>
                <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40 font-poppins">
                  Max Peters
                </Badge>
                <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40 font-poppins">
                  +400 alunos
                </Badge>
                <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40 font-poppins">
                  +8k LinkedIn
                </Badge>
              </div>

              <div className="pt-6">
                <Button 
                  onClick={scrollToOffer}
                  size="lg" 
                  className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
                >
                  Quero acessar o Manual
                </Button>
              </div>
            </div>

            <div className="space-y-6">
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
