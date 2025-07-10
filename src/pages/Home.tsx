
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
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-8">
            <a href="#home" className="text-ai-blue hover:text-ai-blue/80 font-poppins font-medium">Home</a>
            <button 
              onClick={goToManual}
              className="text-gray-600 hover:text-ai-blue font-poppins font-medium"
            >
              Manual IA Para Todos
            </button>
            <a href="https://linkedin.com/in/vitor-yuji-minomo" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-ai-blue font-poppins font-medium">LinkedIn</a>
            <a href="#contato" className="text-gray-600 hover:text-ai-blue font-poppins font-medium">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Oi, eu sou <span className="text-ai-blue">Vitor Yuji</span>
              </h1>
              
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Tenho 14 anos, sou pesquisador independente de IA e trainee da{" "}
                  <a href="https://adapta.org" target="_blank" rel="noopener noreferrer" className="text-ai-blue hover:underline">
                    Adapta.org
                  </a>{" "}
                  (o maior ecossistema do Brasil de IA generativa - ensinamos você a usar e te damos acesso às melhores IAs).
                </p>
                
                <p>
                  Sou também cofundador do{" "}
                  <span className="text-ai-blue font-semibold">Mangue Mania</span>{" "}
                  (uma das principais metodologias de educação ambiental de Sergipe) e participei de 3 temporadas do torneio de robótica da FLL (First Lego League).
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  onClick={goToManual}
                  size="lg"
                  className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold px-8 py-3"
                >
                  Acessar Manual de IA
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white font-poppins font-semibold px-8 py-3"
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Entre em Contato
                </Button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/4bfa1be5-655f-476f-b126-8b582077e18e.png" 
                  alt="Vitor Yuji"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jornada Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Minha <span className="text-ai-blue">Jornada</span>
            </h2>

            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg text-ai-blue mb-3">Início na Robótica (12 anos)</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fui convidado pra participar da minha 1ª temporada do torneio de robótica da FLL. Criamos um projeto para evitar gatos nos postes elétricos.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg text-ai-blue mb-3">Arte e Tecnologia</h3>
                <p className="text-gray-600 leading-relaxed">
                  Na temporada seguinte, criamos uma impressão 3D de uma escultura do artista sergipano Beto Pezão.
                </p>
              </div>

              <div className="bg-ai-blue/5 p-6 rounded-xl border border-ai-blue/20">
                <h3 className="font-semibold text-lg text-ai-blue mb-3">Mangue Mania - Impacto Ambiental</h3>
                <p className="text-gray-600 leading-relaxed">
                  Na minha última temporada da FLL, criamos o Mangue Mania, uma das principais metodologias ativas de manguezais do Nordeste. Alcançamos +400 alunos em 4 meses e fomos finalistas entre +1500 projetos de todo Brasil no prêmio Criativos Escola.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg text-ai-blue mb-3">Adapta Summit 2024</h3>
                <p className="text-gray-600 leading-relaxed">
                  Participamos do Adapta Summit, o maior evento de IA generativa para negócios da América Latina. Por ser um moleque de 13 anos entre vários empresários, chamei a atenção do CEO Max Peters, que me escolheu pra ser jovem aprendiz do time quando tiver 16 anos.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-semibold text-lg text-ai-blue mb-3">Palestras e Educação</h3>
                <p className="text-gray-600 leading-relaxed">
                  Já palestrei sobre IA em diversos eventos, como no IJCPM e na escola de empregabilidade SuperClass. Também criei um webinar para 20 leigos em IA para testar o conteúdo do Manual IA Para Todos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Além da <span className="text-ai-blue">Tecnologia</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg text-ai-blue mb-3">Movimento Escalada</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sou 'alpinista' e músico no Movimento Escalada, um dos principais grupos de jovens cristãos do Brasil.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg text-ai-blue mb-3">Diversas Experiências</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Já fui judoca, ator do Fantasma da Ópera, editor de vídeos, designer, líder de turma e youtuber gamer.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg text-ai-blue mb-3">Atividades Atuais</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Gosto de treinar capoeira, praticar animal flow (literalmente fazer movimentos de quatro), tocar violão e cavaquinho, correr e criar conteúdo pro LinkedIn.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-semibold text-lg text-ai-blue mb-3">LinkedIn</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sou o único adolescente nessa rede social com +8mil impressões, sempre compartilhando sobre tecnologia e propósito.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 leading-relaxed italic">
                "Desde então, tenho criado projetos interessantes sem deixar de lado meu propósito e a natureza 
                (escrevi esse artigo de cócoras no mato, sério.)"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ai-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para aprender IA?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Acesse meu Manual de IA Para Todos e transforme sua relação com a tecnologia
          </p>
          <Button 
            onClick={goToManual}
            size="lg"
            className="bg-white text-ai-blue hover:bg-gray-100 font-poppins font-semibold px-12 py-4 text-lg"
          >
            Acessar Manual de IA
          </Button>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Quer <span className="text-ai-blue">conversar?</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estou sempre aberto para novas conexões e oportunidades
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato.vitoryujiminomo@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold px-8 py-3 rounded-md transition-colors"
              >
                <Mail className="w-5 h-5" />
                Enviar E-mail
              </a>
              <a 
                href="https://linkedin.com/in/vitor-yuji-minomo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white font-poppins font-semibold px-8 py-3 rounded-md transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 Vitor Yuji Minomo. Feito com propósito e tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
