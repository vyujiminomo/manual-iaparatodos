
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { useEffect } from "react";

const UpsellPnp = () => {
  useDynamicMeta({
    title: "Prompt na Prática",
    description: "Veja um expert em IA usando prompts na prática com 10 vídeos curtos exclusivos.",
    image: "/lovable-uploads/c30266d4-9825-4445-9432-869ea5446629.png"
  });

  useEffect(() => {
    // Carregar o script da Hotmart
    const script = document.createElement('script');
    script.src = 'https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
    script.async = true;
    
    script.onload = () => {
      // Aguardar um pouco para garantir que a biblioteca foi carregada
      setTimeout(() => {
        if (window.checkoutElements) {
          window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel');
        }
      }, 100);
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup - remover o script quando o componente for desmontado
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-poppins">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-bebas text-4xl md:text-6xl font-bold text-ai-black mb-8 leading-tight">
            PARABÉNS PELA DECISÃO DE ENTRAR NO MANUAL IA NA PRÁTICA!
          </h1>
          
          <Card className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-2xl mb-12">
            <div className="space-y-6 text-left">
              <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                Sua cópia já está garantida e você já pode começar a ler o guia completo pra usar IA para ter mais produtividade e criatividade.
              </p>
              
              <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                Agora, eu quero te fazer um convite especial:
              </p>
              
              <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                Ler sobre prompts é uma coisa. <strong className="text-ai-black">VER</strong> um expert usando eles na prática é completamente diferente.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <p className="font-poppins text-lg text-gray-700 leading-relaxed font-semibold mb-4">
                  É como fazer um bolo.
                </p>
                
                <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                  Você pode ter a melhor receita do mundo (e isso já faz um bom bolo!), mas assistir um chef experiente preparando te faz entender a mentalidade, a intuição, o "sexto sentido" que só ver alguém experiente revela.
                </p>
              </div>
              
              <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                O Manual IA Na Prática já te entrega tudo que você precisa para usar IA de forma inteligente.
              </p>
              
              <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                Mas se você quer <strong className="text-ai-blue">acelerar</strong> esse processo e ver como um expert em IA pensa em tempo real...
              </p>
            </div>
          </Card>
        </div>
        
        <div className="text-center mb-16">
          <h2 className="font-bebas text-3xl md:text-5xl font-bold text-ai-black mb-8">
            APRESENTO: PROMPT NA PRÁTICA
          </h2>
          
          <Card className="p-8 md:p-12 bg-gradient-to-br from-ai-blue/5 to-indigo-50 shadow-xl border border-ai-blue/20 rounded-2xl">
            <div className="space-y-8">
              <p className="font-poppins text-xl text-ai-black leading-relaxed font-semibold">
                Uma série com <span className="text-ai-blue">10 vídeos curtos (~3 minutos cada)</span> onde você vê na minha tela:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-ai-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="font-poppins text-lg text-gray-700">"Truques mentais" de interação que não cabem no manual</p>
                </div>
                <div className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-ai-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="font-poppins text-lg text-gray-700">A mentalidade por trás das conversas com IA</p>
                </div>
                <div className="flex items-start space-x-4 bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-ai-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold">✓</span>
                  </div>
                  <p className="font-poppins text-lg text-gray-700">Como transformar uma resposta "ok" numa resposta incrível</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 md:p-12 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-xl border-2 border-yellow-300 rounded-2xl mb-12">
          <div className="text-center space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="font-poppins text-lg text-gray-700 leading-relaxed mb-4">
                O prompt na prática foi criado exclusivamente para quem acabou de adquirir o Manual e <strong className="text-ai-black">só está disponível AQUI, nesta página</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-200">
                <p className="font-poppins text-lg text-red-600 font-semibold leading-relaxed">
                  ⚠️ Quando você fechar esta página, ele <strong>não estará mais disponível para compra</strong>.
                </p>
              </div>
            </div>
            
            <p className="font-poppins text-xl text-ai-black leading-relaxed font-semibold">
              Agora, você pode escolher seguir sem o Prompt na Prática, ou incluir ele à sua inscrição clicando no botão abaixo:
            </p>
          </div>
        </Card>
        
        <div className="text-center">
          {/* HOTMART - Sales Funnel Widget */}
          <div id="hotmart-sales-funnel"></div>
          {/* HOTMART - Sales Funnel Widget */}
        </div>
      </div>
    </div>
  );
};

// Declarar o tipo para window.checkoutElements
declare global {
  interface Window {
    checkoutElements: any;
  }
}

export default UpsellPnp;
