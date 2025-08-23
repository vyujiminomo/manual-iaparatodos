
import { Card } from "@/components/ui/card";
import { DollarSign, Code, Clock } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: DollarSign,
      title: "CAROS DEMAIS",
      description: "Cursos de IA custam entre R$ 497 a R$ 2.997. Consultores cobram R$ 300/hora para ensinar o básico.",
      subtitle: "Para alguém que quer apenas usar IA no trabalho, esses valores são absurdos."
    },
    {
      icon: Code,
      title: "MUITO TÉCNICOS",
      description: "Criados por programadores para programadores.",
      subtitle: "Te bombardeiam com jargões e códigos que você nunca vai usar."
    },
    {
      icon: Clock,
      title: "MUITO LONGOS",
      description: "Cursos de 40+ horas cheios de teoria desnecessária.",
      subtitle: "Com sua agenda lotada, onde você vai encontrar tempo pra isso?"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-cyan-50/30 relative overflow-hidden">
      {/* Enhanced background pattern with AI theme */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-ai-blue/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-cyan-300/50 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-ai-blue/20 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-cyan-200/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 border border-ai-blue/20 rounded-full"></div>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-cyan-50/20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider bg-cyan-50 px-6 py-3 rounded-full border border-cyan-100 shadow-sm">
              O PROBLEMA
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
            O MANUAL IA PARA TODOS É PARA VOCÊ QUE:
          </h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="font-poppins text-xl text-gray-600 mb-8 leading-relaxed">
              Se você é um profissional ocupado que quer aprender IA mas encontra os seguintes obstáculos:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-ai-blue/30 p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-ai-blue/10 group relative overflow-hidden rounded-2xl">
                {/* Enhanced gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-ai-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-ai-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center">
                  <div className="bg-gradient-to-br from-cyan-100 to-ai-blue/20 p-5 rounded-2xl mb-6 inline-flex group-hover:from-ai-blue/20 group-hover:to-cyan-200 transition-all duration-300 shadow-sm">
                    <IconComponent className="text-ai-blue" size={36} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bebas text-2xl text-ai-black mb-4 leading-tight tracking-wide">
                    {problem.title}
                  </h3>
                  <p className="font-poppins text-gray-700 leading-relaxed mb-4 text-base">
                    {problem.description}
                  </p>
                  {problem.subtitle && (
                    <div className="bg-ai-blue/10 rounded-lg p-3 mt-4">
                      <p className="font-poppins text-ai-blue font-semibold leading-relaxed text-sm">
                        {problem.subtitle}
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Enhanced closing statement */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/20 to-cyan-400/20 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/90 backdrop-blur-sm border-2 border-ai-blue/20 rounded-2xl px-10 py-6 shadow-lg">
              <p className="font-bebas text-2xl md:text-3xl text-ai-black tracking-wide">
                Então o Manual IA Para Todos foi feito para você!
              </p>
              <p className="font-poppins text-gray-600 mt-2 text-sm">
                Aprenda IA de forma prática, rápida e sem complicação
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
