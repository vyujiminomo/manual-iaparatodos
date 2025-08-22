import { Card } from "@/components/ui/card";

const BonusSpecials = () => {
  const bonuses = [
    {
      title: "Biblioteca de Prompts",
      description: "Tenha acesso a Prompts prontos para cada profissão - médicos, advogados, professores, marketing. Copie, cole e adapte para suas necessidades específicas.",
      image: "/lovable-uploads/51961545-03f5-4984-ada4-47bea3a60a0a.png"
    },
    {
      title: "Guia de Ferramentas", 
      description: "Lista das melhores ferramentas de IA para cada tarefa. Você saberá exatamente qual ferramenta usar para cada situação.",
      image: "/lovable-uploads/65eca0f6-64c3-496e-9586-db11331729a4.png"
    },
    {
      title: "Guia do ChatGPT",
      description: "Guia Visual do ChatGPT com todas as funcionalidades explicadas de forma prática. Utilize a IA com confiança.",
      image: "/lovable-uploads/46e43bcb-bd7a-455c-a458-2d92846cfae3.png"
    },
    {
      title: "Glossário de Termos",
      description: "Dicionário de IA em linguagem simples para você nunca mais se sentir perdido nunca conversa sobre IA.",
      image: "/lovable-uploads/c6bac77d-003f-44b5-8dbe-26927111e0dd.png"
    },
    {
      title: "Resumo Técnico",
      description: "Entenda como funcionam as IAs por dentro. Explicação simples e breve do funcionamento técnico da IA.",  
      image: "/lovable-uploads/5f4a7866-a84c-446e-a217-fa61dc3833a5.png"
    },
    {
      title: "12 Exercícios Práticos",
      description: "Atividades de 5 minutos para você praticar e sair com resultados logo no primeiro dia.",
      image: "/lovable-uploads/b10859d6-787b-45d3-b42e-909263a9e1fc.png"
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