
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Award, Users, Zap, Heart, Linkedin, ExternalLink } from "lucide-react";

const VitorYuji = () => {
  useDynamicMeta({
    title: "Vitor Yuji - Criador do Manual IA Para Todos",
    description: "Conheça Vitor Yuji, 14 anos e criador do Manual IA Para Todos, o guia nº1 de IA Generativa no Brasil.",
    image: "/lovable-uploads/c7c5dc38-0495-44e2-b75e-07842c0c52e3.png"
  });

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/c7c5dc38-0495-44e2-b75e-07842c0c52e3.png" 
                alt="Vitor Yuji"
                className="w-64 h-64 mx-auto rounded-full shadow-2xl border-4 border-ai-blue/30 object-cover"
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              Quem é <span className="text-ai-blue">Vitor Yuji</span>, 14 anos e criador do Manual IA Para Todos, o guia nº1 de IA Generativa do Brasil?
            </h1>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 mb-8 backdrop-blur-sm">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Vitor Yuji tem apenas 14 anos e é <strong className="text-ai-blue">criador do Manual IA Para Todos</strong>, o guia mais prático de IA Generativa do Brasil - onde ensino você a usar IA em 5 minutos por dia.
                </p>
                <p>
                  Também é <strong className="text-ai-blue">co-fundador do Mangue Mania</strong> (uma das maiores metodologias de educação ambiental de Sergipe)
                </p>
                <p>
                  <strong className="text-ai-blue">Trainee da Adapta.org</strong> (a maior startup de IA Generativa da América Latina).
                </p>
                <p>
                  E participou de <strong className="text-ai-blue">3 temporadas da First Lego League</strong> (um dos maiores torneios de robótica do mundo).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Trajetória</h2>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  <strong className="text-ai-blue">Em 2022, aos 12 anos,</strong> foi convidado para sua primeira temporada da FLL. Com sua equipe, criou um sensor para evitar curtos-circuitos em áreas periféricas.
                </p>
                <p>
                  <strong className="text-ai-blue">Em 2023,</strong> criou impressões 3D das obras do artista sergipano Beto Pezão, para que cegos possam "enxergar com as mãos". O projeto foi aprovado pelo Museu da Gente Sergipana, o mais importante do estado.
                </p>
                <p>
                  <strong className="text-ai-blue">Em 2024,</strong> participou do Adapta Summit, o maior evento de IA generativa para negócios da América Latina. Por ser um moleque entre vários empresários, chamou a atenção do Max Peters, CEO da ADAPTA, que o escolheu pra ser jovem aprendiz do time quando completar 16 anos.
                </p>
                <p>
                  <strong className="text-ai-blue">Ainda em 2024,</strong> criou o Mangue Mania, uma das principais metodologias ativas de manguezais do Nordeste. Em apenas 4 meses, impactou mais de 400 alunos e foi finalista entre 1500 projetos no Prêmio Criativos da Escola, além de vencer o prêmio de Excelência em Engenharia na FLL.
                </p>
                <p>
                  <strong className="text-ai-blue">No mesmo ano,</strong> palestrou sobre IA em diversos eventos - incluindo no Instituto JCPM e na escola de empregabilidade SuperClass
                </p>
                <p>
                  <strong className="text-ai-blue">Em 2025,</strong> criou o Webinar IA Para Todos, ajudando 20 iniciantes a usarem IA em seus trabalhos. Também lançou o Manual IA Para Todos, o guia mais prático de IA Generativa para profissionais ocupados no Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curiosidades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Curiosidades</h2>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Também já foi <strong className="text-ai-blue">judoca, editor de vídeos, designer, líder de turma e youtuber gamer</strong>.
                </p>
                <p>
                  Gosta de treinar <strong className="text-ai-blue">capoeira, praticar animal flow, correr, tocar violão e cavaquinho</strong>.
                </p>
                <p>
                  Além disso, é <strong className="text-ai-blue">músico no Movimento Escalada</strong>, um dos principais grupos de jovens cristãos do Brasil.
                </p>
                <p className="text-xl font-semibold text-ai-blue text-center mt-8">
                  Sua maior motivação é criar projetos interessantes para entregar valor para o máximo de pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acompanhe o Vitor Yuji */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Acompanhe o Vitor Yuji</h2>

            <div className="space-y-8">
              {/* Manual IA Para Todos */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Conheça o Manual IA Para Todos</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Toque no botão abaixo para conhecer mais sobre o Manual IA Para Todos, o guia mais prático de IA Generativa do Brasil:
                </p>
                <Button 
                  onClick={() => window.open("/manual", "_blank")}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  CLIQUE AQUI →
                </Button>
              </div>

              {/* LinkedIn */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Perfil no LinkedIn</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Vitor Yuji compartilha suas histórias profissionais e pessoais mais interessantes no LinkedIn, sua 'vitrine profissional', sendo o adolescente mais jovem com alto engajamento na rede social:
                </p>
                <Button 
                  onClick={() => window.open("https://www.linkedin.com/in/vitor-yuji-minomo/", "_blank")}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  QUERO ACESSAR →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VitorYuji;
