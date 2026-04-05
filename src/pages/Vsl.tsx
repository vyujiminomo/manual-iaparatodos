
import { useState, useEffect, useRef, useCallback } from "react";
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

// A/B Test Player - VTurb handles the 50/50 split
const VturbABPlayer = ({ onVariantDetected }: { onVariantDetected: (variant: 'full-page' | 'buttons-only') => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create the A/B test smartplayer element
    const player = document.createElement('div');
    player.innerHTML = '<vturb-smartplayer id="ab-69d2ac3632c35a227a015d46" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer>';
    containerRef.current.appendChild(player.firstChild!);

    // Load the A/B test script
    const script = document.createElement('script');
    script.src = 'https://scripts.converteai.net/b4b4df23-030a-4317-96fa-2adfbe0ae893/ab-test/69d2ac3632c35a227a015d46/player.js';
    script.async = true;
    document.head.appendChild(script);

    // Detect which variant was served by checking which player ID appears in the DOM
    let detectAttempts = 0;
    const detectVariant = () => {
      detectAttempts++;
      // Look for any vturb-smartplayer element that is NOT the ab- element (the actual video player)
      const allPlayers = containerRef.current?.querySelectorAll('vturb-smartplayer');
      const injectedPlayer = Array.from(allPlayers || []).find(el => {
        const id = el.getAttribute('id') || '';
        return id.startsWith('vid-');
      });

      if (injectedPlayer) {
        const playerId = injectedPlayer.getAttribute('id') || '';
        // The original video (with landing page) has this ID
        if (playerId === 'vid-69d2965fc996282c9169338a') {
          onVariantDetected('full-page');
        } else {
          onVariantDetected('buttons-only');
        }
        return;
      }

      // Also check smartplayer instances as fallback
      if (typeof (window as any).smartplayer !== 'undefined' && 
          (window as any).smartplayer.instances?.length) {
        const instance = (window as any).smartplayer.instances[0];
        const videoEl = instance?.video;
        const src = videoEl?.src || videoEl?.currentSrc || '';
        // If we can detect by instance, check the container for player ID
        const playerEl = containerRef.current?.querySelector('vturb-smartplayer[id^="vid-"]');
        if (playerEl) {
          const pid = playerEl.getAttribute('id') || '';
          if (pid === 'vid-69d2965fc996282c9169338a') {
            onVariantDetected('full-page');
          } else {
            onVariantDetected('buttons-only');
          }
          return;
        }
      }

      if (detectAttempts < 60) {
        setTimeout(detectVariant, 500);
      }
    };

    setTimeout(detectVariant, 1000);

    return () => {
      script.remove();
    };
  }, [onVariantDetected]);

  return <div ref={containerRef} />;
};

