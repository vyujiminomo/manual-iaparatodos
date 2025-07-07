import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Author = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const achievements = [
    "Pesquisador independente de IA",
    "Trainee da ADAPTA.org - maior ecossistema de IA da América Latina",
    "3 temporadas do torneio de robótica FLL",
    "Criador do projeto Mangue Mania - +400 alunos educados",
    "Selecionado por Max Peters como futuro jovem aprendiz",
    "Palestrante sobre IA",
    "Criador de conteúdo no LinkedIn (+7 mil impressões)",
    "Músico no Movimento Escalada"
  ];

  return (
    <section id="autor" className="py-16 bg-ai-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-4">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                SOBRE MIM
              </span>
            </div>
            <h2 className="font-bebas text-4xl md:text-6xl mb-6">
              MAS PORQUE OUVIR UM MOLEQUE DE 14 ANOS FALANDO SOBRE IA?
            </h2>
          </div>

          <Card className="bg-gray-900 border-gray-800 p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600 mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="font-poppins text-gray-400 font-medium">
                      Aqui vai o Mockup [Foto do Vitor]
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bebas text-3xl text-ai-blue mb-6">VITOR YUJI</h3>
                
                <div className="space-y-4 mb-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-ai-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="font-poppins text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40">
                    16 anos
                  </Badge>
                  <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40">
                    ADAPTA.org
                  </Badge>
                  <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40">
                    Max Peters
                  </Badge>
                  <Badge variant="secondary" className="bg-ai-blue/20 text-ai-blue border-ai-blue/40">
                    +400 alunos
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-ai-blue/10 border border-ai-blue/20 rounded-lg p-6">
              <p className="font-poppins text-gray-300 text-center italic">
                "Foi selecionado por Max Peters - referência nacional em IA generativa para negócios - 
                como futuro jovem aprendiz da ADAPTA aos 16 anos."
              </p>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button 
              onClick={scrollToOffer}
              size="lg" 
              className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
            >
              Quero acessar o Manual
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
