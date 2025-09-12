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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              TREINAMENTO DE IA GRATUITO<br />
              <span className="text-yellow-200 font-extrabold">PARA ESCOLAS DE SERGIPE</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
              Um jovem de 15 anos da maior startup de IA do Brasil quer revolucionar a educação em Sergipe.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              DEPOIMENTOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {depoimentos.map((depoimento, index) => (
                <Card key={index} className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 rounded-xl">
                  <Quote className="w-6 h-6 text-blue-500 mb-4" />
                  <p className="text-gray-600 mb-4 text-base leading-relaxed italic">
                    "{depoimento.texto}"
                  </p>
                  <div className="font-semibold text-gray-800 text-sm">
                    — {depoimento.nome}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem é Vitor Yuji */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                QUEM É VITOR YUJI?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {/* Mobile/Tablet: Show images after title, before text */}
                <div className="space-y-6 lg:hidden">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/lovable-uploads/vitor-yuji-palestra-1.png" 
                      alt="Vitor Yuji palestrando para jovens" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="/lovable-uploads/vitor-yuji-palestra-2.png" 
                      alt="Vitor Yuji com sua equipe e alunos" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    Vitor Yuji tem apenas 15 anos e já formou <strong className="text-green-600">+460 alunos</strong> através de projetos de IA, neurociência e sustentabilidade.
                  </p>
                  
                  <p>
                    Membro da <strong className="text-blue-600">Adapta.org</strong> - selecionado pessoalmente pelo CEO <strong className="text-blue-600">Max Peters</strong> para ser jovem aprendiz da maior startup de IA Generativa da América Latina.
                  </p>
                  
                  <p>
                    Co-fundador do <strong className="text-green-600">Mangue Mania</strong> - a primeira metodologia infantil de educação de manguezais de Sergipe, projeto <strong className="text-yellow-600">top30</strong> no prêmio nacional <strong className="text-green-600">Criativos Escola</strong>.
                  </p>
                  
                  <p>
                    Também foi <strong className="text-blue-600">3x competidor da First Lego League</strong>, um dos maiores torneios de robótica do mundo. Hoje é mentor das principais equipes sergipanas.
                  </p>
                </div>
              </div>

              {/* Desktop: Show images on the right side */}
              <div className="space-y-6 hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/vitor-yuji-palestra-1.png" 
                    alt="Vitor Yuji palestrando para jovens" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="/lovable-uploads/vitor-yuji-palestra-2.png" 
                    alt="Vitor Yuji com sua equipe e alunos" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O Manifesto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
              O MANIFESTO
            </h2>
            
            <Card className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
                <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  <strong className="text-blue-600">Sergipe pode ser mais que 'o país do forró'.</strong>
                </p>
                <p>
                  Temos talentos incríveis que podem dominar tecnologias que transformam vidas em todo o mundo.
                </p>
                <p>
                  Depois de fazer uma mentoria com <strong className="text-yellow-600">Max Peters, CEO da Adapta.org</strong>, meu método de estudos mudou completamente. Aplicando IA de forma estratégica, consegui aumentar minha média para <strong className="text-green-600 text-xl">9.5</strong> estudando <strong className="text-blue-600">MENOS tempo</strong>.
                </p>
                <p>
                  Agora quero provar que essa transformação pode acontecer em escala maior.
                </p>
                <p>
                  <strong className="text-blue-600">Minha missão é tornar Sergipe, o menor estado do Brasil, na maior potência nordestina em educação com IA.</strong>
                </p>
                <p className="text-lg font-bold text-yellow-600">
                  Estas 5 palestras gratuitas são o primeiro passo para provar que os sergipanos também podem liderar a revolução da educação com IA.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Não é Convencional */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
              ESSE NÃO É UM TREINAMENTO CONVENCIONAL
            </h2>
            
            <Card className="p-8 bg-white shadow-lg rounded-xl border border-gray-200">
              <div className="space-y-4 text-base leading-relaxed text-gray-700">
                <p>
                  Uma boa palestra não deveria ser com um profissional que consegue te dar uma palestra motivacional.
                </p>
                <p>
                  Deveria ser com um <strong className="text-blue-600">praticante</strong>, que está testando e implementando IA em seus estudos. Na vida real.
                </p>
                <p className="text-lg font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Vitor Yuji é exatamente isso.
                </p>
                <p className="text-center text-lg">
                  Ele não é motivacional. É <strong className="text-yellow-600">acional</strong>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* O que vão aprender */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              O QUE SEUS ALUNOS VÃO APRENDER
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all">
                <CheckCircle className="w-6 h-6 text-blue-600 mb-3" />
                <h3 className="text-base font-semibold text-gray-800">Como aprender qualquer coisa em segundos</h3>
              </Card>
              <Card className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all">
                <Star className="w-6 h-6 text-green-600 mb-3" />
                <h3 className="text-base font-semibold text-gray-800">Os '3 passos' pra alcançar a média de 9.5 (rápido)</h3>
              </Card>
              <Card className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all">
                <Award className="w-6 h-6 text-yellow-600 mb-3" />
                <h3 className="text-base font-semibold text-gray-800">Os 2 tipos de conhecimento que todo estudante precisa saber</h3>
              </Card>
              <Card className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all">
                <Users className="w-6 h-6 text-purple-600 mb-3" />
                <h3 className="text-base font-semibold text-gray-800">4 técnicas práticas de IA nos estudos</h3>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                5 PALESTRAS COMPLETAMENTE GRATUITAS
              </h2>
              
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-2xl mb-10 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">⚠️ ATENÇÃO: VAGAS LIMITADAS</h3>
                <p className="text-lg md:text-xl mb-4 leading-relaxed">
                  <strong>Apenas 5 escolas serão selecionadas em todo o estado de Sergipe.</strong>
                </p>
                <p className="text-base md:text-lg opacity-90">
                  Esta é uma oportunidade única de oferecer aos seus alunos uma vantagem competitiva no mundo dos estudos.
                </p>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">COMO INSCREVER SUA ESCOLA</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-lg">1</span>
                    </div>
                    <p className="text-gray-700 font-medium">Preencha o formulário</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-lg">2</span>
                    </div>
                    <p className="text-gray-700 font-medium">Aguarde nossa análise</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-blue-600 font-bold text-lg">3</span>
                    </div>
                    <p className="text-gray-700 font-medium">Receba a confirmação</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-xl font-bold text-gray-900 mb-2">
                  ⏰ PRAZO FINAL: <span className="text-red-600">15 de setembro</span>
                </p>
              </div>

              <Button 
                onClick={handleInscricao}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
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