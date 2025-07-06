
import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Zap } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Cursos que ficam obsoletos",
      description: "A maioria dos cursos ensina apenas táticas e dicas que se tornam inúteis nas atualizações seguintes."
    },
    {
      icon: Clock,
      title: "Perda de tempo tentando fazer funcionar",
      description: "Sem um método simples e prático, você acaba gastando mais tempo tentando fazer a IA funcionar."
    },
    {
      icon: Zap,
      title: "Dependência da máquina",
      description: "Muitos materiais te ensinam a entregar todo seu pensamento para a máquina, podendo te emburrecer."
    }
  ];

  return (
    <section className="py-16 bg-ai-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-6xl mb-6">
            POR QUE A MAIORIA DOS PROFISSIONAIS FALHA AO TENTAR USAR IA NO TRABALHO
          </h2>
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto">
            Você já se pegou pensando: "Todo mundo está falando de IA, mas eu ainda não sei como usar isso no meu trabalho"?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-gray-900 border-gray-800 p-6 hover:bg-gray-800 transition-colors">
                <div className="text-ai-blue mb-4">
                  <IconComponent size={48} />
                </div>
                <h3 className="font-bebas text-2xl text-white mb-4">{problem.title}</h3>
                <p className="font-poppins text-gray-300 leading-relaxed">{problem.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block bg-ai-blue/10 border border-ai-blue/20 rounded-lg p-6">
            <h3 className="font-bebas text-2xl text-ai-blue mb-2">POR QUE APRENDER IA É TÃO DIFÍCIL HOJE:</h3>
            <p className="font-poppins text-gray-300">
              A falta de um sistema que funcione independente das mudanças tecnológicas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
