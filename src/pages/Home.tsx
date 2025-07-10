
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Mail, Linkedin } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const goToManual = () => {
    navigate('/manual');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="home" className="pt-16 pb-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Oi, eu sou Vitor Yuji
              </h1>
              
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
                  Acessar Manual de IA
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Entre em Contato
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/60c30a4e-5efd-4d34-9265-70a0c7134240.png" 
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
                Aos 12 anos, fui convidado pra participar da minha 1ª temporada do torneio de robótica da FLL. Criamos um projeto para evitar gatos nos postes elétricos.
              </p>
              
              <p>
                Na temporada seguinte, criamos uma impressão 3D de uma escultura do artista sergipano Beto Pezão.
              </p>
              
              <p>
                Na minha última temporada da FLL, criamos o{" "}
                <a href="https://manguejornalismo.org/estudantes-de-ensino-fundamental-de-aracaju-desenvolvem-projeto-educacional-de-baixo-custo-sobre-manguezais/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">
                  Mangue Mania
                </a>
                , uma das principais metodologias ativas de manguezais do Nordeste. Alcançamos +400 alunos em 4 meses e fomos finalistas entre +1500 projetos de todo Brasil no prêmio Criativos Escola.
              </p>
              
              <p>
                Em 2024, participamos do Adapta Summit, o maior evento de IA generativa para negócios da América Latina. Por ser um moleque de 13 anos entre vários empresários, chamei a atenção do CEO Max Peters, que me escolheu pra ser jovem aprendiz do time quando tiver 16 anos.
              </p>
              
              <p>
                Já palestrei sobre IA em diversos eventos, como no IJCPM e na escola de empregabilidade SuperClass. Também criei um webinar para 20 leigos em IA para testar o conteúdo do Manual IA Para Todos.
              </p>
              
              <p>
                Sou 'alpinista' e músico no Movimento Escalada, um dos principais grupos de jovens cristãos do Brasil.
              </p>
              
              <p>
                Também já fui judoca, ator do Fantasma da Ópera, editor de vídeos, designer, líder de turma e youtuber gamer.
              </p>
              
              <p>
                Gosto de treinar capoeira, praticar animal flow (literalmente fazer movimentos de quatro), tocar violão e cavaquinho, correr e criar conteúdo pra o Linkedin (sou o único adolescente nessa rede social com +8mil impressões).
              </p>
              
              <p className="italic">
                Desde então, tenho criado projetos interessantes sem deixar de lado meu propósito e a natureza (escrevi esse artigo de cócoras no mato, sério.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Pronto para aprender IA?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Acesse meu Manual de IA Para Todos e transforme sua relação com a tecnologia
          </p>
          <Button 
            onClick={goToManual}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-12 py-4 text-lg"
          >
            Acessar Manual de IA
          </Button>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Quer conversar?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Mande um e-mail para contato.vitoryujiminomo@gmail.com
            </p>
            
            <div className="flex justify-center">
              <a 
                href="mailto:contato.vitoryujiminomo@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition-colors"
              >
                <Mail className="w-5 h-5" />
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
