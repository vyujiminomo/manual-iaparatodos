
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, CreditCard } from "lucide-react";
import { trackPurchaseIntent } from "@/hooks/useAnalytics";

const Offer = () => {
  const benefits = [
    "Acesso Completo ao Manual IA Para Todos",
    "Glossário de IA",
    "Guia Visual do ChatGPT",
    "Biblioteca de Prompts",
    "Guia de Ferramentas",
    "12 Exercícios Práticos"
  ];

  const handlePurchaseClick = () => {
    trackPurchaseIntent('offer_section');
    window.open("https://pay.hotmart.com/X99318289U", "_blank");
  };

  return (
    <section id="oferta" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 border border-green-200 rounded-full"></div>
        <div className="absolute top-60 right-20 w-32 h-32 border border-blue-200 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-purple-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-green-100 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="font-poppins text-sm text-green-600 font-semibold uppercase tracking-wider bg-green-50 px-4 py-2 rounded-full border border-green-200">
              ACESSE O MANUAL
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-4 leading-tight">
            MANUAL IA PARA TODOS COMPLETO
          </h2>
          <p className="font-poppins text-xl md:text-2xl text-gray-600 font-semibold">
            Acesso Definitivo
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="max-w-lg mx-auto">
          <Card className="bg-white border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 to-blue-50/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Manual cover image at top */}
            <div className="relative p-6 pb-4">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-200/30 to-blue-200/30 rounded-lg blur-sm"></div>
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/e3b97765-2679-4f84-8bcf-d18d57b7e9c5.png" 
                      alt="Manual Inteligência Artificial Para Todos - Capa"
                      className="w-32 h-auto mx-auto rounded-md shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 pt-2">
              {/* Benefits List */}
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-green-100 p-1 rounded-full mr-3 flex-shrink-0">
                      <CheckCircle className="text-green-600" size={16} />
                    </div>
                    <span className="font-poppins text-gray-700 text-sm leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Price Section */}
              <div className="text-center mb-8">
                <div className="mb-4">
                  <p className="font-poppins text-sm text-gray-500 mb-2">Total:</p>
                  <div className="font-bebas text-4xl md:text-5xl text-ai-black font-bold">
                    R$47
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={handlePurchaseClick}
                  size="lg" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-poppins font-bold text-lg py-6 mb-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Quero Adquirir Agora
                </Button>

                {/* Guarantee Section */}
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Shield size={14} className="mr-1" />
                    <span>7 dias de garantia</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  <div className="flex items-center">
                    <CreditCard size={14} className="mr-1" />
                    <span>Compra Segura</span>
                  </div>
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
