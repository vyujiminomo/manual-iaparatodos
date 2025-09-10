import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { 
  Award, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Star, 
  Clock, 
  CheckCircle,
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
  Linkedin,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect } from "react";

const Consultoria = () => {
  const [formData, setFormData] = useState({
    nome: "",
    instituicao: "",
    tipoInteresse: "",
    mensagem: ""
  });

  useDynamicMeta({
    title: "Vitor Yuji - Consultor de IA Generativa",
    description: "O primeiro consultor de IA Generativa de Sergipe. Aos 15 anos, já capacitei +450 estudantes e profissionais em Inteligência Artificial na prática.",
    image: "/lovable-uploads/c7c5dc38-0495-44e2-b75e-07842c0c52e3.png"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log("Form data:", formData);
  };

  const stats = [
    { number: "+450", label: "pessoas capacitadas em IA" },
    { number: "5+", label: "instituições atendidas" },
    { number: "3x", label: "competidor da First Lego League" },
    { number: "Top 30", label: "nacional - Criativos Escola" }
  ];

  const palestras = [
    {
      categoria: "PARA TODOS",
      temas: [
        { titulo: "IA na Prática em 60 minutos", duracao: "60min" }
      ]
    },
    {
      categoria: "PARA ESTUDANTES", 
      temas: [
        { titulo: "Como usar IA pra aprender 3x mais e 3x melhor", duracao: "90min" },
        { titulo: "O passo a passo que me fez tirar 9.5 de média (copie e cole em segundos)", duracao: "60min" }
      ]
    },
    {
      categoria: "PARA PROFISSIONAIS",
      temas: [
        { titulo: "Pesquisando artigos científicos MUITO mais rápido com IA", duracao: "30min" }
      ]
    },
    {
      categoria: "PARA EQUIPES DE FLL",
      temas: [
        { titulo: "3 anos usando IA na FLL: eis os resultados", duracao: "60min" }
      ]
    },
    {
      categoria: "PERSONALIZADA",
      temas: [
        { titulo: "Tem um público específico? Vamos criar uma palestra sob medida.", duracao: "Sob consulta" }
      ]
    }
  ];

  const [currentCapacitacao, setCurrentCapacitacao] = useState(0);
  const [currentTreinamento, setCurrentTreinamento] = useState(0);

  const treinamentos = [
    {
      titulo: "IA na Prática em 60 minutos",
      duracao: "60min",
      descricao: "Imagine dominar uma ferramenta que pode transformar completamente sua forma de trabalhar, pensar e criar. O curso 'IA na Prática em 60 minutos' não é apenas um treinamento, é uma experiência de transformação digital que vai reescrever suas possibilidades",
      capa: "/lovable-uploads/5aff8bfc-ba6c-4cde-9e22-f59fd7d642a3.png"
    },
    {
      titulo: "Como usar IA pra aprender 3x mais e 3x melhor", 
      duracao: "90min",
      descricao: "Descubra técnicas avançadas para otimizar seu aprendizado usando inteligência artificial de forma estratégica e eficiente.",
      capa: "/lovable-uploads/7963fa9b-ac69-401e-b201-e1beb09e1edc.png"
    },
    {
      titulo: "Pesquisando artigos científicos MUITO mais rápido com IA",
      duracao: "30min", 
      descricao: "Aprenda como os melhores médicos estão usando IA generativa para fazer pesquisas científicas de forma mais eficiente.",
      capa: "/lovable-uploads/40fa3ac8-a26f-40b9-bc04-ac71610a29cb.png"
    },
    {
      titulo: "3 anos usando IA na FLL: eis os resultados",
      duracao: "90min",
      descricao: "Descubra como a minha equipe premiada de FLL usou IA generativa no projeto de inovação pra ter ideias, pesquisar e pensar 10x mais rápido.",
      capa: "/lovable-uploads/acdc887b-9134-46e5-9485-3fe8a4fe8948.png"
    },
    {
      titulo: "Treinamento Personalizado",
      duracao: "Sob consulta",
      descricao: "Tem um público específico? Vamos criar uma palestra sob medida para suas necessidades específicas.",
      capa: "/lovable-uploads/727f4450-845d-487e-bde0-1652bf131e35.png"
    }
  ];
  
  const capacitacoes = [
    {
      title: "Como usar IA pra aprender 3X mais e 3X melhor",
      local: "Colégio Estadual Dom Luciano",
      participantes: "186",
      image: "/lovable-uploads/3a323486-a631-4952-9d0e-7af151ef7d0d.png"
    },
    {
      title: "3 anos usando IA na FLL (eis os resultados)",
      local: "Colégio Master",
      participantes: "31",
      image: "/lovable-uploads/4debd9a6-f178-447b-86f1-034a9c47ebc9.png"
    },
    {
      title: "Estratégias de IA Para Liderar o Mercado de Trabalho (Independente da Carreira que você Escolha)",
      local: "SuperClass Itirapina e Brotas",
      participantes: "19",
      image: "/lovable-uploads/3e9a6853-41e4-4868-85a4-9e00dd89e8ba.png"
    },
    {
      title: "IA como Ferramenta de Inovação",
      local: "Instituto JCPM",
      participantes: "53",
      image: "/lovable-uploads/f28b235a-271a-4252-9cc8-aaa4125075e6.png"
    },
    {
      title: "IA e como usá-la na FLL",
      local: "Colégio Master",
      participantes: "29",
      image: "/lovable-uploads/0d61bede-6460-4053-b671-0f1423a5871f.png"
    }
  ];

  // Preload images to prevent delay
  useEffect(() => {
    capacitacoes.forEach(cap => {
      if (cap.image) {
        const img = new Image();
        img.src = cap.image;
      }
    });
  }, []);

  const nextTreinamento = () => {
    setCurrentTreinamento((prev) => (prev + 2) % treinamentos.length);
  };

  const prevTreinamento = () => {
    setCurrentTreinamento((prev) => (prev - 2 + treinamentos.length) % treinamentos.length);
  };

  const nextCapacitacao = () => {
    setCurrentCapacitacao((prev) => (prev + 1) % capacitacoes.length);
  };

  const prevCapacitacao = () => {
    setCurrentCapacitacao((prev) => (prev - 1 + capacitacoes.length) % capacitacoes.length);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-system">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/5 to-background">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/50"></div>
        
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <p className="text-sm font-medium text-muted-foreground mb-6 tracking-widest uppercase">
                [[Consultor de IA Generativa]]
              </p>
              <h1 className="text-5xl md:text-7xl font-sans font-bold mb-8 leading-tight tracking-tight">
                VITOR YUJI
              </h1>
              <h2 className="text-2xl md:text-3xl font-sans font-semibold text-primary mb-12 leading-relaxed">
                O Primeiro Consultor de IA Generativa de Sergipe
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed">
                Aos 15 anos, já capacitei <strong className="text-primary">+450 estudantes e profissionais</strong> em Inteligência Artificial na prática.
              </p>
            </div>

            <div className="mb-16">
              <Button size="lg" className="text-xl px-12 py-8 mb-12 font-sans font-medium">
                SOLICITAR PALESTRA / AGENDAR CONSULTORIA
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-sans font-bold text-primary mb-3">{stat.number}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-3 text-muted-foreground text-lg">
              <p>Palestrante em 5+ instituições</p>
              <p>Membro da ADAPTA (maior startup de IA do Brasil)</p>
              <p>Co-fundador do Mangue Mania (Top 30 nacional - Criativos Escola)</p>
              <p>3x competidor da First Lego League</p>
              <p>Mentor das principais equipes de robótica de Sergipe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria Diferenciada */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 leading-tight">
              Essa não é uma consultoria convencional
            </h2>
            
            <Card className="p-12 bg-card border-border">
              <div className="space-y-8 text-xl leading-relaxed">
                <p>
                  Uma boa consultoria não deveria ser com um profissional que consegue te dar uma palestra motivacional.
                </p>
                <p>
                  Deveria ser com um <strong className="text-primary">praticante</strong>, que está testando e implementando IA em seus projetos. Na vida real.
                </p>
                <p>
                  Vitor Yuji é exatamente isso.
                </p>
                <p className="text-2xl font-sans font-semibold text-primary">
                  Ele não é motivacional. É acional.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Treinamentos */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-16 text-center">TREINAMENTOS</h2>
            
            <div className="mb-16">
              <h3 className="text-3xl font-sans font-bold mb-16 text-center">Conheça os temas</h3>
              
              {/* Carrossel de Treinamentos */}
              <div className="relative px-4">
                <div className="overflow-hidden rounded-xl">
                  <div className="transition-transform duration-500 ease-in-out"
                       style={{ transform: `translateX(-${currentTreinamento * 50}%)` }}>
                    <div className="flex gap-6">
                      {treinamentos.map((treinamento, index) => (
                        <div key={index} className="w-1/2 flex-shrink-0">
                          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/90 via-primary to-primary/80 border-0 text-white group hover:scale-[1.02] transition-all duration-300 shadow-2xl h-[420px] flex flex-col">
                            {/* Imagem de Capa */}
                            <div className="aspect-[16/9] relative overflow-hidden flex-shrink-0">
                              <img
                                src={treinamento.capa}
                                alt={treinamento.titulo}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                              
                              {/* Duração Overlay */}
                              <div className="absolute top-4 right-4">
                                <span className="flex items-center gap-1 text-sm bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                                  <Clock className="w-4 h-4" />
                                  {treinamento.duracao}
                                </span>
                              </div>
                            </div>
                            
                            {/* Conteúdo */}
                            <div className="p-6 flex flex-col flex-grow">
                              <h4 className="text-xl font-sans font-bold mb-3 leading-tight">
                                {treinamento.titulo}
                              </h4>
                              
                              <p className="text-sm leading-relaxed opacity-90 flex-grow">
                                {treinamento.descricao}
                              </p>
                            </div>
                            
                            {/* Efeito de brilho no hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-all duration-700"></div>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Setas de Navegação */}
                <div className="flex justify-center mt-8 gap-4">
                  <button
                    onClick={prevTreinamento}
                    className="bg-primary/10 backdrop-blur-sm hover:bg-primary/20 text-primary rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 border border-primary/20"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextTreinamento}
                    className="bg-primary/10 backdrop-blur-sm hover:bg-primary/20 text-primary rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110 border border-primary/20"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Indicadores */}
                <div className="flex justify-center mt-6 space-x-2">
                  {Array.from({ length: Math.ceil(treinamentos.length / 2) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTreinamento(index * 2)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        Math.floor(currentTreinamento / 2) === index ? 'bg-primary scale-125' : 'bg-muted hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-3xl font-sans font-bold mb-8">Já capacitei:</h3>
              
              <div className="relative">
                <Card className="p-8 bg-card border-border">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Imagem da Palestra */}
                    <div className="w-full md:w-1/2">
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={capacitacoes[currentCapacitacao].image}
                          alt={capacitacoes[currentCapacitacao].title}
                          className="w-full h-full object-cover"
                          loading="eager"
                        />
                      </div>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                      <h4 className="text-2xl font-sans font-bold text-foreground mb-4">
                        {capacitacoes[currentCapacitacao].title}
                      </h4>
                      <p className="text-lg text-muted-foreground mb-2">
                        <strong>Local:</strong> {capacitacoes[currentCapacitacao].local}
                      </p>
                      <p className="text-lg text-muted-foreground">
                        <strong>Participantes:</strong> {capacitacoes[currentCapacitacao].participantes}
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Setas de Navegação */}
                <button
                  onClick={prevCapacitacao}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextCapacitacao}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/80 text-primary-foreground rounded-full p-3 shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Indicadores */}
                <div className="flex justify-center mt-6 space-x-2">
                  {capacitacoes.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCapacitacao(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentCapacitacao ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-xl px-12 py-6 font-sans font-medium">
                SOLICITAR PALESTRA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem é Vitor Yuji */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center">Quem é Vitor Yuji</h2>
            
            <Card className="p-12 bg-card border-border">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Foto do Vitor */}
                <div className="lg:w-1/3 flex-shrink-0">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
                    <img
                      src="/lovable-uploads/58ecef62-5140-46da-ae49-51272638998a.png"
                      alt="Vitor Yuji apresentando palestra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Conteúdo Textual */}
                <div className="lg:w-2/3 space-y-8 text-xl leading-relaxed">
                  <p>
                    Vitor Yuji tem apenas 15 anos e já educou <strong className="text-primary">+660 alunos</strong> através de projetos de IA, neurociência e sustentabilidade.
                  </p>
                  
                  <div className="space-y-6">
                    <p>
                      <strong className="text-primary">Membro da Adapta.org</strong> - selecionado pessoalmente pelo CEO Max Peters para ser jovem aprendiz da maior startup de IA Generativa da América Latina.
                    </p>
                    
                    <p>
                      <strong className="text-primary">Co-fundador do Mangue Mania</strong> - a 1º metodologia infantil de educação de manguezais de Sergipe, top 30 no prêmio nacional Criativos Escola.
                    </p>
                    
                    <p>
                      <strong className="text-primary">3x competidor da First Lego League</strong> - um dos maiores torneios de robótica do mundo, hoje mentor das principais equipes sergipanas.
                    </p>
                    
                    <p>
                      <strong className="text-primary">Músico no Movimento Escalada</strong> - grupo católico de jovens do Nordeste
                    </p>
                  </div>
                  
                  <p className="text-2xl font-sans font-semibold text-primary text-center mt-12">
                    E com uma missão clara: tornar a IA acessível para todos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-24">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-16 text-center">Planos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Introdução Gratuita */}
              <Card className="p-8 bg-card border-border">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-sans font-bold">Introdução Gratuita</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    O Mínimo de IA que você precisa saber (para não ficar pra trás)
                  </p>
                  <div className="text-3xl font-sans font-bold text-primary">GRATUITO</div>
                  <Button variant="outline" className="w-full py-3 font-medium">
                    ACESSAR AGORA
                  </Button>
                </div>
              </Card>

              {/* Ebook Completo */}
              <Card className="p-8 bg-card border-border">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-sans font-bold">Ebook Completo</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Manual IA Para Todos
                  </p>
                  <div className="text-xl font-sans font-semibold text-primary">Sob consulta</div>
                  <Button variant="outline" className="w-full py-3 font-medium">
                    CONHEÇA O MANUAL
                  </Button>
                </div>
              </Card>

              {/* Consultoria Individual */}
              <Card className="p-8 bg-card border-border border-primary/50">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-sans font-bold">Consultoria Individual</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left leading-relaxed">
                    <li>• Análise personalizada</li>
                    <li>• Implementação prática de IA</li>
                    <li>• Plano de ação específico</li>
                  </ul>
                  <div className="text-2xl font-sans font-bold text-primary">R$ 150/hora</div>
                  <p className="text-xs text-muted-foreground">(online)</p>
                  <Button className="w-full py-3 font-medium">
                    Agendar Conversa
                  </Button>
                </div>
              </Card>

              {/* Palestra Institucional */}
              <Card className="p-8 bg-card border-border">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-sans font-bold">Palestra Institucional</h3>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left leading-relaxed">
                    <li>• Presencial em Sergipe</li>
                    <li>• Conteúdo adaptado</li>
                    <li>• Material de apoio exclusivo</li>
                  </ul>
                  <div className="text-xl font-sans font-semibold text-primary">Sob consulta</div>
                  <Button variant="outline" className="w-full py-3 font-medium">
                    Solicitar Orçamento
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-24 bg-muted/5">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-sans font-bold mb-12 text-center">Contato</h2>
            <p className="text-center text-2xl mb-16 text-muted-foreground leading-relaxed">
              Vamos conversar? Entre em contato e vamos descobrir como posso ajudar você ou sua instituição.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Informações de contato */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg">WhatsApp: (Em breve)</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <span className="text-lg">contato.vitoryujiminomo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                  <a href="https://linkedin.com/in/vitor-yuji-minomo" target="_blank" rel="noopener noreferrer" className="text-lg text-primary hover:underline">
                    LinkedIn: Vitor Yuji Minomo
                  </a>
                </div>
              </div>

              {/* Formulário */}
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl font-sans font-bold mb-6 text-center">Preencha o formulário abaixo:</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-base font-medium mb-2">Nome:</label>
                    <Input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="py-3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium mb-2">Instituição/Empresa:</label>
                    <Input
                      type="text"
                      name="instituicao"
                      value={formData.instituicao}
                      onChange={handleInputChange}
                      className="py-3"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium mb-2">Tipo de interesse:</label>
                    <select
                      name="tipoInteresse"
                      value={formData.tipoInteresse}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border rounded-md bg-background text-base"
                      required
                    >
                      <option value="">Selecione uma opção</option>
                      <option value="palestra">Palestra</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="curso">Curso</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium mb-2">Mensagem:</label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="py-3"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full py-4 text-lg font-medium">
                    ENVIAR MENSAGEM
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultoria;