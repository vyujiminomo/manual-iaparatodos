
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
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-2xl relative overflow-hidden group rounded-2xl">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="grid lg:grid-cols-2 gap-0 items-center min-h-[500px]">
              {/* Left side - Large Manual Image */}
              <div className="relative p-8 lg:p-12 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-2xl blur-xl"></div>
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/da078bb2-a0c0-4b5a-8c5b-5a0fa821b032.png" 
                      alt="Manual Inteligência Artificial Para Todos - Mockup Completo"
                      className="w-full max-w-md mx-auto rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="relative z-10 p-8 lg:p-12">
                {/* Benefits List */}
                <div className="space-y-4 mb-10">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center group/item">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 rounded-full mr-4 flex-shrink-0 shadow-md group-hover/item:shadow-lg transition-all duration-200">
                        <Check className="text-white" size={16} strokeWidth={3} />
                      </div>
                      <span className="font-poppins text-gray-800 text-lg font-bold leading-relaxed group-hover/item:text-green-700 transition-colors duration-200">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price Section */}
                <div className="mb-8">
                  <div className="mb-6">
                    <p className="font-poppins text-lg text-gray-600 mb-3 font-medium">Total:</p>
                    <div className="font-bebas text-6xl md:text-7xl text-ai-black font-bold leading-none">
                      R$47
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={handlePurchaseClick}
                    size="lg" 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-poppins font-bold text-xl py-8 mb-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  >
                    Quero Adquirir Agora
                  </Button>

                  {/* Guarantee Section */}
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <Shield size={14} className="text-blue-600" />
                      </div>
                      <span className="font-medium">7 dias de garantia</span>
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                        <CreditCard size={14} className="text-blue-600" />
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
