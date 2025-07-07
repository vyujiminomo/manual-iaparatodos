import { Card } from "@/components/ui/card";
import { CheckCircle, Brain, Target, Lightbulb } from "lucide-react";

const Solution = () => {
  const pppMethod = [
    {
      icon: Brain,
      title: "Princípios",
      description: "Aprenda os fundamentos universais da IA que nunca mudam, mesmo quando as ferramentas evoluem"
    },
    {
      icon: Target,
      title: "Prática", 
      description: "Saia com resultados reais com exercícios de 5 minutos ao final de cada capítulo"
    },
    {
      icon: Lightbulb,
      title: "Pensamento",
      description: "Fique mais inteligente transformando a IA numa parceira de pensamento"
    }
  ];

  const uniqueFeatures = [
    "Diga não ao 'tecniquês' - Linguagem simples que qualquer profissional entende",
    "Biblioteca de Prompts por profissão - Médicos, professores, advogados…",
    "Você aprende usando - Cada capítulo termina com exercícios de 5 minutos",
    "Atemporalidade - Os princípios funcionam hoje e continuarão funcionando em décadas",
    "Parceria de Pensamento - Em vez de te deixar dependente da IA, ele te ensina a pensar melhor com ela",
    "Filtrado e Testado - Filtrei tudo de melhor que existe sobre IAs nesse manual"
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
            O SISTEMA ANTI-OBSOLESCÊNCIA QUE FUNCIONA MESMO QUANDO TUDO MUDA
          </h2>
          <p className="font-poppins text-xl text-gray-700 max-w-4xl mx-auto">
            A boa notícia: Você não precisa perseguir atualizações e truques temporários para aproveitar a IA ao máximo.
          </p>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-bebas text-4xl md:text-5xl text-ai-black mb-4">MÉTODO PPP</h3>
            <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
              O Manual IA Para Todos é um sistema completo baseado no método PPP:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {pppMethod.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex flex-col items-center">
                  {/* Video Container */}
                  <div className="w-full max-w-sm mb-8">
                    <div className="aspect-[9/16] bg-gray-100 rounded-2xl border-4 border-gray-200 shadow-lg overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
                        <div className="text-center">
                          <IconComponent size={48} className="text-ai-blue mx-auto mb-4" />
                          <p className="font-poppins text-gray-500 text-sm">
                            Vídeo do {item.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className="p-6 w-full border-2 border-gray-100 hover:border-ai-blue transition-colors bg-white shadow-sm">
                    <div className="text-center">
                      <div className="text-ai-blue mb-4 flex justify-center">
                        <IconComponent size={40} />
                      </div>
                      <h4 className="font-bebas text-3xl text-ai-black mb-4">{item.title}</h4>
                      <p className="font-poppins text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h3 className="font-bebas text-3xl text-ai-black mb-6 text-center">O QUE TORNA ESTE MANUAL ÚNICO:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {uniqueFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="text-ai-blue mt-1 flex-shrink-0" size={20} />
                <p className="font-poppins text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-ai-blue/5 border border-ai-blue/20 rounded-lg p-6">
            <p className="font-poppins text-lg text-gray-700">
              <strong>Diferente de outros recursos</strong> que ficam obsoletos em meses, este manual foi projetado para ser 
              <strong className="text-ai-blue"> valor duradouro</strong>, focando no que realmente importa: os fundamentos que 
              funcionarão hoje, amanhã e nos próximos anos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
