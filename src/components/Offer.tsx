
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield, CreditCard } from "lucide-react";
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
        <div className="absolute top-20 left-10 w-32 h-32 border border-green-200 rounded-full"></div>
        <div className="absolute top-60 right-20 w-40 h-40 border border-blue-200 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border border-purple-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-28 h-28 border border-green-100 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="font-poppins text-sm text-green-600 font-semibold uppercase tracking-wider bg-green-50 px-6 py-3 rounded-full border border-green-200">
              ACESSE O MANUAL
            </span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl text-ai-black mb-4 leading-tight">
            MANUAL IA PARA TODOS COMPLETO
          </h2>
          <p className="font-poppins text-2xl md:text-3xl text-gray-600 font-medium">
            Acesso Definitivo
          </p>
        </div>

        {/* Main Offer Card - Full Width */}
        <div className="w-full">
          <Card className="bg-white border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group rounded-3xl">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[600px]">
              {/* Left side - Extra Large Manual Image */}
              <div className="relative p-12 lg:p-16 flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <img 
                    src="/lovable-uploads/da078bb2-a0c0-4b5a-8c5b-5a0fa821b032.png" 
                    alt="Manual Inteligência Artificial Para Todos - Mockup Completo"
                    className="w-full h-auto mx-auto transform group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="relative z-10 p-12 lg:p-16">
                {/* Benefits List */}
                <div className="space-y-5 mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 p-2.5 rounded-full mr-5 flex-shrink-0 shadow-lg group-hover/item:shadow-xl transition-all duration-200">
                        <Check className="text-white" size={18} strokeWidth={3} />
                      </div>
                      <span className="font-poppins text-gray-800 text-xl font-bold leading-relaxed group-hover/item:text-green-700 transition-colors duration-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Section - More Accessible Look */}
                <div className="mb-10">
                  <div className="mb-8">
                    <p className="font-poppins text-xl text-gray-500 mb-4 font-light">Total:</p>
                    <div className="flex items-baseline mb-4">
                      <span className="font-poppins text-4xl text-green-600 font-light">R$</span>
                      <span className="font-poppins text-8xl md:text-9xl text-green-600 font-light leading-none ml-1">47</span>
                    </div>
                    <p className="font-poppins text-lg text-gray-500 font-light italic">
                      Investimento único • Acesso para sempre
                    </p>
                  </div>

                  {/* CTA Button - Larger and More Prominent */}
                  <Button 
                    onClick={handlePurchaseClick}
                    size="lg" 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-poppins font-bold text-2xl py-10 mb-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                  >
                    Quero Adquirir Agora
                  </Button>

                  {/* Guarantee Section - Enhanced */}
                  <div className="flex items-center justify-center space-x-8 text-base text-gray-600">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <Shield size={18} className="text-blue-600" />
                      </div>
                      <span className="font-medium">7 dias de garantia</span>
                    </div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-full mr-3">
                        <CreditCard size={18} className="text-blue-600" />
                      </div>
                      <span className="font-medium">Compra Segura</span>
                    </div>
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
