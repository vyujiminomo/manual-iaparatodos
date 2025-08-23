
import { Card } from "@/components/ui/card";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Transformation = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const transformations = [
    {
      before: "Perdido com tanta informação sobre IA",
      after: "Ter um mapa claro e prático pra usar IA na rotina"
    },
    {
      before: "Frustrado porque tentou usar o ChatGPT e não funcionou",
      after: "Escrever prompts melhores e ter respostas realmente úteis"
    },
    {
      before: "Ultrapassado no trabalho",
      after: "Se destacar com entregas melhores e mais rápidas"
    },
    {
      before: "Sem entender nada de tecnologia",
      after: "Usar IA com uma linguagem simples e leve"
    },
    {
      before: "Sem saber por onde começar",
      after: "Aprender passo a passo, mesmo do zero"
    },
    {
      before: "Sem tempo ou dinheiro pra cursos longos",
      after: "Aprender IA em minutos, por um preço muito mais acessível"
    }
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-ai-black overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-ai-blue/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
      <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-ai-blue/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-ai-blue/20 rounded-full mb-4">
              <div className="w-8 h-8 bg-ai-blue rounded-full"></div>
            </div>
            <div className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
              PÚBLICO-ALVO
            </div>
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
            O MANUAL IA PARA TODOS É PARA VOCÊ QUE:
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile: Separate cards */}
          <div className="md:hidden space-y-8">
            <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-lg border border-white/20">
              <h3 className="font-poppins text-xl font-semibold text-white mb-6 text-center">
                Se sente...
              </h3>
              <div className="space-y-4">
                {transformations.map((transformation, index) => (
                  <div key={`before-${index}`} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <X className="text-red-400" size={20} />
                    </div>
                    <p className="font-poppins text-gray-200">
                      {transformation.before}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm shadow-lg border border-white/20">
              <h3 className="font-poppins text-xl font-semibold text-white mb-6 text-center">
                Mas quer...
              </h3>
              <div className="space-y-4">
                {transformations.map((transformation, index) => (
                  <div key={`after-${index}`} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="text-green-400" size={20} />
                    </div>
                    <p className="font-poppins text-gray-200">
                      {transformation.after}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Tablet and Desktop: Side by side */}
          <Card className="p-8 md:p-12 bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 hidden md:block">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Se sente... */}
              <div>
                <h3 className="font-poppins text-xl font-semibold text-white mb-6 text-center">
                  Se sente...
                </h3>
                <div className="space-y-4">
                  {transformations.map((transformation, index) => (
                    <div key={`before-${index}`} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <X className="text-red-400" size={20} />
                      </div>
                      <p className="font-poppins text-gray-200">
                        {transformation.before}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mas quer... */}
              <div>
                <h3 className="font-poppins text-xl font-semibold text-white mb-6 text-center">
                  Mas quer...
                </h3>
                <div className="space-y-4">
                  {transformations.map((transformation, index) => (
                    <div key={`after-${index}`} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="text-green-400" size={20} />
                      </div>
                      <p className="font-poppins text-gray-200">
                        {transformation.after}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold px-8 py-3 text-lg rounded-lg"
          >
            Quero Acessar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
