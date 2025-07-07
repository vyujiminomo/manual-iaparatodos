
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Offer = () => {
  const benefits = [
    "PDF Completo com 58 Páginas",
    "12 Exercícios Transformadores", 
    "Glossário Relâmpago",
    "Mapa do ChatGPT",
    "Táticas para Prompts",
    "Biblioteca de Prompts por Profissão",
    "Guia de Ferramentas"
  ];

  return (
    <section id="oferta" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-5xl md:text-7xl text-ai-black mb-4">
              DESBLOQUEIE SUA CRIATIVIDADE
            </h2>
            <p className="font-poppins text-xl text-gray-600 max-w-2xl mx-auto">
              Comece agora mesmo a usar IA no seu trabalho com inteligência
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Product showcase */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-ai-blue/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <Card className="relative bg-ai-black text-white p-8 shadow-2xl border-0 rounded-2xl max-w-sm">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-ai-blue rounded-full flex items-center justify-center mx-auto mb-6">
                      <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <h3 className="font-bebas text-3xl text-white mb-2">MANUAL</h3>
                    <h4 className="font-bebas text-2xl text-ai-blue mb-2">INTELIGÊNCIA</h4>
                    <h4 className="font-bebas text-2xl text-ai-blue mb-2">ARTIFICIAL</h4>
                    <h4 className="font-bebas text-2xl text-white mb-4">PARA TODOS</h4>
                    <p className="font-poppins text-sm text-gray-300 mb-2">IA na prática</p>
                    <p className="font-poppins text-sm text-gray-300">Crie mais em menos tempo</p>
                  </div>
                  <div className="text-center">
                    <p className="font-poppins text-white text-sm">Vitor Yuji Minomo</p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right side - Pricing and benefits */}
            <div>
              <div className="mb-8">
                <h3 className="font-bebas text-4xl text-ai-black mb-4">
                  MANUAL INTELIGÊNCIA ARTIFICIAL PARA TODOS
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="font-poppins text-red-500 text-lg line-through mr-2">R$45,00</span>
                  <span className="font-bebas text-5xl text-ai-blue">POR R$20</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={20} />
                    <span className="font-poppins text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                size="lg" 
                className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-bold text-xl py-6 mb-4"
              >
                COMPRAR AGORA
              </Button>

              <p className="text-center font-poppins text-sm text-gray-600">
                Pague uma vez e tenha acesso <strong>para sempre</strong>
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                <p className="font-poppins text-sm text-green-700 text-center">
                  🔒 Compra 100% segura | Pagamento processado pela Hotmart
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
