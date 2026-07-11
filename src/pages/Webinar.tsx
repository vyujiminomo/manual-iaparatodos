
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
import imersaoLogo from "@/assets/imersao-logo.png.asset.json";

import imersaoTicketCard from "@/assets/imersao-ticket-card.png";
import imersaoGiftsTrio from "@/assets/imersao-gifts-trio.png";
import imersaoProfissional from "@/assets/imersao-profissional.jpg";
import imersaoEmpresario from "@/assets/imersao-empresario.jpg";
import imersaoGestor from "@/assets/imersao-gestor.jpg";
import local1 from "@/assets/local-1.jpg";
import local2 from "@/assets/local-2.jpg";
import local3 from "@/assets/local-3.jpg";
import local4 from "@/assets/local-4.jpg";
import onlineMeetImg from "@/assets/online-meet.jpg";
import gravacoesImg from "@/assets/gravacoes.jpg.asset.json";
import presencialSalaAulaImg from "@/assets/presencial-sala-aula.png.asset.json";
import apos1Claude from "@/assets/apos-1-claude.png.asset.json";
import apos2Ias from "@/assets/apos-2-ias.png.asset.json";
import apos3Confiante from "@/assets/apos-3-confiante.jpg";
import apos4Paper from "@/assets/apos-4-paper.png.asset.json";
import apos5Prompt from "@/assets/apos-5-prompt.png.asset.json";
import apos6Noticia from "@/assets/apos-6-noticia.jpg";
import sinta54 from "@/assets/sinta-54.png.asset.json";
import sinta55 from "@/assets/sinta-55.png.asset.json";
import sinta56 from "@/assets/sinta-56.png.asset.json";
import sinta57 from "@/assets/sinta-57.png.asset.json";
import sinta58 from "@/assets/sinta-58.png.asset.json";
import depoimentoOsvaldo from "@/assets/depoimento-osvaldo.png.asset.json";
import depoimentoMax from "@/assets/depoimento-max.png.asset.json";
import depoimentoKarina from "@/assets/depoimento-karina.png.asset.json";
import depoimentoCarlos from "@/assets/depoimento-carlos.png.asset.json";

