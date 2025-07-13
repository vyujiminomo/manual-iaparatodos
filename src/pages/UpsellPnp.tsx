import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";

const UpsellPnp = () => {
  useDynamicMeta({
    title: "Prompt na Prática - Manual IA Para Todos",
    description: "Veja um expert em IA usando prompts na prática com 10 vídeos curtos exclusivos.",
    image: "/lovable-uploads/c30266d4-9825-4445-9432-869ea5446629.png"
  });

  return (
    <div className="min-h-screen bg-white font-poppins">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="font-bebas text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            PARABÉNS PELA DECISÃO DE ENTRAR NO MANUAL IA PARA TODOS!
          </h1>
          
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
            <div className="space-y-6 text-left">
              <p className="font-poppins text-lg text-gray-800 leading-relaxed">
                Sua cópia já está garantida e você já pode começar a ler o guia completo pra usar IA para ter mais produtividade e criatividade.
              </p>
              
              <p className="font-poppins text-lg text-gray-800 leading-relaxed">
                Agora, eu quero te fazer um convite especial:
              </p>
              
              <p className="font-poppins text-lg text-gray-800 leading-relaxed">
                Ler sobre prompts é uma coisa. <strong>VER</strong> um expert usando eles na prática é completamente diferente.
              </p>
              
              <p className="font-poppins text-lg text-gray-800 leading-relaxed">
                É como fazer um bolo.
              </p>
              
              <p className="font-poppins text-lg text-gray-800 leading-relaxed">
                Você pode ter a melhor receita do mundo (e isso já faz um bom bolo!), mas assistir um chef experiente preparando te faz entender a mentalidade, a intuição, o "sexto sentido" que só ver alguém experiente revela.
              </p>
              
              <p className="font-poppins text-lg text-gray-800 leading-relaxed">
                O Manual IA Para Todos já te entrega tudo que você precisa para usar IA de forma inteligente.
              </p>
              
              <p className="font-poppins text-lg text-gray-800 leading-relaxed">
                Mas se você quer <strong>acelerar</strong> esse processo e ver como um expert em IA pensa em tempo real...
              </p>
            </div>
          </Card>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="font-bebas text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            APRESENTO: PROMPT NA PRÁTICA
          </h2>
          
          <Card className="p-8 md:p-12 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="space-y-6">
              <p className="font-poppins text-lg text-gray-800 leading-relaxed">
                Uma série com <strong>10 vídeos curtos (~3 minutos cada)</strong> onde você vê na minha tela:
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <p className="font-poppins text-lg text-gray-800">"Truques mentais" de interação que não cabem no manual</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <p className="font-poppins text-lg text-gray-800">A mentalidade por trás das conversas com IA</p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <p className="font-poppins text-lg text-gray-800">Como transformar uma resposta "ok" numa resposta incrível</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="p-8 md:p-12 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 mb-12">
          <div className="text-center space-y-6">
            <p className="font-poppins text-lg text-gray-800 leading-relaxed">
              O prompt na prática foi criado exclusivamente para quem acabou de adquirir o Manual e <strong>só está disponível AQUI, nesta página</strong>.
            </p>
            
            <p className="font-poppins text-lg text-red-600 font-semibold leading-relaxed">
              Quando você fechar esta página, ele <strong>não estará mais disponível para compra</strong>.
            </p>
            
            <p className="font-poppins text-lg text-gray-800 leading-relaxed">
              Agora, você pode escolher seguir sem o Prompt na Prática, ou incluir ele à sua inscrição clicando no botão abaixo:
            </p>
          </div>
        </Card>
        
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 px-12 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            ADICIONAR PROMPT NA PRÁTICA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpsellPnp;