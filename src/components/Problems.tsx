
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
    <section className="py-16 bg-gradient-to-br from-red-900 via-red-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-6xl mb-6 text-white">
            POR QUE A MAIORIA DOS PROFISSIONAIS FALHA AO TENTAR USAR IA NO TRABALHO
          </h2>
          <p className="font-poppins text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            A verdade incômoda é que <span className="text-ai-blue">enquanto você luta contra prazos apertados e sobrecarga de trabalho</span>, a inteligência artificial já poderia estar resolvendo metade dos seus problemas.
          </p>
          <p className="font-poppins text-lg text-gray-300 max-w-2xl mx-auto">
            O problema não é falta de ferramentas – elas existem aos montes. O verdadeiro obstáculo é mais sutil:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-poppins text-2xl text-red-400 mb-4 font-bold">Resultado:</h3>
            <p className="font-poppins text-xl text-white mb-6 leading-relaxed">
              Um ciclo frustrante onde você continua sobrecarregado, enquanto vê colegas de profissão entregando trabalhos impressionantes em metade do tempo.
            </p>
            <p className="font-poppins text-ai-blue text-lg font-semibold">
              Mas não precisa ser assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
