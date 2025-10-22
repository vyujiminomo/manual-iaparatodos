
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const Problems = () => {
  const frustrations = [
    "Fiz um curso de IA muito teórico e saí sem saber como aplicar no meu trabalho",
    "Pago uma IA premium, mas ainda não sei usar direito",
    "Tenho muita dificuldade com tecnologia e queria alguém que me guie"
  ];

  return (
    <section className="py-20 pb-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-red-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-red-100 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
            JÁ PALESTREI PARA MAIS DE 1000 PROFISSIONAIS.
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="font-poppins text-2xl text-gray-700 mb-8 leading-relaxed font-semibold">
              E antes de me procurarem, todos enfrentavam frustrações parecidas:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {frustrations.map((frustration, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-red-200 p-8 transition-all duration-300 hover:shadow-xl group relative overflow-hidden">
              {/* Enhanced gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/70 to-orange-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-red-100 p-4 rounded-full mb-6 inline-flex group-hover:bg-red-200 transition-colors duration-300">
                  <MessageSquare className="text-red-600" size={32} />
                </div>
                <blockquote className="font-poppins text-gray-700 leading-relaxed italic text-lg">
                  "{frustration}"
                </blockquote>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-8 mb-12">
          <p className="font-poppins text-2xl text-gray-700 leading-relaxed font-semibold">
            Você já sentiu uma ansiedade crescente cada vez que ouve falar sobre ChatGPT e outras IAs?
          </p>
          
          <p className="font-poppins text-xl text-gray-600 leading-relaxed">
            O problema é que a maioria dos cursos do mercado são teóricos, pouco práticos e sem alguém para tirar suas dúvidas, pegar na sua mão e te mostrar exatamente como fazer.
          </p>
        </div>

        {/* Enhanced closing statement */}
        <div className="text-center">
          <div className="inline-block bg-white border-2 border-gray-200 rounded-full px-8 py-4 shadow-sm">
            <p className="font-poppins text-xl md:text-2xl text-ai-black font-semibold">
              Mas existe um jeito diferente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
