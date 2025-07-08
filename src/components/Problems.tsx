
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
      title: "Falta de um método prático",
      description: "Sem um método simples e prático, você acaba gastando mais tempo tentando fazer a IA funcionar do que trabalhando."
    },
    {
      icon: Zap,
      title: "Emburrecimento",
      description: "Muitos materiais te ensinam a entregar todo seu pensamento para a máquina, te deixando dependente ao invés de mais inteligente."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-red-200 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-poppins text-sm text-red-500 font-semibold uppercase tracking-wider bg-red-50 px-4 py-2 rounded-full border border-red-100">
              O PROBLEMA
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
            POR QUE APRENDER IA É TÃO DIFÍCIL HOJE?
          </h2>
          <p className="font-poppins text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Você já se pegou pensando: <span className="text-ai-black font-semibold">"Todo mundo está falando de IA, mas eu ainda não sei como usar isso no meu trabalho"</span>?
          </p>
          <p className="font-poppins text-2xl font-semibold text-ai-black max-w-4xl mx-auto">
            Aprender IA hoje tem três grandes problemas:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-white border-2 border-gray-100 hover:border-red-200 p-8 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-red-100 p-4 rounded-full mb-6 inline-flex group-hover:bg-red-200 transition-colors duration-300">
                    <IconComponent className="text-red-600" size={32} />
                  </div>
                  <h3 className="font-poppins font-bold text-ai-black text-xl mb-4 leading-tight">
                    {problem.title}
                  </h3>
                  <p className="font-poppins text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-100 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="font-poppins text-lg text-gray-700 leading-relaxed">
              <strong className="text-red-600">O resultado:</strong> Você fica perdido com informações desatualizadas, 
              perde tempo com métodos que não funcionam e acaba mais confuso do que quando começou.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-ai-blue/10 to-ai-blue/20 border border-ai-blue/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="font-bebas text-3xl md:text-4xl text-ai-black font-bold">
              Mas não precisa ser assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
