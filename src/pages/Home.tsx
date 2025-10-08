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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Profile Section */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="mb-8 relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <img 
                src="/lovable-uploads/19e8a63d-0fe7-4828-868c-5acf461e91c7.png" 
                alt="Vitor Yuji"
                className="relative w-32 h-32 mx-auto rounded-full shadow-2xl border-2 border-white/10 object-cover"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white tracking-tight">
              Vitor Yuji
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-2">
              Especialista em <span className="text-blue-400 font-semibold">Inteligência Artificial</span>
            </p>
            <p className="text-gray-400 text-sm md:text-base">
              Democratizando o acesso à IA através da educação
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <Button
              onClick={handleManualClick}
              size="lg"
              className="w-full h-auto py-6 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <div className="text-left">
                    <p className="font-bold text-lg">Manual de IA Para Todos</p>
                    <p className="text-sm text-blue-100 font-normal">Aprenda IA de forma prática e acessível</p>
                  </div>
                </div>
              </div>
            </Button>

            <Button
              onClick={handleLinkedInClick}
              size="lg"
              variant="outline"
              className="w-full h-auto py-6 px-8 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="font-bold text-lg">Conecte-se no LinkedIn</p>
                    <p className="text-sm text-gray-400 font-normal">Vamos conversar sobre IA e educação</p>
                  </div>
                </div>
              </div>
            </Button>

            <Button
              onClick={handleAboutClick}
              size="lg"
              variant="outline"
              className="w-full h-auto py-6 px-8 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <User className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <p className="font-bold text-lg">Sobre Mim</p>
                    <p className="text-sm text-gray-400 font-normal">Conheça minha história e missão</p>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
