
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Instagram, Linkedin, ArrowRight, BookOpen, Users, Target } from 'lucide-react';

const VitorYuji = () => {
  useDynamicMeta({
    title: "Vitor Yuji Minomo - Especialista em IA e Automação",
    description: "Desenvolvedor especializado em Inteligência Artificial, automação e tecnologia. Criador do Manual IA Para Todos.",
    image: "/lovable-uploads/profile-photo.png",
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Olá, eu sou
                <span className="block text-blue-600">Vitor Yuji</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Desenvolvedor especializado em <strong>Inteligência Artificial</strong> e <strong>Automação</strong>. 
                Ajudo pessoas e empresas a simplificar processos complexos através da tecnologia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                >
                  Entre em Contato
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('/manual', '_blank')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
                >
                  Ver Manual IA
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/profile-photo.png" 
                  alt="Vitor Yuji Minomo"
                  className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Sobre Mim
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Especialização</h3>
                <p className="text-gray-700">
                  Focado em IA, automação e desenvolvimento de soluções tecnológicas inovadoras.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Missão</h3>
                <p className="text-gray-700">
                  Democratizar o acesso à IA e ajudar pessoas a aproveitarem todo o potencial da tecnologia.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Educação</h3>
                <p className="text-gray-700">
                  Criador do "Manual IA Para Todos", ensinando IA de forma simples e prática.
                </p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sou desenvolvedor apaixonado por tecnologia e inovação. Minha jornada começou com curiosidade sobre como a tecnologia 
              pode simplificar nossas vidas, e hoje me dedico a criar soluções que realmente fazem a diferença. 
              Acredito que a IA deve ser acessível a todos, não apenas aos especialistas técnicos.
            </p>
          </div>
        </div>
      </section>

      {/* Manual IA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Manual IA Para Todos
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Um guia completo e prático para você dominar a Inteligência Artificial, 
              mesmo sem conhecimento técnico. Aprenda a usar as melhores ferramentas 
              de IA para otimizar seu trabalho e vida pessoal.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">O que você vai aprender:</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Fundamentos da IA de forma simples
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Como use ChatGPT, Claude e outras IAs
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Automação de tarefas repetitivas
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Criação de conteúdo com IA
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      Casos práticos para diferentes áreas
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/115d1d1e-2183-495c-abc3-2d8f83b190cd.png" 
                    alt="Manual IA Para Todos"
                    className="w-full max-w-xs mx-auto rounded-lg shadow-md mb-6"
                  />
                  <Button 
                    onClick={() => window.open('/manual', '_blank')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg w-full"
                  >
                    Acessar Manual
                    <BookOpen className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Vamos Conversar?
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Está interessado em automação, IA ou tem algum projeto em mente? 
              Entre em contato comigo através dos canais abaixo.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <a 
                  href="mailto:contato.vitoryujiminomo@gmail.com"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  contato.vitoryujiminomo@gmail.com
                </a>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instagram</h3>
                <a 
                  href="https://www.instagram.com/vitoryujim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  @vitoryujim
                </a>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/vitor-yuji-minomo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Vitor Yuji Minomo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VitorYuji;
