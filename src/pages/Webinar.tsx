
import garantiaSelo from "@/assets/garantia-selo.png";
import ofertaImagem from "@/assets/oferta-imagem.png";
import { Button } from "@/components/ui/button";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Check, Shield, Lock, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
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
import imersaoHeroBg from "@/assets/imersao-hero-bg.jpg";
import imersaoTicketCard from "@/assets/imersao-ticket-card.png";
import imersaoGiftsTrio from "@/assets/imersao-gifts-trio.png";
import imersaoProfissional from "@/assets/imersao-profissional.jpg";
import imersaoEmpresario from "@/assets/imersao-empresario.jpg";
import imersaoGestor from "@/assets/imersao-gestor.jpg";

const Webinar = () => {
  const [turmaAtiva, setTurmaAtiva] = useState<1 | 2>(1);
  

  useDynamicMeta({
    title: "Imersão IA Para Todos 3 - Vitor Yuji",
    description: "Vá do zero ao avançado em IA em 5 encontros. Imersão presencial ou online com Vitor Yuji.",
    image: "/lovable-uploads/webinar-og-image.png"
  });

  const scrollToOffer = () => {
    const offerSection = document.getElementById('oferta');
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCtaClick = (checkoutUrl: string) => {
    window.location.href = checkoutUrl;
  };


  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Hero Section - Editorial cinematic */}
      <section className="relative bg-black text-white overflow-hidden min-h-[92vh] flex flex-col">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={imersaoHeroBg}
            alt="Imersão IA Para Todos"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Gradient overlays - strong left blur fade like Adapta Summit */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
        </div>

        {/* Decorative left blur masses */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-60 w-[900px] h-[900px] bg-black/70 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 left-32 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex-1 flex items-center justify-start px-5 md:px-10 lg:px-20 xl:pl-[12%] pt-10 md:pt-16 pb-16">
          <div className="w-full max-w-xl lg:max-w-[580px]">
            {/* Date badge */}
            <div className="inline-flex items-center gap-2 bg-black/70 backdrop-blur-sm border border-white/15 text-white/90 font-sans font-medium tracking-wide text-xs md:text-sm px-4 py-2 rounded-md mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              5, 12, 19, 26 DE AGOSTO • 2 DE SETEMBRO
            </div>

            {/* Small logo */}
            <div className="mb-6 max-w-[220px] md:max-w-[260px]">
              <img
                src="/lovable-uploads/imersao-logo.png"
                alt="Imersão IA Para Todos 3"
                className="w-full h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Headline */}
            <h1 className="font-poppins font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-5">
              Transforme seu trabalho com a{" "}
              <span className="text-yellow-400">melhor mentoria de IA</span>{" "}
              para profissionais
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200/90 leading-relaxed mb-6 max-w-xl">
              <span className="font-semibold text-white">50 profissionais</span> dividindo cases de IA aplicada,{" "}
              <span className="font-semibold text-white">mexendo nas melhores IAs ao vivo</span> e saindo com tudo o que há de novo e importante em IA para negócios.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-8">
              {[
                "Lote 2 disponível (condição especial)",
                "Acesso às gravações da imersão",
                "5 aulas presenciais ou online",
                "Professor e grupo para networking",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-100">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400/15 border border-yellow-400/60 flex items-center justify-center">
                    <Check className="w-3 h-3 text-yellow-400" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold tracking-wide text-base md:text-lg px-10 py-7 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(250,204,21,0.45)] hover:shadow-[0_0_55px_rgba(250,204,21,0.75)] w-full sm:w-auto"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>

        {/* Trusted By Section integrated */}
        <div className="relative z-10 pb-10 md:pb-14">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
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
                  <img src="/lovable-uploads/logo-empresa-1.png" alt="Empresa 1" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-2.png" alt="Master" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-3.png" alt="Empresa 3" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-5.png" alt="Empresa 5" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-6.png" alt="ProSolar" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-suzuki.png" alt="Suzuki" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex gap-6 md:gap-20 lg:gap-24 items-center shrink-0">
                  <img src="/lovable-uploads/logo-empresa-1.png" alt="Empresa 1" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-2.png" alt="Master" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-3.png" alt="Empresa 3" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-5.png" alt="Empresa 5" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-empresa-6.png" alt="ProSolar" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                  <img src="/lovable-uploads/logo-suzuki.png" alt="Suzuki" className="h-14 md:h-24 lg:h-28 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Sinta a experiência da Imersão 2 */}
      <section className="py-16 md:py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-yellow-400/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-yellow-400 mb-4 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              Veja como foi
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Sinta a experiência da Imersão 2
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {[
              {
                label: "Aulas ao vivo",
                accent: "from-cyan-400 to-cyan-500",
                placeholder: "imersao-foto-1.jpg",
              },
              {
                label: "Mentoria em grupo",
                accent: "from-yellow-400 to-amber-400",
                placeholder: "imersao-foto-2.jpg",
              },
              {
                label: "Networking",
                accent: "from-emerald-400 to-green-500",
                placeholder: "imersao-foto-3.jpg",
              },
              {
                label: "Prática guiada",
                accent: "from-fuchsia-400 to-pink-500",
                placeholder: "imersao-foto-4.jpg",
              },
              {
                label: "Resultados reais",
                accent: "from-orange-400 to-red-500",
                placeholder: "imersao-foto-5.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} rounded-t-2xl z-10`}></div>
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={`/lovable-uploads/${item.placeholder}`}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-white/[0.03] text-gray-500 text-sm font-medium">${item.label}</div>`;
                      }
                    }}
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 md:py-28 px-4 bg-black overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-5 bg-cyan-400/10 px-5 py-2 rounded-full border border-cyan-400/20">
              Provas reais
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Confira os depoimentos <br className="hidden md:block" />
              <span className="text-yellow-400">dos alunos</span>
            </h2>
          </div>

          {/* Turma switcher */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-10">
            <button
              onClick={() => setTurmaAtiva(turmaAtiva === 1 ? 2 : 1)}
              aria-label="Turma anterior"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/60 hover:bg-yellow-400/10 text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm">
              <button
                onClick={() => setTurmaAtiva(1)}
                className={`px-5 md:px-7 py-2.5 rounded-full text-sm md:text-base font-bold transition-all ${
                  turmaAtiva === 1
                    ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Turma 1
              </button>
              <button
                onClick={() => setTurmaAtiva(2)}
                className={`px-5 md:px-7 py-2.5 rounded-full text-sm md:text-base font-bold transition-all ${
                  turmaAtiva === 2
                    ? "bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Turma 2
              </button>
            </div>

            <button
              onClick={() => setTurmaAtiva(turmaAtiva === 2 ? 1 : 2)}
              aria-label="Próxima turma"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 hover:border-yellow-400/60 hover:bg-yellow-400/10 text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Turma 1 */}
          {turmaAtiva === 1 && (
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-500">
              {[
                { src: "/lovable-uploads/video-osvaldo-araki.mp4", border: "from-cyan-400 to-cyan-500", nome: "Osvaldo Araki, Médico" },
                { src: "/lovable-uploads/video-max-2.mp4", border: "from-yellow-400 to-amber-400", nome: "Max Mauro, Engenheiro" },
                { src: "/lovable-uploads/video-karina.mp4", border: "from-emerald-400 to-green-500", nome: "Karina, Médica" },
              ].map((d, i) => (
                <div key={i} className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300">
                  <div className={`h-1 w-full bg-gradient-to-r ${d.border}`}></div>
                  <div className="p-2">
                    <video
                      controls
                      preload="metadata"
                      className="w-full rounded-xl object-cover"
                      style={{ aspectRatio: '9/16' }}
                    >
                      <source src={d.src} type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  </div>
                  <div className="px-5 pb-5 pt-2 flex items-center gap-2">
                    <Quote className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-semibold text-sm">{d.nome}</span>
                    <span className="ml-auto text-xs text-gray-400 uppercase tracking-wider">Turma 1</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Turma 2 - Template */}
          {turmaAtiva === 2 && (
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-500">
              {[
                { border: "from-fuchsia-400 to-pink-500", label: "Depoimento 1" },
                { border: "from-orange-400 to-red-500", label: "Depoimento 2" },
                { border: "from-cyan-400 to-blue-500", label: "Depoimento 3" },
              ].map((d, i) => (
                <div key={i} className="group relative bg-white/[0.04] backdrop-blur-sm border border-dashed border-white/15 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-all duration-300">
                  <div className={`h-1 w-full bg-gradient-to-r ${d.border}`}></div>
                  <div className="p-2">
                    <div
                      className="w-full rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex flex-col items-center justify-center text-center px-4"
                      style={{ aspectRatio: '9/16' }}
                    >
                      <div className="w-14 h-14 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center mb-4">
                        <Quote className="w-6 h-6 text-yellow-400" />
                      </div>
                      <p className="text-white font-bold text-base mb-1">Em breve</p>
                      <p className="text-gray-400 text-xs">Depoimento da Turma 2</p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-2 flex items-center gap-2">
                    <Quote className="w-4 h-4 text-yellow-400" />
                    <span className="text-white font-semibold text-sm">{d.label}</span>
                    <span className="ml-auto text-xs text-gray-400 uppercase tracking-wider">Turma 2</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10 md:mt-14">
            <Button
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 md:px-12 py-7 md:py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] w-full md:w-auto transition-all duration-300 hover:scale-105"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>


      {/* Problem Section */}
      <section className="relative py-24 md:py-32 px-4 bg-black overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-yellow-400/[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-6 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              O problema real
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-3xl mx-auto">
              Você não é <span className="italic font-medium text-gray-500 line-through decoration-yellow-400/70">"velho demais"</span><br className="hidden md:block" /> pra tecnologia
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Só estava aprendendo do jeito errado. Talvez você já tenha tentado:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-16">
            {[
              { n: "01", icon: "🔍", title: "Aprendeu sozinho", body: <>Mexeu no ChatGPT, mas até agora não viu a grande transformação no trabalho que prometem.</> },
              { n: "02", icon: "📹", title: "Assistiu um curso", body: <>Assistiu um curso, mas era teórico ou técnico demais. E quando teve dificuldade, <span className="text-white font-medium">não tinha ninguém pra ajudar.</span></> },
              { n: "03", icon: "🙋", title: "Pediu ajuda pra alguém mais novo", body: <>Ligou para o filho, sobrinho ou estagiário, mas não quer mais depender dos outros para tecnologia. </> },
            ].map((c) => (
              <div
                key={c.n}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-yellow-400/40 hover:from-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <span className="absolute top-6 right-6 font-poppins font-extrabold text-5xl text-white/[0.06] group-hover:text-yellow-400/20 transition-colors tracking-tight">
                  {c.n}
                </span>
                <div className="relative w-12 h-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <span className="text-2xl">{c.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-poppins">{c.title}</h3>
                <p className="text-gray-400 leading-relaxed text-[15px]">{c.body}</p>
              </div>
            ))}
          </div>

          {/* Pull quote */}
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-lg md:text-xl text-white/80 font-light italic leading-relaxed">
              "Tentei tudo. Mas continuo travando nas mesmas coisas."
            </p>
            <div className="mt-4 w-12 h-px bg-yellow-400/60 mx-auto"></div>
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:shadow-[0_0_55px_rgba(250,204,21,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-black via-[#0a0a0f] to-black text-white overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-400/[0.08] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-yellow-400/[0.05] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-6 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              A solução
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Criei um <span className="text-cyan-400">"Método Único"</span><br className="hidden md:block" /> para aprender IA do zero
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              E se existisse um jeito tão fácil pra aprender IA que até quem tem dificuldade com tecnologia conseguisse usar como um parceiro de verdade?
            </p>
          </div>

          {/* Credential line */}
          <div className="flex items-center gap-4 max-w-3xl mx-auto mb-14">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/15"></div>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.18em] font-medium text-center whitespace-nowrap">
              3 anos de estudo · Mentoria CEO Adapta · +500 alunos
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/15"></div>
          </div>

          {/* Method pillars */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-16 max-w-5xl mx-auto">
            {[
              { n: "01", icon: "👥", title: "Mentoria Presencial em Grupo", body: "Aprenda como você sempre aprendeu: na sala de aula e com outros alunos", accent: "cyan", grad: "from-cyan-400 to-cyan-500", tint: "bg-cyan-400/10 border-cyan-400/20" },
              { n: "02", icon: "🎯", title: "Aulas Dinâmicas", body: "Aulas divertidas e com linguagem simples. Eu tenho 15 anos, você acha mesmo que eu gosto de jargão técnico?", accent: "yellow", grad: "from-yellow-400 to-amber-400", tint: "bg-yellow-400/10 border-yellow-400/20" },
              { n: "03", icon: "⚡", title: "Prática Imediata", body: "Testamos ao vivo técnicas de ChatGPT e outras IAs. ", accent: "emerald", grad: "from-emerald-400 to-green-500", tint: "bg-emerald-400/10 border-emerald-400/20" },
            ].map((c) => (
              <div
                key={c.n}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/25 hover:from-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${c.grad}`}></div>
                <span className="absolute top-6 right-6 font-poppins font-extrabold text-5xl text-white/[0.06] group-hover:text-white/15 transition-colors tracking-tight">
                  {c.n}
                </span>
                <div className={`relative w-14 h-14 rounded-2xl ${c.tint} border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <span className="text-3xl">{c.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-poppins">{c.title}</h3>
                <p className="text-gray-400 leading-relaxed text-[15px]">{c.body}</p>
              </div>
            ))}
          </div>

          {/* Closing statement */}
          <div className="relative max-w-3xl mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-yellow-400/5 to-cyan-400/10 blur-2xl rounded-2xl"></div>
            <div className="relative text-center bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10">
              <p className="text-lg md:text-2xl font-bold text-white leading-snug">
                Esta é sua chance de estar entre os que vão <span className="text-cyan-400">dominar o que vai definir os próximos anos</span> do mercado.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:shadow-[0_0_55px_rgba(250,204,21,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>

      </section>

      {/* 3 Formas de Participar */}
      <section className="relative py-24 md:py-32 px-4 bg-black overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-yellow-400/[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-6 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              Flexibilidade total
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              As <span className="text-yellow-400">3 formas</span> de participar das aulas
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A inscrição na Imersão te dá acesso a participar das aulas de 3 formas
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🏫",
                title: "Presencial na sala de aula",
                body: "Participe ao vivo na sala de aula, interaja com o professor e outros alunos presencialmente.",
                image: "/lovable-uploads/presencial-sala.jpg",
                accent: "yellow",
                grad: "from-yellow-400 to-amber-400",
                tint: "bg-yellow-400/10 border-yellow-400/20",
              },
              {
                icon: "💻",
                title: "Online pelo Meet",
                body: "Acompanhe todas as aulas em tempo real pelo Google Meet, do conforto da sua casa ou escritório.",
                image: "/lovable-uploads/online-meet.jpg",
                accent: "cyan",
                grad: "from-cyan-400 to-blue-500",
                tint: "bg-cyan-400/10 border-cyan-400/20",
              },
              {
                icon: "📹",
                title: "Gravações",
                body: "Não pode assistir ao vivo? Todas as aulas ficam gravadas para você assistir quando quiser.",
                image: "/lovable-uploads/gravacoes.jpg",
                accent: "emerald",
                grad: "from-emerald-400 to-green-500",
                tint: "bg-emerald-400/10 border-emerald-400/20",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 hover:from-white/[0.06] transition-all duration-300"
              >
                {/* Accent top bar */}
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${c.grad}`}></div>

                {/* Image area */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-white/[0.03] text-gray-500 text-sm font-medium gap-2"><span class="text-4xl">${c.icon}</span><span>${c.title}</span></div>`;
                      }
                    }}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  {/* Icon badge */}
                  <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl ${c.tint} border flex items-center justify-center`}>
                    <span className="text-xl">{c.icon}</span>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">{c.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <Button
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:shadow-[0_0_55px_rgba(250,204,21,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
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
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-red-400">OUTROS CURSOS</p>
              </div>
              <div className="p-5 md:p-6 text-center bg-blue-500/10 border-b-2 border-blue-400">
                <p className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-blue-400">MENTORIA IA NA PRÁTICA</p>
              </div>
            </div>

            {/* Rows */}
            {[
              { left: "Vídeo gravado", right: "Ao vivo (presencial ou online) + gravações" },
              { left: "Você fica com dúvidas", right: "Professor 'pega na mão' e te ajuda" },
              { left: "Técnico demais", right: "Foco no que você realmente vai usar" },
              { left: "Excesso de teoria", right: "Aulas dinâmicas e práticas" },
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
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              5 Encontros • Presencial ou Online
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Cronograma das aulas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              {
                day: 1,
                date: "05/08",
                title: "Pegando na sua mão para mexer no ChatGPT",
                items: [
                  "Botões e funções das IAs",
                  "Como criar sua conta e começar do zero",
                  "Primeiros comandos práticos",
                ],
                accent: "from-cyan-400 to-cyan-500",
                bg: "bg-cyan-400/10",
              },
              {
                day: 2,
                date: "12/08",
                title: "O que é Inteligência Artificial",
                items: [
                  "5 princípios básicos para interagir com IA",
                  'Como usar o "Filtro da Verdade" para evitar respostas falsas',
                  "Como, quando e porque usar cada IA",
                ],
                accent: "from-yellow-400 to-amber-400",
                bg: "bg-yellow-400/10",
              },
              {
                day: 3,
                date: "19/08",
                title: "Como criar Prompts Magnéticos",
                items: [
                  "A estrutura 3IAI para prompts perfeitos",
                  "Como criar um bom contexto",
                  "O maior erro que iniciantes cometem ao usar IAs",
                ],
                accent: "from-emerald-400 to-green-500",
                bg: "bg-emerald-400/10",
              },
              {
                day: 4,
                date: "26/08",
                title: "As 5 Práticas da IA Generativa",
                items: [
                  "Pesquisando artigos e jurisprudência com IA",
                  "4 técnicas para ter ideias com IA",
                  "4 técnicas para aprender com IA",
                  "2 técnicas para gerir com IA",
                  "6 técnicas para escrever com IA",
                ],
                accent: "from-fuchsia-400 to-pink-500",
                bg: "bg-fuchsia-400/10",
              },
              {
                day: 5,
                date: "02/09",
                title: "Tira Dúvidas e Práticas no Seu Trabalho",
                items: [
                  "Exemplos reais dos alunos",
                  "Sessão de dúvidas ao vivo",
                  "Resumão de toda a imersão",
                ],
                accent: "from-orange-400 to-red-500",
                bg: "bg-orange-400/10",
              },
            ].map((d) => (
              <div
                key={d.day}
                className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${d.accent} rounded-t-2xl`}></div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${d.bg} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{String(d.day).padStart(2, "0")}</span>
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    {d.date} • 19h
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 leading-snug min-h-[3.5rem]">
                  {d.title}
                </h3>
                <ul className="space-y-2 text-gray-300 flex-1">
                  {d.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="text-cyan-400 flex-shrink-0 mt-1" size={14} />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
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

      {/* Para Quem é a Imersão Section */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-5 bg-yellow-400/10 border border-yellow-400/40 rounded-full">
              <span className="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase">Para quem é</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-5 leading-tight">
              Como sei que a <span className="text-yellow-400">Imersão</span> é para mim?
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              Criamos a Imersão para <span className="text-white font-semibold">profissionais especializados, empresários e fundadores, chefes, diretores e gestores.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: imersaoProfissional,
                title: "Profissionais especializados",
                desc: "Não importa o setor — médico, advogado, industrial, consultor. O que importa é que você já decidiu que IA vai fazer parte.",
              },
              {
                img: imersaoEmpresario,
                title: "Empresários e Fundadores",
                desc: "Você já sabe que empresas que não usarem IA nos seus processos vão ficar para trás. E quer mudar isso urgentemente.",
              },
              {
                img: imersaoGestor,
                title: "Chefes, Diretores e Gestores",
                desc: "Você já está além do ChatGPT, mas ainda não sabe como colocar IA no seu trabalho. A Imersão muda isso.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-yellow-400/40 transition-all duration-500 group shadow-2xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <h3 className="text-2xl md:text-[26px] font-extrabold text-white leading-tight mb-3">
                      {p.title}
                    </h3>
                    <div className="h-[2px] w-16 bg-yellow-400 mb-4" />
                    <p className="text-sm md:text-[15px] text-gray-200 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
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

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 mb-5 border border-yellow-400/40 rounded-full">
              <span className="text-yellow-400 text-xs font-bold tracking-[0.2em] uppercase">Presentes Exclusivos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              Bônus ao adquirir sua <span className="text-yellow-400">Vaga</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
              Garantindo sua vaga hoje, você leva também estes <span className="text-white font-semibold">bônus exclusivos</span> para acelerar ainda mais seus resultados:
            </p>
          </div>

          {(() => {
            const bonuses = [
              { img: webinarGravacao, title: "Acesso às gravações completas da Imersão", desc: "Acesso completo às gravações das aulas, em alta qualidade e editadas para você assistir quantas vezes quiser. Você poderá rever todos os conteúdos e aplicações práticas das aulas." },
              { img: webinarBiblioteca, title: "Mapas Mentais", desc: "5 mapas mentais dos principais aprendizados da Imersão para você estudar e revisar de forma visual e prática." },
              { img: webinarWhatsapp, title: "Grupo no WhatsApp", desc: "Um grupo com o professor e os alunos para tirar dúvidas, trocar experiências e fazer networking de alto nível." },
              { img: webinarManual, title: "Workbook Exclusivo", desc: "Um \"guia de bolso de IA\" que te acompanhará durante e depois da Imersão, para garantir que você extraia o máximo valor e resultado de tudo o que faremos durante as aulas." },
            ];
            return (
              <div className="space-y-6 md:space-y-8 mb-12">
                {bonuses.map((b, i) => {
                  const reverse = i % 2 === 1;
                  return (
                    <div key={i} className={`grid md:grid-cols-5 gap-5 md:gap-7 items-stretch ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
                      {/* Text card */}
                      <div className="md:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-7 md:p-8 flex flex-col justify-center backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span className="text-emerald-300 text-xs font-bold tracking-wider uppercase">Bônus {i + 1}</span>
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-[26px] font-extrabold text-white leading-tight mb-3">
                          {b.title}
                        </h3>
                        <p className="text-gray-400 text-[15px] md:text-base leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                      {/* Image card */}
                      <div className="md:col-span-3 relative rounded-2xl overflow-hidden border border-white/10 min-h-[260px] md:min-h-[300px] group">
                        <img src={b.img} alt={b.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                        {/* Orange corner ribbon */}
                        <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden pointer-events-none">
                          <div className="absolute top-[26px] -left-[34px] w-[160px] rotate-[-45deg] bg-gradient-to-r from-orange-600 to-orange-500 text-white text-center font-extrabold text-sm py-1.5 tracking-widest shadow-lg">
                            BÔNUS
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
          
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
      <section id="oferta" className="pt-24 pb-16 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white relative overflow-hidden">
        {/* subtle yellow glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block bg-red-500 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full mb-6">
              🔥 LOTE 2 DISPONÍVEL 🔥
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
              Garanta sua vaga na melhor mentoria de IA para profissionais
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* LEFT — Card */}
            <div className="relative">
              <span className="absolute -top-3 left-6 z-10 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg">
                MELHOR CONDIÇÃO
              </span>
              <div className="bg-white text-gray-900 rounded-2xl p-6 md:p-8 shadow-2xl">
                {/* Item 1 */}
                <div className="mb-5">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="font-poppins text-lg md:text-xl font-bold">Ingresso Imersão IA Para Todos 3</h3>
                    <span className="text-gray-400 line-through text-sm md:text-base font-semibold whitespace-nowrap">R$1700</span>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Acesso total às 5 aulas presenciais ou online",
                      "Acesso aos Materiais Pós-imersão",
                      "Brindes Exclusivos",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                        <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-dashed border-gray-200 my-4" />

                {/* Bonus 1 */}
                <div className="mb-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="font-poppins text-base md:text-lg font-bold">Transmissão AO VIVO + Gravações</h4>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">🎁 BÔNUS</span>
                  </div>
                  <p className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Acesso a todas as gravações do evento</span>
                  </p>
                </div>

                <div className="border-t border-dashed border-gray-200 my-4" />

                {/* Bonus 2 */}
                <div className="mb-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="font-poppins text-base md:text-lg font-bold">Grupo no WhatsApp</h4>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">🎁 BÔNUS</span>
                  </div>
                  <p className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Grupo exclusivo com o professor e alunos</span>
                  </p>
                </div>

                <div className="border-t border-dashed border-gray-200 my-4" />

                {/* Bonus 3 */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="font-poppins text-base md:text-lg font-bold">Workbook Exclusivo</h4>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">🎁 BÔNUS</span>
                  </div>
                  <p className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Um "caderno de IA" que te ajuda a extrair o máximo valor e resultado de tudo que faremos durantes as 5 aulas.</span>
                  </p>
                </div>

                {/* Price */}
                <div className="border-t border-gray-200 pt-4 mb-5">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="bg-yellow-300 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">85% OFF</span>
                    <span className="text-gray-400 line-through font-semibold">R$1700</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    <span className="font-semibold">R$247 à vista</span> ou <span className="font-extrabold text-gray-900 text-lg md:text-xl">12x R$26</span>
                  </p>
                </div>

                <Button
                  onClick={() => handleCtaClick("https://pay.hotmart.com/N100239403C?off=b9iztv2i")}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold text-base md:text-lg py-6 rounded-full shadow-lg transition-colors"
                >
                  Garantir Ingresso
                </Button>


                <div className="flex items-center justify-center gap-6 text-xs md:text-sm text-gray-600 mt-4">
                  <div className="flex items-center gap-1.5">
                    <Lock className="text-gray-500" size={14} />
                    <span>Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="text-gray-500" size={14} />
                    <span>7 Dias de Garantia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Ticket card + gifts */}
            <div className="flex flex-col items-center justify-start gap-1 md:gap-2 md:pt-8">
              <div className="relative flex items-center justify-center w-full">
                <img
                  src={imersaoTicketCard}
                  alt="Passaporte Imersão IA Para Todos"
                  loading="lazy"
                  className="w-full max-w-[340px] h-auto drop-shadow-[0_30px_60px_rgba(250,204,21,0.25)]"
                />
                <div className="absolute right-0 md:-right-4 bottom-10 flex flex-col gap-2">
                  <span className="bg-white text-gray-900 text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    ● 5 aulas ao vivo
                  </span>
                  <span className="bg-white text-gray-900 text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    ● Brindes exclusivos
                  </span>
                </div>
              </div>
              <img
                src={imersaoGiftsTrio}
                alt="Bônus exclusivos da Imersão"
                loading="lazy"
                className="w-full max-w-[340px] h-auto -mt-24 md:-mt-32 relative z-10"
              />

            </div>

          </div>
        </div>
      </section>




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
                  A imersão acontecerá em 5 quartas-feiras, às 19h (presencial ou online — você escolhe):<br/>
                  <strong>• 5 de Agosto de 2026</strong> - Dia 1: Pegando na sua mão para mexer no ChatGPT<br/>
                  <strong>• 12 de Agosto de 2026</strong> - Dia 2: O que é Inteligência Artificial<br/>
                  <strong>• 19 de Agosto de 2026</strong> - Dia 3: Como criar Prompts Magnéticos<br/>
                  <strong>• 26 de Agosto de 2026</strong> - Dia 4: As 5 Práticas da IA Generativa<br/>
                  <strong>• 2 de Setembro de 2026</strong> - Dia 5: Tira Dúvidas e Práticas no Seu Trabalho
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
                <span className="font-bold text-xl text-black">Como funciona a opção presencial ou online?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Você escolhe! Pode participar presencialmente ou online via Zoom — basta ter o Zoom instalado caso opte pelo online. Após a compra, enviaremos todas as instruções pelo WhatsApp.
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
