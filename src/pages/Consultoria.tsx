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
import { LazyImage } from "@/components/LazyImage";

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
      title: "Colégio Estadual Dom Luciano",
      participantes: "186",
      image: "/lovable-uploads/3a323486-a631-4952-9d0e-7af151ef7d0d.png"
    },
    {
      title: "Colégio Master",
      participantes: "31",
      image: "/lovable-uploads/4debd9a6-f178-447b-86f1-034a9c47ebc9.png"
    },
    {
      title: "SuperClass Itirapina e Brotas",
      participantes: "19",
      image: "/lovable-uploads/3e9a6853-41e4-4868-85a4-9e00dd89e8ba.png"
    },
    {
      title: "Instituto JCPM",
      participantes: "53",
      image: "/lovable-uploads/f28b235a-271a-4252-9cc8-aaa4125075e6.png"
    },
    {
      title: "Colégio Master",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-28 bg-gradient-to-br from-blue-500 via-green-500 to-yellow-400 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
        <div className="relative z-10 container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center text-white">
            <p className="text-lg md:text-xl font-medium mb-6 tracking-wide uppercase text-yellow-200">
              Consultor de IA Generativa
            </p>
            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
              VITOR YUJI
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-12 leading-relaxed text-yellow-200">
              O Primeiro Consultor de IA Generativa de Sergipe
            </h2>
            <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
              Aos 15 anos, já capacitei <strong className="text-yellow-200">+450 estudantes e profissionais</strong> em Inteligência Artificial na prática.
            </p>

            <div className="mb-16">
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-yellow-100 text-xl px-12 py-6 rounded-full font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                SOLICITAR PALESTRA / AGENDAR CONSULTORIA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibilidade Imediata */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-gray-900 tracking-tight">JÁ CAPACITEI</h2>
            
            <div className="relative">
              <Card className="p-8 bg-white shadow-2xl rounded-3xl border-0">
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
                     <h3 className="text-2xl font-bold text-gray-900 mb-4">
                       {capacitacoes[currentCapacitacao].title}
                     </h3>
                     <p className="text-lg text-gray-600">
                       <strong>Participantes:</strong> {capacitacoes[currentCapacitacao].participantes}
                     </p>
                   </div>
                </div>
              </Card>

              {/* Setas de Navegação */}
              <button
                onClick={prevCapacitacao}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              
              <button
                onClick={nextCapacitacao}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="w-6 h-6 text-gray-700" />
              </button>

              {/* Indicadores */}
              <div className="flex justify-center mt-6 space-x-2">
                {capacitacoes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentCapacitacao(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCapacitacao ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria Diferenciada */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 md:mb-24 text-gray-900 tracking-tight">
              ESSA NÃO É UMA CONSULTORIA CONVENCIONAL
            </h2>
            
            <Card className="p-10 md:p-16 bg-white shadow-2xl rounded-3xl border-0">
              <div className="space-y-6 md:space-y-8 text-lg md:text-2xl leading-relaxed text-gray-700 font-light">
                <p>
                  Uma boa consultoria não deveria ser com um profissional que consegue te dar uma palestra motivacional.
                </p>
                <p>
                  Deveria ser com um <strong className="text-blue-600 font-semibold">praticante</strong>, que está testando e implementando IA em seus projetos. Na vida real.
                </p>
                <p className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Vitor Yuji é exatamente isso.
                </p>
                <p className="text-center text-xl md:text-2xl">
                  Ele não é motivacional. É <strong className="text-yellow-600 font-semibold">acional</strong>.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Treinamentos */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-16 md:mb-24 text-center text-gray-900 tracking-tight">TREINAMENTOS</h2>
            
            <div className="mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-16 text-center text-gray-900">Conheça os temas</h3>
              
              {/* Carrossel de Treinamentos */}
              <div className="relative px-4">
                <div className="overflow-hidden rounded-xl">
                  <div className="transition-transform duration-500 ease-in-out"
                       style={{ transform: `translateX(-${currentTreinamento * 50}%)` }}>
                    <div className="flex gap-6">
                       {treinamentos.map((treinamento, index) => (
                         <div key={index} className="w-1/2 flex-shrink-0">
                           <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-green-500 to-yellow-400 border-0 text-white group hover:scale-[1.02] transition-all duration-300 shadow-2xl rounded-3xl h-[520px] flex flex-col">
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
                               <h4 className="text-xl font-bold mb-4 leading-tight">
                                 {treinamento.titulo}
                               </h4>
                               
                               <p className="text-sm leading-relaxed opacity-90 flex-grow font-light">
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
                     className="bg-white/95 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110"
                   >
                     <ChevronLeft className="w-6 h-6 text-gray-700" />
                   </button>
                   
                   <button
                     onClick={nextTreinamento}
                     className="bg-white/95 hover:bg-white shadow-xl rounded-full p-3 transition-all duration-300 transform hover:scale-110"
                   >
                     <ChevronRight className="w-6 h-6 text-gray-700" />
                   </button>
                 </div>
                
                 {/* Indicadores */}
                 <div className="flex justify-center mt-6 space-x-2">
                   {Array.from({ length: Math.ceil(treinamentos.length / 2) }).map((_, index) => (
                     <button
                       key={index}
                       onClick={() => setCurrentTreinamento(index * 2)}
                       className={`w-3 h-3 rounded-full transition-all duration-300 ${
                         Math.floor(currentTreinamento / 2) === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                       }`}
                     />
                   ))}
                 </div>
              </div>
            </div>


            <div className="text-center">
              <button 
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-xl px-12 py-6 rounded-full font-bold transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              >
                SOLICITAR PALESTRA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quem é Vitor Yuji */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 md:mb-24">
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight">
                QUEM É VITOR YUJI?
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-16 items-start">
              <div className="lg:col-span-3 space-y-10">
                {/* Mobile/Tablet: Show images after title, before text */}
                <div className="space-y-8 lg:hidden">
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <LazyImage src="/lovable-uploads/vitor-yuji-palestra-1.png" alt="Vitor Yuji palestrando para jovens" className="w-full h-80 object-contain bg-gray-50" />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <LazyImage src="/lovable-uploads/vitor-yuji-palestra-2.png" alt="Vitor Yuji com sua equipe e alunos" className="w-full h-80 object-contain bg-gray-50" />
                  </div>
                </div>
                
                <div className="space-y-10 text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
                  <p>
                    Vitor Yuji tem apenas 15 anos e já formou <strong className="text-green-600 font-semibold">+460 alunos</strong> através de projetos de IA, neurociência e sustentabilidade.
                  </p>
                  
                  <p>
                    Membro da <strong className="text-blue-600 font-semibold">Adapta.org</strong> - selecionado pessoalmente pelo CEO <strong className="text-blue-600 font-semibold">Max Peters</strong> para ser jovem aprendiz da maior startup de IA Generativa da América Latina.
                  </p>
                  
                  <p>
                    Co-fundador do <strong className="text-green-600 font-semibold">Mangue Mania</strong> - a primeira metodologia infantil de educação de manguezais de Sergipe, projeto <strong className="text-yellow-600 font-semibold">top30</strong> no prêmio nacional <strong className="text-green-600 font-semibold">Criativos Escola</strong>.
                  </p>
                  
                  <p>
                    Também foi <strong className="text-blue-600 font-semibold">3x competidor da First Lego League</strong>, um dos maiores torneios de robótica do mundo. Hoje é mentor das principais equipes sergipanas.
                  </p>
                </div>
              </div>

              {/* Desktop: Show images on the right side */}
              <div className="lg:col-span-2 space-y-8 hidden lg:block">
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <LazyImage src="/lovable-uploads/vitor-yuji-palestra-1.png" alt="Vitor Yuji palestrando para jovens" className="w-full h-72 object-contain bg-gray-50" />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <LazyImage src="/lovable-uploads/vitor-yuji-palestra-2.png" alt="Vitor Yuji com sua equipe e alunos" className="w-full h-72 object-contain bg-gray-50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 md:mb-24 text-gray-900 tracking-tight">PLANOS</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Introdução Gratuita */}
              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl rounded-3xl border-0 transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">Introdução Gratuita</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    O Mínimo de IA que você precisa saber (para não ficar pra trás)
                  </p>
                  <div className="text-3xl font-bold text-green-600">GRATUITO</div>
                  <button className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-bold transition-all duration-300">
                    ACESSAR AGORA
                  </button>
                </div>
              </Card>

              {/* Ebook Completo */}
              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl rounded-3xl border-0 transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">Ebook Completo</h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    Manual IA Para Todos
                  </p>
                  <div className="text-xl font-semibold text-blue-600">Sob consulta</div>
                  <button className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-bold transition-all duration-300">
                    CONHEÇA O MANUAL
                  </button>
                </div>
              </Card>

              {/* Consultoria Individual */}
              <Card className="p-8 bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-xl hover:shadow-2xl rounded-3xl border-0 transform hover:-translate-y-3 transition-all duration-500 border-2 border-yellow-400">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-bold">Consultoria Individual</h3>
                  <ul className="text-sm space-y-2 text-left leading-relaxed font-light">
                    <li>• Análise personalizada</li>
                    <li>• Implementação prática de IA</li>
                    <li>• Plano de ação específico</li>
                  </ul>
                  <div className="text-2xl font-bold text-yellow-200">R$ 150/hora</div>
                  <p className="text-xs opacity-90">(online)</p>
                  <button className="w-full py-3 px-6 bg-white text-blue-600 hover:bg-yellow-100 rounded-full font-bold transition-all duration-300">
                    Agendar Conversa
                  </button>
                </div>
              </Card>

              {/* Palestra Institucional */}
              <Card className="p-8 bg-white shadow-xl hover:shadow-2xl rounded-3xl border-0 transform hover:-translate-y-3 transition-all duration-500">
                <div className="text-center space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">Palestra Institucional</h3>
                  <ul className="text-sm text-gray-600 space-y-2 text-left leading-relaxed font-light">
                    <li>• Presencial em Sergipe</li>
                    <li>• Conteúdo adaptado</li>
                    <li>• Material de apoio exclusivo</li>
                  </ul>
                  <div className="text-xl font-semibold text-blue-600">Sob consulta</div>
                  <button className="w-full py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full font-bold transition-all duration-300">
                    Solicitar Orçamento
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gray-900 tracking-tight">CONTATO</h2>
            <p className="text-center text-xl md:text-2xl mb-16 text-gray-600 leading-relaxed font-light">
              Vamos conversar? Entre em contato e vamos descobrir como posso ajudar você ou sua instituição.
            </p>
            
            <div className="grid md:grid-cols-2 gap-16">
              {/* Informações de contato */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                  <span className="text-lg text-gray-700">WhatsApp: (Em breve)</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <Mail className="w-6 h-6 text-green-600" />
                  <span className="text-lg text-gray-700">contato.vitoryujiminomo@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <a href="https://linkedin.com/in/vitor-yuji-minomo" target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 hover:underline font-medium">
                    LinkedIn: Vitor Yuji Minomo
                  </a>
                </div>
              </div>

              {/* Formulário */}
              <Card className="p-8 bg-white shadow-2xl rounded-3xl border-0">
                <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Preencha o formulário abaixo:</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-base font-medium mb-2 text-gray-700">Nome:</label>
                    <Input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="py-3 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium mb-2 text-gray-700">Instituição/Empresa:</label>
                    <Input
                      type="text"
                      name="instituicao"
                      value={formData.instituicao}
                      onChange={handleInputChange}
                      className="py-3 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-base font-medium mb-2 text-gray-700">Tipo de interesse:</label>
                    <select
                      name="tipoInteresse"
                      value={formData.tipoInteresse}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-base focus:border-blue-500 focus:ring-blue-500"
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
                    <label className="block text-base font-medium mb-2 text-gray-700">Mensagem:</label>
                    <Textarea
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="py-3 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full py-4 text-lg font-bold bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    ENVIAR MENSAGEM
                  </button>
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