
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const Obrigado = () => {
  useDynamicMeta({
    title: "Obrigado pela compra!",
    description: "Compra realizada com sucesso! Obrigado pela confiança no IA Na Prática.",
    image: "/lovable-uploads/c30266d4-9825-4445-9432-869ea5446629.png"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white font-poppins">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="bg-ai-blue/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-ai-blue" />
            </div>
            <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
              COMPRA CONFIRMADA
            </span>
          </div>
          
          <h1 className="font-bebas text-4xl md:text-6xl font-bold text-ai-black mb-8 leading-tight">
            COMPRA REALIZADA COM SUCESSO!
          </h1>
          
          <h2 className="font-poppins text-2xl md:text-3xl font-semibold text-ai-blue mb-16">
            Obrigado pela confiança no IA Na Prática!
          </h2>

          <Card className="p-8 md:p-12 bg-white shadow-2xl border-0 rounded-2xl mb-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <p className="font-poppins text-xl text-ai-black leading-relaxed font-semibold mb-4">
                  📧 Próximos passos
                </p>
                <p className="font-poppins text-lg text-gray-700 leading-relaxed">
                  Você vai receber um e-mail em alguns minutos com o acesso ao seu conteúdo.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
                <p className="font-poppins text-lg text-gray-700 leading-relaxed mb-2">
                  <strong>Não recebeu o e-mail?</strong>
                </p>
                <p className="font-poppins text-md text-gray-600">
                  Verifique a caixa de spam/lixo eletrônico
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl border border-gray-200">
                <p className="font-poppins text-lg text-gray-700 leading-relaxed mb-2">
                  <strong>Precisa de ajuda?</strong>
                </p>
                <p className="font-poppins text-md text-gray-600 mb-4">
                  Qualquer dúvida, mande um e-mail para:
                </p>
                <a 
                  href="mailto:contato.vitoryujiminomo@gmail.com" 
                  className="inline-flex items-center bg-ai-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-ai-blue/90 transition-colors"
                >
                  contato.vitoryujiminomo@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <div className="bg-gradient-to-r from-ai-blue/5 to-indigo-50 p-8 rounded-2xl border border-ai-blue/20">
              <p className="font-poppins text-2xl font-bold text-ai-black mb-4">
                🚀 Agora, é hora de transformar seu trabalho com IA!
              </p>
              <p className="font-poppins text-xl text-gray-700">
                Vitor Yuji
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obrigado;
