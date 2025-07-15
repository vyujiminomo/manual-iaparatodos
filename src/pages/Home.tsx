
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, User, BookOpen } from "lucide-react";

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
        <div className="text-center mb-12">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/10d139d2-587f-4287-8b4d-29e3cdb8824a.png" 
              alt="Vitor Yuji"
              className="w-48 h-48 mx-auto rounded-full shadow-2xl border-4 border-ai-blue/30 object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Vitor Yuji
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-ai-blue">IA</span>
            <span className="text-white"> Para Todos</span>
          </h2>
        </div>

        {/* Grid de produtos */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Manual IA Para Todos */}
          <Card 
            className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-ai-blue/50 transition-all duration-300 cursor-pointer group hover:scale-105"
            onClick={handleManualClick}
          >
            <div className="p-8 text-center">
              <div className="mb-6">
                <BookOpen className="w-12 h-12 mx-auto text-ai-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                MANUAL
              </h3>
              <h4 className="text-xl font-semibold mb-4">
                <span className="text-ai-blue">INTELIGÊNCIA</span>
              </h4>
              <h4 className="text-xl font-semibold mb-4">
                <span className="text-ai-blue">ARTIFICIAL</span>
              </h4>
              <h4 className="text-xl font-semibold mb-6">
                <span className="text-white">PARA TODOS</span>
              </h4>
              <div className="flex items-center justify-center text-ai-blue">
                <span className="text-3xl font-bold">→</span>
              </div>
            </div>
          </Card>

          {/* LinkedIn */}
          <Card 
            className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-ai-blue/50 transition-all duration-300 cursor-pointer group hover:scale-105"
            onClick={handleLinkedInClick}
          >
            <div className="p-8 text-center">
              <div className="mb-6">
                <ExternalLink className="w-12 h-12 mx-auto text-ai-blue" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-8">
                LINKEDIN
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Vitor Yuji Minomo
              </p>
              <p className="text-gray-400 mb-6 text-sm">
                Fundador do Mangue Mania / Talento Aspirante
              </p>
              <div className="flex items-center justify-center text-ai-blue">
                <span className="text-3xl font-bold">→</span>
              </div>
            </div>
          </Card>

          {/* Sobre Mim */}
          <Card 
            className="bg-gradient-to-br from-gray-900 to-black border-gray-700 hover:border-ai-blue/50 transition-all duration-300 cursor-pointer group hover:scale-105"
            onClick={handleAboutClick}
          >
            <div className="p-8 text-center">
              <div className="mb-6">
                <User className="w-12 h-12 mx-auto text-ai-blue" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-8">
                SOBRE MIM
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Conheça minha história
              </p>
              <p className="text-gray-400 mb-6 text-sm">
                Trajetória, projetos e curiosidades
              </p>
              <div className="flex items-center justify-center text-ai-blue">
                <span className="text-3xl font-bold">→</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer simples */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-sm">
            Enquanto o mundo complica, a gente simplifica.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
