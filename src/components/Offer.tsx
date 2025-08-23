
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
    <section id="oferta" className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <div className="mb-4 md:mb-8">
            <span className="font-poppins text-xs sm:text-sm text-blue-600 font-semibold uppercase tracking-wider bg-blue-50 px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-200">
              ACESSE O MANUAL
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-5xl md:text-7xl text-ai-black mb-4 leading-tight px-2">
            ACESSE O MANUAL
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <Card className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden mx-2">
            <div className="p-4 sm:p-6">
              {/* Image */}
              <div className="mb-6 flex justify-center">
                <div className="relative w-full max-w-xs">
                  <img 
                    src="/lovable-uploads/9474d9b2-8b25-48c8-a45c-de82f72e9873.png" 
                    alt="Manual Inteligência Artificial Para Todos - Mockup Completo"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Title Section */}
              <div className="mb-6 text-center">
                <h3 className="font-bebas text-2xl sm:text-3xl text-ai-black mb-2 leading-tight">
                  MANUAL IA PARA TODOS COMPLETO
                </h3>
                <p className="font-poppins text-lg text-gray-600 font-medium">
                  Acesso Definitivo
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-3 mb-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start pb-3 border-b border-gray-100 last:border-b-0">
                    <div className="bg-gradient-to-r from-sky-400 to-cyan-400 p-1.5 rounded-full mr-3 flex-shrink-0 shadow-lg shadow-sky-400/50 glow-effect mt-0.5">
                      <Check className="text-white" size={12} strokeWidth={3} />
                    </div>
                    <span className="font-poppins text-gray-800 text-sm font-medium leading-relaxed">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Section */}
              <div className="mb-6">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-poppins text-lg text-gray-600 font-medium">Total:</span>
                  <div className="flex items-baseline">
                    <span className="font-poppins text-lg text-black font-light">R$</span>
                    <span className="font-poppins text-lg text-black font-light leading-none ml-1">47</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={handlePurchaseClick}
                  size="lg" 
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-poppins font-bold text-base sm:text-lg py-6 mb-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Quero Acessar →
                </Button>

                {/* Guarantee Section */}
                <div className="text-center space-y-1">
                  <div className="flex items-center justify-center gap-1">
                    <Shield size={12} className="text-gray-600" />
                    <p className="font-poppins text-xs text-gray-600 font-medium">7 Dias de Garantia</p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <CreditCard size={12} className="text-gray-600" />
                    <p className="font-poppins text-xs text-gray-600 font-medium">Compra Segura</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          <Card className="bg-white border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-0 items-stretch min-h-[700px]">
              {/* Left side - Large Manual Image */}
              <div className="lg:col-span-2 p-4 lg:p-8 flex items-center justify-center">
                <div className="relative w-full max-w-2xl">
                  <img 
                    src="/lovable-uploads/9474d9b2-8b25-48c8-a45c-de82f72e9873.png" 
                    alt="Manual Inteligência Artificial Para Todos - Mockup Completo"
                    className="w-full h-auto mx-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                {/* Title Section */}
                <div className="mb-8">
                  <h3 className="font-bebas text-4xl lg:text-5xl text-ai-black mb-2 leading-tight">
                    MANUAL IA PARA TODOS COMPLETO
                  </h3>
                  <p className="font-poppins text-xl text-gray-600 font-medium">
                    Acesso Definitivo
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center pb-4 border-b border-gray-100 last:border-b-0">
                      <div className="bg-gradient-to-r from-sky-400 to-cyan-400 p-2 rounded-full mr-4 flex-shrink-0 shadow-lg shadow-sky-400/50 glow-effect">
                        <Check className="text-white" size={16} strokeWidth={3} />
                      </div>
                      <span className="font-poppins text-gray-800 text-lg font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Section */}
                <div className="mb-8">
                  <div className="flex items-baseline justify-between mb-6">
                    <span className="font-poppins text-2xl text-gray-600 font-medium">Total:</span>
                    <div className="flex items-baseline">
                      <span className="font-poppins text-2xl text-black font-light">R$</span>
                      <span className="font-poppins text-2xl text-black font-light leading-none ml-1">47</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={handlePurchaseClick}
                    size="lg" 
                    className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white font-poppins font-bold text-xl py-8 mb-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Quero Acessar →
                  </Button>

                  {/* Guarantee Section */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Shield size={16} className="text-gray-600" />
                      <p className="font-poppins text-sm text-gray-600 font-medium">7 Dias de Garantia</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <CreditCard size={16} className="text-gray-600" />
                      <p className="font-poppins text-sm text-gray-600 font-medium">Compra Segura</p>
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
