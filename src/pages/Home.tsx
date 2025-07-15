
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
      <div className="max-w-4xl w-full">
        {/* Banner com foto e nome */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/10d139d2-587f-4287-8b4d-29e3cdb8824a.png" 
              alt="Vitor Yuji"
              className="w-32 h-32 mx-auto rounded-full shadow-xl border-2 border-ai-blue/20 object-cover"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Vitor Yuji
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-light">
            <span className="text-ai-blue font-medium">IA</span>
            <span className="text-white"> Para Todos</span>
          </h2>
        </div>

        {/* Botões dos produtos em layout vertical */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {/* Manual IA Para Todos */}
          <div 
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={handleManualClick}
          >
            <img 
              src="/lovable-uploads/e20266cf-968b-4e4b-aa62-c8c09f3ab0bc.png"
              alt="Manual Inteligência Artificial Para Todos"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* LinkedIn */}
          <div 
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={handleLinkedInClick}
          >
            <img 
              src="/lovable-uploads/12d9bc2f-23d7-48d3-a6b1-214766d6aa53.png"
              alt="LinkedIn - Vitor Yuji Minomo"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Sobre Mim */}
          <div 
            className="cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            onClick={handleAboutClick}
          >
            <img 
              src="/lovable-uploads/75fbd01a-85c6-43f4-bdd9-1d7114badae7.png"
              alt="Sobre Mim - Vitor Yuji"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Footer elegante */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-sm font-light">
            Enquanto o mundo complica, a gente simplifica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
