import { Card } from "@/components/ui/card";

const BonusSpecials = () => {
  const bonuses = [
    {
      title: "Biblioteca de Prompts",
      description: "Tenha acesso a Prompts prontos para cada profissão - médicos, advogados, professores, marketing. Copie, cole e adapte para suas necessidades específicas.",
      image: "/lovable-uploads/d368635f-dc6f-4c32-aed8-9a274f2613bf.png"
    },
    {
      title: "Guia de Ferramentas", 
      description: "Lista das melhores ferramentas de IA para cada tarefa. Você saberá exatamente qual ferramenta usar para cada situação.",
      image: "/lovable-uploads/8bea39da-de69-4211-92d9-dda89bf17542.png"
    },
    {
      title: "Guia do ChatGPT",
      description: "Guia Visual do ChatGPT com todas as funcionalidades explicadas de forma prática. Utilize a IA com confiança.",
      image: "/lovable-uploads/c388ae2a-9746-4410-9629-82fa56db1da8.png"
    },
    {
      title: "Glossário de Termos",
      description: "Dicionário de IA em linguagem simples para você nunca mais se sentir perdido nunca conversa sobre IA.",
      image: "/lovable-uploads/19e051a1-1ae2-403b-b275-bb3a45649206.png"
    },
    {
      title: "Resumo Técnico",
      description: "Entenda como funcionam as IAs por dentro. Explicação simples e breve do funcionamento técnico da IA.",  
      image: "/lovable-uploads/7ca38de0-a6be-4df5-8c61-9d41b99dd8a4.png"
    },
    {
      title: "12 Exercícios Práticos",
      description: "Atividades de 5 minutos para você praticar e sair com resultados logo no primeiro dia.",
      image: "/lovable-uploads/dbce59f7-0e4c-4bc1-a4e0-c20d7a499136.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="font-poppins text-sm text-cyan-400 font-semibold uppercase tracking-wider bg-cyan-400/10 px-6 py-3 rounded-full border border-cyan-400/20">
              BÔNUS ESPECIAIS
            </span>
          </div>
          <h2 className="font-bebas text-5xl md:text-7xl text-white mb-4 leading-tight">
            Além disso, tenha acesso a<br />
            <span className="text-cyan-400">Bônus Especiais</span>
          </h2>
        </div>

        {/* Bonus Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {bonuses.map((bonus, index) => (
            <Card key={index} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm">
              {/* Image Section */}
              <div className="aspect-video bg-gray-900 p-4 flex items-center justify-center">
                <img 
                  src={bonus.image} 
                  alt={bonus.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="font-bebas text-2xl text-white mb-3 leading-tight">
                  {bonus.title}
                </h3>
                <p className="font-poppins text-gray-300 text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSpecials;