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
  Linkedin
} from "lucide-react";
import { useState } from "react";

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

  const capacitacoes = [
    { local: "Colégio Estadual Dom Luciano", participantes: "+120" },
    { local: "Equipes de FLL do Colégio Master", participantes: "+30" },
    { local: "Escola SuperClass", participantes: "+40" },
    { local: "Instituto JCPM", participantes: "+60" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40"></div>
        
        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
                [[Consultor de IA Generativa]]
              </p>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                VITOR YUJI
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-8">
                O Primeiro Consultor de IA Generativa de Sergipe
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
                Aos 15 anos, já capacitei <strong className="text-primary">+450 estudantes e profissionais</strong> em Inteligência Artificial na prática.
              </p>
            </div>

            <div className="mb-12">
              <Button size="lg" className="text-lg px-8 py-6 mb-8">
                SOLICITAR PALESTRA / AGENDAR CONSULTORIA
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-2 text-muted-foreground">
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
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Essa não é uma consultoria convencional
            </h2>
            
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Uma boa consultoria não deveria ser com um profissional que consegue te dar uma palestra motivacional.
                </p>
                <p>
                  Deveria ser com um <strong className="text-primary">praticante</strong>, que está testando e implementando IA em seus projetos. Na vida real.
                </p>
                <p>
                  Vitor Yuji é exatamente isso.
                </p>
                <p className="text-xl font-semibold text-primary">
                  Ele não é motivacional. É acional.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Palestras */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Palestras</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-8">Temas Disponíveis:</h3>
              
              <div className="space-y-8">
                {palestras.map((categoria, index) => (
                  <Card key={index} className="p-6 bg-card border-border">
                    <h4 className="text-xl font-bold text-primary mb-4">{categoria.categoria}</h4>
                    <div className="space-y-3">
                      {categoria.temas.map((tema, temaIndex) => (
                        <div key={temaIndex} className="flex justify-between items-center">
                          <span className="text-foreground">{tema.titulo}</span>
                          <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                            {tema.duracao}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Já capacitei:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {capacitacoes.map((cap, index) => (
                  <Card key={index} className="p-4 bg-card border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{cap.local}</span>
                      <span className="text-primary font-bold">Participantes: {cap.participantes}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-4">
                SOLICITAR PALESTRA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem é Vitor Yuji */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Quem é Vitor Yuji</h2>
            
            <Card className="p-8 bg-card border-border">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  Vitor Yuji tem apenas 15 anos e já educou <strong className="text-primary">+660 alunos</strong> através de projetos de IA, neurociência e sustentabilidade.
                </p>
                
                <div className="space-y-4">
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
                
                <p className="text-xl font-semibold text-primary text-center mt-8">
                  E com uma missão clara: tornar a IA acessível para todos.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Planos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Introdução Gratuita */}
              <Card className="p-6 bg-card border-border">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-bold">Introdução Gratuita</h3>
                  <p className="text-sm text-muted-foreground">
                    O Mínimo de IA que você precisa saber (para não ficar pra trás)
                  </p>
                  <div className="text-2xl font-bold text-primary">GRATUITO</div>
                  <Button variant="outline" className="w-full">
                    ACESSAR AGORA
                  </Button>
                </div>
              </Card>

              {/* Ebook Completo */}
              <Card className="p-6 bg-card border-border">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-bold">Ebook Completo</h3>
                  <p className="text-sm text-muted-foreground">
                    Manual IA Para Todos
                  </p>
                  <div className="text-lg font-semibold text-primary">Sob consulta</div>
                  <Button variant="outline" className="w-full">
                    CONHEÇA O MANUAL
                  </Button>
                </div>
              </Card>

              {/* Consultoria Individual */}
              <Card className="p-6 bg-card border-border border-primary/50">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-bold">Consultoria Individual</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Análise personalizada</li>
                    <li>• Implementação prática de IA</li>
                    <li>• Plano de ação específico</li>
                  </ul>
                  <div className="text-xl font-bold text-primary">R$ 150/hora</div>
                  <p className="text-xs text-muted-foreground">(online)</p>
                  <Button className="w-full">
                    Agendar Conversa
                  </Button>
                </div>
              </Card>

              {/* Palestra Institucional */}
              <Card className="p-6 bg-card border-border">
                <div className="text-center space-y-4">
                  <h3 className="text-lg font-bold">Palestra Institucional</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Presencial em Sergipe</li>
                    <li>• Conteúdo adaptado</li>
                    <li>• Material de apoio exclusivo</li>
                  </ul>
                  <div className="text-lg font-semibold text-primary">Sob consulta</div>
                  <Button variant="outline" className="w-full">
                    Solicitar Orçamento
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contato</h2>
            <p className="text-center text-xl mb-12 text-muted-foreground">
              Vamos conversar? Entre em contato e vamos descobrir como posso ajudar você ou sua instituição.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Informações de contato */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>WhatsApp: (Em breve)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>contato.vitoryujiminomo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-primary" />
                  <a href="https://linkedin.com/in/vitor-yuji-minomo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    LinkedIn: Vitor Yuji Minomo
                  </a>
                </div>
              </div>

              {/* Formulário */}
              <Card className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold mb-4 text-center">Preencha o formulário abaixo:</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Nome:</label>
                    <Input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Instituição/Empresa:</label>
                    <Input
                      type="text"
                      name="instituicao"
                      value={formData.instituicao}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Tipo de interesse:</label>
                    <select
                      name="tipoInteresse"
                      value={formData.tipoInteresse}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
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
                    <label className="block text-sm font-medium mb-1">Mensagem:</label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    ENVIAR MENSAGEM
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simples */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-primary">VITOR YUJI</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Consultor de IA Generativa • Tornando a IA acessível para todos
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Consultoria;