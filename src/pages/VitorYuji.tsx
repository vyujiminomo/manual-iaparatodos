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
    // Aqui você pode adicionar a lógica para abrir um formulário ou redirecionar
    console.log("Inscrever escola");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 bg-gradient-to-br from-blue-600 via-green-600 to-yellow-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              TREINAMENTO DE IA GRATUITO<br />
              <span className="text-yellow-300">PARA ESCOLAS DE SERGIPE</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Um jovem de 15 anos da maior startup de IA do Brasil quer revolucionar a educação em Sergipe.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
                <div className="text-lg">Gratuito</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">1h30</div>
                <div className="text-lg">Por Palestra</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl font-bold text-yellow-300 mb-2">5</div>
                <div className="text-lg">Escolas Selecionadas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              DEPOIMENTOS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <Card key={index} className="p-8 bg-gradient-to-br from-blue-50 to-green-50 border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300">
                  <Quote className="w-8 h-8 text-blue-600 mb-4" />
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                    "{depoimento.texto}"
                  </p>
                  <div className="font-semibold text-blue-800">
                    {depoimento.nome}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quem é Vitor Yuji */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              QUEM É VITOR YUJI
            </h2>
            
            <Card className="p-12 bg-white shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-2/5 flex-shrink-0">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src="/lovable-uploads/58ecef62-5140-46da-ae49-51272638998a.png"
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
                  
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl mt-8">
                    <h4 className="font-bold text-xl mb-4 text-gray-800">Já capacitei:</h4>
                    <div className="flex flex-wrap gap-3">
                      {escolas.map((escola, index) => (
                        <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                          {escola}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* O Desafio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
              O DESAFIO
            </h2>
            
            <Card className="p-12 bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-yellow-500">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Depois de fazer uma mentoria com o <strong className="text-yellow-600">Max Peters, CEO da Adapta.org</strong>, seu método de estudos mudou completamente.
                </p>
                <p>
                  Aplicando IA de forma estratégica, conseguiu aumentar sua média para <strong className="text-green-600 text-2xl">9.5</strong> estudando <strong className="text-blue-600">MENOS tempo</strong>.
                </p>
                <p>
                  Agora ele quer testar se esse método funciona em escala maior.
                </p>
                <p className="text-xl font-bold text-yellow-600">
                  E Sergipe foi escolhido como seu "laboratório de testes".
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Não é Convencional */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
              ESSE NÃO É UM TREINAMENTO CONVENCIONAL
            </h2>
            
            <Card className="p-12 bg-white shadow-xl">
              <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                <p>
                  Uma boa palestra não deveria ser com um profissional que consegue te dar uma palestra motivacional.
                </p>
                <p>
                  Deveria ser com um <strong className="text-blue-600 text-xl">praticante</strong>, que está testando e implementando IA em seus estudos. Na vida real.
                </p>
                <p className="text-xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Vitor Yuji é exatamente isso.
                </p>
                <p className="text-center text-xl">
                  Ele não é motivacional. É <strong className="text-yellow-600">acional</strong>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* O que vão aprender */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
              O QUE SEUS ALUNOS VÃO APRENDER
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500">
                <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Como aprender qualquer coisa em segundos</h3>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500">
                <Star className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Os '3 passos' pra alcançar a média de 9.5 (rápido)</h3>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-500">
                <Award className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">Os 2 tipos de conhecimento que todo estudante precisa saber</h3>
              </Card>
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500">
                <Users className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-800">4 técnicas práticas de IA nos estudos</h3>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-green-600 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              7 PALESTRAS COMPLETAMENTE GRATUITAS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Clock className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">Duração</div>
                <div className="text-lg">1h30 por palestra</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Users className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">Formato</div>
                <div className="text-lg">Presencial na sua escola</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <CheckCircle className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">Investimento</div>
                <div className="text-lg">R$ 0,00</div>
              </div>
            </div>

            <div className="bg-red-500 text-white p-8 rounded-xl mb-12 shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">⚠️ ATENÇÃO: VAGAS LIMITADAS</h3>
              <p className="text-xl mb-4">
                <strong>Apenas 5 escolas serão selecionadas em todo o estado de Sergipe.</strong>
              </p>
              <p className="text-lg">
                Esta é uma oportunidade única de oferecer aos seus alunos uma vantagem competitiva no mundo dos estudos.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12">
              <h3 className="text-3xl font-bold mb-6">COMO INSCREVER SUA ESCOLA</h3>
              <div className="space-y-4 text-lg">
                <p><strong>1.</strong> Preencha o formulário abaixo</p>
                <p><strong>2.</strong> Aguarde nossa análise</p>
                <p><strong>3.</strong> Se selecionada, sua escola receberá confirmação</p>
              </div>
            </div>

            <div className="text-2xl font-bold mb-8">
              ⏰ PRAZO FINAL: <span className="text-yellow-300">15 de setembro</span>
            </div>

            <Button 
              onClick={handleInscricao}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-2xl px-12 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
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