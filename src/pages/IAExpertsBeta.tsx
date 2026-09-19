import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  GraduationCap,
  MessageCircle,
  Presentation,
  Sparkles,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import sessionImage from "@/assets/iaexperts-session.png";
import classroomImage from "@/assets/iaexperts-classroom.png";
import depoimentoOsvaldo from "@/assets/iaexperts-osvaldo.png";
import depoimentoMax from "@/assets/iaexperts-max.png";
import depoimentoKarina from "@/assets/iaexperts-karina.png";
import depoimentoCarlos from "@/assets/iaexperts-carlos.png";
import mapasMentaisComposto from "@/assets/mapa-mental-1.png";
import webinarManual from "@/assets/webinar-manual-novo.png";
import webinarWhatsapp from "@/assets/webinar-whatsapp.png";
import whatsappChatImage from "@/assets/iaexperts-beta-whatsapp.png";
import mentoriaImage from "@/assets/iaexperts-beta-mentoria.png.asset.json";
import webinarBiblioteca from "@/assets/webinar-biblioteca-prompts.png";
import betaAula1 from "@/assets/iaexperts-beta-aula-1.png.asset.json";
import betaAula2 from "@/assets/iaexperts-beta-aula-2.png.asset.json";
import betaAula3 from "@/assets/iaexperts-beta-aula-3.png.asset.json";
import betaAula4 from "@/assets/iaexperts-beta-aula-4.png.asset.json";
import betaAula5 from "@/assets/iaexperts-beta-aula-5.png.asset.json";
import betaAula6 from "@/assets/iaexperts-beta-aula-6.png.asset.json";
import cursoDominando from "@/assets/iaexperts-beta-curso-dominando.png.asset.json";
import cursoVendas from "@/assets/iaexperts-beta-curso-vendas.png.asset.json";
import cursoEstudos from "@/assets/iaexperts-beta-curso-estudos.png.asset.json";
import cursoSlides from "@/assets/iaexperts-beta-curso-slides.png.asset.json";
import expertVitor from "@/assets/expert-vitor.jpg";
import expertMariaOriginal from "@/assets/expert-maria-original.png";
import expertBrunoOriginal from "@/assets/expert-bruno-original.png";
import expertDiran from "@/assets/expert-diran.png";
import sistemaOrcamento from "@/assets/sistema-orcamento-engenharia.png";
import sistemaLeads from "@/assets/sistema-trafego-leads.png";
import sistemaMedico from "@/assets/sistema-relatorio-medico.png";
import sistemaVendas from "@/assets/sistema-dashboard-vendas.png";
import eventoBetaDia2 from "@/assets/evento-beta-dia-2.jpg.asset.json";
import eventoBetaAula5 from "@/assets/evento-beta-aula-5.jpg.asset.json";

const testimonials = [
  {
    image: depoimentoMax,
    name: "Max Mauro",
    role: "Engenheiro e CEO da Maxtron Energia",
    result: "IA aplicada à rotina profissional",
    quote: "Hoje eu utilizo IA para pesquisa, soluções profissionais e até pessoais. O professor Yuji tem uma didática realmente diferente!",
  },
  {
    image: depoimentoKarina,
    name: "Karina Ferreira",
    role: "Médica e oncologista da Vitta",
    result: "Mais aplicabilidade na clínica",
    position: "center 15%",
    quote: "A experiência foi fantástica! O Vitor é extremamente prático, acessível e dinâmico. Muita aplicabilidade na clínica.",
  },
  {
    image: depoimentoCarlos,
    name: "Carlos Henrique de Carvalho",
    role: "Professor aposentado de engenharia civil na UFS/IFS",
    result: "Mais produtividade com IA",
    position: "center 25%",
    quote: "As aulas me abriram um leque de opções com alta produtividade. Incorporei a IA como uma ferramenta ágil e abrangente.",
  },
  {
    image: depoimentoOsvaldo,
    name: "Osvaldo Araki",
    role: "Médico",
    result: "Tecnologia sem complicação",
    quote: "O Vitor me ajudou a destrinchar a IA e desbloquear minha dificuldade com tecnologia, com um linguajar muito fácil e límpido.",
  },
];

