import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";

const Home = () => {
  useDynamicMeta({
    title: "Treinamento Gratuito - Vitor Yuji",
    description: "Treinamento gratuito de Inteligência Artificial. Aprenda IA de forma simples e prática com Vitor Yuji.",
    image: "/lovable-uploads/e20266cf-968b-4e4b-aa62-c8c09f3ab0bc.png"
  });

  const handleManualClick = () => {
    window.location.href = '/manual';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/vitor-yuji-minomo/', '_blank');
  };

  const handleAboutClick = () => {
    window.location.href = '/bio-yuji';
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          {/* Banner com foto e nome */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/19e8a63d-0fe7-4828-868c-5acf461e91c7.png" 
                alt="Vitor Yuji"
                className="w-24 h-24 mx-auto rounded-full shadow-lg border-2 border-gray-600 object-cover"
              />
            </div>
            
            <h1 className="text-3xl font-bold mb-3 text-white tracking-tight">
              Vitor Yuji
            </h1>
            
            <h2 className="text-xl font-bebas font-bold">
              <span className="text-ai-blue">IA</span>
              <span className="text-white"> Para Todos</span>
            </h2>
          </div>

          {/* Botões dos produtos */}
          <div className="space-y-4">
            {/* Manual IA Para Todos */}
            <div 
              className="cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={handleManualClick}
            >
              <img 
                src="/lovable-uploads/e20266cf-968b-4e4b-aa62-c8c09f3ab0bc.png"
                alt="Manual Inteligência Artificial Para Todos"
                className="w-full rounded-lg shadow-lg border border-gray-700"
              />
            </div>

            {/* LinkedIn */}
            <div 
              className="cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={handleLinkedInClick}
            >
              <img 
                src="/lovable-uploads/12d9bc2f-23d7-48d3-a6b1-214766d6aa53.png"
                alt="LinkedIn - Vitor Yuji Minomo"
                className="w-full rounded-lg shadow-lg border border-gray-700"
              />
            </div>

            {/* Sobre Mim */}
            <div 
              className="cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={handleAboutClick}
            >
              <img 
                src="/lovable-uploads/75fbd01a-85c6-43f4-bdd9-1d7114badae7.png"
                alt="Sobre Mim - Vitor Yuji"
                className="w-full rounded-lg shadow-lg border border-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
