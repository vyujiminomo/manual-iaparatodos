
import garantiaSelo from "@/assets/garantia-selo.png";
import ofertaImagem from "@/assets/oferta-imagem.png";
import { Button } from "@/components/ui/button";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Check, Shield, Lock, ChevronLeft, ChevronRight, Quote, X, Star, Sparkles } from "lucide-react";
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
import mapasMentaisComposto from "@/assets/mapas-mentais-composto.jpg.asset.json";
import mapaMental1 from "@/assets/mapa-mental-1.png";
import mapaMental2 from "@/assets/mapa-mental-2.png";
import mapaMental3 from "@/assets/mapa-mental-3.png";
import mapaMental4 from "@/assets/mapa-mental-4.png";
import bonusSessaoIndividual from "@/assets/sessao-individual-vitor.png.asset.json";
import imersaoHeroBg from "@/assets/imersao-hero-bg.jpg";
import imersaoTicketCard from "@/assets/imersao-ticket-card.png";
import imersaoGiftsTrio from "@/assets/imersao-gifts-trio.png";
import fmiPublicoEnsinoMedio from "@/assets/fmi-publico-ensino-medio-new.jpg";
import fmiPublicoVestibulando from "@/assets/fmi-publico-vestibulando-new.jpg";
import fmiPublicoAmbicioso from "@/assets/fmi-publico-ambicioso-new.jpg";
import local1 from "@/assets/local-1.jpg";
import local2 from "@/assets/local-2.jpg";
import local3 from "@/assets/local-3.jpg";
import local4 from "@/assets/local-4.jpg";
import onlineMeetImg from "@/assets/online-meet.jpg";
import gravacoesImg from "@/assets/gravacoes.jpg.asset.json";
import presencialSalaAulaImg from "@/assets/presencial-sala-aula.png.asset.json";