const stageImages = [
  { src: betaAula1.url, alt: "Aluno usando inteligência artificial durante a aula" },
  { src: betaAula2.url, alt: "Vitor Yuji orientando uma turma sobre inteligência artificial" },
  { src: betaAula3.url, alt: "Atendimento individual durante a aula de inteligência artificial" },
  { src: betaAula4.url, alt: "Aluna aplicando inteligência artificial no computador" },
  { src: betaAula5.url, alt: "Turma participando de uma aula prática de inteligência artificial" },
  { src: betaAula6.url, alt: "Vitor Yuji apresentando uma aula de inteligência artificial" },
];

const brands = [
  "/lovable-uploads/logo-empresa-1.png",
  "/lovable-uploads/logo-empresa-2.png",
  "/lovable-uploads/logo-empresa-3.png",
  "/lovable-uploads/logo-empresa-4.png",
  "/lovable-uploads/logo-empresa-5.png",
  "/lovable-uploads/logo-empresa-6.png",
  "/lovable-uploads/logo-suzuki.png",
];

const courseCards = [
  { title: "Dominando IA Generativa", image: cursoDominando.url },
  { title: "IA para Slides", image: cursoSlides.url },
  { title: "IA para Vendas", image: cursoVendas.url },
  { title: "IA para Estudos", image: cursoEstudos.url },
];

const experts = [
  { initials: "VY", name: "Vitor Yuji", photo: expertVitor, role: "EXPERT DE MENTORIAS COLETIVAS", copy: "- Principal palestrante de IA de Sergipe\n- Selecionado como Jovem Aprendiz da Adapta (maior empresa de IA da América Latina)\n- Professor de +50 alunos na Imersão de IA\n- 5 temporadas do Torneio de Robótica FLL (Top10 robô Regional)\n- Co-fundador Mangue Mania" },
  { initials: "MA", name: "Maria Augusta", photo: expertMariaOriginal, role: "EXPERT PARTICULAR", copy: "- Ex-pesquisadora da SHIELD (uma das maiores equipes de robótica de Sergipe)\n- Co-fundadora do Mangue Mania, maior metodologia ativa de manguezais de Sergipe\n- Selo ODS 2025\n- Criadora da calculadora automática apresentada para engenheiros da NASA no MIB de 2023\n- Medalhista nas OBG, OP e OBLI" },
  { initials: "B", name: "Bruno", photo: expertBrunoOriginal, role: "EXPERT DE AUTOMAÇÕES E AGENTES", copy: "- +5 medalhas em olimpíadas científicas\n- Quando tinha 10 anos, aprendeu C#, Python e Java\n- Assistente de TI de Lauro Fonseca, CEO da WERT, focado em habilidades de programação" },
  { initials: "D", name: "Diran", photo: expertDiran, role: "EXPERT DE DESENVOLVIMENTO", copy: "- Criador do aplicativo Cogni, utilizando Dart e Flutter\n- Experiência em projetos utilizando Node.js, Python, Java, HTML, CSS e JavaScript\n- Co-criador do “Reclame Aju”, uma proposta de plataforma para reportar problemas urbanos em Sergipe, desenvolvida para uma competição acadêmica (top 10 entre 34 equipes)" },
];

const systems = [
  { image: sistemaOrcamento, title: "Orçamento para engenheiros", alt: "Sistema de pesquisa e orçamentos para engenharia" },
  { image: sistemaLeads, title: "Tráfego de leads", alt: "Sistema para acompanhar clientes e o tráfego de leads" },
  { image: sistemaMedico, title: "Relatório médico inteligente", alt: "Sistema inteligente para criar relatórios médicos" },
  { image: sistemaVendas, title: "Dashboard de vendas", alt: "Dashboard para acompanhar metas e resultados de vendas" },
];

const eventPhotos = [
  { src: eventoBetaDia2.url, alt: "Participantes praticando criação de prompts na Imersão IA para Todos" },
  { src: eventoBetaAula5.url, alt: "Aula presencial sobre criação de slides, sites e aplicativos com IA" },
];

