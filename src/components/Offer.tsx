
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

const Offer = () => {
  return (
    <section id="oferta" className="py-16 bg-gradient-to-br from-ai-blue/5 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-5xl md:text-7xl text-ai-black mb-6">
              MANUAL INTELIGÊNCIA ARTIFICIAL PARA TODOS
            </h2>
          </div>

          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left side - Product showcase */}
              <div className="p-8 bg-gradient-to-br from-ai-blue to-blue-600 text-white">
                <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center border-2 border-dashed border-white/30 mb-6">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📚</div>
                    <p className="font-poppins text-white/90 font-medium">
                      Aqui vai o Mockup [Produto Final]
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle size={20} className="mr-3" />
                    <span className="font-poppins">Acesso imediato após pagamento</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="mr-3" />
                    <span className="font-poppins">Conteúdo atemporal</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="mr-3" />
                    <span className="font-poppins">Exercícios práticos inclusos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle size={20} className="mr-3" />
                    <span className="font-poppins">Biblioteca de prompts</span>
                  </div>
                </div>
              </div>

              {/* Right side - Pricing and CTA */}
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <span className="font-poppins text-gray-500 text-lg line-through">De R$ 197</span>
                  </div>
                  <div className="font-bebas text-6xl text-ai-blue mb-2">R$ 47</div>
                  <p className="font-poppins text-gray-600">Pagamento único</p>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-bold text-xl py-6 mb-6"
                >
                  QUERO MEU MANUAL AGORA
                </Button>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-start">
                    <Shield className="text-green-600 mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="font-poppins font-semibold text-green-800 mb-2">
                        Garantia Incondicional de Satisfação
                      </h4>
                      <p className="font-poppins text-sm text-green-700">
                        Pra você se sentir ainda mais seguro(a), a lei te oferece uma garantia total de 7 dias. 
                        Se durante esse período você sentir que o manual não é pra você, é só seguir o passo a passo 
                        através da plataforma da Hotmart e a plataforma devolve cada centavo do seu investimento, 
                        sem burocracia ou letras miúdas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center text-sm text-gray-500 font-poppins">
                  🔒 Compra 100% segura | Pagamento processado pela Hotmart
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Offer;
