
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

  const trajectoryEvents = [
    {
      year: "2022",
      age: "12 anos",
      description: "Foi convidado para sua primeira temporada da FLL. Com sua equipe, criou um sensor para evitar curtos-circuitos em áreas periféricas.",
      icon: Zap
    },
    {
      year: "2023",
      description: "Criou impressões 3D das obras do artista sergipano Beto Pezão, para que cegos possam \"enxergar com as mãos\". O projeto foi aprovado pelo Museu da Gente Sergipana, o mais importante do estado.",
      icon: Heart
    },
    {
      year: "2024",
      description: "Participou do Adapta Summit, o maior evento de IA generativa para negócios da América Latina. Por ser um moleque entre vários empresários, chamou a atenção do Max Peters, CEO da ADAPTA, que o escolheu pra ser jovem aprendiz do time quando completar 16 anos.",
      icon: Users
    },
    {
      year: "2024",
      description: "Criou o Mangue Mania, uma das principais metodologias ativas de manguezais do Nordeste. Em apenas 4 meses, impactou mais de 400 alunos e foi finalista entre 1500 projetos no Prêmio Criativos da Escola, além de vencer o prêmio de Excelência em Engenharia na FLL.",
      icon: Award
    },
    {
      year: "2024",
      description: "Palestrou sobre IA em diversos eventos - incluindo no Instituto JCPM e na escola de empregabilidade SuperClass",
      icon: Users
    },
    {
      year: "2025",
      description: "Criou o Webinar IA Para Todos, ajudando 20 iniciantes a usarem IA em seus trabalhos. Também lançou o Manual IA Para Todos, o guia mais prático de IA Generativa para profissionais ocupados no Brasil.",
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
                <h1 className="font-bebas text-4xl md:text-6xl text-ai-black mb-8 leading-tight">
                  QUEM É VITOR YUJI, 14 ANOS E CRIADOR DO MANUAL IA PARA TODOS, O GUIA Nº1 DE IA GENERATIVA DO BRASIL?
                </h1>
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

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg leading-relaxed font-poppins text-gray-700">
              <p>
                <strong className="text-ai-black">Vitor Yuji tem apenas 14 anos</strong> e é criador do Manual IA Para Todos, o guia mais prático de IA Generativa do Brasil - onde ensino você a usar IA em 5 minutos por dia.
              </p>
              <p>
                Também é <strong className="text-ai-black">co-fundador do Mangue Mania</strong> (uma das maiores metodologias de educação ambiental de Sergipe)
              </p>
              <p>
                <strong className="text-ai-black">Trainee da Adapta.org</strong> (a maior startup de IA Generativa da América Latina).
              </p>
              <p>
                E participou de <strong className="text-ai-black">3 temporadas da First Lego League</strong> (um dos maiores torneios de robótica do mundo).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
                TRAJETÓRIA
              </h2>
            </div>

            <div className="space-y-8">
              {trajectoryEvents.map((event, index) => (
                <Card key={index} className="p-8 border-l-4 border-ai-blue bg-white">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-ai-blue rounded-full flex items-center justify-center">
                        <event.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="font-bebas text-2xl text-ai-blue">{event.year}</span>
                        {event.age && (
                          <span className="font-poppins text-sm bg-ai-blue text-white px-3 py-1 rounded-full">
                            {event.age}
                          </span>
                        )}
                      </div>
                      <p className="font-poppins text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-4xl md:text-6xl text-ai-black mb-6">
                CURIOSIDADES
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-relaxed font-poppins text-gray-700 mb-8">
              <p>
                Também já foi <strong className="text-ai-black">judoca, editor de vídeos, designer, líder de turma e youtuber gamer</strong>.
              </p>
              <p>
                Gosta de treinar <strong className="text-ai-black">capoeira, praticar animal flow, correr, tocar violão e cavaquinho</strong>.
              </p>
              <p>
                Além disso, é <strong className="text-ai-black">músico no Movimento Escalada</strong>, um dos principais grupos de jovens cristãos do Brasil.
              </p>
            </div>

            <div className="text-center">
              <p className="font-poppins text-xl text-ai-black font-semibold bg-gradient-to-r from-ai-blue/10 to-purple-500/10 p-6 rounded-lg">
                Sua maior motivação é criar projetos interessantes para entregar valor para o máximo de pessoas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acompanhe o Vitor Yuji */}
      <section className="py-16 bg-gray-50">
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
                    sua 'vitrine profissional', sendo o adolescente mais jovem com alto engajamento na rede social:
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
