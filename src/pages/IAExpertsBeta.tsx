import { useState } from "react";
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
import mapasMentaisComposto from "@/assets/mapas-mentais-composto.jpg.asset.json";
import webinarManual from "@/assets/webinar-manual-novo.png";
import webinarWhatsapp from "@/assets/webinar-whatsapp.png";
import webinarBiblioteca from "@/assets/webinar-biblioteca-prompts.png";

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
  { src: "/lovable-uploads/vitor-yuji-palestra-1.png", alt: "Vitor Yuji ensinando inteligência artificial" },
  { src: sessionImage, alt: "Sessão individual de mentoria em IA" },
  { src: "/lovable-uploads/vitor-yuji-palestra-2.png", alt: "Turma de alunos da IA na Prática" },
  { src: classroomImage, alt: "Aula presencial de inteligência artificial" },
  { src: "/lovable-uploads/palestra-shield.jpg", alt: "Palestra sobre inteligência artificial" },
  { src: "/lovable-uploads/palestra-ivo-prado.png", alt: "Profissionais em uma aula de inteligência artificial" },
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
  { label: "Curso completo", title: "Dominando IA Generativa", description: "Fundamentos, bons prompts e aplicação prática no trabalho.", icon: Sparkles, image: "/lovable-uploads/vitor-yuji-palestra-1.png" },
  { label: "Masterclass", title: "IA para Slides", description: "Crie apresentações claras e profissionais em poucos minutos.", icon: Presentation, image: classroomImage },
  { label: "Masterclass", title: "IA para Vendas", description: "Planeje, prospecte e analise conversas comerciais com IA.", icon: TrendingUp, image: "/lovable-uploads/vitor-yuji-palestra-2.png" },
  { label: "Masterclass", title: "IA para Estudos", description: "Resuma, revise e aprenda qualquer assunto com mais velocidade.", icon: GraduationCap, image: sessionImage },
];

