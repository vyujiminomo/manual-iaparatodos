import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Linkedin, BookOpen, User } from "lucide-react";

const Home = () => {
  useDynamicMeta({
    title: "Treinamento de IA gratuito pra escolas sergipanas",
    description: "Um jovem de 15 anos da maior startup de IA do Brasil quer revolucionar a educação em Sergipe.",
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
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6 py-16">
        <div className="max-w-xl w-full">
          {/* Profile Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/vitor-yuji-new-photo.png" 
                alt="Vitor Yuji"
                className="w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
              />
            </div>
            
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              Vitor Yuji
            </h1>
            
            <p className="text-gray-600 text-base">
              @vitoryuji
            </p>
          </div>

          {/* Action Cards */}
          <div className="space-y-3 mb-8">
            <button
              onClick={handleManualClick}
              className="w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <BookOpen className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-lg">Manual de IA Para Todos</p>
                  <p className="text-sm text-blue-50 mt-1">Aprenda IA de forma prática e acessível</p>
                </div>
              </div>
            </button>

            <button
              onClick={handleLinkedInClick}
              className="w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-[#0077B5] p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <Linkedin className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-lg">Conecte-se no LinkedIn</p>
                  <p className="text-sm text-blue-50 mt-1">Vamos conversar sobre IA e educação</p>
                </div>
              </div>
            </button>

            <button
              onClick={handleAboutClick}
              className="w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-gray-800 p-6 text-left"
            >
              <div className="flex items-center gap-4">
                <User className="w-6 h-6 text-white flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white text-lg">Sobre Mim</p>
                  <p className="text-sm text-gray-200 mt-1">Conheça minha história e missão</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
