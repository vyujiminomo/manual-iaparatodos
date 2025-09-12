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
      <section className="relative py-20 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              TREINAMENTO DE IA GRATUITO<br />
              <span className="text-yellow-200 font-extrabold">PARA ESCOLAS DE SERGIPE</span>
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90">
              Um jovem de 15 anos da maior startup de IA do Brasil quer revolucionar a educação em Sergipe.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-yellow-200 mb-1">100%</div>
                <div className="text-sm md:text-base text-white/90">Gratuito</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-yellow-200 mb-1">1h30</div>
                <div className="text-sm md:text-base text-white/90">Por Palestra</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-yellow-200 mb-1">5</div>
                <div className="text-sm md:text-base text-white/90">Escolas Selecionadas</div>
              </div>
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
              QUEM É VITOR YUJI
            </h2>
            
            <Card className="p-8 bg-white shadow-lg rounded-xl border border-gray-200">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/5 flex-shrink-0">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/lovable-uploads/e2717431-8bdc-443c-b20a-b59da15e4d70.png"
                      alt="Vitor Yuji"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="lg:w-3/5 space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    Vitor Yuji tem apenas 15 anos e foi selecionado pelo CEO <strong className="text-blue-600">Max Peters</strong> para ser jovem aprendiz da <strong className="text-blue-600">Adapta.org</strong>, a maior startup de IA do Brasil.
                  </p>
                  <p>
                    Ele já palestrou sobre IA para <strong className="text-green-600">+200 jovens de todo Sergipe</strong>.
                  </p>
                  <p>
                    É co-fundador do <strong className="text-blue-600">Mangue Mania</strong>, a primeira metodologia infantil de educação de manguezais de Sergipe, projeto finalista no prêmio nacional <strong className="text-green-600">Criativos Escola</strong>.
                  </p>
                  <p>
                    Também foi <strong className="text-blue-600">3x competidor da First Lego League</strong>, um dos maiores torneios de robótica do mundo. Hoje é mentor das principais equipes sergipanas.
                  </p>
                  
                  <div className="mt-8">
                    <h4 className="font-bold text-xl mb-6 text-gray-800">Já capacitei:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {escolas.map((escola, index) => (
                        <div key={index} className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border border-gray-200">
                          <h5 className="font-semibold text-gray-800 text-sm">{escola}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
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
                  <strong className="text-blue-600">Sergipe pode exportar mais que forró e caranguejo.</strong>
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
                  Estas 7 palestras gratuitas são o primeiro passo para provar que os sergipanos também podem liderar a revolução da educação com IA.
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
      <section className="py-16 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              7 PALESTRAS COMPLETAMENTE GRATUITAS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <Clock className="w-10 h-10 text-yellow-200 mx-auto mb-3" />
                <div className="text-xl font-bold mb-1">Duração</div>
                <div className="text-base text-white/90">1h30 por palestra</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <Users className="w-10 h-10 text-yellow-200 mx-auto mb-3" />
                <div className="text-xl font-bold mb-1">Formato</div>
                <div className="text-base text-white/90">Presencial na sua escola</div>
              </div>
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                <CheckCircle className="w-10 h-10 text-yellow-200 mx-auto mb-3" />
                <div className="text-xl font-bold mb-1">Investimento</div>
                <div className="text-base text-white/90">R$ 0,00</div>
              </div>
            </div>

            <div className="bg-red-500 text-white p-6 rounded-xl mb-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-3">⚠️ ATENÇÃO: VAGAS LIMITADAS</h3>
              <p className="text-lg mb-3">
                <strong>Apenas 5 escolas serão selecionadas em todo o estado de Sergipe.</strong>
              </p>
              <p className="text-base">
                Esta é uma oportunidade única de oferecer aos seus alunos uma vantagem competitiva no mundo dos estudos.
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 mb-10 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">COMO INSCREVER SUA ESCOLA</h3>
              <div className="space-y-3 text-base">
                <p><strong>1.</strong> Preencha o formulário abaixo</p>
                <p><strong>2.</strong> Aguarde nossa análise</p>
                <p><strong>3.</strong> Se selecionada, sua escola receberá confirmação</p>
              </div>
            </div>

            <div className="text-xl font-bold mb-6">
              ⏰ PRAZO FINAL: <span className="text-yellow-200">15 de setembro</span>
            </div>

            <Button 
              onClick={handleInscricao}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              🔥 INSCREVER MINHA ESCOLA GRATUITAMENTE
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VitorYuji;