const Webinar = () => {
  
  

  useDynamicMeta({
    title: "Imersão IA Na Prática 3 - Vitor Yuji",
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
            alt="Imersão IA Na Prática"
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
            <div className="mb-5 max-w-[200px] md:max-w-[240px]">
              <img
                src={imersaoLogo.url}
                alt="Imersão IA Na Prática 3"
                className="w-full h-auto max-h-[100px] md:max-h-[120px] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
              />
            </div>

            {/* Headline */}
            <h1 className="font-poppins font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-5">
              O primeiro curso de{" "}
              <span className="text-yellow-400">IA para profissionais +40</span>{" "}
              com dificuldade com tecnologia
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200/90 leading-relaxed mb-6 max-w-xl">
              Em 5 aulas, você vai usar IA como ferramenta natural do seu dia. Não fique para trás
            </p>

            {/* Checklist */}
            <ul className="space-y-2.5 mb-8">
              {[
                "Lote 2 disponível (condição especial)",
                "5 aulas presenciais ou online",
                "Acesso às gravações do curso",
                "Professor pegando na sua mão",
                "Grupo de estudos",
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
                label: "Aulas presenciais",
                accent: "from-cyan-400 to-cyan-500",
                image: sinta55.url,
              },
              {
                label: "Grupo de alunos",
                accent: "from-yellow-400 to-amber-400",
                image: sinta54.url,
              },
              {
                label: "Networking",
                accent: "from-emerald-400 to-green-500",
                image: sinta58.url,
              },
              {
                label: "Aulas on-line",
                accent: "from-fuchsia-400 to-pink-500",
                image: sinta57.url,
              },
              {
                label: "Grupo no Whatssap",
                accent: "from-orange-400 to-red-500",
                image: sinta56.url,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} rounded-t-2xl z-10`}></div>
                <div className="aspect-[4/5] relative overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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

          {/* Depoimentos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-in fade-in duration-500">
            {[
              {
                image: depoimentoOsvaldo.url,
                border: "from-cyan-400 to-cyan-500",
                nome: "Osvaldo Araki",
                cargo: "Médico",
                texto: "Eu tinha muita dificuldade na utilização da inteligência artificial. Fiz o curso do Vitor, e ele me surpreendeu bastante. Uma pessoa com um linguajar muito fácil, límpido. E me ajudou a destrinchar a IA. Um curso muito bom pra se fazer. Vale a pena e eu recomendo.",
              },
              {
                image: depoimentoMax.url,
                border: "from-yellow-400 to-amber-400",
                nome: "Max Mauro",
                cargo: "Engenheiro e CEO da Maxtron Energia",
                texto: "Esse foi meu primeiro contato didático com IA. E o Vitor lançou o desafio que a gente usasse IA todos os dias, e de fato hoje eu utilizo IA pra pesquisa e soluções profissionais e até pessoais. O professor Yuji tem uma didática realmente diferente!",
              },
              {
                image: depoimentoKarina.url,
                border: "from-emerald-400 to-green-500",
                nome: "Karina Ferreira",
                cargo: "Médica e oncologista da Vitta",
                objectPosition: "center 15%",
                texto: "Sempre tive muita resistência com tecnologia. Mas a experiência foi fantástica! O Vitor é extremamente prático, extremamente acessível e dinâmico. Muita aplicabilidade na clínica. Eu, como médica, não tinha como fugir disso. E eu sempre lembro daquela frase: \"A IA vai substituir o médico?\" Vai sim. A IA vai substituir aquele médico que não aderir a IA. Então, participem do curso. Vale muito a pena!",
              },
              {
                image: depoimentoCarlos.url,
                border: "from-fuchsia-400 to-pink-500",
                nome: "Carlos Henrique de Carvalho",
                cargo: "Professor aposentado de engenharia civil na UFS/IFS",
                objectPosition: "center 70%",
                texto: "As aulas me abriram um leque de opções com alta produtividade, na pesquisa, na concepção de laudos, aulas, provas etc... Incorporei a IA como uma ferramenta ágil e abrangente, no auxílio das minhas atividades. As aulas foram muito úteis nesse contexto.",
              },
            ].map((d, i) => (
              <div key={i} className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300 flex flex-col">
                <div className={`h-1 w-full bg-gradient-to-r ${d.border}`}></div>
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img
                    src={d.image}
                    alt={d.nome}
                    loading="lazy"
                    style={{ objectPosition: d.objectPosition }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 pt-8 flex-1 flex flex-col relative">
                  <div className="absolute -top-5 left-5 w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg z-10">
                    <Quote className="w-5 h-5 text-black" fill="currentColor" />
                  </div>
                  <p className="text-gray-200 text-sm leading-relaxed mb-6 flex-1">
                    {d.texto}
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-white font-bold text-base">{d.nome}</p>
                    <p className="text-gray-400 text-sm">{d.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

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


      {/* Hoje Você / Mas Quer Section */}
      <section className="relative py-20 md:py-28 px-4 bg-black text-white overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-yellow-400 mb-5 bg-yellow-400/10 px-5 py-2 rounded-full border border-yellow-400/20">
              O que muda
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Hoje você x <span className="text-yellow-400">Mas quer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Hoje Você */}
            <div className="relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl p-7 md:p-9 hover:border-red-400/30 transition-all duration-300">
              <div className="h-1 w-16 bg-gradient-to-r from-red-400 to-orange-400 rounded-full mb-6"></div>
              <h3 className="font-poppins font-extrabold text-2xl md:text-3xl text-white mb-6">
                HOJE VOCÊ:
              </h3>
              <ul className="space-y-4">
                {[
                  "Depende dos filhos para tecnologia",
                  "Está aprendendo IA sozinho (ou não está aprendendo)",
                  "Vê colegas usando IA e ganhando tempo",
                  "Se acha um 'dinossauro' com tecnologia",
                  "Tem vergonha de fazer perguntas óbvias",
                  "Sente que está ficando para trás",
                  "Cada dia que passa, a distância aumenta",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-red-400/10 border border-red-400/30 flex items-center justify-center">
                      <X className="w-3.5 h-3.5 text-red-400" strokeWidth={3} />
                    </span>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mas Quer */}
            <div className="relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl p-7 md:p-9 hover:border-emerald-400/30 transition-all duration-300">
              <div className="h-1 w-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mb-6"></div>
              <h3 className="font-poppins font-extrabold text-2xl md:text-3xl text-white mb-6">
                MAS QUER:
              </h3>
              <ul className="space-y-4">
                {[
                  "Não depender mais dos filhos para nada",
                  "Aprender IA com mentor e grupo",
                  "Usar IA todos os dias com confiança",
                  "Se sentir atualizado com tecnologia",
                  "Ter um grupo como você, perguntando, errando e testando",
                  "Se sentir que está no mesmo nível (ou à frente)",
                  "Cada dia que passa, você fica mais confiante",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3.5">
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={3} />
                    </span>
                    <span className="text-gray-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12 md:mt-16">
            <Button
              onClick={scrollToOffer}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-8 md:px-12 py-7 md:py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] w-full md:w-auto transition-all duration-300 hover:scale-105"
            >
              Quero Fazer Parte →
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
              Como funciona a <span className="text-yellow-400">Imersão?</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              A inscrição na Imersão te dá acesso a participar das aulas de 3 formas:
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🏫",
                title: "Presencial na sala de aula",
                body: "Participe ao vivo na sala de aula, interaja com o professor e outros alunos presencialmente.",
                image: presencialSalaAulaImg.url,
                accent: "yellow",
                grad: "from-yellow-400 to-amber-400",
                tint: "bg-yellow-400/10 border-yellow-400/20",
              },
              {
                icon: "💻",
                title: "Online pelo Meet",
                body: "Acompanhe todas as aulas em tempo real pelo Google Meet, do conforto da sua casa ou escritório.",
                image: onlineMeetImg,
                objectPosition: "15% center",
                accent: "cyan",
                grad: "from-cyan-400 to-blue-500",
                tint: "bg-cyan-400/10 border-cyan-400/20",
              },
              {
                icon: "📹",
                title: "Gravações",
                body: "Não pode assistir ao vivo? Todas as aulas ficam gravadas para você assistir quando quiser.",
                image: gravacoesImg.url,
                objectPosition: "85% center",
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
                    style={{ objectPosition: (c as any).objectPosition || "center center" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.visibility = 'hidden';
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
                title: "'Pegando na Sua Mão'",
                items: [
                  "Botões e funções do ChatGPT",
                  "A Regra do Computador 'Entrar, Sair, Voltar'",
                  "Criando seus primeiros prompts",
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
                title: "CIII+ - Como criar bons prompts",
                items: [
                  "A estrutura CIII+ para prompts perfeitos",
                  "Como criar um bom contexto",
                  "4 técnicas: Persona, Emotion Prompt, 'Pense Passo a Passo' e Dar referências",
                ],
                accent: "from-emerald-400 to-green-500",
                bg: "bg-emerald-400/10",
              },
              {
                day: 4,
                date: "26/08",
                title: "PAPEI - As 5 atividades da IA generativa",
                items: [
                  "Pesquisando artigos e jurisprudência com IA",
                  "4 técnicas para aprender com IA",
                  "4 técnicas para pensar com IA",
                  "6 técnicas para escrever com IA",
                  "4 técnicas para ter ideias com IA",
                ],
                accent: "from-fuchsia-400 to-pink-500",
                bg: "bg-fuchsia-400/10",
              },
              {
                day: 5,
                date: "02/09",
                title: "Mais ferramentas\nIA para marketing e gestão\u00a0\n",
                items: [
                  "IA para slides, pesquisa, estudos, etc",
                  "Técnicas de IA para marketing e gestão",
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
                <h3 className="text-lg font-bold text-white mb-4 leading-snug min-h-[3.5rem] whitespace-pre-line">
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

      {/* Comparison Section */}
      <section className="relative py-24 md:py-32 px-4 bg-black overflow-hidden">
        {/* Background atmosphere — matches "3 formas" / Cronograma */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-cyan-400/[0.05] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-6 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Comparativo
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Porque a Imersão é <span className="text-yellow-400">MELHOR</span> que qualquer outro curso?
            </h2>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* OUTROS CURSOS */}
            <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-400 to-red-500"></div>
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-red-400/10 border border-red-400/20 flex items-center justify-center">
                    <X className="text-red-400" size={20} strokeWidth={3} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-poppins">Outros cursos</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Vídeo gravado",
                    "Sem mentor, você fica com dúvidas",
                    "Técnico demais (programação, etc)",
                    "Teórico demais",
                    "Sozinho",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
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
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                    <Check className="text-yellow-400" size={20} strokeWidth={3} />
                  </div>
                  <h3 className="text-lg font-bold text-white font-poppins">Imersão IA Na Prática</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Ao vivo (presencial ou online) + gravações",
                    "Mentor 'pega na mão' e te ajuda",
                    "Foco no que é realmente útil",
                    "Aulas dinâmicas e práticas",
                    "Você + mentor + grupo",
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-white text-sm md:text-base">
                      <Check className="text-yellow-400 flex-shrink-0 mt-0.5" size={16} strokeWidth={3} />
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
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:shadow-[0_0_55px_rgba(250,204,21,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>
      </section>



      {/* Após a Imersão Section */}
      <section className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-black via-[#08080c] to-black text-white overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-400/[0.06] rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-5 bg-cyan-400/10 px-5 py-2 rounded-full border border-cyan-400/20">
              O resultado
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Após a Imersão, <span className="text-yellow-400">você vai:</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                text: "Pesquisar, aprender, pensar, escrever e idear melhor e mais rápido",
                image: (apos1Claude as { url: string }).url,
                icon: "⚡",
              },
              {
                text: "Ter um arsenal de ferramentas de IA no trabalho (não só ChatGPT)",
                image: (apos2Ias as { url: string }).url,
                icon: "🧰",
              },
              {
                text: "Abrir o computador/celular e se sentir confiante (não mais 'dinossauro')",
                image: apos3Confiante,
                icon: "💪",
              },
              {
                text: "Pesquisar artigos, jurisprudência e dados em segundos",
                image: (apos4Paper as { url: string }).url,
                icon: "🔍",
              },
              {
                text: "Usar a estrutura CIII+ para criar prompts perfeitos",
                image: (apos5Prompt as { url: string }).url,
                icon: "📝",
              },
              {
                text: "Acordar sabendo que está atualizado com tecnologia",
                image: apos6Noticia,
                icon: "🚀",
              },
            ].map((item, index) => (
              <div
                key={item.text}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-[#1a1a1a]">
                  <img
                    src={item.image}
                    alt={item.text}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
                    <span className="text-4xl md:text-5xl opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                      {item.icon}
                    </span>
                  </div>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-gray-200 leading-relaxed text-sm md:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
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
              { img: mapasMentaisComposto.url, images: [mapaMental2, mapaMental1, mapaMental3, mapaMental4], title: "7 mapas mentais", desc: "7 mapas mentais dos principais aprendizados da Imersão para você estudar e revisar de forma visual e prática.", fit: "contain" as const },
              { img: webinarWhatsapp, title: "Grupo no WhatsApp", desc: "Um grupo com o professor e os alunos para tirar dúvidas, trocar experiências e fazer networking de alto nível." },
              { img: webinarManual, title: "Workbook Exclusivo", desc: "Um \"guia de bolso de IA\" que te acompanhará durante e depois da Imersão, para garantir que você extraia o máximo valor e resultado de tudo o que faremos durante as aulas." },
              { img: webinarBiblioteca, title: "Biblioteca de Prompts", desc: "Uma coleção completa de prompts prontos e testados para você aplicar no ChatGPT e outras IAs, acelerando seus resultados no trabalho e nos estudos." },
              { img: bonusSessaoIndividual.url, title: "Sessão individual de 1h (EXCLUSIVO ATÉ 30/06)", desc: "Uma sessão privada de 1 hora com o mentor Vitor Yuji para ter ideias de como usar IA espeficiamente no SEU trabalho" },
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
                        {(b as any).fit !== 'contain' && !(b as any).images && <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />}
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
      <section className="relative py-24 md:py-32 px-4 bg-black overflow-hidden">
        {/* Background atmosphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-yellow-400/[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-6 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              Depoimentos
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              O que dizem sobre <span className="text-yellow-400">a Imersão</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { name: "Gabriela Coelho", initials: "GC", role: "Gestora de equipe de robótica", quote: "Depois da palestra, o ChatGPT começou a me entregar exatamente o que eu queria. Minhas amigas até dizem que meu ChatGPT é mais obediente que o delas kkkk.", grad: "from-cyan-400 to-blue-500", tint: "bg-cyan-400/10 border-cyan-400/20" },
              { name: "Arthur Lucena", initials: "AL", role: "Estudante", quote: "Agora é uma ferramenta essencial pra mim. Mudou totalmente meu jeito de pesquisar e estudar.", grad: "from-yellow-400 to-amber-400", tint: "bg-yellow-400/10 border-yellow-400/20" },
              { name: "Bruno Correia", initials: "BC", role: "Militar", quote: "Estou muito satisfeito em ter feito parte do Beta dessa imersão, que, com certeza, será um sucesso. Parabéns!", grad: "from-emerald-400 to-green-500", tint: "bg-emerald-400/10 border-emerald-400/20" },
            ].map((t, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 hover:from-white/[0.06] transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${t.grad}`}></div>
                <div className="p-7 md:p-8">
                  <Quote className="text-yellow-400/40 mb-4" size={32} strokeWidth={1.5} />

                  <div className="flex items-center gap-1 mb-5">
                    {[0,1,2,3,4].map((s) => (
                      <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                    <div className={`w-10 h-10 rounded-xl ${t.tint} border flex items-center justify-center font-bold text-white text-xs`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
                    <h3 className="font-poppins text-lg md:text-xl font-bold">Ingresso Imersão IA Na Prática 3</h3>
                    <span className="text-gray-400 line-through text-sm md:text-base font-semibold whitespace-nowrap">R$750</span>
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
                    <span className="bg-yellow-300 text-gray-900 text-xs font-bold px-2 py-0.5 rounded">35% OFF</span>
                    <span className="text-gray-400 line-through font-semibold">R$750</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    <span className="font-semibold">R$247 à vista</span> ou <span className="font-extrabold text-gray-900 text-lg md:text-xl">12x R$25</span>
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
      <section className="relative py-24 md:py-32 px-4 bg-black overflow-hidden">
        {/* Background atmosphere — matches "3 formas" / Cronograma */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-emerald-400/[0.05] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-6 bg-emerald-400/10 px-4 py-2 rounded-full border border-emerald-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Garantia Especial
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Garantia: Duas primeiras aulas <span className="text-yellow-400">"De Graça"</span>
            </h2>
          </div>

          {/* Card */}
          <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-400 to-green-500"></div>
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-yellow-400/15 rounded-full blur-2xl scale-90" />
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
                <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                  Eu tenho tanta certeza que você vai adorar a Imersão que, se após a segunda aula, você{" "}
                  <span className="font-semibold text-white">não gostar da Imersão</span>, envie uma mensagem até{" "}
                  <span className="font-semibold text-white">13/08 pedindo reembolso</span>, e devolvemos{" "}
                  <span className="font-semibold text-white">100% do seu dinheiro</span>.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {["100% reembolsável", "Sem burocracia"].map((t) => (
                    <span key={t} className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                      <Check size={12} className="text-emerald-400" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Author Section */}
      <section className="relative py-24 md:py-32 px-4 bg-black text-white overflow-hidden">
        {/* Background atmosphere — matches "3 formas" / Cronograma */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-yellow-400/[0.04] rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-6 bg-yellow-400/10 px-4 py-2 rounded-full border border-yellow-400/20">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              Seu Mentor
            </span>
            <h2 className="font-poppins font-extrabold text-3xl md:text-5xl lg:text-6xl mb-6 text-white leading-[1.05] tracking-tight max-w-4xl mx-auto">
              Vitor <span className="text-yellow-400">Yuji</span>
            </h2>
            <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-yellow-400">Palestrante</span>
                  </div>
                </div>
              </div>
              <div className="group relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/25 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 z-10"></div>
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
                <span className="text-yellow-400 font-semibold"> surpreendente palestrante de IA do Nordeste</span>.
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
                    <div className="font-poppins font-extrabold text-2xl sm:text-3xl text-yellow-400 leading-none">{s.value}</div>
                    <div className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-gray-400 mt-2">{s.label}</div>
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
                    <span className="font-poppins font-extrabold text-yellow-400 text-xl leading-none w-8 shrink-0 pt-1">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l border-white/10 pl-4 group-hover:border-yellow-400/50 transition-colors">
                      {content}
                    </p>
                  </li>
                ))}
              </ul>

              {/* Mission */}
              <div className="relative bg-gradient-to-b from-yellow-400/[0.06] to-white/[0.01] border border-yellow-400/20 rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-amber-400"></div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow-400 mb-3">
                  <span className="w-1 h-1 rounded-full bg-yellow-400"></span>
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
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-base md:text-lg px-10 py-7 rounded-full shadow-[0_0_40px_rgba(250,204,21,0.4)] hover:shadow-[0_0_55px_rgba(250,204,21,0.7)] transition-all duration-300 hover:scale-[1.02]"
            >
              QUERO FAZER PARTE →
            </Button>
          </div>
        </div>
      </section>



      {/* Localização Section */}
      <section className="py-24 px-4 bg-neutral-50 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left: Info */}
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 mb-8 leading-[1.05]">
                Conheça a localização<br />da Imersão
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-yellow-400/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <p className="text-neutral-800 font-medium">
                    <span className="font-bold">Sala Gambiarra,</span> <span className="text-neutral-500">Sergipe, Brasil</span>
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-white rounded-xl px-5 py-4 border border-neutral-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-yellow-400/15 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <p className="text-neutral-800 font-medium">
                    5, 12, 19, 26 de Agosto e 2 de Setembro
                  </p>
                </div>
              </div>

              <p className="text-neutral-600 leading-relaxed mb-8">
                A <span className="font-semibold text-neutral-900">Sala Gambiarra</span> é um espaço criativo aconchegante em Aracaju, com ambiente ao ar livre cercado de natureza, perfeito para uma imersão prática, leve e produtiva.
              </p>

              <Button
                onClick={scrollToOffer}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] w-full sm:w-auto"
              >
                Quero Fazer Parte →
              </Button>
            </div>

            {/* Right: Photos grid + map */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {[local1, local2, local3, local4].map((img, i) => (
                  <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                    <img src={img} alt={`Sala Gambiarra ${i+1}`} loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="aspect-[16/7] rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                <iframe
                  title="Mapa Sala Gambiarra"
                  src="https://www.google.com/maps?q=Sala+Gambiarra+Aracaju+Sergipe&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
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
                  <strong>• 2 de Setembro de 2026</strong> - Dia 5: Mais ferramentas, IA para marketing e gestão
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
            IA Na Prática. Ferramentas para trabalhar com mais inteligência.
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
