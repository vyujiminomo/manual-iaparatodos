import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Award, Users, Zap, Heart, Linkedin, ExternalLink, Mail, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const VitorYuji = () => {
  const [currentPalestra, setCurrentPalestra] = useState(0);
  
  useDynamicMeta({
    title: "Vitor Yuji - Sobre",
    description: "Conheça Vitor Yuji, 14 anos e criador do Manual IA Para Todos, o guia nº1 de IA Generativa no Brasil.",
    image: "/lovable-uploads/c7c5dc38-0495-44e2-b75e-07842c0c52e3.png"
  });

  const palestras = [
    {
      title: "O Mínimo de IA que você Precisa Saber (para não ficar para trás)",
      local: "Youtube",
      ano: "2025",
      youtubeId: "gP-6fEO0dMM"
    },
    {
      title: "3 anos usando IA na FLL (eis os resultados)",
      local: "Colégio Master",
      ano: "2025",
      image: "/lovable-uploads/4debd9a6-f178-447b-86f1-034a9c47ebc9.png"
    },
    {
      title: "Webinar BETA IA Para Todos",
      local: "Zoom",
      ano: "2025",
      youtubeId: "RoT5Rt6qaFI",
      autoplay: true
    },
    {
      title: "Estratégias de IA Para Liderar o Mercado de Trabalho (Independente da Carreira que você Escolha)",
      local: "SuperClass Itirapina e Brotas",
      ano: "2025",
      image: "/lovable-uploads/3e9a6853-41e4-4868-85a4-9e00dd89e8ba.png"
    },
    {
      title: "IA como Ferramenta de Inovação",
      local: "Instituto JCPM",
      ano: "2025",
      image: "/lovable-uploads/f28b235a-271a-4252-9cc8-aaa4125075e6.png"
    },
    {
      title: "IA e como usá-la na FLL",
      local: "Colégio Master",
      ano: "2024",
      image: "/lovable-uploads/0d61bede-6460-4053-b671-0f1423a5871f.png"
    }
  ];

  const nextPalestra = () => {
    setCurrentPalestra((prev) => (prev + 1) % palestras.length);
  };

  const prevPalestra = () => {
    setCurrentPalestra((prev) => (prev - 1 + palestras.length) % palestras.length);
  };

  return (
    <div className="min-h-screen bg-black text-white font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/49547bb5-5891-4afd-bd12-b86e6ffbf6ba.png" 
                alt="Vitor Yuji"
                className="w-full mx-auto rounded-lg shadow-2xl object-cover"
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-poppins font-semibold mb-6 leading-tight text-white">
              Quem é <span className="font-bold text-ai-blue">Vitor Yuji</span>, 14 anos e criador do Manual IA Para Todos, o guia mais prático de IA Generativa do Brasil?
            </h1>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 mb-8 backdrop-blur-sm max-w-4xl mx-auto">
              <div className="space-y-4 text-lg leading-relaxed text-center">
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

      {/* Palestras */}
      <section className="py-2 bg-gray-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Palestras:</h2>
            
            <div className="relative">
              <Card className="bg-gray-900/50 border-gray-700 p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Vídeo, Imagem ou Placeholder */}
                  <div className="w-full md:w-1/2">
                    {palestras[currentPalestra].youtubeId ? (
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${palestras[currentPalestra].youtubeId}${palestras[currentPalestra].autoplay ? '?autoplay=1&mute=1' : ''}`}
                          title={palestras[currentPalestra].title}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : palestras[currentPalestra].image ? (
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={palestras[currentPalestra].image}
                          alt={palestras[currentPalestra].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gray-700 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
                        <div className="text-center text-gray-400">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-lg flex items-center justify-center">
                            <Award className="w-8 h-8" />
                          </div>
                          <p className="text-sm">Imagem da Palestra</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {palestras[currentPalestra].title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-2">
                      <strong>Local:</strong> {palestras[currentPalestra].local}
                    </p>
                    <p className="text-lg text-gray-300">
                      <strong>Ano:</strong> {palestras[currentPalestra].ano}
                    </p>
                  </div>
                </div>
              </Card>

              {/* Setas de Navegação */}
              <button
                onClick={prevPalestra}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-ai-blue hover:bg-ai-blue/80 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextPalestra}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-ai-blue hover:bg-ai-blue/80 text-white rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicadores */}
              <div className="flex justify-center mt-6 space-x-2">
                {palestras.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPalestra(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPalestra ? 'bg-ai-blue' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="py-8 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Trajetória</h2>

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
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Curiosidades</h2>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Também já foi judoca, editor de vídeos, designer, líder de turma e youtuber gamer.
                </p>
                <p>
                  Gosta de treinar capoeira, praticar animal flow, correr, tocar violão e cavaquinho.
                </p>
                <p>
                  Além disso, é músico no Movimento Escalada, um dos principais grupos de jovens cristãos do Brasil.
                </p>
                <p className="text-xl font-semibold text-ai-blue text-center mt-8">
                  <strong>Sua maior motivação é criar projetos interessantes para entregar valor para o máximo de pessoas.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Acompanhe o Vitor Yuji */}
      <section className="py-8 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Acompanhe o Vitor Yuji</h2>

            <div className="space-y-8">
              {/* Manual IA Para Todos */}
              <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Conheça o Manual IA Para Todos</h3>
                <p className="text-lg mb-6 leading-relaxed">
                  Toque no botão abaixo para conhecer mais sobre o Manual IA Para Todos, o guia mais prático de IA Generativa do Brasil:
                </p>
                <Button 
                  onClick={() => window.open("https://vitoryuji.com/manual", "_blank")}
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

      {/* Footer - IA PARA TODOS */}
      <footer className="bg-black border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-ai-blue">IA</span>
                <span className="text-white"> PARA TODOS</span>
              </h3>
              <p className="text-gray-300 text-sm max-w-md">
                Enquanto o mundo complica, a gente simplifica.
              </p>
            </div>
            
            <div className="text-right">
              <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-end space-x-2">
                  <Mail className="w-4 h-4 text-ai-blue" />
                  <span className="text-sm text-gray-300">contato.vitoryujiminomo@gmail.com</span>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Instagram className="w-4 h-4 text-ai-blue" />
                  <a 
                    href="https://www.instagram.com/vitoryujim" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-ai-blue transition-colors"
                  >
                    @vitoryujim
                  </a>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <Linkedin className="w-4 h-4 text-ai-blue" />
                  <a 
                    href="https://linkedin.com/in/vitor-yuji-minomo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-ai-blue transition-colors"
                  >
                    Vitor Yuji Minomo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VitorYuji;
