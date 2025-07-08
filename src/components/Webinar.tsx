
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

const Webinar = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoId = "RoT5Rt6qaFI";

  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-4">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                TESTADO NA PRÁTICA
              </span>
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl text-ai-black mb-6 leading-tight">
              O Webinar IA Para Todos
            </h2>
            <p className="font-poppins text-lg text-gray-700 leading-relaxed mb-8">
              Para testar o conteúdo do manual, reuni <span className="font-semibold text-ai-black">20 leigos em IA em 3 encontros ao vivo</span>, e todos saíram com resultados reais:
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-poppins text-gray-700 mb-4 text-sm leading-relaxed italic">
                  "Descobri no curso que precisava mudar radicalmente minha interação com elas, pois estava cometendo vários erros e demorando muito para obter as respostas que preciso"
                </p>
                <p className="font-poppins font-bold text-ai-black text-sm">
                  Marta Romilda
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-poppins text-gray-700 mb-4 text-sm leading-relaxed italic">
                  "A aula foi bem didática e sensação q tive foi q a IA não ficará tão distante de nós depois de sua apresentação."
                </p>
                <p className="font-poppins font-bold text-ai-black text-sm">
                  Ana Isabel
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-lg relative group">
              {!isVideoPlaying ? (
                <>
                  {/* YouTube thumbnail */}
                  <img
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="Webinar IA Para Todos"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <button
                      onClick={handlePlayVideo}
                      className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
                      aria-label="Reproduzir vídeo"
                    >
                      <Play size={32} className="ml-1" fill="currentColor" />
                    </button>
                  </div>
                  
                  {/* YouTube watermark */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                    YouTube
                  </div>
                </>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Webinar IA Para Todos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
          >
            Quero acessar o Manual
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Webinar;