const SectionTitle = ({ eyebrow, children, description }: { eyebrow: string; children: React.ReactNode; description?: string }) => (
  <div className="mb-12 md:mb-16">
    <span className="text-xs font-medium uppercase text-primary">{eyebrow}</span>
    <h2 className="mt-5 max-w-5xl font-editorial text-5xl font-normal leading-[0.98] md:text-7xl">{children}</h2>
    {description && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
  </div>
);

const IAExpertsBeta = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [expertIndex, setExpertIndex] = useState(0);
  const [systemIndex, setSystemIndex] = useState(0);
  const [systemsPaused, setSystemsPaused] = useState(false);
  const [eventPhotoIndex, setEventPhotoIndex] = useState(0);
  const [eventPhotosPaused, setEventPhotosPaused] = useState(false);
  const visibleTestimonials = [0, 1, 2].map((offset) => testimonials[(testimonialIndex + offset) % testimonials.length]);
  const activeExpert = experts[expertIndex];

  useEffect(() => {
    if (systemsPaused) return;
    const interval = window.setInterval(() => {
      setSystemIndex((current) => (current + 1) % systems.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [systemsPaused]);

  useEffect(() => {
    if (eventPhotosPaused) return;
    const interval = window.setInterval(() => {
      setEventPhotoIndex((current) => (current + 1) % eventPhotos.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, [eventPhotosPaused]);

  useDynamicMeta({
    title: "IA Experts Beta | Especialistas que implementam IA com você",
    description: "Participe da turma piloto do IA Experts e implemente inteligência artificial com acompanhamento particular.",
  });

  const scrollToOffer = () => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  const scrollToSolutions = () => document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="iaexperts iaexperts-beta min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div className="beta-announce px-5 py-2.5 text-center text-xs md:text-sm">
        VERSÃO BETA · Turma piloto com vagas limitadas · Acesso antecipado antes do lançamento oficial
      </div>
      <header className="ia-hero-nav">

        <div className="mx-auto flex h-[52px] max-w-[1240px] items-center justify-between px-5 md:px-8">
          <Button type="button" variant="ghost" onClick={scrollToSolutions} className="flex h-auto items-center gap-2.5 p-0 hover:bg-transparent" aria-label="Ir para o programa IA Experts">
            <span className="ia-brand-mark" aria-hidden="true"><span>IA</span></span>
            <span className="text-lg font-bold">IA Experts</span><span className="beta-chip">BETA</span>
          </Button>
          <nav className="flex items-center gap-2" aria-label="Navegação principal">
            <Button onClick={scrollToSolutions} variant="ghost" className="ia-nav-action hidden h-9 gap-2 px-3 text-xs font-medium sm:flex">
              <UserRound className="h-4 w-4" /> Mentoria particular
            </Button>
            <Button onClick={scrollToOffer} variant="ghost" className="ia-nav-action h-9 gap-2 px-3 text-xs font-medium">
              <Users className="h-4 w-4" /> Turma piloto
            </Button>
          </nav>
        </div>
      </header>

      <section className="ia-hero relative border-b border-border">
        <div className="relative z-20 mx-auto max-w-5xl px-5 pt-14 text-center md:pt-14">
          <p className="text-sm font-semibold text-primary md:text-base">ACESSO ANTECIPADO · TURMA PILOTO · VAGAS LIMITADAS</p>
          <h1 className="mx-auto mt-4 max-w-4xl font-editorial text-[3.35rem] font-normal leading-[0.95] md:text-[5rem]">
             <span>Tenha a ajuda de 4<br />&nbsp;Experts de IA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-snug text-foreground md:text-lg">
            <span>Seu trabalho não precisa só de ferramenta, mas sim de <strong className="ia-hero-emphasis">resultado.</strong>&nbsp;</span>
            <br className="hidden md:block" />
             <span>O IA Experts te entrega uma <strong className="ia-hero-emphasis">equipe de especialistas de IA</strong> para implementar com você até ele aprece</span>
          </p>

          <Button onClick={scrollToOffer} size="lg" className="ia-hero-cta mt-7 h-12 rounded-[12px] pl-5 pr-1.5 text-base font-bold transition-transform hover:-translate-y-0.5">
            Quero ter resultado com IA
            <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-[9px] bg-primary-foreground text-primary"><ArrowRight className="h-4 w-4" /></span>
          </Button>
        </div>

        <div className="ia-stage">
          <div className="ia-stage-track">
            {stageImages.map((image, index) => (
              <figure key={`${image.src}-${index}`} className={`ia-stage-card ia-stage-card-${index + 1}`}>
                <img src={image.src} alt={image.alt} loading="eager" className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-9">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[280px_1fr] md:items-center md:px-8">
           <p className="text-base leading-snug text-foreground">Mais de 50 empresas<br />confiam na <em className="font-editorial text-lg">IA Experts</em></p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="ia-marquee flex w-max items-center gap-12">
              {[...brands, ...brands].map((logo, index) => <img key={`${logo}-${index}`} src={logo} alt="Empresa que confia na IA Experts" loading="lazy" className="h-16 w-40 object-contain grayscale opacity-55" />)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="Resultados reais">O que acontece quando um profissional <em className="text-primary">implementa IA de verdade</em></SectionTitle><div className="mb-12 flex gap-2 md:mb-16"><Button variant="outline" size="icon" aria-label="Depoimento anterior" onClick={() => setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}><ChevronLeft className="h-5 w-5" /></Button><Button variant="outline" size="icon" aria-label="Próximo depoimento" onClick={() => setTestimonialIndex((current) => (current + 1) % testimonials.length)}><ChevronRight className="h-5 w-5" /></Button></div></div>
          <div className="grid gap-5 md:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => <article key={`${testimonial.name}-${testimonialIndex}`} className={`${index > 0 ? "hidden md:block" : "block"} overflow-hidden rounded-md border border-border bg-card transition-transform duration-300 hover:-translate-y-1`}><img src={testimonial.image} alt={testimonial.name} className="h-64 w-full object-cover" style={{ objectPosition: testimonial.position }} /><div className="p-7"><p className="mt-1 text-lg leading-relaxed text-foreground">“{testimonial.quote}”</p><div className="mt-7 border-t border-border pt-5"><p className="font-semibold">{testimonial.name}</p><p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p></div></div></article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0b0b0d] px-5 py-20 text-white md:px-8 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_30%_20%,#e12d2e_0,transparent_45%),radial-gradient(circle_at_75%_80%,#e12d2e_0,transparent_40%)]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-[#e12d2e]">O problema</p>
            <h2 className="mx-auto mt-4 max-w-5xl text-center font-editorial text-4xl font-normal leading-[1.02] md:text-6xl">
              Aprender IA sozinho <span className="text-[#e12d2e]">não funciona.</span>
            </h2>

          <div className="mx-auto mt-6 max-w-4xl space-y-6 text-center">
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
              Curso gravado e ferramenta gera um aprendizado passivo.
            </p>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
              Quando você tiver uma dúvida/demanda particular, <span className="font-semibold text-white">quem vai te ajudar?</span>
            </p>
            <p className="mx-auto max-w-3xl text-2xl font-semibold leading-snug md:text-3xl">
               Ninguém aprende IA sozinho. <span className="text-[#e12d2e]">{" \nPrecisa de uma equipe do lado."}</span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mx-auto max-w-5xl text-center font-editorial text-4xl font-normal leading-[1.02] md:text-6xl">
            Tenha a ajuda de <em className="text-primary">4 experts de IA</em> para implementar IA no seu trabalho com você para ter resultados
          </h2>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:gap-8">
            {experts.map((expert) => (
              <article key={expert.name} className="group overflow-hidden rounded-2xl border border-border bg-card">
                <figure className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img src={expert.photo} alt={`Foto de ${expert.name}`} className="h-full w-full object-cover object-top" loading="lazy" />
                </figure>
                <div className="p-7 md:p-8">
                  <p className="text-[10px] font-semibold uppercase text-primary">{expert.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">{expert.name}</h3>
                  <p className="mt-4 whitespace-pre-line text-base leading-relaxed text-muted-foreground md:text-lg">{expert.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-5xl text-center md:mb-16">
            <p className="text-sm font-bold uppercase text-primary">Sistemas sob medida</p>
            <h2 className="mt-4 font-editorial text-4xl font-normal leading-[1.02] md:text-6xl">
              Descreva o sistema que você precisa. <em className="text-primary">Os experts constroem</em>
            </h2>
          </div>

          <div
            className="mx-auto max-w-6xl"
            onMouseEnter={() => setSystemsPaused(true)}
            onMouseLeave={() => setSystemsPaused(false)}
            onFocusCapture={() => setSystemsPaused(true)}
            onBlurCapture={() => setSystemsPaused(false)}
          >
            <article className="overflow-hidden rounded-lg border border-border bg-background">
              <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-6">
                <div>
                  <p className="text-xs font-semibold uppercase text-primary">Projeto {String(systemIndex + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-lg font-bold md:text-2xl">{systems[systemIndex].title}</h3>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" aria-label="Sistema anterior" onClick={() => setSystemIndex((current) => (current - 1 + systems.length) % systems.length)}>
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Próximo sistema" onClick={() => setSystemIndex((current) => (current + 1) % systems.length)}>
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="aspect-[16/9] bg-muted md:aspect-[2/1]">
                <img key={systems[systemIndex].image} src={systems[systemIndex].image} alt={systems[systemIndex].alt} className="h-full w-full object-contain" loading="lazy" />
              </div>
            </article>
            <div className="mt-5 flex justify-center gap-2" aria-label="Selecionar sistema">
              {systems.map((system, index) => (
                <Button
                  key={system.title}
                  type="button"
                  variant="ghost"
                  size="icon"
                  aria-label={`Ver ${system.title}`}
                  aria-current={index === systemIndex ? "true" : undefined}
                  onClick={() => setSystemIndex(index)}
                  className="h-8 w-8 hover:bg-muted"
                >
                  <span className={`h-2.5 w-2.5 rounded-full ${index === systemIndex ? "bg-primary" : "bg-muted-foreground/30"}`} />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>


      <div id="solucoes">
        <section className="relative border-b border-border px-5 py-24 md:px-8 md:py-32 [background-image:var(--ia-section-glow)]">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-[10px] font-semibold uppercase text-muted-foreground">01 · Especialista particular</span>
              </div>
              <h2 className="mt-8 text-5xl font-bold leading-[1.02] md:text-7xl">
                <span>Tenha um&nbsp;</span>
                <em className="font-editorial font-normal text-primary">Especialista de IA</em>
                <span>&nbsp;Particular para suas Demandas Particulares</span>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Os nossos experts foram treinados por Vitor Yuji para serem didáticos, te ajudarem com suas demandas específicas te ajudarem mesmo se você tiver dificuldade com tecnologia
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
              <article className="overflow-hidden rounded-2xl border border-border bg-muted">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={sessionImage} alt="Consultoria particular mensal de IA" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground">Consultoria Particular Mensal</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Para te ajudar com suas demandas específicas</p>
                </div>
              </article>

              <article className="overflow-hidden rounded-2xl border border-border bg-muted">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={whatsappChatImage} alt="Conversa de WhatsApp com especialista de IA" loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground">Contato no WhatsApp</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Para tirar suas dúvidas pontuais quando quiser</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mx-auto max-w-5xl text-4xl font-bold leading-[1.02] md:text-6xl">
                Tenha Mentorias em Grupo com <em className="font-editorial font-normal text-primary">Especialistas e Profissionais</em>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Aulas em grupo mensais sobre IA para temas diversos
              </p>
            </div>
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="border-y border-border px-1 md:px-6">
                <div className="flex items-center justify-between border-b border-border py-5">
                  <div>
                    <p className="text-xs font-bold uppercase text-primary">Aulas do MVP</p>
                    <h3 className="mt-2 font-editorial text-3xl">Próximos temas</h3>
                  </div>
                  <CalendarDays className="h-8 w-8 text-primary" />
                </div>
                <div className="divide-y divide-border">
                  {[
                    { date: "14/10", title: "Boas-vindas" },
                    { date: "28/10", title: "IA para Gestão" },
                    { date: "11/11", title: "IA para Slides" },
                    { date: "09/12", title: "Vibecoding (criar apps e sites)" },
                  ].map((item, index) => (
                    <div key={item.title} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 py-5">
                      <span className="font-editorial text-2xl text-primary">0{index + 1}</span>
                      <p className="font-semibold">{item.title}</p>
                      <span className="text-xs font-semibold text-primary">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
              <article className="relative min-h-[460px] overflow-hidden rounded-md">
                <img src={mentoriaImage.url} alt="Mentoria ao vivo da IA Experts" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="flex items-center gap-3 text-primary">
                    <Users className="h-7 w-7" />
                    <span className="font-semibold text-xl">Mentoria ao Vivo</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
              <p className="text-xs font-bold uppercase text-primary">Encontro exclusivo</p>
              <h2 className="mt-4 font-editorial text-5xl font-normal leading-[0.98] md:text-7xl">
                Evento Presencial dos <em className="text-primary">Beta</em>
              </h2>
              <div className="mt-7 inline-flex items-center gap-3 border-y border-border px-5 py-3">
                <CalendarDays className="h-5 w-5 text-primary" />
                <p className="text-base font-bold md:text-lg">Sábado, 12 de dezembro</p>
              </div>
            </div>

            <div
              className="mx-auto max-w-2xl"
              onMouseEnter={() => setEventPhotosPaused(true)}
              onMouseLeave={() => setEventPhotosPaused(false)}
              onFocusCapture={() => setEventPhotosPaused(true)}
              onBlurCapture={() => setEventPhotosPaused(false)}
            >
              <div className="relative aspect-[9/16] max-h-[760px] overflow-hidden rounded-md border border-border bg-muted">
                <img
                  key={eventPhotos[eventPhotoIndex].src}
                  src={eventPhotos[eventPhotoIndex].src}
                  alt={eventPhotos[eventPhotoIndex].alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/80 p-3 backdrop-blur-sm md:p-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Foto anterior do evento"
                    onClick={() => setEventPhotoIndex((current) => (current - 1 + eventPhotos.length) % eventPhotos.length)}
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <p className="text-xs font-semibold uppercase text-muted-foreground">
                    {String(eventPhotoIndex + 1).padStart(2, "0")} / {String(eventPhotos.length).padStart(2, "0")}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label="Próxima foto do evento"
                    onClick={() => setEventPhotoIndex((current) => (current + 1) % eventPhotos.length)}
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="mt-5 flex justify-center gap-2" aria-label="Selecionar foto do evento">
                {eventPhotos.map((photo, index) => (
                  <Button
                    key={photo.src}
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`Ver foto ${index + 1} do evento`}
                    aria-current={index === eventPhotoIndex ? "true" : undefined}
                    onClick={() => setEventPhotoIndex(index)}
                    className="h-8 w-8 hover:bg-muted"
                  >
                    <span className={`h-2.5 w-2.5 rounded-full ${index === eventPhotoIndex ? "bg-primary" : "bg-muted-foreground/30"}`} />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 md:mb-16"><span className="text-xs font-medium uppercase text-primary">IA Experts Cursos</span><h2 className="mt-5 text-5xl font-bold leading-[1.02] md:text-7xl"><span>Conheça </span><em className="font-editorial font-normal text-primary">Nossos Cursos</em></h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">*Certificações inclusas</p></div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {courseCards.map((course) => <article key={course.title} className="group relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-md border border-border bg-background p-3"><img src={course.image} alt={course.title} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" /></article>)}
            </div>
          </div>
        </section>
      </div>

      <section className="bg-black px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-5 inline-block rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-500">Presentes Especiais</span>
            </div>
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Além disso, Receba <span className="text-white">Bônus Especiais</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {[
              { img: webinarWhatsapp, title: "Grupo no WhatsApp" },
              { img: webinarManual, title: "Workbook" },
              { img: mapasMentaisComposto, title: "Apostilas, Resumos e Mapas Mentais", fit: "contain" as const },
              { img: webinarBiblioteca, title: "Biblioteca de Prompts" },
            ].map((b, i) => (
              <div key={i} className="group relative flex aspect-square flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm">
                <div className={`relative flex-1 overflow-hidden ${(b as any).fit === "contain" ? "bg-[#0f1117]" : ""}`}>
                  <img src={b.img} alt={b.title} loading="lazy" className={`absolute inset-0 h-full w-full ${(b as any).fit === "contain" ? "object-contain p-4" : "object-cover"}`} />
                </div>
                <div className="flex items-center justify-center px-3 py-4 md:py-5">
                  <h3 className="text-center text-sm font-bold leading-tight text-white md:text-base">{b.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="bg-black px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center md:mb-10">
            <span className="inline-block rounded-full bg-red-600 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-white">Lote piloto disponível</span>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">Tenha um Especialista de IA Particular</h2>
            <p className="mt-3 text-base text-gray-400">A primeira "Escola de IA" do Brasil a te entregar um especialista de IA particular.</p>
          </div>

          {/* Card branco */}
          <div className="relative rounded-2xl bg-white p-6 shadow-2xl md:p-10">
            <span className="inline-block rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white md:text-sm">Melhor condição</span>

            <div className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-xl font-bold text-gray-900 md:text-2xl">IA Experts Beta</h3>
                <span className="rounded bg-yellow-300 px-3 py-1 text-sm font-bold text-gray-900">75% OFF</span>
              </div>
              <p className="mt-1 text-sm text-gray-500">3 meses de acompanhamento completo</p>
            </div>

            <div className="my-6 h-px bg-gray-200" />

            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">O que está incluso:</p>
            <ul className="space-y-3 text-base text-gray-700 md:text-lg">
              {[
                ["Especialista de IA Particular (3 meses)", "R$ 400"],
                ["Mentorias Coletivas mensais", "R$ 600"],
                ["Acesso a Todos os Cursos", "R$ 250"],
                ["Certificações inclusas", "R$ 97"],
                ["Mapas Mentais e Resumos", "R$ 97"],
                ["Workbook IA Experts", "R$ 147"],
                ["Biblioteca de Prompts exclusiva", "R$ 97"],
                ["Grupo no WhatsApp e networking", "R$ 54"],
              ].map(([item, price]) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="flex-1">{item}</span>
                  <span className="font-semibold text-red-600 line-through">{price}</span>
                </li>
              ))}
            </ul>

            <div className="my-6 h-px bg-gray-200" />

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Valor total:</p>
                <p className="text-2xl font-bold text-red-600 line-through md:text-3xl">R$ 1.742</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium uppercase tracking-wider text-gray-400">Hoje por apenas:</p>
                <p className="font-extrabold text-gray-900"><span className="text-base font-bold md:text-lg">12x de</span> <span className="text-2xl md:text-4xl">R$62,30</span></p>
                <p className="text-sm font-semibold text-gray-700">ou R$747 à vista</p>
              </div>
            </div>

            <a href="https://pay.hotmart.com/S107595385B" target="_blank" rel="noopener noreferrer" className="mt-6 flex h-14 w-full items-center justify-center rounded-full bg-[#e12d2e] text-base font-bold text-white transition-opacity hover:opacity-90 md:text-lg">Quero Fazer Parte →</a>
            <p className="mt-3 text-center text-sm text-gray-500">Abertura limitada aos primeiros participantes do IA Experts Beta.</p>

            <div className="mt-5 flex items-start gap-3 border-t border-gray-200 pt-5">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-gray-400" />
              <p className="text-sm leading-relaxed text-gray-500"><strong className="text-gray-700">Participe do MVP:</strong> entre na turma piloto, ajude a evoluir a experiência e tenha acompanhamento próximo desde o início.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8"><div className="mx-auto max-w-4xl"><div className="mb-10 text-center"><CircleHelp className="mx-auto h-9 w-9 text-primary" /><h2 className="mt-4 font-editorial text-5xl">Perguntas frequentes</h2></div><Accordion type="single" collapsible className="space-y-3">{[["Quanto tempo dura a turma fundadora?", "O programa inicial dura 3 meses, com acompanhamento particular, aulas coletivas e acesso aos cursos."],["Como funcionam as aulas particulares?", "Cada encontro é direcionado às suas dúvidas, ao seu trabalho e às aplicações de IA que você precisa desenvolver."],["As aulas coletivas ficam gravadas?", "Sim. As gravações entram na biblioteca para você rever durante o programa."],["Como funciona o contato para dúvidas?", "Você terá contato no WhatsApp para enviar dúvidas. Os horários e prazos de resposta serão combinados com a turma."]].map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className="border border-border bg-card px-5"><AccordionTrigger className="text-left font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <footer className="border-t border-border px-5 py-9"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"><p className="font-semibold text-foreground"><span className="beta-footer-logo">IA</span> Experts <span className="beta-chip">BETA</span></p><a href="mailto:contato.vitoryujiminomo@gmail.com" className="hover:text-primary">contato.vitoryujiminomo@gmail.com</a></div></footer>
    </main>
  );
};

export default IAExpertsBeta;
