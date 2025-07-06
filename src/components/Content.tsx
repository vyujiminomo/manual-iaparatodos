
import { Card } from "@/components/ui/card";
import { Brain, Target, Settings, Book, Users, Zap } from "lucide-react";

const Content = () => {
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
          <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
            O QUE O MANUAL OFERECE
          </h2>
          <p className="font-poppins text-xl text-gray-700 max-w-3xl mx-auto">
            Enquanto outros recursos te afundam em teoria, o Manual IA Para Todos te coloca para agir em minutos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
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

        <div className="text-center">
          <Card className="inline-block bg-white p-8 shadow-lg border-0">
            <div className="aspect-video w-80 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 mx-auto">
              <div className="text-center">
                <Book className="mx-auto mb-2 text-ai-blue" size={48} />
                <p className="font-poppins text-gray-600 font-medium">
                  Aqui vai o Mockup [Conteúdo Preview]
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Content;
