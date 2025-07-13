import { useDynamicMeta } from "@/hooks/useDynamicMeta";

const Obrigado = () => {
  useDynamicMeta({
    title: "Compra Realizada - IA Para Todos",
    description: "Compra realizada com sucesso! Obrigado pela confiança no IA Para Todos.",
    image: "/lovable-uploads/c30266d4-9825-4445-9432-869ea5446629.png"
  });

  return (
    <div className="min-h-screen bg-white font-poppins">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Compra realizada com sucesso!
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-12">
            Obrigado pela confiança no IA Para Todos!
          </h2>

          <div className="bg-blue-50 rounded-lg p-8 mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Você vai receber um e-mail em alguns minutos com o acesso ao seu conteúdo.
            </p>
            
            <p className="text-md text-gray-600 mb-6">
              Caso não receba, verifique a caixa de spam/lixo eletrônico
            </p>
            
            <p className="text-md text-gray-600 mb-8">
              Qualquer dúvida, mande um e-mail para{" "}
              <a 
                href="mailto:contato.vitoryujiminomo@gmail.com" 
                className="text-blue-600 hover:text-blue-800 underline"
              >
                contato.vitoryujiminomo@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-gray-900 mb-4">
              Agora, é hora de transformar seu trabalho com IA!
            </p>
            <p className="text-lg text-gray-700">
              Vitor Yuji
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obrigado;