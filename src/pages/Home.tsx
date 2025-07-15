
import { Button } from "@/components/ui/button";

const Home = () => {
  const handleManualClick = () => {
    window.location.href = '/manual';
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/vitor-yuji-minomo/', '_blank');
  };

  const handleAboutClick = () => {
    window.location.href = '/vitor-yuji';
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
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
          <p className="text-gray-400 text-sm mb-1">@vitoryuji</p>
          
          <h2 className="text-xl font-bebas font-bold">
            <span className="text-ai-blue">IA</span>
            <span className="text-white"> Para Todos</span>
          </h2>
        </div>

        <div className="border-t border-gray-700 pt-8 mb-8">
          <button 
            className="w-full mb-3 p-3 bg-gray-800 hover:bg-gray-700 transition-colors duration-200 rounded-lg border border-gray-600"
            onClick={handleManualClick}
          >
            <span className="text-white text-sm font-medium">PARTICIPE DO MEU EVENTO PRESENCIAL</span>
          </button>
        </div>

        {/* Botões dos produtos */}
        <div className="space-y-4 mb-8">
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

        <div className="border-t border-gray-700 pt-6">
          <h3 className="text-white text-lg font-semibold mb-4 text-center">Conteúdos Gratuitos</h3>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-xs">IM</span>
              </div>
              <span className="text-white text-xs">Imersão</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-xs">YT</span>
              </div>
              <span className="text-white text-xs">YouTube</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-2 mx-auto">
                <span className="text-white font-bold text-xs">TT</span>
              </div>
              <span className="text-white text-xs">TikTok</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-lg font-medium">
            Você ainda tem dúvidas?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
