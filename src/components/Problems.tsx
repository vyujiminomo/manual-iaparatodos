
import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Zap } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Cursos que envelhecem rápido",
      description: "A maioria ensina truques e dicas temporárias que mudam a cada atualização.",
      subtitle: "Você aprende hoje o que já não serve amanhã."
    },
    {
      icon: Clock,
      title: "Falta de prática real",
      description: "Te enchem de teoria, mas você continua sem saber usar. Sem um passo a passo simples, você gasta mais tempo tentando entender do que usando.",
      subtitle: ""
    },
    {
      icon: Zap,
      title: "Emburrecimento",
      description: "Muitos ensinam a usar IA pra pensar no seu lugar, copiando e colando instruções e respostas prontas.",
      subtitle: "Isso te deixa mais dependente, e não mais inteligente."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-red-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-red-100 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-poppins text-sm text-red-500 font-semibold uppercase tracking-wider bg-red-50 px-4 py-2 rounded-full border border-red-100">
              O PROBLEMA
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
            POR QUE APRENDER IA PARECE TÃO DIFÍCIL<br />
            <span className="text-red-600">(MESMO COM TANTO CONTEÚDO POR AÍ)?</span>
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="font-poppins text-xl text-gray-600 mb-6 leading-relaxed">
              Você já pensou algo como:
            </p>
            
            {/* Quote block with enhanced styling */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-red-500 p-6 rounded-r-lg shadow-sm mb-8 mx-4 md:mx-0">
              <blockquote className="font-poppins text-xl md:text-2xl text-gray-700 italic font-medium leading-relaxed">
                "Todo mundo fala de IA, mas eu ainda não sei como usar isso no meu trabalho."
              </blockquote>
            </div>
            
            <p className="font-poppins text-2xl font-semibold text-ai-black">
              Hoje, aprender IA é confuso por <span className="text-red-600">três motivos principais:</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-white border-2 border-gray-100 hover:border-red-200 p-8 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
                {/* Enhanced gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50/70 to-orange-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-red-100 p-4 rounded-full mb-6 inline-flex group-hover:bg-red-200 transition-colors duration-300">
                    <IconComponent className="text-red-600" size={32} />
                  </div>
                  <h3 className="font-poppins font-bold text-ai-black text-xl mb-4 leading-tight">
                    {problem.title}
                  </h3>
                  <p className="font-poppins text-gray-600 leading-relaxed mb-3">
                    {problem.description}
                  </p>
                  {problem.subtitle && (
                    <p className="font-poppins text-red-600 font-semibold leading-relaxed">
                      {problem.subtitle}
                    </p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced result section */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-100 rounded-2xl p-8 max-w-5xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-red-200 rounded-full opacity-60"></div>
            <div className="absolute top-6 right-8 w-2 h-2 bg-orange-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-8 w-2 h-2 bg-red-200 rounded-full opacity-60"></div>
            
            <div className="relative z-10">
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                <strong className="text-red-600 text-xl">O resultado:</strong>
              </p>
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed">
                Você fica perdido, com medo de parecer ultrapassado, e sai mais confuso do que quando começou.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced closing statement */}
        <div className="text-center">
          <div className="inline-block bg-white border-2 border-gray-200 rounded-full px-8 py-4 shadow-sm">
            <p className="font-poppins text-xl md:text-2xl text-ai-black font-semibold">
              Mas não precisa ser assim.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
