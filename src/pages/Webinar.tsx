import { Button } from "@/components/ui/button";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Check, Shield, Lock } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import webinarGravacao from "@/assets/webinar-gravacao.png";
import webinarWhatsapp from "@/assets/webinar-whatsapp.png";
import webinarManual from "@/assets/webinar-manual-novo.png";
import webinarBiblioteca from "@/assets/webinar-biblioteca-prompts.png";

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
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg px-10 py-6 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
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
        
        {/* Trusted By Section integrated */}
        <div className="container mx-auto max-w-6xl relative z-10 mt-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L12.5 7.5L18 8L14 12.5L15 18L10 15L5 18L6 12.5L2 8L7.5 7.5L10 2Z" fill="#22D3EE" />
            </svg>
            <p className="text-cyan-400 text-sm md:text-base">
              Sou o professor de IA escolhido por profissionais de empresas como
            </p>
          </div>
          
          <div className="relative flex justify-center overflow-hidden">
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
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            O QUE DIZEM OS ALUNOS DA 1ª TURMA:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
              <video 
                controls 
                className="w-full h-full object-cover"
                style={{ aspectRatio: '9/16' }}
              >
                <source src="/lovable-uploads/video-osvaldo-araki.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
            
            {[2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-lg p-8 aspect-video flex items-center justify-center border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
                <p className="text-gray-500 text-center">Vídeo {i}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              JÁ PALESTREI PARA MAIS DE 1000 PROFISSIONAIS.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-semibold">
              E antes de me procurarem, todos enfrentavam frustrações parecidas:
            </p>
          </div>
          
          <div className="space-y-4 mb-12">
            {[
              "Fiz um curso de IA muito teórico e saí sem saber como aplicar no meu trabalho",
              "Pago uma IA premium, mas ainda não sei usar direito",
              "Tenho muita dificuldade com tecnologia e queria alguém que me guie"
            ].map((problem, i) => (
              <div key={i} className="bg-white/5 border-l-4 border-yellow-400 p-6 rounded">
                <p className="text-gray-200 text-lg italic">"{problem}"</p>
              </div>
            ))}
          </div>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 font-semibold text-center">
            Você já sentiu uma ansiedade crescente cada vez que ouve falar sobre ChatGPT e outras IAs?
          </p>
          
          <p className="text-lg mb-8 text-gray-300 text-center">
            O problema é que a maioria dos cursos do mercado são teóricos, pouco práticos e sem alguém para tirar suas dúvidas, pegar na sua mão e te mostrar exatamente como fazer.
          </p>
          
          <div className="text-center mb-8">
            <div className="inline-block bg-white/10 border-2 border-gray-600 rounded-full px-8 py-4">
              <p className="text-xl md:text-2xl text-white font-semibold">
                Mas existe um jeito diferente.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 px-4 bg-white text-black overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-bold uppercase tracking-wide text-lg">Mecanismo da Solução</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-black">
              Como transformar sua "desvantagem" em vantagem competitiva
            </h2>
          </div>
          
          <p className="text-lg mb-6 text-gray-700">
            E se, em vez de correr atrás do prejuízo, você pudesse dar um salto à frente da maioria dos profissionais da sua área?
          </p>
          
          <p className="text-lg mb-6 text-gray-700">
            Eu fiz diversos cursos de IA. Testei dezenas de métodos de ensino na primeira edição do webinar e em palestras para mais de 1000 pessoas.
          </p>
          
          <p className="text-lg mb-6 font-bold text-cyan-500">
            Eliminei toda a teoria desnecessária e destilei apenas o que realmente funciona na prática.
          </p>
          
          <p className="text-lg mb-6 text-gray-700">
            E filtrei tudo de melhor nesse webinar.
          </p>
          
          <p className="text-lg mb-8 text-gray-700">
            Agora, estou reunindo a segunda turma de pessoas engajadas para mostrar como aplicar tudo isso no SEU trabalho.
          </p>
          
          <p className="text-xl font-bold text-cyan-500 mb-8">
            Esta é sua chance de estar entre os primeiros a dominar o que vai definir os próximos anos do mercado.
          </p>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] transition-all duration-300"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            O que você vai aprender?
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-xl p-10 border-l-4 border-cyan-400 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-black">
                Dia 1: O que é Inteligência Artificial <span className="text-yellow-500">19/11</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">5 princípios básicos para interagir com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Como usar o "Filtro da Verdade" para evitar respostas falsas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Como, quando e porque usar cada IA</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-10 border-l-4 border-cyan-400 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-black">
                Dia 2: Como criar Prompts Magnéticos <span className="text-yellow-500">26/11</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">A estrutura 3IAI para prompts perfeitos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Como criar um bom contexto</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">O maior erro que iniciantes cometem ao usar IAs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl p-10 border-l-4 border-cyan-400 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-6 text-black">
                Dia 3: As 5 Práticas da IA Generativa <span className="text-yellow-500">3/12</span>
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">Pesquisando artigos/jurisprudência com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">4 técnicas para ter ideias com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">4 técnicas para aprender com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">2 técnicas para gerir com IA</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-lg">6 técnicas para escrever com IA</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
            Por que fazer um Curso de ChatGPT?
          </h2>
          
          <p className="text-lg mb-6 text-gray-700">
            Uma vez que o mercado descobriu a agilidade e eficiência do ChatGPT, ele não vai retroceder.
          </p>
          
          <p className="text-lg mb-6 text-gray-700">
            Quando você domina a IA, você consegue concluir tarefas rapidamente, tomar decisões melhores e ter ideias inovadoras.
          </p>
          
          <p className="text-xl font-bold text-cyan-500">
            O resultado: Você se destaca porque redefine completamente sua forma de trabalhar, gerenciar e planejar.
          </p>
          
          <div className="text-center mt-8">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Por Que Este É o Melhor Webinar de IA do Brasil
          </h2>
          <p className="text-center text-lg text-gray-400 mb-12">
            Veja o que você vai receber assim que garantir sua vaga:
          </p>
          
          <p className="text-center text-xl font-semibold mb-12 text-gray-200">
            Ao escolher o webinar do Vitor Yuji, você se torna parte da segunda turma do melhor programa de webinars de IA do Brasil.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-cyan-400 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={webinarGravacao} 
                  alt="Gravações e mapas mentais" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold mb-4 text-black">
                  Gravações e mapas mentais
                </h3>
                <p className="text-gray-700 text-lg">
                  Se você não conseguir assistir a uma aula, não se preocupe! Todo o material será gravado em alta qualidade e você poderá acessar quando e quantas vezes quiser.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-cyan-400 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={webinarWhatsapp} 
                  alt="Grupo de WhatsApp" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold mb-4 text-black">
                  Grupo de WhatsApp
                </h3>
                <p className="text-gray-700 text-lg">
                  Você vai poder tirar dúvidas e fazer networking durante as aulas ao vivo, no grupo exclusivo da turma e mesmo após o webinar.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-cyan-400 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={webinarManual} 
                  alt="Manual IA Para Todos" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold mb-4 text-black">
                  Manual IA Para Todos
                </h3>
                <p className="text-gray-700 text-lg">
                  Tenha acesso gratuito ao seu guia de bolso de IA com glossário, frameworks e biblioteca de prompts para cada profissão.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-cyan-400 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={webinarBiblioteca} 
                  alt="Biblioteca de prompts" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold mb-4 text-black">
                  Biblioteca de prompts
                </h3>
                <p className="text-gray-700 text-lg">
                  Acesse uma coleção exclusiva de prompts personalizados para diferentes profissões, otimizando seu trabalho com IA.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] transition-all duration-300"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            O que dizem sobre o Webinar:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 border-2 border-cyan-400/50 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-700 italic mb-4 text-lg">"Depois da palestra, o ChatGPT começou a me entregar exatamente o que eu queria. Minhas amigas até dizem que meu ChatGPT é mais obediente que o delas kkkk."</p>
              <p className="font-semibold text-black">Gabriela Coelho</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 border-2 border-cyan-400/50 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-700 italic mb-4 text-lg">"Agora é uma ferramenta essencial pra mim. Mudou totalmente meu jeito de pesquisar e estudar."</p>
              <p className="font-semibold text-black">Arthur Lucena</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 border-2 border-cyan-400/50 hover:border-cyan-400 hover:shadow-xl transition-all duration-300">
              <p className="text-gray-700 italic mb-4 text-lg">"Estou muito satisfeito em ter feito parte do Beta desse webinar, que, com certeza, será um sucesso. Parabéns!"</p>
              <p className="font-semibold text-black">Bruno Correia</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="py-24 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Domine a IA em poucas horas
            </h2>
            <p className="text-xl text-gray-300">
              Em 6 horas, você pode integrar IA e ChatGPT para aumentar a sua produtividade e melhorar a qualidade do seu trabalho.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 md:p-10 text-gray-900 max-w-2xl mx-auto shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Webinar IA Para Todos
              </h3>
              <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full whitespace-nowrap flex items-center gap-1">
                🔥 Mais Escolhido | 75%OFF*
              </span>
            </div>
            
            <div className="space-y-3 mb-8">
              {[
                "Acesso completo aos 3 Dias ao Vivo",
                "Acesso à Comunidade no WhatsApp Exclusiva",
                "Acesso às Gravações e Mapas Mentais",
                "Manual IA Para Todos",
                "Biblioteca de Prompts por Profissão"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-left mt-8 mb-6">
              <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                <span className="text-3xl mr-0.5">12x</span>R$ 25<span className="text-base align-bottom">,55</span>
              </p>
              <p className="text-lg text-gray-600">ou R$ 247 à vista</p>
            </div>
            
            <div className="mb-6">
              <Button 
                asChild
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg px-12 py-6 rounded-lg w-full"
              >
                <a href="https://pay.hotmart.com/N100239403C?off=b9iztv2i" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Quero Adquirir Agora →
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="text-green-500" size={16} />
                <span>7 Dias de Garantia</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="text-green-500" size={16} />
                <span>Compra Segura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            "Mas porque ouvir um moleque de 14 anos falando sobre IA?"
          </h2>
          <h3 className="text-2xl font-bold text-center mb-12 text-cyan-500">
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
              <strong className="text-black">Vitor Yuji tem apenas 15 anos</strong> e já é referência em IA Generativa no Nordeste.
            </p>
            
            <ul className="space-y-4">
              <li>
                Foi selecionado pelo CEO Max Peters para ser jovem aprendiz da ADAPTA, a maior startup de IA do Brasil.
              </li>
              <li>
                Foi 4x competidor no torneio de robótica First Lego League.
              </li>
              <li>
                É co-fundador do Mangue Mania, a primeira metodologia ativa infantil sobre manguezais de Sergipe, com mais de 400 alunos impactados.
              </li>
              <li>
                Já palestrou sobre IA para instituições como Instituto JCPM, Colégio Master e Babylândia.
              </li>
              <li>
                É também músico no Movimento Escalada, um dos principais grupos de jovens cristãos do Nordeste.
              </li>
            </ul>
            
            <p>
              Desde então, vem transmitindo todo seu conhecimento que adquiriu nos últimos anos para milhares de pessoas, com a missão de tornar a IA acessível para todos.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            (F.A.Q) Restou alguma dúvida?
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Vai ter gravação?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Sim! Todas as aulas serão gravadas e ficarão disponíveis com os mapas mentais na área de membros da Hotmart.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Preciso saber de tecnologia?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Não. A linguagem é simples, sem jargões. Qualquer profissional consegue acompanhar.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Preciso instalar algo para participar dos encontros ao vivo?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Sim, os encontros acontecem via Zoom, então é importante ter ele instalado antes do primeiro dia.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Por que confiar em um jovem de 14 anos?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Vitor já palestrou para diversos públicos, criou projetos premiados e será membro da ADAPTA, uma das maiores empresas de IA da América Latina. Seu diferencial é ensinar IA de forma acessível para todos.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Existe garantia de satisfação?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Sim. Caso não fique satisfeito, você pode solicitar reembolso integral em até 7 dias após a compra pela plataforma da Hotmart.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
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
                className="text-cyan-400 hover:text-cyan-300 underline"
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
                className="text-cyan-400 hover:text-cyan-300 underline"
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