const Vsl = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [giftPopupOpen, setGiftPopupOpen] = useState(false);
  const [showConsultoria, setShowConsultoria] = useState(false);
  const [selectedCheckoutUrl, setSelectedCheckoutUrl] = useState("");
  const [selectedLeadType, setSelectedLeadType] = useState<"online" | "presencial">("online");
  const [isBonus, setIsBonus] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [abVariant, setAbVariant] = useState<'full-page' | 'buttons-only' | 'unknown'>('unknown');
  const showContentRef = useRef(false);
  const variantRef = useRef<'full-page' | 'buttons-only' | 'unknown'>('unknown');

  const handleVariantDetected = useCallback((variant: 'full-page' | 'buttons-only') => {
    setAbVariant(variant);
    variantRef.current = variant;
    console.log('A/B Variant detected:', variant);
  }, []);

  // Reveal page content at 6:03 of the video (363 seconds)
  useEffect(() => {
    const SECONDS_TO_DISPLAY = 363;
    let attempts = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const startWatchVideoProgress = () => {
      if (typeof (window as any).smartplayer === 'undefined' || 
          !((window as any).smartplayer.instances && (window as any).smartplayer.instances.length)) {
        if (attempts >= 30) return;
        attempts += 1;
        timeoutId = setTimeout(startWatchVideoProgress, 1000);
        return;
      }

      (window as any).smartplayer.instances[0].on('timeupdate', () => {
        if (showContentRef.current) return;
        const currentTime = (window as any).smartplayer.instances[0].video.currentTime;
        if (currentTime >= SECONDS_TO_DISPLAY) {
          showContentRef.current = true;
          setShowContent(true);
        }
      });
    };

    startWatchVideoProgress();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useDynamicMeta({
    title: "Vídeo Liberado",
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
    setTimeout(() => {
      const el = document.getElementById('consultoria-vitor');
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      {/* VSL Hero Section */}
      <section className={`relative bg-black text-white px-4 overflow-hidden flex flex-col items-center justify-center ${showContent ? 'py-12 md:py-20' : 'min-h-screen py-8'}`}>
        {!showContent && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
        )}
        {showContent && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
        )}
        
        <div className="container mx-auto max-w-4xl relative z-10">
          {showContent && abVariant === 'full-page' && (
            <>
              <p className="text-center text-sm md:text-base text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto">
                O Garoto de 15 anos selecionado como Jovem Aprendiz da <span className="text-teal-400 font-semibold">Maior Empresa de IA da América Latina</span> Apresenta:
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center">
                Imersão IA Para Todos
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
                O melhor método para aprender IA: mentoria em grupo, suporte e linguagem simples.
              </p>
            </>
          )}

          {/* VSL Video Player - VTurb A/B Test */}
          <div className="relative max-w-[400px] mx-auto mb-10">
            <VturbABPlayer onVariantDetected={handleVariantDetected} />
          </div>

          {showContent && (
            <div className="text-center">
              <Button 
                onClick={scrollToOffer}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base md:text-lg px-8 md:px-10 py-7 md:py-6 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] w-full md:w-auto"
              >
                QUERO FAZER PARTE →
              </Button>
            </div>
          )}
        </div>

        {showContent && (
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
                <div className="flex gap-6 md:gap-20 lg:gap-24 items-center shrink-0">
                  <img src="/lovable-uploads/logo-empresa-1.png" alt="Empresa 1" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-2.png" alt="Master" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-3.png" alt="Empresa 3" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-5.png" alt="Empresa 5" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-6.png" alt="ProSolar" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-suzuki.png" alt="Suzuki" className="h-16 md:h-32 lg:h-40 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                </div>
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
        )}
      </section>

      {showContent && (<>
      {/* Testimonials Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
            O QUE DIZEM OS ALUNOS DA 1ª TURMA:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
              <video controls preload="metadata" className="w-full h-full object-cover" style={{ aspectRatio: '9/16' }}>
                <source src="/lovable-uploads/video-osvaldo-araki.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
              <video controls preload="metadata" className="w-full h-full object-cover" style={{ aspectRatio: '9/16' }}>
                <source src="/lovable-uploads/video-max-2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border-2 border-cyan-400/50 hover:border-cyan-400 transition-all duration-300">
              <video controls preload="metadata" className="w-full h-full object-cover" style={{ aspectRatio: '9/16' }}>
                <source src="/lovable-uploads/video-karina.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 md:px-12 py-7 md:py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] w-full md:w-auto">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-yellow-400 mb-6 bg-yellow-400/10 px-5 py-2 rounded-full border border-yellow-400/20">O problema real</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">Você não é "velho demais" pra tecnologia</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">Só estava aprendendo do jeito errado. Talvez você já tenha tentado:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/[0.06]">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6"><span className="text-2xl">🔍</span></div>
              <h3 className="text-xl font-bold text-white mb-3">Aprender sozinho</h3>
              <p className="text-gray-400 leading-relaxed">Mexeu no ChatGPT, conversou um pouco, achou que tava bom. Mas até agora, nenhuma <span className="text-white font-medium">grande mudança</span> na produtividade.</p>
            </div>
            <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/[0.06]">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6"><span className="text-2xl">📹</span></div>
              <h3 className="text-xl font-bold text-white mb-3">Curso gravado</h3>
              <p className="text-gray-400 leading-relaxed">Comprou um curso online. Confuso, técnico demais, e quando travou… <span className="text-white font-medium">não tinha ninguém pra ajudar.</span></p>
            </div>
            <div className="group bg-white/[0.03] backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-yellow-400/30 transition-all duration-300 hover:bg-white/[0.06]">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center mb-6"><span className="text-2xl">🙋</span></div>
              <h3 className="text-xl font-bold text-white mb-3">Pedir ajuda</h3>
              <p className="text-gray-400 leading-relaxed">Ligou pro filho, pro estagiário. Mas na próxima dificuldade, sente vergonha de pedir de novo. <span className="text-white font-medium italic">"Sou velho demais pra isso."</span></p>
            </div>
          </div>
          
          <div className="text-center">
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-white to-gray-50 text-black overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-400/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-6 bg-cyan-50 px-5 py-2 rounded-full border border-cyan-100">A solução</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Depois de 3 anos estudando IA, criei um<br className="hidden md:block" /> <span className="text-cyan-500">"Método Único"</span> para aprender IA
            </h2>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              E se existisse um jeito tão fácil pra aprender IA que até quem tem dificuldade com tecnologia conseguisse usar como um parceiro de verdade?
            </p>
          </div>
          <p className="text-center text-gray-500 mb-12 text-base md:text-lg">
            Depois de 3 anos estudando, mentoria com CEO da Adapta, palestras pra +500 pessoas… criei um método perfeito:
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-t-2xl"></div>
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"><span className="text-3xl">👥</span></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mentoria em Grupo</h3>
              <p className="text-gray-500 leading-relaxed">Aulas ao vivo. Dúvidas respondidas na hora. Networking. Grupo no WhatsApp.</p>
            </div>
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-t-2xl"></div>
              <div className="w-14 h-14 rounded-2xl bg-yellow-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"><span className="text-3xl">🎯</span></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Aulas Dinâmicas</h3>
              <p className="text-gray-500 leading-relaxed">Linguagem simples. Aulas divertidas. Eu tenho 15 anos… você acha mesmo que eu gosto de jargão técnico?</p>
            </div>
            <div className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-green-500 rounded-t-2xl"></div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"><span className="text-3xl">⚡</span></div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Prática Imediata</h3>
              <p className="text-gray-500 leading-relaxed">Testamos juntos o ChatGPT durantes as aulas</p>
            </div>
          </div>
          <div className="text-center bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-gray-800">Esta é sua chance de estar entre os que vão <span className="text-cyan-600">dominar o que vai definir os próximos anos</span> do mercado.</p>
          </div>
          <div className="text-center">
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_50px_rgba(250,204,21,0.6)] transition-all duration-300 hover:scale-105">
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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Porque a Imersão é MELHOR que qualquer outro curso?</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-2">
              <div className="p-5 md:p-6 text-center bg-red-500/10 border-b-2 border-red-500">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-red-400">Curso Online</p>
              </div>
              <div className="p-5 md:p-6 text-center bg-blue-500/10 border-b-2 border-blue-400">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-blue-400">Imersão IA Para Todos</p>
              </div>
            </div>
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
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] transition-all duration-300">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Cronograma das aulas</h2>
          <div className="space-y-6">
            {[
              { title: "Dia 1: O que é Inteligência Artificial", date: "(15/04/2026 - Quarta, 19h)", items: ["5 princípios básicos para interagir com IA", "Como usar o \"Filtro da Verdade\" para evitar respostas falsas", "Como, quando e porque usar cada IA"] },
              { title: "Dia 2: Como criar Prompts Magnéticos", date: "(22/04/2026 - Quarta, 19h)", items: ["A estrutura 3IAI para prompts perfeitos", "Como criar um bom contexto", "O maior erro que iniciantes cometem ao usar IAs"] },
              { title: "Dia 3: As 5 Práticas da IA Generativa", date: "(29/04/2026 - Quarta, 19h)", items: ["Pesquisando artigos e jurisprudência com IA", "4 técnicas para ter ideias com IA", "4 técnicas para aprender com IA", "2 técnicas para gerir com IA", "6 técnicas para escrever com IA"] },
              { title: "Dia 4: Tira Dúvidas e Práticas no Seu Trabalho", date: "(06/05/2026 - Quarta, 19h)", items: ["Exemplos reais dos alunos", "Sessão de dúvidas ao vivo", "Resumão de toda a imersão"] },
            ].map((day, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md p-4 md:p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg md:text-2xl font-bold mb-4 md:mb-6 text-black">
                  {day.title} <span className="text-amber-600 font-semibold text-sm md:text-lg block md:inline mt-1 md:mt-0">{day.date}</span>
                </h3>
                <ul className="space-y-2 md:space-y-3 text-gray-700">
                  {day.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 md:gap-3">
                      <Check className="text-cyan-400 flex-shrink-0 mt-0.5 md:mt-1" size={18} />
                      <span className="text-sm md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Por que fazer um Curso de ChatGPT?</h2>
          </div>
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">O mercado descobriu o poder do ChatGPT. <strong className="text-foreground">Ele não volta atrás.</strong></p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Quero te ensinar a aproveitar todo o potencial da IA: ter ideias melhores, aprender mais rápido, pesquisar com inteligência, escrever com clareza, pensar e tomar decisões.</p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed"><strong className="text-foreground">Resultado?</strong> Fazer muito mais, com mais qualidade e menos esforço.</p>
          </div>
          <div className="text-center mt-12">
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">Além disso, tenha acesso aos Bônus Especiais:</h2>
          <p className="text-center text-lg text-gray-400 mb-12">Veja o que você vai receber assim que garantir sua vaga:</p>
          <p className="text-center text-xl font-semibold mb-12 text-gray-200">Ao escolher a imersão do Vitor Yuji, você se torna parte do melhor programa de imersão de IA do Brasil.</p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { img: webinarGravacao, alt: "Gravações e mapas mentais", title: "Gravações e mapas mentais", desc: "Se você não conseguir assistir a uma aula ao vivo, não se preocupe! Todo o material será gravado.", imgClass: "object-right" },
              { img: webinarWhatsapp, alt: "Grupo de WhatsApp", title: "Grupo de WhatsApp", desc: "Se sinta acolhido, tire dúvidas e faça networking com outros profissionais.", imgClass: "object-left" },
              { img: webinarManual, alt: "Manual IA Para Todos", title: "Manual IA Para Todos", desc: "Tenha acesso gratuito ao seu 'guia de bolso' de IA", imgClass: "object-cover" },
              { img: webinarBiblioteca, alt: "Biblioteca de prompts", title: "Biblioteca de Prompts", desc: "Acesse uma coleção exclusiva de prompts para cada profissão", imgClass: "object-cover" },
            ].map((bonus, i) => (
              <div key={i} className="bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-cyan-400 hover:shadow-2xl hover:border-t-[6px] transition-all duration-300">
                <div className="w-full h-64 overflow-hidden">
                  <img src={bonus.img} alt={bonus.alt} className={`w-full h-full object-cover ${bonus.imgClass}`} />
                </div>
                <div className="p-10">
                  <h3 className="text-xl font-bold mb-4 text-black">{bonus.title}</h3>
                  <p className="text-gray-700 text-lg">{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] transition-all duration-300">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">O que dizem sobre a Imersão:</h2>
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
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="oferta" className="pt-24 pb-10 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Acesse o Método Único de Aprender IA</h2>
            <p className="text-xl text-gray-300">4 encontros ao vivo + grupo + mentor respondendo suas dúvidas = não ficar para trás</p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-10 text-gray-900 shadow-2xl flex flex-col relative">
              <div className="flex items-center gap-4 mb-2">
                <h3 className="text-2xl md:text-3xl font-bold">Imersão Online</h3>
                <span className="bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap">🔥 Mais Escolhido | 75% OFF*</span>
              </div>
              <span className="bg-cyan-500 text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-6">Ao Vivo via Zoom</span>
              <div className="space-y-4 mb-8 flex-1">
                {["Acesso completo aos 4 Dias ao Vivo", "Acesso à Comunidade no WhatsApp Exclusiva", "Acesso às Gravações e Mapas Mentais", "Manual IA Para Todos", "Biblioteca de Prompts por Profissão"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={22} />
                    <span className="text-base md:text-lg text-gray-700 font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-left mb-6">
                <p className="text-3xl md:text-5xl font-bold text-gray-900 mb-1">
                  <span className="text-2xl md:text-3xl mr-0.5">12x</span>R$ 25<span className="text-sm md:text-base align-bottom">,55</span>
                </p>
                <p className="text-base md:text-lg text-gray-600">ou R$ 247 à vista</p>
              </div>
              <Button 
                onClick={() => handleCtaClick("https://pay.hotmart.com/N100239403C?off=b9iztv2i", "online")}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-xl px-8 py-6 md:py-7 rounded-lg w-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] mb-4"
              >
                Quero Adquirir Agora →
              </Button>
              <div className="flex items-center justify-center gap-6 text-sm md:text-base text-gray-600">
                <div className="flex items-center gap-2"><Shield className="text-green-500" size={16} /><span>7 Dias de Garantia</span></div>
                <div className="flex items-center gap-2"><Lock className="text-green-500" size={16} /><span>Compra Segura</span></div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-400 mt-6 leading-relaxed">
              Quer participar <span className="font-semibold text-gray-500">presencialmente</span>? Após a compra, você será redirecionado para conhecer a versão presencial. Também enviaremos informações por WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Consultoria Section */}
      {showConsultoria && (
        <section id="consultoria-vitor" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-3xl">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="text-center mb-8">
                <span className="inline-flex items-center gap-2 bg-teal-50 text-teal-600 text-sm font-bold px-4 py-2 rounded-full border border-teal-100 mb-4">🎁 Bônus Exclusivo</span>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">Consultoria com <span className="text-teal-500">Vitor Yuji</span></h2>
              </div>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
                <p>Por mais que as aulas sejam fáceis, não adianta te entregá-las sem antes <span className="font-semibold text-gray-900">te conhecer</span> e te mostrar como extrair o máximo da IA no seu trabalho.</p>
                <p>Por isso, você terá uma <span className="font-semibold text-teal-600">consultoria com Vitor Yuji</span>. Vou fazer um "aquecimento" da Imersão e te mostrar como usar IA para que você possa fazer muito mais no seu trabalho com <span className="font-semibold text-gray-900">mais qualidade e menos esforço</span>.</p>
                <p>Você também poderá <span className="font-semibold text-gray-900">tirar suas dúvidas ao vivo</span>.</p>
              </div>
              <div className="mt-8">
                <Button onClick={() => handleCtaClick("https://pay.hotmart.com/N100239403C?off=b9iztv2i", "online", true)} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 py-6 rounded-lg w-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]">
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
            <span className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 text-sm font-bold px-4 py-1.5 rounded-full border border-emerald-500/20">▶ GARANTIA ESPECIAL</span>
          </div>
          <h3 className="font-poppins text-3xl md:text-5xl text-white font-extrabold leading-tight mb-8 tracking-tight">
            Assista a Primeira Aula <span className="text-yellow-400">"De Graça"</span>, Sem Compromisso
          </h3>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <img src={garantiaSelo} alt="Garantia da Primeira Aula 100%" className="w-44 h-44 md:w-56 md:h-56 object-contain flex-shrink-0" />
            <div className="text-center md:text-left">
              <p className="font-poppins text-white font-bold text-xl md:text-2xl mb-4">Teste. Aprenda. Aproveite.</p>
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
      <LeadCaptureModal open={modalOpen} onOpenChange={setModalOpen} checkoutUrl={selectedCheckoutUrl} onClosedWithoutSubmit={handleClosedWithoutSubmit} leadType={selectedLeadType} isBonus={isBonus} />
      <GiftPopup open={giftPopupOpen} onOpenChange={setGiftPopupOpen} onClaim={handleClaimGift} />

      {/* Author Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-cyan-500 mb-3">Seu mentor</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">"Mas porque ouvir um moleque de 15 anos falando sobre IA?"</h2>
          </div>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-start">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden"><img src="/lovable-uploads/vitor-yuji-palestra-2.png" alt="Vitor Yuji apresentando" className="w-full h-auto object-cover" /></div>
              <div className="rounded-2xl overflow-hidden"><img src="/lovable-uploads/vitor-yuji-palestra-1.png" alt="Vitor Yuji com alunos" className="w-full h-auto object-cover" /></div>
            </div>
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">Vitor Yuji tem apenas 15 anos e já é <strong className="text-foreground">referência em IA Generativa no Nordeste.</strong></p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3"><Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} /><span className="text-muted-foreground">Selecionado pelo CEO Max Peters para ser jovem aprendiz da <strong className="text-foreground">ADAPTA, a maior startup de IA do Brasil.</strong></span></li>
                <li className="flex items-start gap-3"><Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} /><span className="text-muted-foreground"><strong className="text-foreground">4x competidor</strong> no torneio de robótica First Lego League.</span></li>
                <li className="flex items-start gap-3"><Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} /><span className="text-muted-foreground">Co-fundador do <strong className="text-foreground">Mangue Mania</strong> — primeira metodologia ativa infantil sobre manguezais de Sergipe, com <strong className="text-foreground">+400 alunos impactados.</strong></span></li>
                <li className="flex items-start gap-3"><Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} /><span className="text-muted-foreground">Palestrou sobre IA para <strong className="text-foreground">Instituto JCPM, Colégio Master e Babylândia.</strong></span></li>
                <li className="flex items-start gap-3"><Check className="text-cyan-500 flex-shrink-0 mt-1" size={20} /><span className="text-muted-foreground">Músico no <strong className="text-foreground">Movimento Escalada</strong>, um dos principais grupos de jovens cristãos do Nordeste.</span></li>
              </ul>
              <p className="text-muted-foreground leading-relaxed border-l-4 border-cyan-500 pl-4 italic">Vem transmitindo todo seu conhecimento para milhares de pessoas, com a missão de tornar a IA acessível para todos.</p>
            </div>
          </div>
          <div className="text-center mt-14">
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">(F.A.Q) Restou alguma dúvida?</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { q: "Quais são as datas da imersão?", a: "A imersão acontecerá em 4 quartas-feiras, às 19h:\n• 15 de Abril de 2026 - Dia 1\n• 22 de Abril de 2026 - Dia 2\n• 29 de Abril de 2026 - Dia 3\n• 6 de Maio de 2026 - Dia 4" },
              { q: "Vai ter gravação?", a: "Sim! Todas as aulas serão gravadas e ficarão disponíveis com os mapas mentais na área de membros da Hotmart." },
              { q: "Preciso saber de tecnologia?", a: "Não. A linguagem é simples, sem jargões. Qualquer profissional consegue acompanhar." },
              { q: "Preciso instalar algo para participar dos encontros ao vivo?", a: "Sim, os encontros acontecem via Zoom, então é importante ter ele instalado antes do primeiro dia." },
              { q: "Por que confiar em um jovem de 15 anos?", a: "Vitor já palestrou para diversos públicos, criou projetos premiados e será membro da ADAPTA, uma das maiores empresas de IA da América Latina. Seu diferencial é ensinar IA de forma acessível para todos." },
              { q: "Existe garantia de satisfação?", a: "Sim. Caso não fique satisfeito, você pode solicitar reembolso integral em até 7 dias após a compra pela plataforma da Hotmart." },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white rounded-xl border-none">
                <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                  <span className="font-bold text-xl text-black">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <p className="text-gray-700 text-lg whitespace-pre-line">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-12">
            <Button onClick={scrollToOffer} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]">
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-6">IA Para Todos. Ferramentas para trabalhar com mais inteligência.</h3>
          <div className="space-y-4">
            <p className="text-lg font-semibold">Contato:</p>
            <p><strong>E-mail:</strong>{" "}<a href="mailto:contato.vitoryujiminomo@gmail.com" className="text-cyan-400 hover:text-cyan-300 underline">contato.vitoryujiminomo@gmail.com</a></p>
            <p><strong>LinkedIn:</strong>{" "}<a href="https://www.linkedin.com/in/vitor-yuji-minomo/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Vitor Yuji Minomo</a></p>
          </div>
        </div>
      </footer>
      </>)}

      {/* WhatsApp floating button - appears after 6 minutes */}
      {showContent && (
        <a
          href="https://wa.me/5579981255774"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      )}
    </div>
  );
};

export default Vsl;
