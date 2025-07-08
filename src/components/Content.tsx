
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Settings, Book, Users, Zap } from "lucide-react";

const Content = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const modules = [
    {
      icon: Brain,
      title: "🧠 Preparando sua mente",
      items: [
        "Princípios atemporais da IA Generativa",
        "Mapa visual da Interface do ChatGPT",
        "Glossário Relâmpago: entenda os termos de IA em minutos",
        "A Equação da IA Generativa"
      ]
    },
    {
      icon: Target,
      title: "🎯 Como criar prompts magnéticos",
      items: [
        "Estrutura 3I AI para prompts",
        "Táticas Avançadas: persona, emoção, few-shot...",
        "Como criar um bom contexto",
        "Interagindo com o modelo"
      ]
    },
    {
      icon: Settings,
      title: "🛠️ Ferramentas e Aplicações Reais",
      items: [
        "As 5 Práticas da IA Generativa",
        "Biblioteca de Prompts por Profissão",
        "Guia de Ferramentas"
      ]
    }
  ];

  return (
    <section id="conteudo" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
              ÍNDICE
            </span>
          </div>
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
            O QUE O MANUAL OFERECE
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Modules */}
          <div className="space-y-8">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <Card key={index} className="p-6 bg-white shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="text-ai-blue mr-4">
                      <IconComponent size={32} />
                    </div>
                    <h3 className="font-bebas text-2xl text-ai-black">{module.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-ai-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="font-poppins text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Manual Preview Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-ai-blue/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <Card className="relative bg-white p-8 shadow-2xl border-0 rounded-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-6">
                  <h4 className="font-bebas text-3xl text-ai-black mb-2">MANUAL COMPLETO</h4>
                  <p className="font-poppins text-ai-blue font-semibold">Índice do Conteúdo</p>
                </div>
                <img 
                  src="/lovable-uploads/d5acbe2b-ff36-4c23-b566-681c78b81721.png" 
                  alt="Índice do Manual IA Para Todos"
                  className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
                />
              </Card>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
          >
            Quero Acessar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Content;
