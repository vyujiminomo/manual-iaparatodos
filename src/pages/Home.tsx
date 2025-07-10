
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToManual = () => {
    navigate('/manual');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ai-black to-gray-900 flex items-center justify-center font-poppins">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Nome/Logo */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bebas text-white mb-4">
            VITOR <span className="text-ai-blue">YUJI</span>
          </h1>
          <div className="w-24 h-1 bg-ai-blue mx-auto"></div>
        </div>

        {/* Descrição simples */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Desenvolvedor e criador de conteúdo sobre tecnologia e inteligência artificial.
        </p>

        {/* Botão para o manual */}
        <Button 
          onClick={goToManual}
          size="lg"
          className="bg-ai-blue hover:bg-ai-blue/90 text-white font-semibold px-12 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        >
          Acessar Manual de IA
        </Button>

        {/* Links sociais ou contato (opcional) */}
        <div className="mt-16 text-gray-400">
          <p className="text-sm">Entre em contato ou conheça meu trabalho</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
