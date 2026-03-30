import { useState } from "react";
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
import LeadCaptureModal from "@/components/LeadCaptureModal";
import GiftPopup from "@/components/GiftPopup";

const Webinar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [giftPopupOpen, setGiftPopupOpen] = useState(false);
  const [showConsultoria, setShowConsultoria] = useState(false);
  const [selectedCheckoutUrl, setSelectedCheckoutUrl] = useState("");
  const [selectedLeadType, setSelectedLeadType] = useState<"online" | "presencial">("online");
  const [isBonus, setIsBonus] = useState(false);

  useDynamicMeta({
    title: "Imersão IA Para Todos 2 - Vitor Yuji",
    description: "Vá do zero ao avançado em IA em apenas 4 dias. Imersão ao vivo com Vitor Yuji.",
    image: "/lovable-uploads/webinar-og-image.png"
  });

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = (checkoutUrl: string, type: "online" | "presencial", bonus = false) => {
    setSelectedCheckoutUrl(checkoutUrl);
    setSelectedLeadType(type);
    setIsBonus(bonus);
    setModalOpen(true);
  };

  const handleClosedWithoutSubmit = () => {
    setGiftPopupOpen(true);
  };

  const handleClaimGift = () => {
    setShowConsultoria(true);
    // Scroll to consultoria after a short delay
    setTimeout(() => {
      const el = document.getElementById('consultoria-vitor');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-12 md:py-20 px-4 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Top credibility bar */}
          <p className="text-center text-sm md:text-base text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
            O Garoto de 15 anos selecionado como Jovem Aprendiz da <span className="text-teal-400 font-semibold">Maior Empresa de IA da América Latina</span> Apresenta:
          </p>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left w-full">
              <div className="flex flex-col gap-3 mb-6 items-center lg:items-start">
                <span className="inline-flex items-center gap-2 bg-gray-900/50 border-2 border-yellow-400/60 text-yellow-400 font-bold text-sm md:text-base px-5 py-2.5 rounded-lg shadow-lg animate-pulse">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  15, 22, 29 de Abril e 6 de Maio 2026
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Imersão IA Para Todos
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8">
                O melhor método para aprender IA: mentoria em grupo, suporte e linguagem simples.
              </p>
              
              <Button 
                onClick={scrollToOffer}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base md:text-lg px-8 md:px-10 py-7 md:py-6 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] w-full md:w-auto"
              >
                QUERO FAZER PARTE →
              </Button>
            </div>
            
            {/* Logo - Mobile (appears below text) and Desktop (appears on right) */}
            <div className="flex justify-center items-center w-full lg:order-none order-first lg:mt-0 -mt-4">
              <div className="max-w-[320px] md:max-w-md lg:max-w-lg w-full border-2 border-white/30 rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/imersao-logo.png" 
                  alt="Imersão Inteligência Artificial Para Todos 2" 
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted By Section integrated */}
        <div className="container mx-auto max-w-6xl relative z-10 mt-12 md:mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-8 md:mb-10 px-4">
            <svg width="20" height="20" className="md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L12.5 7.5L18 8L14 12.5L15 18L10 15L5 18L6 12.5L2 8L7.5 7.5L10 2Z" fill="#22D3EE" />
            </svg>
            <p className="text-cyan-400 text-sm md:text-base lg:text-xl font-medium text-center">
              Sou o professor de IA escolhido por profissionais de empresas como
            </p>
          </div>
          
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 md:gap-20 lg:gap-24 animate-scroll hover:animate-scroll-slow w-max">
              {/* First set of logos */}
              <div className="flex gap-6 md:gap-20 lg:gap-24 items-center shrink-0">
                <img src="/lovable-uploads/logo-empresa-1.png" alt="Empresa 1" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-empresa-2.png" alt="Master" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-empresa-3.png" alt="Empresa 3" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-empresa-5.png" alt="Empresa 5" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-empresa-6.png" alt="ProSolar" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-suzuki.png" alt="Suzuki" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 md:gap-20 lg:gap-24 items-center shrink-0">
                <img src="/lovable-uploads/logo-empresa-1.png" alt="Empresa 1" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-empresa-2.png" alt="Master" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-empresa-3.png" alt="Empresa 3" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-empresa-5.png" alt="Empresa 5" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-empresa-6.png" alt="ProSolar" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src="/lovable-uploads/logo-suzuki.png" alt="Suzuki" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
            O QUE DIZEM OS ALUNOS DA 1ª TURMA:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '9/16' }}
              >
                <source src="/lovable-uploads/video-osvaldo-araki.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '9/16' }}
              >
                <source src="/lovable-uploads/video-max-2.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
            
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
              <video 
                controls 
                preload="metadata"
                className="w-full h-full object-cover"
                style={{ aspectRatio: '9/16' }}
              >
                <source src="/lovable-uploads/video-karina.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 md:px-12 py-7 md:py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] w-full md:w-auto"
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
            <h2 className="text-3xl font-bold mb-8 text-white font-sans md:text-2xl">
              Você não é 'velho demais' pra tecnologia (só estava aprendendo do jeito errado)
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              Talvez você já tenha tentado uma dessas coisas:
            </p>
          </div>
          
          <div className="space-y-8 mb-12">
            <div className="bg-white/5 border-l-4 border-yellow-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Aprender sozinho?</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Mexeu no ChatGPT, conversou um pouco, achou que tava bom. Mas até agora, não teve nenhuma 'grande mudança' na produtividade e trabalho.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-yellow-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Curso Gravado?</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Comprou um curso online. Confuso, técnico demais, e quando travou... não tinha ninguém pra ajudar.
              </p>
            </div>

            <div className="bg-white/5 border-l-4 border-yellow-400 p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400 mb-4">Pedir ajuda?</h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Ligou pro filho, pro estagiário. Mas na próxima dificuldade, sente vergonha de pedir ajuda de novo. E aquele sentimento também: <span className="text-white font-semibold italic">"Sou velho demais pra isso".</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black">
            Depois de 3 anos estudando IA, criei um 'Método Único' para aprender IA
          </h2>
          
          <p className="text-lg md:text-xl mb-10 text-gray-700 text-center">
            E se existisse um jeito tão fácil pra aprender IA que até quem tem dificuldade com tecnologia conseguisse usar como um parceiro de verdade?
          </p>
          
          <p className="text-lg mb-12 text-gray-700 text-center">
            Depois de 3 anos estudando, mentoria com CEO da Adapta, palestras pra +500 pessoas... criei um método perfeito:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-12 max-w-6xl mx-auto px-4 md:px-0">
            <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-6">
                <svg className="w-10 h-10 md:w-16 md:h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">Mentoria em Grupo</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Aulas ao vivo. Dúvidas respondidas na hora. Networking. Grupo no WhatsApp.
              </p>
            </div>
            
            <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-6">
                <svg className="w-10 h-10 md:w-16 md:h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">Aulas Dinâmicas</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Linguagem simples. Aulas divertidas. Eu tenho 15 anos... você acha mesmo que eu gosto de jargão técnico?
              </p>
            </div>
            
            <div className="bg-white rounded-lg md:rounded-2xl p-4 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center mb-3 md:mb-6">
                <svg className="w-10 h-10 md:w-16 md:h-16 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-gray-900">Prática Imediata</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                A gente testa junto no ChatGPT durante a aula.
              </p>
            </div>
          </div>
          
          
          <p className="text-xl font-bold text-cyan-500 mb-8 text-center">
            Esta é sua chance de estar entre os que vão dominar o que vai definir os próximos anos do mercado.
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

      {/* Comparison Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Porque a Imersão é MELHOR que qualquer outro curso?
          </h2>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Header */}
            <div className="bg-gray-800 rounded-xl p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-400">CURSO ONLINE</h3>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-xl p-4 md:p-6 text-center">
              <h3 className="text-lg md:text-xl font-bold text-white">IMERSÃO IA PARA TODOS</h3>
            </div>

            {/* Row 1 */}
            <div className="bg-gray-800/60 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-gray-400 text-sm md:text-base">Vídeo gravado</p>
            </div>
            <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-teal-300 font-semibold text-sm md:text-base">Ao vivo (presencial ou online) + gravações</p>
            </div>

            {/* Row 2 */}
            <div className="bg-gray-800/60 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-gray-400 text-sm md:text-base">Você fica com dúvidas</p>
            </div>
            <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-teal-300 font-semibold text-sm md:text-base">Professor 'pega na mão' e te ajuda</p>
            </div>

            {/* Row 3 */}
            <div className="bg-gray-800/60 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-gray-400 text-sm md:text-base">Técnico e foco em programação</p>
            </div>
            <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-teal-300 font-semibold text-sm md:text-base">Linguagem simples e aulas dinâmicas</p>
            </div>

            {/* Row 4 */}
            <div className="bg-gray-800/60 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-gray-400 text-sm md:text-base">Excesso de teoria</p>
            </div>
            <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-teal-300 font-semibold text-sm md:text-base">Prática no seu trabalho</p>
            </div>

            {/* Row 5 */}
            <div className="bg-gray-800/60 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-gray-400 text-sm md:text-base">Sozinho</p>
            </div>
            <div className="bg-teal-900/30 border border-teal-500/30 rounded-lg p-4 md:p-5 flex items-center justify-center text-center">
              <p className="text-teal-300 font-semibold text-sm md:text-base">Grupo de profissionais</p>
            </div>
          </div>

          <div className="text-center mt-12">
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
            Cronograma das aulas
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-black">
                Dia 1: O que é Inteligência Artificial <span className="text-amber-600 font-semibold text-sm md:text-lg block md:inline mt-1 md:mt-0">(15/04/2026 - Quarta, 19h)</span>
              </h3>
              <ul className="space-y-2 md:space-y-3 text-gray-700">
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">5 princípios básicos para interagir com IA</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">Como usar o "Filtro da Verdade" para evitar respostas falsas</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">Como, quando e porque usar cada IA</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-black">
                Dia 2: Como criar Prompts Magnéticos <span className="text-amber-600 font-semibold text-sm md:text-lg block md:inline mt-1 md:mt-0">(22/04/2026 - Quarta, 19h)</span>
              </h3>
              <ul className="space-y-2 md:space-y-3 text-gray-700">
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">A estrutura 3IAI para prompts perfeitos</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">Como criar um bom contexto</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">O maior erro que iniciantes cometem ao usar IAs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-black">
                Dia 3: As 5 Práticas da IA Generativa <span className="text-amber-600 font-semibold text-sm md:text-lg block md:inline mt-1 md:mt-0">(29/04/2026 - Quarta, 19h)</span>
              </h3>
              <ul className="space-y-2 md:space-y-3 text-gray-700">
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">Pesquisando artigos e jurisprudência com IA</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">4 técnicas para ter ideias com IA</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">4 técnicas para aprender com IA</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">2 técnicas para gerir com IA</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">6 técnicas para escrever com IA</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-4 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-black">
                Dia 4: Tira Dúvidas e Práticas no Seu Trabalho <span className="text-amber-600 font-semibold text-sm md:text-lg block md:inline mt-1 md:mt-0">(06/05/2026 - Quarta, 19h)</span>
              </h3>
              <ul className="space-y-2 md:space-y-3 text-gray-700">
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">Exemplos reais dos alunos</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">Sessão de dúvidas ao vivo</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                  <span className="text-sm md:text-lg">Resumão de toda a imersão</span>
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
            Por Que Esta É a Melhor Imersão de IA do Brasil
          </h2>
          <p className="text-center text-lg text-gray-400 mb-12">
            Veja o que você vai receber assim que garantir sua vaga:
          </p>
          
          <p className="text-center text-xl font-semibold mb-12 text-gray-200">
            Ao escolher a imersão do Vitor Yuji, você se torna parte da segunda turma do melhor programa de imersão de IA do Brasil.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-cyan-400 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
              <div className="w-full h-64 overflow-hidden">
                <img 
                  src={webinarGravacao} 
                  alt="Gravações e mapas mentais" 
                  className="w-full h-full object-cover object-right"
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
                  className="w-full h-full object-cover object-left"
                />
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold mb-4 text-black">
                  Grupo de WhatsApp
                </h3>
                <p className="text-gray-700 text-lg">
                  Você vai poder tirar dúvidas e fazer networking durante as aulas ao vivo, no grupo exclusivo da turma e mesmo após a imersão.
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
            O que dizem sobre a Imersão:
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
              <p className="text-gray-700 italic mb-4 text-lg">"Estou muito satisfeito em ter feito parte do Beta dessa imersão, que, com certeza, será um sucesso. Parabéns!"</p>
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
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Domine a IA em poucas horas
            </h2>
            <p className="text-xl text-gray-300">
              Em 6 horas, você pode integrar IA e ChatGPT para aumentar a sua produtividade e melhorar a qualidade do seu trabalho.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Online Option */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-gray-900 shadow-2xl flex flex-col">
              <div className="flex flex-col gap-3 mb-6">
                <h3 className="text-xl md:text-2xl font-bold">
                  Imersão Online
                </h3>
                <span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit">
                  Ao Vivo via Zoom
                </span>
              </div>
              
              <div className="space-y-3 mb-8 flex-1">
                {[
                  "Acesso completo aos 4 Dias ao Vivo",
                  "Acesso à Comunidade no WhatsApp Exclusiva",
                  "Acesso às Gravações e Mapas Mentais",
                  "Manual IA Para Todos",
                  "Biblioteca de Prompts por Profissão"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-sm md:text-base text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-left mb-6">
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  <span className="text-2xl mr-0.5">12x</span>R$ 25<span className="text-sm align-bottom">,55</span>
                </p>
                <p className="text-base text-gray-600">ou R$ 247 à vista</p>
              </div>
              
              <Button 
                onClick={() => handleCtaClick("https://pay.hotmart.com/N100239403C?off=b9iztv2i", "online")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-6 rounded-lg w-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] mb-4"
              >
                Quero Fazer Parte →
              </Button>

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

            {/* Presencial Option */}
            <div className="bg-white rounded-2xl p-6 md:p-8 text-gray-900 shadow-2xl border-2 border-yellow-400 relative flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-red-500 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap flex items-center gap-2">
                  🔥 Mais Escolhido | Apenas 50 vagas
                </span>
              </div>

              <div className="flex flex-col gap-3 mb-6 mt-2">
                <h3 className="text-xl md:text-2xl font-bold">
                  Imersão Presencial
                </h3>
                <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1.5 rounded-full w-fit">
                  📍 Casa Gambiarra, Jardins — Aracaju
                </span>
              </div>
              
              <div className="space-y-3 mb-8 flex-1">
                {[
                  "Tudo da versão Online incluído",
                  "Aulas presenciais com outros profissionais",
                  "Momento prático exclusivo pós-aula",
                  "Coffee Break incluso",
                  "Networking presencial",
                  "Grupo de WhatsApp exclusivo presencial"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-sm md:text-base text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-left mb-6">
                <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                  <span className="text-2xl mr-0.5">12x</span>R$ 29<span className="text-sm align-bottom">,68</span>
                </p>
                <p className="text-base text-gray-600">ou R$ 287 à vista</p>
              </div>
              
              <Button 
                onClick={() => handleCtaClick("https://pay.hotmart.com/H104969759G?off=xs1ta97u", "presencial")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-6 rounded-lg w-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] mb-4"
              >
                Quero Fazer Parte →
              </Button>

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
        </div>
      </section>

      {/* Consultoria Section - only visible after gift claim */}
      {showConsultoria && (
        <section id="consultoria-vitor" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 text-sm font-bold px-4 py-2 rounded-full border border-teal-100 mb-4">
                  🎁 Bônus Exclusivo
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                  Consultoria com <span className="text-teal-500">Vitor Yuji</span>
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>
                  Por mais que as aulas sejam fáceis, não adianta te entregá-las sem antes <span className="font-semibold text-gray-900">te conhecer</span> e te mostrar como extrair o máximo da IA no seu trabalho.
                </p>
                <p>
                  Por isso, você terá uma <span className="font-semibold text-teal-600">consultoria com Vitor Yuji</span>. Vou fazer um "aquecimento" da Imersão e te mostrar como usar IA para que você possa fazer muito mais no seu trabalho com <span className="font-semibold text-gray-900">mais qualidade e menos esforço</span>.
                </p>
                <p>
                  Você também poderá <span className="font-semibold text-gray-900">tirar suas dúvidas ao vivo</span>.
                </p>
              </div>

              {/* CTA Buttons for bonus purchases */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <Button 
                  onClick={() => handleCtaClick("https://pay.hotmart.com/N100239403C?off=b9iztv2i", "online", true)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-6 rounded-lg w-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
                >
                  Quero Fazer Parte: Online →
                </Button>
                <Button 
                  onClick={() => handleCtaClick("https://pay.hotmart.com/H104969759G?off=xs1ta97u", "presencial", true)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-6 rounded-lg w-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
                >
                  Quero Fazer Parte: Presencial →
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Modals */}
      <LeadCaptureModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        checkoutUrl={selectedCheckoutUrl}
        onClosedWithoutSubmit={handleClosedWithoutSubmit}
        leadType={selectedLeadType}
        isBonus={isBonus}
      />
      <GiftPopup
        open={giftPopupOpen}
        onOpenChange={setGiftPopupOpen}
        onClaim={handleClaimGift}
      />

      {/* Author Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-black">
              "Mas porque ouvir um moleque de 15 anos falando sobre IA?"
            </h2>
            <h3 className="text-2xl font-bold text-cyan-500">
              Quem é Vitor Yuji:
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-16 max-w-5xl mx-auto">
            <div className="rounded-lg md:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="/lovable-uploads/vitor-yuji-palestra-2.png" 
                alt="Vitor Yuji apresentando" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg md:rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src="/lovable-uploads/vitor-yuji-palestra-1.png" 
                alt="Vitor Yuji com alunos" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg md:rounded-2xl shadow-md p-4 md:p-12">
            <p className="text-base md:text-2xl text-gray-800 mb-4 md:mb-8 leading-relaxed">
              Vitor Yuji tem apenas 15 anos e já é <strong className="text-black">referência em IA Generativa no Nordeste.</strong>
            </p>
            
            <ul className="space-y-3 md:space-y-5 mb-4 md:mb-8">
              <li className="flex items-start gap-2 md:gap-4">
                <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                <span className="text-sm md:text-lg text-gray-700">
                  Foi selecionado pelo CEO Max Peters para ser jovem aprendiz da <strong className="text-black">ADAPTA, a maior startup de IA do Brasil.</strong>
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-4">
                <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                <span className="text-sm md:text-lg text-gray-700">
                  Foi <strong className="text-black">4x competidor</strong> no torneio de robótica First Lego League.
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-4">
                <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                <span className="text-sm md:text-lg text-gray-700">
                  É co-fundador do <strong className="text-black">Mangue Mania</strong>, a primeira metodologia ativa infantil sobre manguezais de Sergipe, com <strong className="text-black">mais de 400 alunos impactados.</strong>
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-4">
                <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                <span className="text-sm md:text-lg text-gray-700">
                  Já palestrou sobre IA para instituições como <strong className="text-black">Instituto JCPM, Colégio Master e Babylândia.</strong>
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-4">
                <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                <span className="text-sm md:text-lg text-gray-700">
                  É também músico no <strong className="text-black">Movimento Escalada</strong>, um dos principais grupos de jovens cristãos do Nordeste.
                </span>
              </li>
            </ul>
            
            <p className="text-sm md:text-lg text-gray-700 leading-relaxed italic bg-cyan-50 rounded-lg p-3 md:p-4">
              Desde então, vem transmitindo todo seu conhecimento que adquiriu nos últimos anos para milhares de pessoas, com a missão de tornar a IA acessível para todos.
            </p>
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


      {/* FAQ Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            (F.A.Q) Restou alguma dúvida?
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-0" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Quais são as datas da imersão?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  A imersão acontecerá em 4 quartas-feiras, às 19h:<br/>
                  <strong>• 15 de Abril de 2026</strong> - Dia 1: O que é Inteligência Artificial<br/>
                  <strong>• 22 de Abril de 2026</strong> - Dia 2: Como criar Prompts Magnéticos<br/>
                  <strong>• 29 de Abril de 2026</strong> - Dia 3: As 5 Práticas da IA Generativa<br/>
                  <strong>• 6 de Maio de 2026</strong> - Dia 4: Tira Dúvidas e Práticas no Seu Trabalho
                </p>
              </AccordionContent>
            </AccordionItem>

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
                <span className="font-bold text-xl text-black">Por que confiar em um jovem de 15 anos?</span>
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
