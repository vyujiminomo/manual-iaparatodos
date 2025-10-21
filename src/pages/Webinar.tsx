import { Button } from "@/components/ui/button";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Check } from "lucide-react";

const Webinar = () => {
  useDynamicMeta({
    title: "Webinar IA Para Todos 2 - Vitor Yuji",
    description: "Vá do zero ao avançado em IA em apenas 3 dias. Webinar ao vivo com Vitor Yuji.",
    image: "/lovable-uploads/webinar-logo-1.png"
  });

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 px-4 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="inline-block mb-6">
                <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider border border-teal-400/30 px-4 py-2 rounded-full">
                  Curso de IA
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Webinar IA Para Todos
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
                Vá do zero ao avançado em IA, com a mentoria ao vivo avaliada em média 5/5 pelos alunos - 3 encontros, suporte 24/7 e networking.
              </p>
              
              <Button 
                onClick={scrollToOffer}
                className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold text-lg px-10 py-6 rounded-full transition-all duration-300"
              >
                QUERO FAZER PARTE →
              </Button>
            </div>
            
            {/* Right side - Logo */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="bg-white p-4 rounded-xl shadow-[0_8px_32px_rgba(255,255,255,0.15)]">
                <img 
                  src="/lovable-uploads/webinar-logo-main.png" 
                  alt="Webinar Inteligência Artificial Para Todos" 
                  className="w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section with Scrolling Logos */}
      <section className="relative bg-gray-900 text-white py-16 px-4 overflow-hidden border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2L12.5 7.5L18 8L14 12.5L15 18L10 15L5 18L6 12.5L2 8L7.5 7.5L10 2Z" fill="#14B8A6" />
              </svg>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Sou o professor de IA escolhido por profissionais de empresas como
            </p>
          </div>
          
          <div className="relative">
            <div className="flex gap-12 animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
              {/* First set of logos */}
              <div className="flex gap-12 items-center shrink-0">
                <img src="/lovable-uploads/escola-superclass.png" alt="SuperClass" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/colegio-master-fll.jpg" alt="Colégio Master" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/instituto-jcpm.png" alt="Instituto JCPM" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/escola-dom-luciano.jpeg" alt="Escola Dom Luciano" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-12 items-center shrink-0">
                <img src="/lovable-uploads/escola-superclass.png" alt="SuperClass" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/colegio-master-fll.jpg" alt="Colégio Master" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/instituto-jcpm.png" alt="Instituto JCPM" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/escola-dom-luciano.jpeg" alt="Escola Dom Luciano" className="h-12 opacity-60 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            O QUE DIZEM OS ALUNOS DA 1ª TURMA:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 aspect-video flex items-center justify-center border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
                <p className="text-gray-500 text-center">Vídeo {i}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToOffer}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            >
              Quero Fazer Parte
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-bold uppercase tracking-wide">Mecanismo do Problema</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-900">
              Por Que a Maioria dos Profissionais Falha ao Tentar Usar IA no Trabalho
            </h2>
          </div>
          
          <p className="text-lg mb-8 text-gray-700">
            Eu já fiz palestras e consultorias de IA para mais de 1000 pessoas.
          </p>
          
          <p className="text-lg mb-8 text-gray-700">
            E a maioria dos alunos que recebi vinham com esses problemas:
          </p>
          
          <div className="space-y-4 mb-8">
            {[
              "Já fiz um curso de IA, mas achei teórico demais e saí sem saber o que fazer",
              "Eu assinei uma IA premium, mas os resultados ainda não foram como eu esperava",
              "Sou muito leigo com tecnologia, e preciso de alguém que me guie no que fazer"
            ].map((problem, i) => (
              <div key={i} className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-gray-800">"{problem}"</p>
              </div>
            ))}
          </div>
          
          <p className="text-lg mb-6 text-gray-700">
            Você já se perguntou por que, mesmo sendo um profissional experiente, sente aquela ansiedade crescente cada vez que ouve falar de ChatGPT, Gemini ou outras IAs?
          </p>
          
          <p className="text-xl font-bold text-red-600 mb-4">
            O problema é que a grande maioria dos materiais sobre IA são teóricos e pouco práticos.
          </p>
          
          <p className="text-lg text-gray-700">
            Mas não precisa ser assim.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-bold uppercase tracking-wide text-lg">Mecanismo da Solução</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Como transformar sua "desvantagem" em vantagem competitiva
            </h2>
          </div>
          
          <p className="text-lg mb-6">
            E se, em vez de correr atrás do prejuízo, você pudesse dar um salto à frente da maioria dos profissionais da sua área?
          </p>
          
          <p className="text-lg mb-6">
            Eu fiz diversos cursos de IA. Testei dezenas de métodos de ensino na primeira edição do webinar e em palestras para mais de 1000 pessoas.
          </p>
          
          <p className="text-lg mb-6 font-bold text-yellow-300">
            Eliminei toda a teoria desnecessária e destilei apenas o que realmente funciona na prática.
          </p>
          
          <p className="text-lg mb-6">
            E filtrei tudo de melhor nesse webinar.
          </p>
          
          <p className="text-lg mb-8">
            Agora, estou reunindo a segunda turma de pessoas engajadas para mostrar como aplicar tudo isso no SEU trabalho.
          </p>
          
          <p className="text-xl font-bold text-yellow-300 mb-8">
            Esta é sua chance de estar entre os primeiros a dominar o que vai definir os próximos anos do mercado.
          </p>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] transition-all duration-300"
            >
              Quero Fazer Parte
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            O que você vai aprender?
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-10 border-l-4 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Dia 1: O que é Inteligência Artificial <span className="text-yellow-500">19/11</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">5 princípios básicos para interagir com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Como usar o "Filtro da Verdade" para evitar respostas falsas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Como, quando e porque usar cada IA</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-10 border-l-4 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Dia 2: Como criar Prompts Magnéticos <span className="text-yellow-500">26/11</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">A estrutura 3IAI para prompts perfeitos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Como criar um bom contexto</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">O maior erro que iniciantes cometem ao usar IAs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-10 border-l-4 border-yellow-400 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Dia 3: As 5 Práticas da IA Generativa <span className="text-yellow-500">3/12</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Pesquisando artigos/jurisprudência com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">4 técnicas para ter ideias com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">4 técnicas para aprender com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">2 técnicas para gerir com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">6 técnicas para escrever com IA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Por que fazer um Curso de ChatGPT?
          </h2>
          
          <p className="text-lg mb-6 text-gray-700">
            Uma vez que o mercado descobriu a agilidade e eficiência do ChatGPT, ele não vai retroceder.
          </p>
          
          <p className="text-lg mb-6 text-gray-700">
            Quando você domina a IA, você consegue concluir tarefas rapidamente, tomar decisões melhores e ter ideias inovadoras.
          </p>
          
          <p className="text-xl font-bold text-blue-600">
            O resultado: Você se destaca porque redefine completamente sua forma de trabalhar, gerenciar e planejar.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Por Que Este É o Melhor Webinar de IA do Brasil
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Veja o que você vai receber assim que garantir sua vaga:
          </p>
          
          <p className="text-center text-xl font-semibold mb-12 text-gray-800">
            Ao escolher o webinar do Vitor Yuji, você se torna parte da segunda turma do melhor programa de webinars de IA do Brasil.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-xl p-10 border-t-4 border-yellow-400 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Acesso vitalício às gravações e mapas mentais
              </h3>
              <p className="text-gray-700 text-lg">
                Se você não conseguir assistir a uma aula, não se preocupe! Todo o material será gravado em alta qualidade e você poderá acessar quando e quantas vezes quiser.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-10 border-t-4 border-yellow-400 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Grupo de WhatsApp Exclusivo (Suporte 24/7)
              </h3>
              <p className="text-gray-700 text-lg">
                Você vai ter minha ajuda 24/7 para tirar dúvidas durante as aulas ao vivo, no grupo exclusivo da turma e mesmo após o webinar. Além disso, o grupo é uma ótima forma de fazer networking com outros profissionais que estão na mesma jornada que você.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-10 border-t-4 border-yellow-400 md:col-span-2 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Manual IA Para Todos completo
              </h3>
              <p className="text-gray-700 text-lg">
                Tenha acesso gratuito ao seu guia de bolso de IA com glossário, frameworks e biblioteca de prompts para cada profissão.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] transition-all duration-300"
            >
              Quero Fazer Parte
            </Button>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            O que dizem do Webinar:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 border-2 border-yellow-400/30 hover:border-yellow-400/60 hover:shadow-xl transition-all duration-300">
                <p className="text-gray-700 italic mb-4 text-lg">"Depoimento {i}"</p>
                <p className="font-semibold text-gray-900">Nome do Aluno</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-yellow-400 font-bold uppercase tracking-wide text-xl drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Oferta</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4">
              Domine a IA em poucas horas
            </h2>
            <p className="text-xl text-gray-200">
              Em 6 horas, você pode integrar IA e ChatGPT para aumentar a sua produtividade e melhorar a qualidade do seu trabalho.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border-2 border-yellow-400 mb-10 shadow-[0_0_40px_rgba(250,204,21,0.3)]">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">
              Webinar IA Para Todos - 2ª turma
            </h3>
            <p className="text-center text-lg mb-8">
              Dias 19/11, 26/11 e 3/12, às 19h
            </p>
            
            <div className="space-y-3 mb-8">
              <p className="text-lg">Valor de cada um dos produtos incluídos nesta oferta:</p>
              {[
                { item: "3 dias ao vivo", value: "R$ 450" },
                { item: "Comunidade no WhatsApp exclusiva", value: "R$ 100" },
                { item: "Biblioteca de prompts para cada profissão", value: "R$ 80" },
                { item: "Acesso vitalício às gravações e mapas mentais", value: "R$ 170" },
                { item: "Manual IA Para Todos completo (assim que for lançado)", value: "R$ 100" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span>{item.item}</span>
                  <span className="font-semibold">({item.value})</span>
                </div>
              ))}
            </div>
            
            <div className="border-t-2 border-yellow-400 pt-4 mb-8">
              <p className="text-2xl font-bold text-center">VALOR TOTAL: R$ 900</p>
            </div>
            
            <p className="text-xl text-center mb-6 text-gray-200">
              Mas adquirindo hoje o Webinar IA Para Todos, você não vai pagar nem perto disso…
            </p>
            
            <div className="text-center mb-8">
              <p className="text-5xl font-bold text-yellow-400 mb-2">12x R$ 25,55</p>
              <p className="text-2xl text-gray-200">ou R$ 247 à vista</p>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={scrollToOffer}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-xl px-16 py-8 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.6)] hover:shadow-[0_0_50px_rgba(250,204,21,0.8)] transition-all duration-300 transform hover:scale-105"
              >
                QUERO ADQUIRIR AGORA
              </Button>
            </div>
          </div>
          
          <div className="bg-yellow-50 rounded-xl p-8 text-gray-900">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Garantia incondicional de satisfação
            </h3>
            <p className="text-center">
              Pra você se sentir ainda mais seguro(a), a lei te oferece uma garantia total de 7 dias. Se durante esse período você sentir que o manual não é pra você, é só seguir o passo a passo através da plataforma da Hotmart e a plataforma devolve cada centavo do seu investimento, sem burocracia ou letras miúdas.
            </p>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            "Mas porque ouvir um moleque de 14 anos falando sobre IA?"
          </h2>
          <h3 className="text-2xl font-bold text-center mb-12 text-blue-600">
            Quem é Vitor Yuji:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <img 
                src="/lovable-uploads/vitor-yuji-palestra-2.png" 
                alt="Vitor Yuji apresentando" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <img 
                src="/lovable-uploads/vitor-yuji-palestra-1.png" 
                alt="Vitor Yuji com alunos" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 mb-8">
            <p>
              <strong>Vitor Yuji tem apenas 15 anos</strong> e já é referência em IA Generativa no Nordeste.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <span>Foi selecionado pelo CEO Max Peters para ser jovem aprendiz da ADAPTA, a maior startup de IA do Brasil.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <span>Foi 4x competidor no torneio de robótica First Lego League.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <span>É co-fundador do Mangue Mania, a primeira metodologia ativa infantil sobre manguezais de Sergipe, com mais de 400 alunos impactados.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <span>Já palestrou sobre IA para instituições como Instituto JCPM, Colégio Master e Babylândia.</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                <span>É também músico no Movimento Escalada, um dos principais grupos de jovens cristãos do Nordeste.</span>
              </li>
            </ul>
            
            <p>
              Desde então, vem transmitindo todo seu conhecimento que adquiriu nos últimos anos para milhares de pessoas, com a missão de tornar a IA acessível para todos.
            </p>
            
            <p className="font-bold text-xl text-blue-600">
              Mas sabe o que mais o motiva? Compartilhar tudo o que aprendi de forma acessível.
            </p>
            
            <p>
              Enquanto muitos cursos de IA te cobram mais de R$2000 para te prender em linguagem técnica chata, eu ainda posso te oferecer algo mais próximo e humano.
            </p>
            
            <p>
              Por isso, criei o Webinar IA Para Todos.
            </p>
            
            <p className="italic">
              Em breve, estarei entrando oficialmente no time da ADAPTA, e vai ficar mais difícil manter esse contato direto.
            </p>
            
            <p className="font-semibold">
              Você não precisa disso, mas essa é a oportunidade que eu adoraria ter tido quando comecei.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 py-6 rounded-full"
            >
              Quero Fazer Parte
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            (F.A.Q) Restou alguma dúvida?
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Vai ter gravação?",
                a: "Sim! Todas as aulas serão gravadas e ficarão disponíveis com os mapas mentais na área de membros da Hotmart."
              },
              {
                q: "Preciso saber de tecnologia?",
                a: "Não. A linguagem é simples, sem jargões. Qualquer profissional consegue acompanhar."
              },
              {
                q: "Preciso instalar algo para participar dos encontros ao vivo?",
                a: "Sim, os encontros acontecem via Zoom, então é importante ter ele instalado antes do primeiro dia."
              },
              {
                q: "Por que confiar em um jovem de 14 anos?",
                a: "Vitor já palestrou para diversos públicos, criou projetos premiados e será membro da ADAPTA, uma das maiores empresas de IA da América Latina. Seu diferencial é ensinar IA de forma acessível para todos."
              },
              {
                q: "Existe garantia de satisfação?",
                a: "Sim. Caso não fique satisfeito, você pode solicitar reembolso integral em até 7 dias após a compra pela plataforma da Hotmart."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 border-l-2 border-yellow-400 hover:shadow-xl hover:border-l-4 transition-all duration-300">
                <h3 className="font-bold text-xl mb-3 text-gray-900">{faq.q}</h3>
                <p className="text-gray-700 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-6">
            IA Para Todos. Ferramentas para trabalhar com mais inteligência.
          </h3>
          
          <div className="space-y-4">
            <p className="text-lg font-semibold">Contato:</p>
            <p>
              <strong>E-mail:</strong>{" "}
              <a 
                href="mailto:contato.vitoryujiminomo@gmail.com" 
                className="text-blue-400 hover:text-blue-300 underline"
              >
                contato.vitoryujiminomo@gmail.com
              </a>
            </p>
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a 
                href="https://www.linkedin.com/in/vitor-yuji-minomo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Vitor Yuji Minomo
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Webinar;
