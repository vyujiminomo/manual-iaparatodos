
import { Button } from "@/components/ui/button";

const Content = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const modules = [
    {
      title: "Módulo 1: Os 6 princípios da IA Generativa",
      items: [
        "As 'leis eternas' do ChatGPT que sempre funcionam",
        "O que é IA Generativa",
        "Como, quando e porque usar cada IA"
      ],
      image: "/lovable-uploads/8ab76f20-cc37-4b6d-b7f3-6c63001dd380.png"
    },
    {
      title: "Módulo 2: A estrutura de prompts perfeitos",
      items: [
        "A estrutura 3IAI para prompts perfeitos",
        "Técnicas avançadas de engenharia de prompt",
        "Como melhorar absurdamente as respostas do ChatGPT",
        "Como criar um bom contexto"
      ],
      image: "/lovable-uploads/cea83d38-6f49-4377-8ef4-b6627810357d.png"
    },
    {
      title: "Módulo 3: As 5 práticas da IA generativa",
      items: [
        "3 técnicas para pesquisar com IA",
        "3 técnicas para idealizar com IA",
        "3 técnicas para aprender com IA",
        "3 técnicas para gerir com IA",
        "3 técnicas para escrever com IA"
      ],
      image: "/lovable-uploads/f292bd43-0884-4ee2-8e13-0b8020fd9f9c.png"
    },
    {
      title: "Módulo 4: Bônus Especiais",
      items: [
        "Biblioteca de Prompts por Profissão",
        "Guia de Ferramentas"
      ],
      image: "/lovable-uploads/d7bd923c-e514-4583-ad0f-013f7814002e.png"
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
            O QUE VOCÊ VAI APRENDER
          </h2>
        </div>

        <div className="space-y-16">
          {modules.map((module, index) => (
            <div key={index}>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Module Info */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} ${index === 3 ? 'lg:ml-auto lg:max-w-lg' : ''}`}>
                  <h3 className="font-bebas text-3xl md:text-4xl text-ai-black mb-6">{module.title}</h3>
                  <ul className="space-y-4 mb-8">
                    {module.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-ai-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="font-poppins text-gray-700 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={scrollToOffer}
                    className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold px-6 py-3 rounded-lg"
                  >
                    Quero Acessar Agora
                  </Button>
                </div>

                {/* Module Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1 flex justify-start' : 'flex justify-center'}`}>
                  <div className="relative">
                    <img 
                      src={module.image}
                      alt={`${module.title} - Módulo do Manual IA Para Todos`}
                      className="w-full max-w-md h-auto object-contain rounded-2xl shadow-2xl"
                    />
                  </div>
                </div>
              </div>
              
              {/* Linha divisória - não mostrar após o último módulo */}
              {index < modules.length - 1 && (
                <div className="mt-16 border-t border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Content;
