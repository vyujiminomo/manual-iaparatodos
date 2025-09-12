import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Quote, Users, Clock, CheckCircle, Award, Star } from "lucide-react";

const VitorYuji = () => {
  useDynamicMeta({
    title: "Treinamento Gratuito de IA para Escolas de Sergipe - Vitor Yuji",
    description: "Um jovem de 15 anos da maior startup de IA do Brasil quer revolucionar a educação em Sergipe. Treinamento 100% gratuito para escolas.",
    image: "/lovable-uploads/58ecef62-5140-46da-ae49-51272638998a.png"
  });

  const depoimentos = [
    {
      texto: "Achava que IA era coisa complicada, mas ele explicou de uma forma simples e leve. Depois do treinamento, comecei a usar a IA nos meus estudos. É um conteúdo que serve pra todo mundo, independente da idade ou do quanto já entende de tecnologia.",
      nome: "Isadora Helena"
    },
    {
      texto: "Agora é uma ferramenta essencial pra mim. Mudou totalmente meu jeito de pesquisar e estudar.",
      nome: "Arthur Lucena"
    },
    {
      texto: "O ChatGPT começou a me entregar exatamente o que eu queria. Minhas amigas até dizem que meu ChatGPT é mais obediente que o delas kkkk.",
      nome: "Gabriela Coelho"
    }
  ];

  const escolas = ["DOM LUCIANO", "COLÉGIO MASTER", "INSTITUTO JCPM", "SuperClass Itirapina e Brotas"];

  const handleInscricao = () => {
    window.open("https://forms.gle/qhCN6PATCzwSYGbV7", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
              TREINAMENTO DE IA GRATUITO<br />
              <span className="text-yellow-200 font-extrabold">PARA ESCOLAS DE SERGIPE</span>
            </h1>
            <p className="text-lg md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed text-white/95 font-medium px-2">
              Um jovem de 15 anos da maior startup de IA do Brasil quer revolucionar a educação em Sergipe.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
              DEPOIMENTOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {depoimentos.map((depoimento, index) => (
                <Card key={index} className="p-6 md:p-8 bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl transform hover:-translate-y-2">
                  <Quote className="w-8 h-8 text-blue-500 mb-4 md:mb-6" />
                  <p className="text-gray-600 mb-4 md:mb-6 text-base md:text-lg leading-relaxed italic font-light">
                    "{depoimento.texto}"
                  </p>
                  <div className="font-semibold text-gray-900 text-sm md:text-base">
                    — {depoimento.nome}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem é Vitor Yuji */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                QUEM É VITOR YUJI?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-12 items-start">
              <div className="lg:col-span-3 space-y-8">
                {/* Mobile/Tablet: Show images after title, before text */}
                <div className="space-y-6 lg:hidden">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/vitor-yuji-palestra-1.png" 
                      alt="Vitor Yuji palestrando para jovens" 
                      className="w-full h-72 object-contain bg-gray-50"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="/lovable-uploads/vitor-yuji-palestra-2.png" 
                      alt="Vitor Yuji com sua equipe e alunos" 
                      className="w-full h-72 object-contain bg-gray-50"
                    />
                  </div>
                </div>
                
                <div className="space-y-8 text-xl leading-relaxed text-gray-700 font-light">
                  <p>
                    Vitor Yuji tem apenas 15 anos e já formou <strong className="text-green-600 font-semibold">+460 alunos</strong> através de projetos de IA, neurociência e sustentabilidade.
                  </p>
                  
                  <p>
                    Membro da <strong className="text-blue-600 font-semibold">Adapta.org</strong> - selecionado pessoalmente pelo CEO <strong className="text-blue-600 font-semibold">Max Peters</strong> para ser jovem aprendiz da maior startup de IA Generativa da América Latina.
                  </p>
                  
                  <p>
                    Co-fundador do <strong className="text-green-600 font-semibold">Mangue Mania</strong> - a primeira metodologia infantil de educação de manguezais de Sergipe, projeto <strong className="text-yellow-600 font-semibold">top30</strong> no prêmio nacional <strong className="text-green-600 font-semibold">Criativos Escola</strong>.
                  </p>
                  
                  <p>
                    Também foi <strong className="text-blue-600 font-semibold">3x competidor da First Lego League</strong>, um dos maiores torneios de robótica do mundo. Hoje é mentor das principais equipes sergipanas.
                  </p>
                </div>
              </div>

              {/* Desktop: Show images on the right side */}
              <div className="lg:col-span-2 space-y-6 hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/lovable-uploads/vitor-yuji-palestra-1.png" 
                    alt="Vitor Yuji palestrando para jovens" 
                    className="w-full h-64 object-contain bg-gray-50"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/lovable-uploads/vitor-yuji-palestra-2.png" 
                    alt="Vitor Yuji com sua equipe e alunos" 
                    className="w-full h-64 object-contain bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Manifesto */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-gray-900 tracking-tight">
              O MANIFESTO
            </h2>
            
            <Card className="p-8 md:p-12 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100 border-0 shadow-2xl rounded-3xl">
                <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-700 font-light">
                <p>
                  <strong className="text-blue-600 font-semibold">Sergipe pode ser mais que 'o país do forró'.</strong>
                </p>
                <p>
                  Temos talentos incríveis que podem dominar tecnologias que transformam vidas em todo o mundo.
                </p>
                <p>
                  Depois de fazer uma mentoria com <strong className="text-yellow-600 font-semibold">Max Peters, CEO da Adapta.org</strong>, meu método de estudos mudou completamente. Aplicando IA de forma estratégica, consegui aumentar minha média para <strong className="text-green-600 text-xl md:text-2xl font-bold">9.5</strong> estudando <strong className="text-blue-600 font-semibold">MENOS tempo</strong>.
                </p>
                <p>
                  Agora quero provar que essa transformação pode acontecer em escala maior.
                </p>
                <p>
                  <strong className="text-blue-600 font-semibold">Minha missão é tornar Sergipe, o menor estado do Brasil, na maior potência nordestina em educação com IA.</strong>
                </p>
                <p className="text-lg md:text-xl font-bold text-yellow-600">
                  Estas 5 palestras gratuitas são o primeiro passo para provar que os sergipanos também podem liderar a revolução da educação com IA.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Não é Convencional */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
              ESSE NÃO É UM TREINAMENTO CONVENCIONAL
            </h2>
            
            <Card className="p-8 md:p-12 bg-white shadow-2xl rounded-3xl border-0">
              <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-gray-700 font-light">
                <p>
                  Uma boa palestra não deveria ser com um profissional que consegue te dar uma palestra motivacional.
                </p>
                <p>
                  Deveria ser com um <strong className="text-blue-600 font-semibold">praticante</strong>, que está testando e implementando IA em seus estudos. Na vida real.
                </p>
                <p className="text-xl md:text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Vitor Yuji é exatamente isso.
                </p>
                <p className="text-center text-lg md:text-xl">
                  Ele não é motivacional. É <strong className="text-yellow-600 font-semibold">acional</strong>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* O que vão aprender */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900 tracking-tight">
              O QUE SEUS ALUNOS VÃO APRENDER
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <Card className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-0 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-900">Como aprender qualquer coisa em segundos</h3>
              </Card>
              <Card className="p-6 md:p-8 bg-gradient-to-br from-green-50 to-green-100 border-0 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <Star className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-900">Os '3 passos' pra alcançar a média de 9.5 (rápido)</h3>
              </Card>
              <Card className="p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 border-0 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <Award className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-900">Os 2 tipos de conhecimento que todo estudante precisa saber</h3>
              </Card>
              <Card className="p-6 md:p-8 bg-gradient-to-br from-purple-50 to-purple-100 border-0 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <Users className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-gray-900">4 técnicas práticas de IA nos estudos</h3>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-gray-900 tracking-tight">
                5 PALESTRAS COMPLETAMENTE GRATUITAS
              </h2>
              
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-6 md:p-10 rounded-3xl mb-8 md:mb-12 shadow-xl">
                <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">⚠️ ATENÇÃO: VAGAS LIMITADAS</h3>
                <p className="text-lg md:text-2xl mb-4 md:mb-6 leading-relaxed font-medium">
                  <strong>Apenas 5 escolas serão selecionadas em todo o estado de Sergipe.</strong>
                </p>
                <p className="text-base md:text-xl opacity-90 font-light">
                  Esta é uma oportunidade única de oferecer aos seus alunos uma vantagem competitiva no mundo dos estudos.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-6 md:p-10 mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-900">COMO INSCREVER SUA ESCOLA</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  <div className="text-center">
                    <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-base md:text-lg">Preencha o formulário</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-base md:text-lg">Aguarde nossa análise</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-base md:text-lg">Receba a confirmação</p>
                  </div>
                </div>
              </div>

              <div className="mb-6 md:mb-10">
                <p className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  ⏰ PRAZO FINAL: <span className="text-red-600">15 de setembro</span>
                </p>
              </div>

              <Button 
                onClick={handleInscricao}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg md:text-xl px-8 md:px-16 py-4 md:py-6 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                INSCREVER MINHA ESCOLA GRATUITAMENTE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VitorYuji;