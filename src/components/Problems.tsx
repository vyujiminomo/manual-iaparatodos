
import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Zap } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Cursos que ficam obsoletos",
      description: "A maioria dos cursos e materiais ensinam apenas táticas e dicas que se tornam inúteis nas atualizações seguintes."
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-poppins text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
            Você já se pegou pensando: <span className="text-ai-black font-semibold italic">"Todo mundo está falando de IA, mas eu ainda não sei como usar isso no meu trabalho"</span>?
          </p>
          <h2 className="font-bebas text-4xl md:text-5xl text-ai-black mb-8">
            POR QUE APRENDER IA É TÃO DIFÍCIL HOJE:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-white p-8 border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg group">
                <div className="text-red-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={48} />
                </div>
                <h3 className="font-bebas text-2xl text-ai-black text-center mb-4 leading-tight">
                  {problem.title}
                </h3>
                <p className="font-poppins text-gray-600 text-center leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="font-poppins text-lg text-gray-700 leading-relaxed">
              <span className="text-red-600 font-semibold">O resultado?</span> Você fica preso em um ciclo de frustração, 
              perdendo tempo e oportunidades enquanto outros avançam com a IA.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
