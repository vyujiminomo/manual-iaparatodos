import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, BookOpen, Award, MessageCircle } from "lucide-react";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { LazyImage } from "@/components/LazyImage";

const Consultoria = () => {
  useDynamicMeta({
    title: "Consultoria IA - Vitor Yuji | 1º Consultor de IA Generativa de Sergipe",
    description: "Aos 15 anos, já capacitei +450 estudantes e profissionais em IA. Consultoria individual personalizada com implementação prática no seu trabalho.",
    image: "/lovable-uploads/vitor-profile-latest.png"
  });

  const scrollToConsultoria = () => {
    const element = document.getElementById('consultoria');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = '5579981255774';
    const message = '';
    
    // Try multiple WhatsApp options for maximum compatibility
    const whatsappUrls = [
      `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`,
      `https://wa.me/${phoneNumber}`,
      `https://web.whatsapp.com/send?phone=${phoneNumber}`
    ];
    
    // Try to open WhatsApp app first
    try {
      window.open(whatsappUrls[0], '_blank');
      
      // Fallback to web version after a short delay if app doesn't open
      setTimeout(() => {
        window.open(whatsappUrls[1], '_blank');
      }, 1000);
    } catch (error) {
      // If all else fails, use web WhatsApp
      window.open(whatsappUrls[2], '_blank');
    }
  };

  const instituicoes = [
    { nome: "Colégio Estadual Dom Luciano", logo: "/lovable-uploads/escola-dom-luciano.jpeg" },
    { nome: "Equipes de FLL do Colégio Master", logo: "/lovable-uploads/colegio-master-fll.jpg" },
    { nome: "Escola SuperClass", logo: "/lovable-uploads/escola-superclass.png" },
    { nome: "Instituto JCPM", logo: "/lovable-uploads/instituto-jcpm.png" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-secondary">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        
        <div className="container relative mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
                Consultor de IA Generativa
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-bold text-text mb-6">
                VITOR YUJI
              </h1>
              
              <p className="text-xl lg:text-2xl font-heading font-semibold text-blue-800 mb-6">
                O 1º Consultor de IA Generativa de Sergipe
              </p>
              
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Aos 15 anos, já capacitei <span className="font-semibold text-primary">+450 estudantes e profissionais</span> em Inteligência Artificial na prática.
              </p>
              
              <button 
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="mr-2" />
                AGENDAR CONSULTORIA
              </button>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20 scale-110" />
                <LazyImage
                  src="/lovable-uploads/vitor-profile-latest.png"
                  alt="Vitor Yuji - Consultor de IA"
                  className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-12">
            Depoimentos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-text-secondary italic mb-4">
                  "Descobri no curso que precisava mudar radicalmente minha interação com elas, pois estava cometendo vários erros e demorando muito para obter as respostas que preciso. Gratidão."
                </p>
                <div className="text-center">
                  <p className="text-text font-semibold">Marta Romilda</p>
                  <p className="text-text-secondary text-sm">Administradora</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-text-secondary italic mb-4">
                  "Agora é uma ferramenta essencial pra mim. Mudou totalmente meu jeito de pesquisar e estudar."
                </p>
                <div className="text-center">
                  <p className="text-text font-semibold">Arthur Lucena</p>
                  <p className="text-text-secondary text-sm">Estudante</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-text-secondary italic mb-4">
                  "A aula foi bem didática e sensação q tive foi q a IA não ficará tão distante de nós depois de sua apresentação."
                </p>
                <div className="text-center">
                  <p className="text-text font-semibold">Ana Isabel</p>
                  <p className="text-text-secondary text-sm">Servidora Pública</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <button 
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold px-6 py-3 rounded-lg"
          >
            <MessageCircle className="mr-2" />
            AGENDAR CONSULTORIA
          </button>
        </div>
      </section>

      {/* Já Capacitei Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text text-center mb-12">
            Já capacitei:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {instituicoes.map((inst, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 h-48">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <LazyImage
                    src={inst.logo}
                    alt={inst.nome}
                    className="w-full h-28 object-contain mb-4"
                  />
                  <p className="text-text font-medium">{inst.nome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <button 
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold px-6 py-3 rounded-lg"
            >
              <MessageCircle className="mr-2" />
              AGENDAR CONSULTORIA
            </button>
          </div>
        </div>
      </section>

      {/* Consultoria Diferencial Section */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-primary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text text-center mb-8">
            Essa não é uma consultoria convencional
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Uma boa consultoria não deveria ser com um profissional que consegue te dar uma palestra motivacional.
            </p>
            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Deveria ser com um <span className="font-semibold text-primary">praticante</span>, que está testando e implementando IA em seus projetos. Na vida real.
            </p>
            <p className="text-xl font-heading font-semibold text-text mb-6">
              Vitor Yuji é exatamente isso.
            </p>
              <p className="text-lg text-blue-800 font-semibold mb-8">
                Ele não é motivacional. É acional.
              </p>
            
            <button 
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold px-6 py-3 rounded-lg"
            >
              <MessageCircle className="mr-2" />
              AGENDAR CONSULTORIA
            </button>
          </div>
        </div>
      </section>

      {/* Quem é Vitor Yuji Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text text-center mb-12">
            Quem é Vitor Yuji
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Vitor Yuji tem apenas 15 anos e já educou <span className="font-semibold text-primary">+450 alunos</span> através de projetos de IA, neurociência e sustentabilidade.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-text mb-1">Membro da Adapta.org</h3>
                    <p className="text-text-secondary">selecionado pessoalmente pelo CEO Max Peters para ser jovem aprendiz da maior startup de IA Generativa da América Latina.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-slate-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-text mb-1">Co-fundador do Mangue Mania</h3>
                    <p className="text-text-secondary">a 1º metodologia infantil de educação de manguezais de Sergipe, top 30 no prêmio nacional Criativos Escola.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <BookOpen className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-text mb-1">3x competidor da First Lego League</h3>
                    <p className="text-text-secondary">um dos maiores torneios de robótica do mundo, hoje mentor das principais equipes sergipanas.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-slate-800 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading font-semibold text-text mb-1">Músico no Movimento Escalada</h3>
                    <p className="text-text-secondary">grupo católico de jovens do Nordeste</p>
                  </div>
                </div>
              </div>
              
              <p className="text-lg font-heading font-semibold text-blue-800 mt-8">
                E com uma missão clara: tornar a IA acessível para todos.
              </p>
            </div>
            
            <div className="flex justify-center">
              <LazyImage
                src="/lovable-uploads/vitor-yuji-palestra-1.png"
                alt="Vitor Yuji em palestra"
                className="w-full max-w-md rounded-xl shadow-lg"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={openWhatsApp}
              className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold px-6 py-3 rounded-lg"
            >
              <MessageCircle className="mr-2" />
              AGENDAR CONSULTORIA
            </button>
          </div>
        </div>
      </section>

      {/* Consultorias Section */}
      <section id="consultoria" className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-text mb-4">
              Conheça As Consultorias
            </h2>
            <p className="text-lg text-text-secondary">
              O primeiro consultor de IA a juntar as melhores estratégias em uma única aula.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Consultoria Individual */}
            <Card className="bg-white border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-text mb-6">
                  Consultoria Individual
                </h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-text-secondary">Duração: 1h30</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-text-secondary">Análise personalizada</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-text-secondary">Implementação prática de IA no seu trabalho</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-text-secondary">Plano de ação específico</span>
                  </li>
                </ul>
                
                <div className="text-center mb-6">
                  <p className="text-sm text-text-secondary mb-2">Valor:</p>
                  <p className="text-3xl font-heading font-bold text-primary">R$ 150</p>
                </div>
                
                <button 
                  onClick={openWhatsApp}
                  className="w-full inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-heading font-semibold py-6 rounded-lg"
                >
                  <MessageCircle className="mr-2" />
                  Agendar Consultoria
                </button>
              </CardContent>
            </Card>

            {/* Palestra Institucional */}
            <Card className="bg-white border-2 border-accent/20 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-bold text-text mb-6">
                  Palestra Institucional
                </h3>
                
                <p className="text-text-secondary mb-8 leading-relaxed">
                  Palestra sob demanda apenas para empresas. Clique no botão abaixo para mais detalhes.
                </p>
                
                <button 
                  onClick={openWhatsApp}
                  className="w-full inline-flex items-center justify-center border border-accent text-accent hover:bg-accent hover:text-white font-heading font-semibold py-6 rounded-lg transition-colors"
                >
                  Conhecer mais →
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultoria;