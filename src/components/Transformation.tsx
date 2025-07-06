
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Transformation = () => {
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
      after: "se destacar com entregas melhores e mais rápidas"
    },
    {
      before: "Sem entender nada de tecnologia",
      after: "usar IA com uma linguagem simples e leve"
    },
    {
      before: "Sem saber por onde começar",
      after: "aprender passo a passo, mesmo do zero"
    },
    {
      before: "Sem tempo ou dinheiro pra cursos longos",
      after: "aprender IA em minutos, por um preço muito mais acessível"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
            O MANUAL IA PARA TODOS É PARA VOCÊ QUE SE SENTE / MAS QUER
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {transformations.map((transformation, index) => (
            <Card key={index} className="p-6 bg-gradient-to-r from-gray-50 to-white border-l-4 border-l-ai-blue">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="font-poppins text-gray-700 mb-2">
                    <span className="text-red-600 font-semibold">😔 {transformation.before}</span>
                  </p>
                </div>
                
                <div className="mx-6">
                  <ArrowRight className="text-ai-blue" size={24} />
                </div>
                
                <div className="flex-1">
                  <p className="font-poppins text-gray-700">
                    <span className="text-ai-blue font-semibold">✨ {transformation.after}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-ai-blue/5 border border-ai-blue/20 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-bebas text-3xl text-ai-black mb-4">DESBLOQUEIE SUA CRIATIVIDADE</h3>
            <p className="font-poppins text-lg text-gray-700">
              Comece agora mesmo a usar IA no seu trabalho com inteligência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;
