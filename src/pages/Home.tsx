
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToManual = () => {
    navigate('/manual');
  };

  const goToContact = () => {
    navigate('/contato');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-8">
            <a href="/" className="text-black font-medium hover:text-gray-600">
              Home
            </a>
            <button 
              onClick={goToManual}
              className="text-black font-medium hover:text-gray-600"
            >
              Manual IA Para Todos
            </button>
            <a 
              href="https://linkedin.com/in/vitor-yuji-minomo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black font-medium hover:text-gray-600"
            >
              LinkedIn
            </a>
            <button 
              onClick={goToContact}
              className="text-black font-medium hover:text-gray-600"
            >
              Contato
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Oi, eu sou Vitor Yuji
              </h1>
              
              {/* Mobile image - shows only on small screens */}
              <div className="flex justify-center lg:hidden">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                  <img 
                    src="/lovable-uploads/0a0b2111-6a29-4abd-87fa-d4698c7c621c.png" 
                    alt="Vitor Yuji"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Tenho 14 anos, sou pesquisador independente de IA e trainee da{" "}
                  <a href="https://adapta.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Adapta.org
                  </a>{" "}
                  (o maior ecossistema do Brasil de IA generativa - ensinamos você a usar e te damos acesso às melhores IAs).
                </p>
                
                <p>
                  Sou também cofundador do{" "}
                  <a href="https://manguejornalismo.org/estudantes-de-ensino-fundamental-de-aracaju-desenvolvem-projeto-educacional-de-baixo-custo-sobre-manguezais/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                    Mangue Mania
                  </a>{" "}
                  (uma das principais metodologias de educação ambiental de Sergipe) e participei de 3 temporadas do torneio de robótica da FLL (First Lego League).
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={goToManual}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3"
                >
                  Manual IA Para Todos
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3"
                  onClick={goToContact}
                >
                  Entre em Contato
                </Button>
              </div>
            </div>

            {/* Desktop image - shows only on large screens */}
            <div className="hidden lg:flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/0a0b2111-6a29-4abd-87fa-d4698c7c621c.png" 
                  alt="Vitor Yuji"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
              Minha Jornada
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Aos 12 anos, fui convidado pra participar do torneio de robótica da FLL. Criamos um protótipo de um sensor de temperatura pra evitar curtos circuitos em áreas periféricas.
              </p>
              
              <p>
                (o projeto falhou porque só apresentar uma ideia não basta. ela precisa de resultados).
              </p>
              
              <p>
                Na temporada seguinte, criamos uma impressão 3D de uma escultura do artista sergipano Beto Pezão, que foi aprovada pelo maior museu de Sergipe.
              </p>
              
              <p>
                Na minha última temporada da FLL, criamos o{" "}
                <a href="https://manguejornalismo.org/estudantes-de-ensino-fundamental-de-aracaju-desenvolvem-projeto-educacional-de-baixo-custo-sobre-manguezais/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                  Mangue Mania
                </a>
                , uma das principais metodologias ativas de manguezais do Nordeste. Alcançamos +400 alunos em 4 meses e fomos finalistas entre +1500 projetos de todo Brasil no prêmio Criativos da Escola.
              </p>
              
              <p>
                Em 2024, participei do Adapta Summit, o maior evento de IA generativa para negócios da América Latina. Por ser um moleque entre vários empresários, chamei a atenção do Max Peters, CEO da ADAPTA, que me escolheu pra ser jovem aprendiz do time quando eu fizer 16 anos.
              </p>
              
              <p>
                Já palestrei sobre IA em diversos eventos - como no Instituto JCPM e na escola de empregabilidade SuperClass - e criei o Webinar IA Para Todos, em que reuni 20 leigos em IA pra testar o conteúdo do manual.
              </p>
              
              <p>
                Sou 'alpinista' e músico no Movimento Escalada, um dos principais grupos de jovens cristãos do Brasil.
              </p>
              
              <p>
                Também já <strong>fui</strong> judoca, editor de vídeos, designer, líder de turma e youtuber gamer.
              </p>
              
              <p>
                <strong>Gosto</strong> de treinar capoeira, praticar animal flow, tocar violão e cavaquinho, correr e criar conteúdo pra o Linkedin (sou o único adolescente nessa rede social com +8mil impressões).
              </p>
              
              <p>
                Desde então, tenho criado projetos interessantes sem deixar de lado meu propósito e a natureza (escrevi esse artigo de cócoras no mato, sério.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
              Acesse o Manual IA Para Todos
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/f16e3364-584e-4d00-b4c7-153104803384.png" 
                      alt="Manual Inteligência Artificial Para Todos - Capa"
                      className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Acesse o Manual IA Para Todos: um guia prático de IA para quem não entende de tecnologia
                </p>
                <Button 
                  onClick={goToManual}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-4 text-lg"
                >
                  Acessar o Manual
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Quer conversar?
            </h2>
            <p className="text-xl text-gray-700 mb-2">
              Me mande um e-mail para:
            </p>
            <p className="text-2xl text-gray-700 font-bold">
              contato.vitoryujiminomo@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