const experts = [
  { initials: "VY", name: "Vitor Yuji", role: "Expert principal", copy: "Palestrante de IA, jovem aprendiz da Adapta.org e professor de mais de 50 alunos." },
  { initials: "MA", name: "Maria Augusta", role: "Pesquisa e inovação", copy: "Ex-pesquisadora da SHIELD, cofundadora do Mangue Mania e reconhecida com o Selo ODS 2025." },
  { initials: "B", name: "Bruno", role: "Engenharia de software", copy: "Especialista em tecnologia, construção de soluções e novas ferramentas." },
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
  const visibleTestimonials = [0, 1, 2].map((offset) => testimonials[(testimonialIndex + offset) % testimonials.length]);
  const activeExpert = experts[expertIndex];

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
            <span>Tenha a ajuda de um&nbsp;</span>
            <span className="ia-title-mark" aria-label="IA"><span>IA</span></span>
            <span>&nbsp;Expert de IA</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-snug text-foreground md:text-lg">
            <span>Seu trabalho não precisa só de ferramenta, mas sim de resultado.&nbsp;</span>
            <br className="hidden md:block" />
             <span>O IA Experts te entrega uma equipe de especialistas de IA para implementar com você até ele aprece</span>
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
            {visibleTestimonials.map((testimonial, index) => <article key={`${testimonial.name}-${testimonialIndex}`} className={`${index > 0 ? "hidden md:block" : "block"} overflow-hidden rounded-md border border-border bg-card transition-transform duration-300 hover:-translate-y-1`}><img src={testimonial.image} alt={testimonial.name} className="h-64 w-full object-cover" style={{ objectPosition: testimonial.position }} /><div className="p-7"><span className="text-xs font-semibold uppercase text-primary">{testimonial.result}</span><p className="mt-5 text-lg leading-relaxed text-foreground">“{testimonial.quote}”</p><div className="mt-7 border-t border-border pt-5"><p className="font-semibold">{testimonial.name}</p><p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p></div></div></article>)}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
            <h2 className="max-w-2xl font-editorial text-5xl font-normal leading-[0.98] md:text-7xl">
              Que <em className="text-primary">problema</em><br />queremos resolver?
            </h2>
            <div className="max-w-xl text-lg leading-[1.35] text-foreground md:text-[1.35rem]">
              <p>Os produtos de IA do mercado te entregam ferramentas e cursos gravados.</p>
              <p className="mt-7">Mas todo dia surgem novas ferramentas, técnicas e demandas do seu trabalho.</p>
               <p className="mt-7 font-semibold">Quem vai te ajudar com suas demandas particulares?<br />Quem vai te atualizar constantemente?</p>
              <div className="mt-9 border-y border-border py-6">
                <p className="text-xs font-bold uppercase text-primary">Estudo Bloom</p>
                 <p className="mt-3 font-editorial text-3xl leading-tight">Aprender com um tutor particular é <em className="text-primary">3x mais eficaz.</em></p>
              </div>
              <p className="mt-8 font-semibold">Por isso, queremos te entregar uma equipe de especialistas de IA.</p>
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
                <span>Tenha um </span>
                <em className="font-editorial font-normal text-primary">especialista de IA</em>
                <span> particular</span>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                <span>Nós te entregamos um Especialista de IA particular para você ter&nbsp;</span>
                <br />
                <strong className="font-semibold text-foreground">aulas mensais</strong>
                <span> e </span>
                <strong className="font-semibold text-foreground">contato para tirar dúvidas.</strong>
              </p>

            </div>

            <div className="mt-16 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16">
              <figure className="group relative min-h-[520px] overflow-hidden rounded-[2rem] bg-muted">
                <img src={sessionImage} alt="Aula particular de inteligência artificial" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-4 p-8">
                  <UserRound className="h-7 w-7 shrink-0 text-primary" />
                  <div><p className="text-2xl font-semibold">Aula particular mensal</p><p className="mt-1 text-sm text-muted-foreground">Direcionada às suas demandas e ao seu trabalho.</p></div>
                </figcaption>
              </figure>

              <div className="mx-auto w-full max-w-[540px]">
                <article className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-muted">
                  <div className="absolute inset-0 grid place-items-center bg-muted">
                    <div className="text-center">
                      <div className="mx-auto grid h-24 w-24 place-items-center rounded-full border border-primary/40 bg-background/40">
                        <UserRound className="h-10 w-10 text-primary" />
                      </div>
                      <p className="mt-4 text-xs font-semibold uppercase text-muted-foreground">Foto de {activeExpert.name}</p>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/95 to-transparent px-6 pb-6 pt-24 md:px-8 md:pb-8">
                    <p className="text-[10px] font-semibold uppercase text-primary">{activeExpert.role}</p>
                    <h3 className="mt-2 font-editorial text-4xl leading-none md:text-5xl">{activeExpert.name}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">{activeExpert.copy}</p>
                  </div>
                </article>

                <div className="mt-5 flex items-center justify-between">
                  <p className="text-xs font-semibold text-muted-foreground">{String(expertIndex + 1).padStart(2, "0")} / {String(experts.length).padStart(2, "0")}</p>
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" size="icon" className="h-11 w-11 rounded-full" onClick={() => setExpertIndex((current) => (current - 1 + experts.length) % experts.length)} aria-label="Especialista anterior">
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button type="button" variant="outline" size="icon" className="h-11 w-11 rounded-full" onClick={() => setExpertIndex((current) => (current + 1) % experts.length)} aria-label="Próximo especialista">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl border-t border-border pt-10 text-center sm:grid-cols-2">
              <div className="px-6 py-4 sm:border-r sm:border-border"><p className="font-editorial text-3xl">Aulas mensais</p><p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">Foco nas suas demandas</p></div>
              <div className="px-6 py-4"><p className="font-editorial text-3xl">Contato direto</p><p className="mt-2 text-xs font-semibold uppercase text-muted-foreground">Dúvidas quando precisar</p></div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 md:mb-16"><span className="text-xs font-medium uppercase text-primary">IA Experts Mentorias</span><h2 className="mt-5 text-5xl font-bold leading-[1.02] md:text-7xl"><span>Tenha </span><em className="font-editorial font-normal text-primary">mentorias coletivas</em></h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">Receba mentorias coletivas quinzenais de IA.</p></div>
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="relative min-h-[460px] overflow-hidden rounded-md">
                <img src={classroomImage} alt="Mentoria coletiva da IA Experts" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7"><div className="flex items-center gap-3 text-primary"><Users className="h-7 w-7" /><span className="font-semibold">Mentorias quinzenais</span></div><p className="mt-3 max-w-lg text-muted-foreground">Encontros ao vivo, grupo no WhatsApp e acesso às gravações para rever quando quiser.</p></div>
              </article>
              <div className="border-y border-border px-1 md:px-6">
                <div className="flex items-center justify-between border-b border-border py-5"><div><p className="text-xs font-bold uppercase text-primary">Calendário de aulas</p><h3 className="mt-2 font-editorial text-3xl">Próximos temas</h3></div><CalendarDays className="h-8 w-8 text-primary" /></div>
                <div className="divide-y divide-border">{["IA para Gestão", "IA para Marketing", "IA para Estudos", "Claude Code e VibeCoding"].map((title, index) => <div key={title} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 py-5"><span className="font-editorial text-2xl text-primary">0{index + 1}</span><p className="font-semibold">{title}</p><span className="text-xs text-muted-foreground">Em breve</span></div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 md:mb-16"><span className="text-xs font-medium uppercase text-primary">IA Experts Cursos</span><h2 className="mt-5 text-5xl font-bold leading-[1.02] md:text-7xl"><span>Conheça </span><em className="font-editorial font-normal text-primary">Nossos Cursos</em></h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">*Certificações inclusas</p></div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {courseCards.map((course) => <article key={course.title} className="group relative aspect-[3/4] overflow-hidden rounded-md bg-background"><img src={course.image} alt={course.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" /><course.icon className="absolute right-5 top-5 h-9 w-9 rounded-md border border-primary/40 bg-primary/20 p-2 text-primary" /><div className="absolute inset-x-0 bottom-0 p-6"><p className="text-xs font-bold uppercase text-primary">{course.label}</p><h3 className="mt-2 text-3xl font-bold leading-none">{course.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p></div></article>)}
            </div>
          </div>
        </section>
      </div>

      <section className="border-y border-border bg-card px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <div className="mb-5 inline-block rounded-full border border-primary/40 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Presentes Especiais</span>
            </div>
            <h2 className="mt-5 text-5xl font-bold leading-[1.02] md:text-7xl">
              <span>Além disso, tenha acesso a </span>
              <em className="font-editorial font-normal text-primary">Bônus Especiais</em>
            </h2>
          </div>
          <div className="space-y-6 md:space-y-8">
            {[
              { img: mapasMentaisComposto.url, title: "Mapas Mentais e Resumos das Aulas", desc: "Mapas mentais visuais e resumos das aulas para você estudar, revisar e fixar os principais aprendizados de forma prática.", fit: "contain" as const },
              { img: webinarManual, title: "Workbook IA Experts", desc: "Seu \"guia de bolso\" de IA — um material que te acompanha durante e depois das aulas para garantir que você extraia o máximo valor." },
              { img: webinarWhatsapp, title: "Grupo no WhatsApp", desc: "Faça networking com outros profissionais e seja atualizado constantemente sobre as novidades de IA." },
              { img: webinarBiblioteca, title: "Biblioteca de Prompts", desc: "Tenha acesso a prompts exclusivos da IA Experts, prontos e testados para você aplicar no seu trabalho." },
            ].map((b, i) => {
              const reverse = i % 2 === 1;
              return (
                <div key={i} className={`grid gap-5 md:grid-cols-5 md:gap-7 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <div className="flex flex-col justify-center rounded-md border border-border bg-background p-7 md:col-span-2 md:p-8">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-xs font-bold uppercase tracking-wider text-primary">Bônus {i + 1}</span>
                      </span>
                    </div>
                    <h3 className="mb-3 text-2xl font-bold leading-tight md:text-[26px]">{b.title}</h3>
                    <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">{b.desc}</p>
                  </div>
                  <div className={`relative min-h-[260px] overflow-hidden rounded-md border border-border md:col-span-3 md:min-h-[300px] ${b.fit === "contain" ? "bg-muted" : ""}`}>
                    <img src={b.img} alt={b.title} loading="lazy" className={`absolute inset-0 h-full w-full ${b.fit === "contain" ? "object-contain p-6" : "object-cover"}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="oferta" className="bg-black px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center md:mb-10">
            <span className="inline-block rounded-full bg-red-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">Lote piloto disponível</span>
            <h2 className="mt-5 text-2xl font-bold leading-tight text-white md:text-3xl">Garanta seu Especialista de IA Particular</h2>
            <p className="mt-3 text-sm text-gray-400">A primeira "Escola de IA" do Brasil a te entregar um especialista de IA particular.</p>
          </div>

          {/* Card branco */}
          <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-2xl md:p-8">
            <span className="absolute left-4 top-0 -translate-y-1/2 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white md:text-xs">Melhor condição</span>

            <div className="mt-2">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-bold text-gray-900 md:text-lg">IA Experts Beta <span className="text-sm font-normal text-gray-400 line-through">R$ 1.442</span></h3>
                <span className="rounded bg-yellow-300 px-2 py-0.5 text-xs font-bold text-gray-900">75% OFF</span>
              </div>
              <p className="mt-1 text-xs text-gray-500">3 meses de acompanhamento completo</p>
            </div>

            <div className="my-5 h-px bg-gray-200" />

            <ul className="space-y-3 text-sm text-gray-700">
              {[
                "Especialista de IA Particular (3 meses)",
                "Mentorias Coletivas quinzenais",
                "Acesso a Todos os Cursos",
                "Certificações inclusas",
                "Mapas Mentais e Resumos",
                "Workbook IA Experts",
                "Biblioteca de Prompts exclusiva",
                "Grupo no WhatsApp e networking",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-5 h-px bg-gray-200" />

            <div className="flex items-end justify-between">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400">De R$ 1.442 por apenas</p>
                <p className="text-xs font-medium text-gray-600">
                  <span className="text-sm font-bold text-gray-900">R$727</span> à vista · ou <span className="font-bold text-gray-900">3x de R$ 242</span>
                </p>
              </div>
              <span className="rounded bg-yellow-300 px-2 py-1 text-xs font-bold text-gray-900">Turma piloto</span>
            </div>

            <button disabled className="mt-6 h-12 w-full rounded-full bg-[#e12d2e] text-sm font-bold text-white disabled:opacity-70">Quero entrar na turma piloto</button>
            <p className="mt-3 text-center text-xs text-gray-500">Abertura limitada aos primeiros participantes do IA Experts Beta.</p>

            <div className="mt-5 flex items-start gap-3 border-t border-gray-200 pt-5">
              <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
              <p className="text-xs leading-relaxed text-gray-500"><strong className="text-gray-700">Participe do MVP:</strong> entre na turma piloto, ajude a evoluir a experiência e tenha acompanhamento próximo desde o início.</p>
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
