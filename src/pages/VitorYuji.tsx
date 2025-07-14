
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Award, Users, Zap, Heart, Linkedin, ExternalLink } from "lucide-react";

const VitorYuji = () => {
  useDynamicMeta({
    title: "Vitor Yuji - Criador do Manual IA Para Todos",
    description: "Conheça Vitor Yuji, 14 anos e criador do Manual IA Para Todos, o guia nº1 de IA Generativa no Brasil.",
    image: "/lovable-uploads/c30266d4-9825-4445-9432-869ea5446629.png"
  });

  const achievements = [
    {
      year: "2022",
      age: "12 anos",
      title: "Primeira temporada da FLL",
      description: "Criou sensor para evitar curtos-circuitos em áreas periféricas",
      icon: Zap
    },
    {
      year: "2023",
      age: "13 anos", 
      title: "Projeto de Acessibilidade",
      description: "Criou impressões 3D das obras de Beto Pezão para cegos \"enxergarem com as mãos\". Aprovado pelo Museu da Gente Sergipana",
      icon: Heart
    },
    {
      year: "2024",
      age: "14 anos",
      title: "Adapta Summit & Mangue Mania",
      description: "Chamou atenção do CEO da ADAPTA e criou metodologia que impactou 400+ alunos. Finalista entre 1500 projetos no Prêmio Criativos da Escola",
      icon: Users
    },
    {
      year: "2025",
      age: "14 anos",
      title: "Manual IA Para Todos",
      description: "Lançou o guia mais prático de IA Generativa para profissionais ocupados no Brasil",
      icon: Award
    }
  ];

  const curiosities = [
    "Judoca", "Editor de vídeos", "Designer", "Líder de turma", "YouTuber gamer",
    "Capoeirista", "Praticante de animal flow", "Corredor", "Violonista", "Cavaquinhista",
    "Músico no Movimento Escalada"
  ];

  return (
    <div className="min-h-screen bg-white font-poppins">
      {/* Header */}
      <header className="fixed top-0 w-full bg-ai-black border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-bebas text-2xl">
              <span className="text-ai-blue">VITOR</span>
              <span className="text-white"> YUJI</span>
            </div>
            <Button 
              onClick={() => window.open("/manual", "_blank")}
              className="bg-ai-blue hover:bg-ai-blue/90 text-white font-semibold px-6 py-2 rounded-md"
            >
              Ver Manual
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                    SOBRE MIM
                  </span>
                </div>
                <h1 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6 leading-tight">
                  QUEM É VITOR YUJI?
                </h1>
                <div className="font-poppins text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  <strong className="text-ai-black">14 anos</strong> e criador do{" "}
                  <strong className="text-ai-blue">Manual IA Para Todos</strong>, o guia nº1 de IA Generativa no Brasil
                </div>
                <p className="font-poppins text-gray-600 text-lg leading-relaxed mb-8">
                  Onde ensino você a usar IA em 5 minutos por dia. Co-fundador do Mangue Mania, 
                  trainee da Adapta.org e participante de 3 temporadas da First Lego League.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-ai-blue/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/profile-photo.png" 
                      alt="Vitor Yuji"
                      className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-4">
                <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                  TRAJETÓRIA
                </span>
              </div>
              <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
                JORNADA DE IMPACTO
              </h2>
            </div>

            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-8 border-l-4 border-ai-blue bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-ai-blue rounded-full flex items-center justify-center">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-bebas text-2xl text-ai-blue">{achievement.year}</span>
                        <span className="font-poppins text-sm bg-ai-blue text-white px-3 py-1 rounded-full">
                          {achievement.age}
                        </span>
                      </div>
                      <h3 className="font-bebas text-xl text-ai-black mb-2">
                        {achievement.title}
                      </h3>
                      <p className="font-poppins text-gray-700 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curiosities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="mb-4">
                <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                  CURIOSIDADES
                </span>
              </div>
              <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
                MUITO ALÉM DA IA
              </h2>
              <p className="font-poppins text-gray-600 text-lg">
                Também já foi judoca, editor de vídeos, designer, líder de turma e youtuber gamer.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
              {curiosities.map((curiosity, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg p-4 text-center border border-gray-200 hover:border-ai-blue transition-colors"
                >
                  <span className="font-poppins text-sm text-gray-700">
                    {curiosity}
                  </span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="font-poppins text-lg text-ai-black font-semibold bg-gradient-to-r from-ai-blue/10 to-purple-500/10 p-6 rounded-lg">
                Sua maior motivação é criar projetos interessantes para entregar valor para o máximo de pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Actions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
                ACOMPANHE O VITOR YUJI
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Manual CTA */}
              <Card className="p-8 text-center bg-gradient-to-br from-ai-blue/5 to-purple-500/5 border-2 border-ai-blue/20">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-ai-blue rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bebas text-2xl text-ai-black mb-4">
                    CONHEÇA O MANUAL IA PARA TODOS
                  </h3>
                  <p className="font-poppins text-gray-600 mb-6">
                    Toque no botão abaixo para conhecer mais sobre o Manual IA Para Todos, 
                    o guia mais prático de IA Generativa do Brasil:
                  </p>
                </div>
                <Button 
                  onClick={() => window.open("/manual", "_blank")}
                  className="w-full bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-bold text-lg py-4"
                >
                  CLIQUE AQUI
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Card>

              {/* LinkedIn CTA */}
              <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bebas text-2xl text-ai-black mb-4">
                    PERFIL NO LINKEDIN
                  </h3>
                  <p className="font-poppins text-gray-600 mb-6">
                    Vitor Yuji compartilha suas histórias profissionais e pessoais mais interessantes no LinkedIn, 
                    sendo o adolescente mais jovem com alto engajamento na rede social:
                  </p>
                </div>
                <Button 
                  onClick={() => window.open("https://www.linkedin.com/in/vitor-yuji-minomo/", "_blank")}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-poppins font-bold text-lg py-4"
                >
                  QUERO ACESSAR
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ai-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-bebas text-2xl mb-4">
              <span className="text-ai-blue">VITOR</span>
              <span className="text-white"> YUJI</span>
            </div>
            <p className="font-poppins text-gray-300 text-sm">
              Criando projetos interessantes para entregar valor para o máximo de pessoas.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VitorYuji;
