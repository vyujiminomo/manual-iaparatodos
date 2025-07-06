
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
    <section className="py-16 bg-ai-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-red-600/30 via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <p className="font-poppins text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Você já se pegou pensando: "Todo mundo está falando de IA, mas eu ainda não sei como usar isso no meu trabalho"?
          </p>
          <h3 className="font-poppins text-2xl text-white mb-8 font-bold">
            Por Que Aprender IA É Tão Difícil Hoje:
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-gray-800/50 border-gray-700/50 p-6 backdrop-blur-sm">
                <div className="text-orange-400 mb-4 flex justify-center">
                  <IconComponent size={40} />
                </div>
                <h3 className="font-poppins font-bold text-white text-center mb-4 text-lg leading-tight">
                  {problem.title}
                </h3>
                <p className="font-poppins text-gray-300 text-center text-sm leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
