
import { Card } from "@/components/ui/card";
import { X, Check, ArrowRight } from "lucide-react";
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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-blue-100 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
              PÚBLICO-ALVO
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
            O MANUAL IA NA PRÁTICA É PARA VOCÊ QUE:
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Mobile: Separate cards */}
          <div className="md:hidden space-y-8">
            <Card className="bg-white border-2 border-gray-100 hover:border-blue-200 p-8 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              {/* Enhanced gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/70 to-orange-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="font-poppins text-2xl font-bold text-ai-black mb-2">
                    Se sente...
                  </h3>
                </div>
                <div className="space-y-5">
                  {transformations.map((transformation, index) => (
                    <div key={`before-${index}`} className="flex items-start space-x-4 bg-red-50/50 p-4 rounded-lg border border-red-100/50">
                      <div className="flex-shrink-0 mt-1">
                        <X className="text-red-500" size={20} />
                      </div>
                      <p className="font-poppins text-gray-700 leading-relaxed">
                        {transformation.before}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="bg-white border-2 border-gray-100 hover:border-blue-200 p-8 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              {/* Enhanced gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 to-cyan-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="font-poppins text-2xl font-bold text-ai-black mb-2">
                    Mas quer...
                  </h3>
                </div>
                <div className="space-y-5">
                  {transformations.map((transformation, index) => (
                    <div key={`after-${index}`} className="flex items-start space-x-4 bg-blue-50/50 p-4 rounded-lg border border-blue-100/50">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="text-ai-blue" size={20} />
                      </div>
                      <p className="font-poppins text-gray-700 leading-relaxed">
                        {transformation.after}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Tablet and Desktop: Side by side */}
          <Card className="bg-white border-2 border-gray-100 hover:border-blue-200 p-8 md:p-12 transition-all duration-300 hover:shadow-xl group relative overflow-hidden hidden md:block">
            {/* Enhanced gradient background on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-cyan-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              {/* Se sente... */}
              <div className="border-r border-gray-200 pr-8">
                <div className="text-center mb-8">
                  <h3 className="font-poppins text-2xl font-bold text-ai-black">
                    Se sente...
                  </h3>
                </div>
                <div className="space-y-5">
                  {transformations.map((transformation, index) => (
                    <div key={`before-${index}`} className="flex items-start space-x-4 bg-red-50/50 p-4 rounded-lg border border-red-100/50 hover:bg-red-50 transition-colors duration-200">
                      <div className="flex-shrink-0 mt-1">
                        <X className="text-red-500" size={20} />
                      </div>
                      <p className="font-poppins text-gray-700 leading-relaxed">
                        {transformation.before}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mas quer... */}
              <div className="pl-4">
                <div className="text-center mb-8">
                  <h3 className="font-poppins text-2xl font-bold text-ai-black">
                    Mas quer...
                  </h3>
                </div>
                <div className="space-y-5">
                  {transformations.map((transformation, index) => (
                    <div key={`after-${index}`} className="flex items-start space-x-4 bg-blue-50/50 p-4 rounded-lg border border-blue-100/50 hover:bg-blue-50 transition-colors duration-200">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="text-ai-blue" size={20} />
                      </div>
                      <p className="font-poppins text-gray-700 leading-relaxed">
                        {transformation.after}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
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

export default Transformation;