const Fmi = () => {
  const [turmaAtiva, setTurmaAtiva] = useState<1 | 2>(1);
  

  useDynamicMeta({
    title: "FMI+ | Estude menos e tire médias +9 - Vitor Yuji",
    description: "Curso de IA para estudantes: Foco, Método de Estudos e IA. Estude menos horas, tire notas altas e tenha tempo para viver a adolescência.",
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
    <div
      className="min-h-screen bg-[#0a0a0a] font-sans text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "100% 36px",
      }}
    >

      {/* Hero Section - Editorial cinematic */}
      <section className="relative bg-[#0a0a0a] text-white overflow-hidden min-h-[92vh] flex flex-col">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={imersaoHeroBg}
            alt="Imersão IA Na Prática"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          {/* Gradient overlays - strong left blur fade like Adapta Summit */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/30 via-transparent to-[#0a0a0a]"></div>
        </div>

        {/* Decorative left blur masses */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-60 w-[900px] h-[900px] bg-[#0a0a0a]/70 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 left-32 w-[500px] h-[500px] bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex-1 flex items-center justify-start px-5 md:px-10 lg:px-20 xl:pl-[12%] pt-10 md:pt-16 pb-16">
          <div className="w-full max-w-xl lg:max-w-[580px]">
            {/* Date badge */}
            <div className="inline-flex items-center gap-2 bg-[#0a0a0a]/70 backdrop-blur-sm border border-white/[0.08] text-white/90 font-sans font-medium tracking-wide text-xs md:text-sm px-4 py-2 rounded-md mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047] animate-pulse"></span>
              CURSO ONLINE • FMI+ PARA ESTUDANTES
            </div>

            {/* Small badge FMI+ */}
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F97316]/10 border border-[#F97316]/30">
              <Sparkles className="w-4 h-4 text-[#F97316]" />
              <span className="text-[#F97316] font-bold tracking-widest text-sm">FMI+</span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight mb-5">
              Estude menos horas e{" "}
              <span className="relative inline-block">
                <span className="absolute inset-x-0 bottom-1 h-[0.55em] bg-[#FDE047] -z-0 -rotate-1 rounded-sm"></span>
                <span className="relative z-10 text-[#0a0a0a]">tire médias +9</span>
              </span>
            </h1>


            {/* Description */}
            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-6 max-w-xl">
              O método que uso para tirar <span className="font-semibold text-white">notas altas estudando 60 minutos por dia</span> — e ainda ter tempo para criar projetos e viver a adolescência.
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-8">
              {[
                "Foco de ouro sem esforço",
                "Método de estudos comprovado",
                "IA aplicada aos estudos (Gizmo, mapas mentais, flashcards)",
                "Mais tempo livre e menos cansaço",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base text-white/80">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#FDE047]/15 border border-[#F97316]/60 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#F97316]" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Button
              onClick={scrollToOffer}
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold tracking-wide text-base md:text-lg px-10 py-7 rounded-full transition-all duration-300 shadow-[0_0_40px_rgba(249,115,22,0.45)] hover:shadow-[0_0_55px_rgba(249,115,22,0.75)] w-full sm:w-auto"
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
                <path d="M10 2L12.5 7.5L18 8L14 12.5L15 18L10 15L5 18L6 12.5L2 8L7.5 7.5L10 2Z" fill="#F97316" />
              </svg>
              <p className="text-blue-400 text-sm md:text-base lg:text-xl font-medium text-center">
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
      <section className="py-16 md:py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FDE047]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-[#F97316] mb-4 bg-[#F97316]/10 px-4 py-2 rounded-full border border-[#F97316]/20">
              Como será o FMI+
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Sinta a experiência das aulas
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {[
              {
                label: "Aulas ao vivo",
                accent: "from-blue-400 to-blue-500",
                placeholder: "imersao-foto-1.jpg",
              },
              {
                label: "Mentoria em grupo",
                accent: "from-yellow-400 to-amber-400",
                placeholder: "imersao-foto-2.jpg",
              },
              {
                label: "Networking",
                accent: "from-yellow-400 to-amber-500",
                placeholder: "imersao-foto-3.jpg",
              },
              {
                label: "Prática guiada",
                accent: "from-orange-400 to-orange-500",
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
                        parent.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-white/[0.03] text-gray-400 text-sm font-medium">${item.label}</div>`;
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
      <section className="relative py-20 md:py-28 px-4 bg-[#0a0a0a] overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-blue-400 mb-5 bg-blue-400/10 px-5 py-2 rounded-full border border-blue-400/20">
              Provas reais
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Confira os depoimentos <br className="hidden md:block" />
              <span className="text-[#F97316]">dos alunos</span>
            </h2>
          </div>

          {/* Turma switcher */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-10">
            <button
              onClick={() => setTurmaAtiva(turmaAtiva === 1 ? 2 : 1)}
              aria-label="Turma anterior"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/60 border border-white/10 hover:border-[#F97316]/60 hover:bg-[#F97316]/10 text-white flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex bg-white/60 border border-white/10 rounded-full p-1 backdrop-blur-sm">
              <button
                onClick={() => setTurmaAtiva(1)}
                className={`px-5 md:px-7 py-2.5 rounded-full text-sm md:text-base font-bold transition-all ${
                  turmaAtiva === 1
                    ? "bg-[#FDE047] text-black shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                Turma 1
              </button>
              <button
                onClick={() => setTurmaAtiva(2)}
                className={`px-5 md:px-7 py-2.5 rounded-full text-sm md:text-base font-bold transition-all ${
                  turmaAtiva === 2
                    ? "bg-[#FDE047] text-black shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                Turma 2
              </button>
            </div>

            <button
              onClick={() => setTurmaAtiva(turmaAtiva === 2 ? 1 : 2)}
              aria-label="Próxima turma"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/60 border border-white/10 hover:border-[#F97316]/60 hover:bg-[#F97316]/10 text-white flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Turma 1 */}
          {turmaAtiva === 1 && (
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-500">
              {[
                { src: "/lovable-uploads/video-osvaldo-araki.mp4", border: "from-blue-400 to-blue-500", nome: "Osvaldo Araki, Médico" },
                { src: "/lovable-uploads/video-max-2.mp4", border: "from-yellow-400 to-amber-400", nome: "Max Mauro, Engenheiro" },
                { src: "/lovable-uploads/video-karina.mp4", border: "from-yellow-400 to-amber-500", nome: "Karina, Médica" },
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
                    <Quote className="w-4 h-4 text-[#F97316]" />
                    <span className="text-white font-semibold text-sm">{d.nome}</span>
                    <span className="ml-auto text-xs text-white/60 uppercase tracking-wider">Turma 1</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Turma 2 - Template */}
          {turmaAtiva === 2 && (
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-500">
              {[
                { border: "from-orange-400 to-orange-500", label: "Depoimento 1" },
                { border: "from-orange-400 to-red-500", label: "Depoimento 2" },
                { border: "from-blue-400 to-blue-600", label: "Depoimento 3" },
              ].map((d, i) => (
                <div key={i} className="group relative bg-white/[0.04] backdrop-blur-sm border border-dashed border-white/[0.08] rounded-2xl overflow-hidden hover:border-[#F97316]/40 transition-all duration-300">
                  <div className={`h-1 w-full bg-gradient-to-r ${d.border}`}></div>
                  <div className="p-2">
                    <div
                      className="w-full rounded-xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex flex-col items-center justify-center text-center px-4"
                      style={{ aspectRatio: '9/16' }}
                    >
                      <div className="w-14 h-14 rounded-full bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center mb-4">
                        <Quote className="w-6 h-6 text-[#F97316]" />
                      </div>
                      <p className="text-white font-bold text-base mb-1">Em breve</p>
                      <p className="text-white/60 text-xs">Depoimento da Turma 2</p>
                    </div>
                  </div>
                  <div className="px-5 pb-5 pt-2 flex items-center gap-2">
                    <Quote className="w-4 h-4 text-[#F97316]" />
                    <span className="text-white font-semibold text-sm">{d.label}</span>
                    <span className="ml-auto text-xs text-white/60 uppercase tracking-wider">Turma 2</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-10 md:mt-14">
            <Button
              onClick={scrollToOffer}
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-base md:text-lg px-8 md:px-12 py-7 md:py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] w-full md:w-auto transition-all duration-300 hover:scale-105"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>


      {/* Problem Section - Você / Mas quer */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[600px] bg-[#FDE047]/[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-14 md:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-6 bg-[#F97316]/10 px-4 py-2 rounded-full border border-[#F97316]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047] animate-pulse"></span>
              Onde você está × onde quer chegar
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-3xl mx-auto">
              Você <span className="text-gray-400">hoje</span> vs. o que você <span className="text-[#F97316]">quer</span>
            </h2>
          </div>

          {/* Header row */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 mb-4 max-w-5xl mx-auto">
            <div className="flex items-center gap-3 px-6">
              <div className="w-8 h-8 rounded-lg bg-red-400/10 border border-red-400/20 flex items-center justify-center">
                <X className="text-red-400" size={16} strokeWidth={3} />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">Hoje você...</span>
            </div>
            <div className="flex items-center gap-3 px-6">
              <div className="w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                <Check className="text-yellow-400" size={16} strokeWidth={3} />
              </div>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-400">Mas quer...</span>
            </div>
          </div>

          <div className="space-y-3 max-w-5xl mx-auto">
            {[
              { hoje: "Estuda muitas horas", quer: "Estudar menos e aprender mais" },
              { hoje: "Tem medo do 3º ano", quer: "Fazer do terceirão só revisão" },
              { hoje: "Não sabe direito que profissão seguir", quer: "Criar um currículo incrível na adolescência" },
              { hoje: "Sempre fala que 'não tem tempo porque vai estudar'", quer: "Ter mais tempo livre" },
              { hoje: "Se sente cansado(a) o tempo todo", quer: "Se sentir renovado(a) todos os dias" },
              { hoje: "Odeia estudar", quer: "Tornar o estudo mais divertido" },
              { hoje: "Não consegue lembrar do assunto por muito tempo", quer: "Memorizar tudo com facilidade" },
            ].map((row, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-3 md:gap-6">
                <div className="group relative bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 rounded-xl p-5 md:p-6 flex items-start gap-4 hover:border-red-400/30 transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-400/10 border border-red-400/20 flex items-center justify-center">
                    <X className="text-red-400" size={16} strokeWidth={3} />
                  </div>
                  <p className="text-white/75 leading-relaxed text-sm md:text-base">{row.hoje}</p>
                </div>
                <div className="group relative bg-gradient-to-b from-emerald-400/[0.06] to-white/[0.01] border border-yellow-400/20 rounded-xl p-5 md:p-6 flex items-start gap-4 hover:border-yellow-400/50 transition-all">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center">
                    <Check className="text-yellow-400" size={16} strokeWidth={3} />
                  </div>
                  <p className="text-white leading-relaxed text-sm md:text-base font-medium">{row.quer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              onClick={scrollToOffer}
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_55px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a] text-white overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400/[0.08] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#FDE047]/[0.05] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-6 bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              A solução
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              <span className="text-[#F97316]">FMI+</span>
            </h2>
            <p className="text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
              Os 3 pilares que uso para estudar 60min por dia e ainda tirar médias +9:
            </p>
          </div>

          {/* Credential line */}
          <div className="flex items-center gap-4 max-w-3xl mx-auto mb-14">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/15"></div>
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.18em] font-medium text-center whitespace-nowrap">
              Método testado por um estudante · Para estudantes
            </p>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/15"></div>
          </div>

          {/* Method pillars - FMI+ */}
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-16 max-w-5xl mx-auto">
            {[
              { n: "F", icon: "🎯", title: "Foco", body: "Técnicas para manter o foco de ouro nos estudos, mesmo com celular por perto. Descanse 3h em 20 minutos com a Yoga Nidra.", accent: "cyan", grad: "from-blue-400 to-blue-500", tint: "bg-blue-400/10 border-blue-400/20" },
              { n: "M", icon: "📚", title: "Método de Estudos", body: "O método que uso para memorizar tudo estudando 60min por dia. Faça do 3º ano só revisão.", accent: "yellow", grad: "from-yellow-400 to-amber-400", tint: "bg-[#F97316]/10 border-[#F97316]/20" },
              { n: "I", icon: "🤖", title: "IA nos Estudos", body: "Flashcards no Gizmo, mapas mentais automáticos e as melhores técnicas de IA para aprender mais rápido.", accent: "emerald", grad: "from-yellow-400 to-amber-500", tint: "bg-yellow-400/10 border-yellow-400/20" },
            ].map((c) => (
              <div
                key={c.n}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/25 hover:from-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${c.grad}`}></div>
                <span className="absolute top-6 right-6 font-poppins font-extrabold text-5xl text-white/[0.08] group-hover:text-white/20 transition-colors tracking-tight">
                  {c.n}
                </span>
                <div className={`relative w-14 h-14 rounded-2xl ${c.tint} border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <span className="text-3xl">{c.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white font-poppins">{c.title}</h3>
                <p className="text-white/60 leading-relaxed text-[15px]">{c.body}</p>
              </div>
            ))}
          </div>

          {/* After the immersion */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-center font-poppins font-bold text-2xl md:text-3xl text-white mb-8">
              Após o curso, você vai conseguir:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Criar flashcards inteligentes com o Gizmo",
                "Montar uma 'biblioteca de mapas mentais' de estudo",
                "Usar diversas técnicas de IA nos estudos",
                "Ter um foco de ouro na hora de estudar",
                "Descansar 3h em 20 minutos com a 'Yoga Nidra'",
                "Criar projetos interessantes na adolescência",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-4">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#FDE047]/15 border border-[#F97316]/60 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#F97316]" strokeWidth={3} />
                  </span>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={scrollToOffer}
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_55px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>

      </section>

      {/* 3 Formas de Participar */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a] overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FDE047]/[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-6 bg-[#F97316]/10 px-4 py-2 rounded-full border border-[#F97316]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047] animate-pulse"></span>
              Flexibilidade total
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              As <span className="text-[#F97316]">3 formas</span> de participar das aulas
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              A inscrição no FMI+ te dá acesso às aulas em 3 formatos diferentes
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "💻",
                title: "Ao vivo pelo Meet",
                body: "Acompanhe todas as aulas em tempo real pelo Google Meet, do conforto de casa e podendo tirar dúvidas ao vivo.",
                image: onlineMeetImg,
                objectPosition: "15% center",
                accent: "cyan",
                grad: "from-blue-400 to-blue-600",
                tint: "bg-blue-400/10 border-blue-400/20",
              },
              {
                icon: "📹",
                title: "Gravações completas",
                body: "Não pode assistir ao vivo? Todas as aulas ficam gravadas para você assistir e revisar quando quiser.",
                image: gravacoesImg.url,
                objectPosition: "85% center",
                accent: "emerald",
                grad: "from-yellow-400 to-amber-500",
                tint: "bg-yellow-400/10 border-yellow-400/20",
              },
              {
                icon: "📚",
                title: "Materiais + Workbook",
                body: "Todos os materiais, mapas mentais e workbook ficam disponíveis para você estudar no seu tempo.",
                image: presencialSalaAulaImg.url,
                accent: "yellow",
                grad: "from-yellow-400 to-amber-400",
                tint: "bg-[#F97316]/10 border-[#F97316]/20",
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
                    style={{ objectPosition: (c as any).objectPosition || "center center" }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      const parent = e.currentTarget.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center bg-white/[0.03] text-gray-400 text-sm font-medium gap-2"><span class="text-4xl">${c.icon}</span><span>${c.title}</span></div>`;
                      }
                    }}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent"></div>
                  {/* Icon badge */}
                  <div className={`absolute bottom-4 left-4 w-10 h-10 rounded-xl ${c.tint} border flex items-center justify-center`}>
                    <span className="text-xl">{c.icon}</span>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">{c.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-14">
            <Button
              onClick={scrollToOffer}
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_55px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a] overflow-hidden">
        {/* Background atmosphere — matches "3 formas" / Cronograma */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-400/[0.05] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400 mb-6 bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Comparativo
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Estudar sozinho <span className="text-gray-400">vs.</span> estudar com <span className="text-[#F97316]">FMI+</span>
            </h2>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* OUTROS CURSOS */}
            <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-400 to-red-500"></div>
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/[0.08]">
                  <div className="w-10 h-10 rounded-xl bg-red-400/10 border border-red-400/20 flex items-center justify-center">
                    <X className="text-red-400" size={20} strokeWidth={3} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-poppins">Estudando sozinho</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Muitas horas travado no caderno",
                    "Estuda muito e esquece rápido",
                    "Sem foco (celular vencendo)",
                    "Cansaço constante",
                    "Sem projetos, sem tempo livre",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60 text-sm md:text-base">
                      <X className="text-red-400/70 flex-shrink-0 mt-0.5" size={16} strokeWidth={2.5} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* MENTORIA */}
            <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-amber-400"></div>
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center">
                    <Check className="text-[#F97316]" size={20} strokeWidth={3} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-poppins">Com o FMI+</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "60 minutos por dia rendem mais",
                    "Memoriza tudo com flashcards e mapas mentais",
                    "Foco de ouro (Yoga Nidra + método)",
                    "Descansa 3h em 20 min e recupera energia",
                    "Sobra tempo para projetos e viver a adolescência",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-white text-sm md:text-base">
                      <Check className="text-[#F97316] flex-shrink-0 mt-0.5" size={16} strokeWidth={3} />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-14">
            <Button
              onClick={scrollToOffer}
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_55px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>
      </section>



      {/* Curriculum Section */}
      <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4 bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
              4 Encontros — Ao vivo online + gravações
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              O que você vai aprender em cada encontro
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto text-sm md:text-base">
              Cada aula foi desenhada para te dar resultado imediato. Do foco à carreira, em 4 encontros intensos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                day: 1,
                title: "Foco",
                items: [
                  "Entre em um estado de foco profundo sempre que for estudar",
                  "Use a Yoga Nidra para descansar 3h em 20min",
                  "Como descansar (do jeito certo)",
                  "Tenha as melhores noites de sono da sua vida",
                ],
                accent: "from-cyan-400 to-blue-500",
                bg: "bg-cyan-400/10",
                border: "border-cyan-400/20",
                iconColor: "text-cyan-400",
              },
              {
                day: 2,
                title: "Método de Estudos",
                items: [
                  "A técnica da 'aula perfeita'",
                  "Flashcards do Gizmo",
                  "Os 2 tipos de conhecimento",
                  "A estratégia do 'Ciclo de Estudos' para saber o que vai estudar em cada dia",
                ],
                accent: "from-amber-300 to-yellow-400",
                bg: "bg-yellow-400/10",
                border: "border-yellow-400/20",
                iconColor: "text-yellow-400",
              },
              {
                day: 3,
                title: "IA",
                items: [
                  "Tudo que você precisa saber de IA para não ficar para trás",
                  "Como usar o Notebook LM",
                  "Os 10 jeitos de usar o ChatGPT para estudar",
                ],
                accent: "from-orange-400 to-amber-500",
                bg: "bg-orange-400/10",
                border: "border-orange-400/20",
                iconColor: "text-orange-400",
              },
              {
                day: 4,
                title: "Extracurricular",
                items: [
                  "Como montar um currículo incrível na adolescência",
                  "Como decidir a sua profissão",
                  "Como eu consegui, aos 15 anos, ser chamado para trabalhar em 3 empresas enormes (Adapta, BeConfident, João Bradley)",
                ],
                accent: "from-fuchsia-400 to-purple-500",
                bg: "bg-fuchsia-400/10",
                border: "border-fuchsia-400/20",
                iconColor: "text-fuchsia-400",
              },
            ].map((d) => (
              <div
                key={d.day}
                className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 flex flex-col"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${d.accent} rounded-t-2xl`}></div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${d.bg} border ${d.border} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{String(d.day).padStart(2, "0")}</span>
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-white/60 uppercase">
                    Encontro {d.day} — {d.day === 1 ? "06/07" : d.day === 2 ? "08/07" : d.day === 3 ? "13/07" : "15/07"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                  {d.title}
                </h3>
                <ul className="space-y-2 text-white/75 flex-1">
                  {d.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className={`${d.iconColor} flex-shrink-0 mt-1`} size={14} />
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
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Para Quem é a Imersão Section */}
      <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-5 bg-[#F97316]/10 border border-[#F97316]/40 rounded-full">
              <span className="text-[#F97316] text-xs font-bold tracking-[0.2em] uppercase">Para quem é</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-5 leading-tight">
              Como sei que o <span className="text-[#F97316]">FMI+</span> é para mim?
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              O FMI+ é para <span className="text-white font-semibold">estudantes do ensino médio, cursinho e vestibular</span> que querem estudar melhor — não mais horas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                img: fmiPublicoEnsinoMedio,
                title: "Estudantes do Ensino Médio",
                desc: "Você quer chegar no 3º ano só revisando, com o conteúdo já dominado e sem desespero na reta final.",
              },
              {
                img: fmiPublicoVestibulando,
                title: "Vestibulandos & Pré-ENEM",
                desc: "Você estuda muitas horas mas sente que rende pouco. Quer um método para memorizar tudo e ainda ter tempo livre.",
              },
              {
                img: fmiPublicoAmbicioso,
                title: "Adolescentes ambiciosos",
                desc: "Você quer notas altas, mas também construir projetos, viver a adolescência e criar um currículo incrível desde cedo.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden bg-[#0f172a] border border-white/10 hover:border-[#F97316]/40 transition-all duration-500 group shadow-2xl"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                    <h3 className="text-2xl md:text-[26px] font-extrabold text-white leading-tight mb-3">
                      {p.title}
                    </h3>
                    <div className="h-[2px] w-16 bg-[#FDE047] mb-4" />
                    <p className="text-sm md:text-[15px] text-white/80 leading-relaxed">
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
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-14">
            <div className="inline-block px-4 py-1.5 mb-5 border border-[#F97316]/40 rounded-full">
              <span className="text-[#F97316] text-xs font-bold tracking-[0.2em] uppercase">Presentes Exclusivos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
              Bônus ao adquirir sua <span className="text-[#F97316]">Vaga</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
              Garantindo sua vaga hoje, você leva também estes <span className="text-white font-semibold">bônus exclusivos</span> para acelerar ainda mais seus resultados:
            </p>
          </div>

          {(() => {
            const bonuses = [
              { img: webinarGravacao, title: "Gravações das aulas", desc: "Acesso completo às gravações das aulas, em alta qualidade e editadas para você assistir e revisar quantas vezes quiser." },
              { img: mapasMentaisComposto.url, images: [mapaMental2, mapaMental1, mapaMental3, mapaMental4], title: "Mapas mentais", desc: "Mapas mentais dos principais aprendizados do FMI+ para você estudar e revisar de forma visual e prática.", fit: "contain" as const },
              { img: webinarManual, title: "Workbook Guia Prático IA Na Prática", desc: "Um guia de bolso que te acompanha durante e depois das aulas, com todas as ferramentas, prompts e técnicas para aplicar imediatamente nos seus estudos." },
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
                        <p className="text-white/60 text-[15px] md:text-base leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                      {/* Image card */}
                      <div className={`md:col-span-3 relative rounded-2xl overflow-hidden border border-white/10 min-h-[260px] md:min-h-[300px] group ${(b as any).fit === 'contain' ? 'bg-[#0f1117]' : ''}`}>
                        {(b as any).images ? (
                          <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
                            {(b as any).images.map((src: string, idx: number) => (
                              <img key={idx} src={src} alt={`${b.title} ${idx + 1}`} className="w-full h-full object-cover" />
                            ))}
                          </div>
                        ) : (
                          <img src={b.img} alt={b.title} className={`absolute inset-0 w-full h-full ${(b as any).fit === 'contain' ? 'object-contain p-4' : 'object-cover'} transition-transform duration-700 group-hover:scale-105`} />
                        )}
                        {(b as any).fit !== 'contain' && !(b as any).images && <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/70 via-[#0a0a0a]/10 to-transparent" />}
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
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all duration-300"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* More Testimonials */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a] overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FDE047]/[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-6 bg-[#F97316]/10 px-4 py-2 rounded-full border border-[#F97316]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047] animate-pulse"></span>
              Depoimentos
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              O que dizem sobre <span className="text-[#F97316]">a Imersão</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { name: "Gabriela Coelho", initials: "GC", quote: "Depois da palestra, o ChatGPT começou a me entregar exatamente o que eu queria. Minhas amigas até dizem que meu ChatGPT é mais obediente que o delas kkkk.", grad: "from-blue-400 to-blue-600", tint: "bg-blue-400/10 border-blue-400/20" },
              { name: "Arthur Lucena", initials: "AL", quote: "Agora é uma ferramenta essencial pra mim. Mudou totalmente meu jeito de pesquisar e estudar.", grad: "from-yellow-400 to-amber-400", tint: "bg-[#F97316]/10 border-[#F97316]/20" },
              { name: "Bruno Correia", initials: "BC", quote: "Estou muito satisfeito em ter feito parte do Beta dessa imersão, que, com certeza, será um sucesso. Parabéns!", grad: "from-yellow-400 to-amber-500", tint: "bg-yellow-400/10 border-yellow-400/20" },
            ].map((t, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 hover:from-white/[0.06] transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${t.grad}`}></div>
                <div className="p-7 md:p-8">
                  <Quote className="text-[#F97316]/40 mb-4" size={32} strokeWidth={1.5} />

                  <div className="flex items-center gap-1 mb-5">
                    {[0,1,2,3,4].map((s) => (
                      <Star key={s} size={14} className="fill-yellow-400 text-[#F97316]" />
                    ))}
                  </div>

                  <p className="text-white/75 text-sm md:text-base leading-relaxed mb-6">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-white/[0.08]">
                    <div className={`w-10 h-10 rounded-xl ${t.tint} border flex items-center justify-center font-bold text-white text-xs`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">Aluno da Imersão</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button
              onClick={scrollToOffer}
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_55px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>
      </section>



      {/* Offer Section */}
      <section id="oferta" className="pt-24 pb-16 px-4 bg-[#0a0a0a] text-white relative overflow-hidden">
        {/* subtle yellow glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block bg-red-500 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full mb-6">
              🔥 VAGAS ABERTAS 🔥
            </span>
            <h2 className="font-poppins text-3xl md:text-5xl font-extrabold leading-tight max-w-3xl mx-auto">
              Garanta sua vaga no FMI+ e estude menos horas
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
                    <h3 className="font-poppins text-lg md:text-xl font-bold">Ingresso FMI+</h3>
                    <span className="text-white/60 line-through text-sm md:text-base font-semibold whitespace-nowrap">R$297</span>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Acesso total aos encontros ao vivo (online)",
                      "Método Foco + Método de Estudos + IA",
                      "Materiais completos pós-imersão",
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
                    <h4 className="font-poppins text-base md:text-lg font-bold">Gravações das aulas</h4>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">🎁 BÔNUS</span>
                  </div>
                  <p className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Acesso a todas as gravações para rever quando quiser</span>
                  </p>
                </div>

                <div className="border-t border-dashed border-gray-200 my-4" />

                {/* Bonus 2 */}
                <div className="mb-5">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="font-poppins text-base md:text-lg font-bold">Mapas mentais</h4>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">🎁 BÔNUS</span>
                  </div>
                  <p className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Mapas mentais visuais de todos os aprendizados do FMI+</span>
                  </p>
                </div>

                <div className="border-t border-dashed border-gray-200 my-4" />

                {/* Bonus 3 */}
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="font-poppins text-base md:text-lg font-bold">Workbook Guia Prático IA Na Prática</h4>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded whitespace-nowrap">🎁 BÔNUS</span>
                  </div>
                  <p className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <Check className="text-emerald-500 flex-shrink-0 mt-0.5" size={16} />
                    <span>Guia prático com todas as ferramentas e prompts para aplicar nos estudos.</span>
                  </p>
                </div>

                {/* Price */}
                <div className="border-t border-gray-200 pt-4 mb-5">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-gray-600 font-semibold">Total:</span>
                    <span className="bg-yellow-300 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">67% OFF</span>
                    <span className="text-white/60 line-through font-semibold">R$297</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    <span className="font-semibold">R$97 à vista</span> ou <span className="font-extrabold text-gray-900 text-lg md:text-xl">12x R$10</span>
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
                    <Lock className="text-gray-400" size={14} />
                    <span>Compra Segura</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="text-gray-400" size={14} />
                    <span>Garantia da 1º Aula</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Ticket card + gifts */}
            <div className="flex flex-col items-center justify-start gap-1 md:gap-2 md:pt-8">
              <div className="relative flex items-center justify-center w-full">
                <img
                  src={imersaoTicketCard}
                  alt="Passaporte Imersão IA Na Prática"
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
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a] overflow-hidden">
        {/* Background atmosphere — matches "3 formas" / Cronograma */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-400/[0.05] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-6 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Garantia Especial
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Garantia: Duas primeiras aulas <span className="text-[#F97316]">"De Graça"</span>
            </h2>
          </div>

          {/* Card */}
          <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-amber-500"></div>
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-[#FDE047]/15 rounded-full blur-2xl scale-90" />
                <img
                  src={garantiaSelo}
                  alt="Garantia da Primeira Aula 100%"
                  className="relative w-44 h-44 md:w-56 md:h-56 object-contain"
                />
              </div>

              <div className="text-center md:text-left">
                <h3 className="font-poppins text-white font-bold text-xl md:text-2xl mb-4">
                  Garantia das duas aulas
                </h3>
                <p className="text-white/60 leading-relaxed text-sm md:text-base mb-6">
                  Eu tenho tanta certeza que você vai adorar a Imersão que, se após a segunda aula, você{" "}
                  <span className="font-semibold text-white">não gostar da Imersão</span>, envie uma mensagem até{" "}
                  <span className="font-semibold text-white">13/08 pedindo reembolso</span>, e devolvemos{" "}
                  <span className="font-semibold text-white">100% do seu dinheiro</span>.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["100% reembolsável", "Sem burocracia"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/75 bg-white/60 border border-white/10 px-3 py-1.5 rounded-full">
                      <Check size={12} className="text-yellow-400" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Author Section */}
      <section className="relative py-24 md:py-32 px-4 bg-[#0a0a0a] text-white overflow-hidden">
        {/* Background atmosphere — matches "3 formas" / Cronograma */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#FDE047]/[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-6 bg-[#F97316]/10 px-4 py-2 rounded-full border border-[#F97316]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047] animate-pulse"></span>
              Seu Mentor
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Vitor <span className="text-[#F97316]">Yuji</span>
            </h2>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              15 anos · Sergipe · Nordeste
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Photos column */}
            <div className="md:col-span-5 space-y-5">
              <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-amber-400 z-10"></div>
                <div className="relative overflow-hidden">
                  <img
                    src="/lovable-uploads/vitor-yuji-palestra-2.png"
                    alt="Vitor Yuji apresentando"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-[#F97316]/10 border border-[#F97316]/20 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FDE047]"></span>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#F97316]">Palestrante</span>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-blue-600 z-10"></div>
                <img
                  src="/lovable-uploads/vitor-yuji-palestra-1.png"
                  alt="Vitor Yuji com alunos"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Bio column */}
            <div className="md:col-span-7">
              {/* Pull quote */}
              <p className="font-poppins text-xl md:text-2xl font-light leading-snug mb-8 text-white/90">
                Não é o mais famoso, mas é, com certeza, o mais
                <span className="text-[#F97316] font-semibold"> surpreendente palestrante de IA do Nordeste</span>.
              </p>

              {/* Stat cards */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {[
                  { value: "+150", label: "Alunos" },
                  { value: "10", label: "Palestras" },
                  { value: "4x", label: "TORNEIO DE ROBÓTICA" },
                ].map((s) => (
                  <div key={s.label} className="relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-amber-400"></div>
                    <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-[#F97316] leading-none">{s.value}</div>
                    <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-white/60 mt-2">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <ul className="space-y-4 mb-8">
                {[
                  <>Em 2024, selecionado pelo CEO <strong className="text-white">Max Peters</strong> para ser jovem aprendiz da <strong className="text-white">Adapta.org</strong> - a maior empresa de IA da América Latina.</>,
                  <>Palestrou sobre IA para <strong className="text-white">7 escolas e 3 empresas</strong>.</>,
                  <><strong className="text-white">+50 alunos em 2 turmas</strong> na Imersão IA Na Prática.</>,
                  <><strong className="text-white">4x competidor</strong> da First Lego League, levando Sergipe à etapa nacional.</>,
                ].map((content, i) => (
                  <li key={i} className="flex gap-4 items-start group">
                    <span className="font-poppins font-extrabold text-[#F97316] text-xl leading-none w-8 shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-white/75 leading-relaxed text-sm md:text-base border-l border-white/10 pl-4 group-hover:border-[#F97316]/50 transition-colors">
                      {content}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Mission */}
              <div className="relative bg-gradient-to-b from-yellow-400/[0.06] to-white/[0.01] border border-[#F97316]/20 rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-amber-400"></div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F97316] mb-3">
                  <span className="w-1 h-1 rounded-full bg-[#FDE047]"></span>
                  Missão
                </span>
                <p className="text-white/85 leading-relaxed text-sm md:text-base">
                  Tornar as pessoas muito mais inteligentes e produtivas com IA
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button
              onClick={scrollToOffer}
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:shadow-[0_0_55px_rgba(249,115,22,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>
      </section>





      {/* FAQ Section */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            (F.A.Q) Restou alguma dúvida?
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-0" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Quando serão as aulas do FMI+?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  As datas oficiais dos encontros serão divulgadas em breve. Todos os alunos serão avisados por e-mail e WhatsApp assim que o cronograma for confirmado.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Vai ter gravação?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Sim! Todas as aulas serão gravadas e ficarão disponíveis junto com os mapas mentais e o workbook na área de membros.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">Preciso já saber usar IA?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Não. O FMI+ começa do zero: você aprende Foco, Método de Estudos e como usar IA (ChatGPT, Gizmo, mapas mentais) do jeito certo para estudar.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-xl border-none">
              <AccordionTrigger className="px-8 py-6 hover:no-underline text-left">
                <span className="font-bold text-xl text-black">É para qual idade / série?</span>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-6">
                <p className="text-gray-700 text-lg">
                  Para estudantes do Ensino Médio, cursinho e vestibulandos. Se você tem entre 13 e 19 anos e quer estudar melhor (com mais foco e menos tempo), o FMI+ é para você.
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
              className="bg-[#FDE047] hover:bg-[#fde047]/90 text-[#0a0a0a] font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)]"
            >
              Quero Fazer Parte →
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12 px-4 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold mb-6">
            IA Na Prática. Ferramentas para trabalhar com mais inteligência.
          </h3>
          
          <div className="space-y-4">
            <p className="text-lg font-semibold">Contato:</p>
            <p>
              <strong>E-mail:</strong>{" "}
              <a 
                href="mailto:contato.vitoryujiminomo@gmail.com" 
                className="text-blue-400 hover:text-cyan-300 underline"
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
                className="text-blue-400 hover:text-cyan-300 underline"
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

export default Fmi;
