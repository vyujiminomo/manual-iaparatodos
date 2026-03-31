import { useState } from "react";
import garantiaSelo from "@/assets/garantia-selo.png";
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
      <section className="py-24 px-4 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-yellow-400 mb-6 bg-yellow-400/10 px-5 py-2 rounded-full border border-yellow-400/20">
              O problema real
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-sans leading-tight">
              Você não é "velho demais" pra tecnologia
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              Só estava aprendendo do jeito errado. Talvez você já tenha tentado:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/[0.06]">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Aprender sozinho</h3>
              <p className="text-gray-400 leading-relaxed">
                Mexeu no ChatGPT, conversou um pouco, achou que tava bom. Mas até agora, nenhuma <span className="text-white font-medium">grande mudança</span> na produtividade.
              </p>
            </div>

            <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/[0.06]">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6">
                <span className="text-2xl">📹</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Curso gravado</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprou um curso online. Confuso, técnico demais, e quando travou… <span className="text-white font-medium">não tinha ninguém pra ajudar.</span>
              </p>
            </div>

            <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/[0.06]">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🙋</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pedir ajuda</h3>
              <p className="text-gray-400 leading-relaxed">
                Ligou pro filho, pro estagiário. Mas na próxima dificuldade, sente vergonha de pedir de novo. <span className="text-white font-medium italic">"Sou velho demais pra isso."</span>
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-white to-gray-50 text-black overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-6 bg-cyan-50 px-5 py-2 rounded-full border border-cyan-100">
              A solução
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Depois de 3 anos estudando IA, criei um<br className="hidden md:block" /> <span className="text-cyan-500">"Método Único"</span> para aprender IA
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              E se existisse um jeito tão fácil pra aprender IA que até quem tem dificuldade com tecnologia conseguisse usar como um parceiro de verdade?
            </p>
          </div>

          {/* Credential line */}
          <p className="text-center text-gray-500 mb-12 text-base md:text-lg">
            Depois de 3 anos estudando, mentoria com CEO da Adapta, palestras pra +500 pessoas… criei um método perfeito:
          </p>
          
          {/* Method pillars */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-t-2xl"></div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mentoria em Grupo</h3>
              <p className="text-gray-500 leading-relaxed">
                Aulas ao vivo. Dúvidas respondidas na hora. Networking. Grupo no WhatsApp.
              </p>
            </div>
            
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-t-2xl"></div>
              <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Aulas Dinâmicas</h3>
              <p className="text-gray-500 leading-relaxed">
                Linguagem simples. Aulas divertidas. Eu tenho 15 anos… você acha mesmo que eu gosto de jargão técnico?
              </p>
            </div>
            
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-t-2xl"></div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Prática Imediata</h3>
              <p className="text-gray-500 leading-relaxed">
                Testamos juntos o ChatGPT durantes as aulas
              </p>
            </div>
          </div>
          
          {/* Closing statement */}
          <div className="text-center bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-gray-800">
              Esta é sua chance de estar entre os que vão <span className="text-cyan-600">dominar o que vai definir os próximos anos</span> do mercado.
            </p>
          </div>
          
          <div className="text-center">
            <Button 
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-4 bg-gray-950">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold tracking-widest uppercase text-cyan-500 mb-3">Comparativo</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Porque a Imersão é MELHOR que qualquer outro curso?
            </h2>
          </div>

          {/* Table */}
          <div className="rounded-2xl overflow-hidden border border-white/10">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="p-5 md:p-6 text-center bg-red-500/10 border-b-2 border-red-500">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-red-400">Curso Online</p>
              </div>
              <div className="p-5 md:p-6 text-center bg-blue-500/10 border-b-2 border-blue-400">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-blue-400">Imersão IA Para Todos</p>
              </div>
            </div>

            {/* Rows */}
            {[
              { left: "Vídeo gravado", right: "Ao vivo + gravações" },
              { left: "Você fica com dúvidas", right: "Professor 'pega na mão' e te ajuda" },
              { left: "Técnico e foco em programação", right: "Linguagem simples e aulas dinâmicas" },
              { left: "Excesso de teoria", right: "Prática no seu trabalho" },
              { left: "Sozinho", right: "Grupo de profissionais" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-t border-white/5">
                <div className="p-4 md:p-5 flex items-center justify-center text-center bg-red-500/5">
                  <p className="text-white/50 text-sm md:text-base">{row.left}</p>
                </div>
                <div className="p-4 md:p-5 flex items-center justify-center text-center bg-blue-500/5">
                  <p className="text-white font-medium text-sm md:text-base">{row.right}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
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
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Por que fazer um Curso de ChatGPT?
            </h2>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              O mercado descobriu o poder do ChatGPT. <strong className="text-foreground">Ele não volta atrás.</strong>
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Quero te ensinar a aproveitar todo o potencial da IA: ter ideias melhores, aprender mais rápido, pesquisar com inteligência, escrever com clareza, pensar e tomar decisões.
            </p>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Resultado?</strong> Fazer muito mais, com mais qualidade e menos esforço.
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

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
            Além disso, tenha acesso aos Bônus Especiais:
          </h2>
          <p className="text-center text-lg text-gray-400 mb-12">
            Veja o que você vai receber assim que garantir sua vaga:
          </p>
          
          <p className="text-center text-xl font-semibold mb-12 text-gray-200">
            Ao escolher a imersão do Vitor Yuji, você se torna parte do melhor programa de imersão de IA do Brasil.
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
                  Se você não conseguir assistir a uma aula ao vivo, não se preocupe! Todo o material será gravado.
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
                  Se sinta acolhido, tire dúvidas e faça networking com outros profissionais.
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
                  Tenha acesso gratuito ao seu 'guia de bolso' de IA
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
                  Biblioteca de Prompts
                </h3>
                <p className="text-gray-700 text-lg">
                  Acesse uma coleção exclusiva de prompts para cada profissão
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
      <section id="oferta" className="pt-24 pb-10 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Acesse o Método Único de Aprender IA
            </h2>
            <p className="text-xl text-gray-300">
              4 encontros ao vivo + grupo + mentor respondendo suas dúvidas = não ficar para trás
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
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

            <p className="text-center text-sm text-gray-400 mt-6 leading-relaxed">
              Quer participar <span className="font-semibold text-gray-500">presencialmente</span>? Após a compra, você será redirecionado para conhecer a versão presencial. Também enviaremos informações por WhatsApp.
            </p>
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
              <div className="mt-8">
                <Button 
                  onClick={() => handleCtaClick("https://pay.hotmart.com/N100239403C?off=b9iztv2i", "online", true)}
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-6 rounded-lg w-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
                >
                  Quero Fazer Parte →
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Guarantee Section */}
      <section className="py-14 px-4 bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-sm font-bold px-4 py-1.5 rounded-full border border-emerald-500/20">
              ▶ GARANTIA ESPECIAL
            </span>
          </div>
          <h3 className="font-poppins text-3xl md:text-5xl text-white font-extrabold leading-tight mb-8 tracking-tight">
            Assista a Primeira Aula <span className="text-yellow-400">"De Graça"</span>, Sem Compromisso
          </h3>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <img 
              src={garantiaSelo} 
              alt="Garantia da Primeira Aula 100%" 
              className="w-44 h-44 md:w-56 md:h-56 object-contain flex-shrink-0"
            />
            <div className="text-center md:text-left">
              <p className="font-poppins text-white font-bold text-xl md:text-2xl mb-4">
                Teste. Aprenda. Aproveite.
              </p>
              <p className="font-poppins text-gray-400 text-base md:text-lg leading-relaxed">
                Eu tenho tanta certeza que você vai adorar a Imersão que, se após a primeira aula você achar que não faz sentido pra você, envie uma mensagem em até{" "}
                <span className="font-semibold text-white">1 dia pedindo reembolso</span>, e devolvemos{" "}
                <span className="font-semibold text-white">100%</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

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
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-cyan-500 mb-3">Seu mentor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              "Mas porque ouvir um moleque de 15 anos falando sobre IA?"
            </h2>
          </div>

          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
            {/* Photos */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/vitor-yuji-palestra-2.png" 
                  alt="Vitor Yuji apresentando" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/vitor-yuji-palestra-1.png" 
                  alt="Vitor Yuji com alunos" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Vitor Yuji tem apenas 15 anos e já é <strong className="text-foreground">referência em IA Generativa no Nordeste.</strong>
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">
                    Selecionado pelo CEO Max Peters para ser jovem aprendiz da <strong className="text-foreground">ADAPTA, a maior startup de IA do Brasil.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">4x competidor</strong> no torneio de robótica First Lego League.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">
                    Co-fundador do <strong className="text-foreground">Mangue Mania</strong> — primeira metodologia ativa infantil sobre manguezais de Sergipe, com <strong className="text-foreground">+400 alunos impactados.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">
                    Palestrou sobre IA para <strong className="text-foreground">Instituto JCPM, Colégio Master e Babylândia.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-muted-foreground">
                    Músico no <strong className="text-foreground">Movimento Escalada</strong>, um dos principais grupos de jovens cristãos do Nordeste.
                  </span>
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed border-l-4 border-cyan-500 pl-4 italic">
                Vem transmitindo todo seu conhecimento para milhares de pessoas, com a missão de tornar a IA acessível para todos.
              </p>
            </div>
          </div>

          <div className="text-center mt-14">
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
