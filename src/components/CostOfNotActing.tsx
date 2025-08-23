import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CostOfNotActing = () => {
  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background pattern */}
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
              URGÊNCIA
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
            O CUSTO DE NÃO AGIR AGORA
          </h2>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="font-poppins text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              Enquanto você fica perdido entre opções caras, complicadas e demoradas...
            </p>
            
            <div className="mb-8">
              <p className="font-poppins text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-semibold">
                Seus concorrentes já estão usando IA para:
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <p className="font-poppins text-lg text-gray-700 font-semibold">✅ Ser muito mais produtivo</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <p className="font-poppins text-lg text-gray-700 font-semibold">✅ Terminar trabalhos em metade do tempo</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                  <p className="font-poppins text-lg text-gray-700 font-semibold">✅ Se destacar e não ficar para trás</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-8 rounded-r-lg shadow-sm mb-8">
              <p className="font-poppins text-xl md:text-2xl text-gray-700 leading-relaxed font-semibold">
                Em poucos meses, a diferença entre quem domina IA e quem não domina será gritante.
              </p>
            </div>
            
            <p className="font-poppins text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
              <strong>E você:</strong> Continua procurando uma solução acessível, simples e rápida.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <button
            onClick={scrollToOffer}
            className="bg-ai-blue hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Quero Acessar <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CostOfNotActing;