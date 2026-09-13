import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  GraduationCap,
  MessageCircle,
  Presentation,
  Quote,
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
import sessionImage from "@/assets/sessao-individual-vitor.png.asset.json";
import classroomImage from "@/assets/presencial-sala-aula.png.asset.json";
import depoimentoOsvaldo from "@/assets/depoimento-osvaldo.png.asset.json";
import depoimentoMax from "@/assets/depoimento-max.png.asset.json";
import depoimentoKarina from "@/assets/depoimento-karina.png.asset.json";
import depoimentoCarlos from "@/assets/depoimento-carlos.png.asset.json";

const testimonials = [
  {
    image: depoimentoMax.url,
    name: "Max Mauro",
    role: "Engenheiro e CEO da Maxtron Energia",
    quote: "Hoje eu utilizo IA para pesquisa, soluções profissionais e até pessoais. O professor Yuji tem uma didática realmente diferente!",
  },
  {
    image: depoimentoKarina.url,
    name: "Karina Ferreira",
    role: "Médica e oncologista da Vitta",
    position: "center 15%",
    quote: "A experiência foi fantástica! O Vitor é extremamente prático, acessível e dinâmico. Muita aplicabilidade na clínica.",
  },
  {
    image: depoimentoCarlos.url,
    name: "Carlos Henrique de Carvalho",
    role: "Professor aposentado de engenharia civil na UFS/IFS",
    position: "center 25%",
    quote: "As aulas me abriram um leque de opções com alta produtividade. Incorporei a IA como uma ferramenta ágil e abrangente.",
  },
  {
    image: depoimentoOsvaldo.url,
    name: "Osvaldo Araki",
    role: "Médico",
    quote: "O Vitor me ajudou a destrinchar a IA e desbloquear minha dificuldade com tecnologia, com um linguajar muito fácil e límpido.",
  },
];

const stageImages = [
  { src: "/lovable-uploads/vitor-yuji-palestra-1.png", alt: "Vitor Yuji ensinando inteligência artificial" },
  { src: sessionImage.url, alt: "Sessão individual de mentoria em IA" },
  { src: "/lovable-uploads/vitor-yuji-palestra-2.png", alt: "Turma de alunos da IA na Prática" },
  { src: classroomImage.url, alt: "Aula presencial de inteligência artificial" },
  { src: "/lovable-uploads/vitor-yuji-palestra-1.png", alt: "Acompanhamento próximo durante a aula" },
  { src: sessionImage.url, alt: "Orientação individual com um expert" },
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
  {
    label: "Curso completo",
    title: "Dominando IA Generativa",
    description: "Fundamentos, bons prompts e aplicação prática no trabalho.",
    icon: Sparkles,
    image: "/lovable-uploads/vitor-yuji-palestra-1.png",
  },
  {
    label: "Masterclass",
    title: "IA para Vendas",
    description: "Planeje, prospecte e analise conversas comerciais com IA.",
    icon: TrendingUp,
    image: "/lovable-uploads/vitor-yuji-palestra-2.png",
  },
  {
    label: "Masterclass",
    title: "IA para Slides",
    description: "Crie apresentações claras e profissionais em poucos minutos.",
    icon: Presentation,
    image: classroomImage.url,
  },
  {
    label: "Masterclass",
    title: "IA para Estudos",
    description: "Resuma, revise e aprenda qualquer assunto com mais velocidade.",
    icon: GraduationCap,
    image: sessionImage.url,
  },
];

const SectionTitle = ({ eyebrow, children, description }: { eyebrow: string; children: React.ReactNode; description?: string }) => (
  <div className="mb-10 md:mb-14">
    <span className="inline-flex bg-primary/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">{eyebrow}</span>
    <h2 className="mt-4 max-w-4xl font-editorial text-5xl leading-[0.98] md:text-7xl">{children}</h2>
    {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
  </div>
);

const IAExperts = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const visibleTestimonials = [0, 1, 2].map((offset) => testimonials[(testimonialIndex + offset) % testimonials.length]);

  useDynamicMeta({
    title: "IA Experts | Seu mentor particular de IA",
    description: "Tenha a ajuda de um expert de IA com mentoria particular, aulas coletivas e cursos completos.",
  });

  const scrollToOffer = () => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="iaexperts min-h-screen overflow-hidden bg-background font-work text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8">
          <span className="text-sm font-bold uppercase tracking-widest"><span className="text-primary">IA</span> Experts</span>
          <Button onClick={scrollToOffer} variant="ghost" className="text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground">
            Turma fundadora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="relative border-b border-border pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="text-sm font-semibold text-primary md:text-lg">Acompanhamento particular e coletivo para profissionais</p>
          <h1 className="mx-auto mt-5 max-w-5xl font-editorial text-6xl leading-[0.9] md:text-8xl lg:text-[7.4rem]">
            Tenha a ajuda de um <em className="font-normal text-primary">Expert</em> de IA
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Você não precisa só de cursos gravados, mas sim de um <strong className="font-semibold text-foreground">mentor particular.</strong><br className="hidden md:block" /> O IA Experts te entrega um mentor particular de IA para você ter <strong className="font-semibold text-primary">resultado.</strong>
          </p>
          <Button onClick={scrollToOffer} size="lg" className="mt-8 h-14 bg-foreground px-7 font-bold text-background hover:bg-foreground/90">
            Quero ter um mentor de IA <span className="ml-3 flex h-8 w-8 items-center justify-center bg-background text-foreground"><ArrowRight className="h-4 w-4" /></span>
          </Button>
        </div>

        <div className="ia-stage mt-12 md:mt-16">
          <div className="ia-stage-track">
            {stageImages.map((image, index) => (
              <figure key={`${image.src}-${index}`} className={`ia-stage-card ia-stage-card-${index + 1}`}>
                <img src={image.src} alt={image.alt} loading={index < 3 ? "eager" : "lazy"} className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-7">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-[220px_1fr] md:items-center md:px-8">
          <p className="text-sm leading-snug text-muted-foreground"><strong className="text-foreground">Profissionais e empresas</strong><br />já aprenderam com a gente</p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="ia-marquee flex w-max items-center gap-14">
              {[...brands, ...brands].map((logo, index) => <img key={`${logo}-${index}`} src={logo} alt="Empresa parceira ou atendida" loading="lazy" className="h-9 w-28 object-contain grayscale opacity-45" />)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionTitle eyebrow="Resultados reais">Quem já teve essa experiência, <em className="text-primary">recomenda.</em></SectionTitle>
            <div className="mb-10 flex gap-2 md:mb-14">
              <Button variant="outline" size="icon" aria-label="Depoimento anterior" onClick={() => setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}><ChevronLeft className="h-5 w-5" /></Button>
              <Button variant="outline" size="icon" aria-label="Próximo depoimento" onClick={() => setTestimonialIndex((current) => (current + 1) % testimonials.length)}><ChevronRight className="h-5 w-5" /></Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <article key={`${testimonial.name}-${testimonialIndex}`} className={`${index > 0 ? "hidden md:flex" : "flex"} min-h-[460px] flex-col overflow-hidden border border-border bg-background`}>
                <img src={testimonial.image} alt={testimonial.name} loading="lazy" className="h-56 w-full object-cover" style={{ objectPosition: testimonial.position }} />
                <div className="flex flex-1 flex-col p-6">
                  <Quote className="h-7 w-7 text-primary" />
                  <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">“{testimonial.quote}”</p>
                  <div className="mt-6 border-t border-border pt-4"><p className="font-semibold">{testimonial.name}</p><p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="01 · Mentor particular" description="Um expert entende sua rotina, acompanha suas dúvidas e ajuda você a transformar IA em resultado.">Um especialista para chamar de <em className="text-primary">seu.</em></SectionTitle>
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {[{ icon: UserRound, title: "Aula particular", copy: "Um encontro individual por mês, direcionado para o seu trabalho e suas prioridades." }, { icon: MessageCircle, title: "Contato para tirar dúvidas", copy: "Converse no WhatsApp quando surgir uma dúvida, um erro ou uma ferramenta nova." }].map((item) => (
                <article key={item.title} className="border border-border bg-card p-7"><item.icon className="h-8 w-8 text-primary" /><h3 className="mt-8 font-editorial text-3xl">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.copy}</p></article>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="group relative min-h-[510px] overflow-hidden bg-muted">
                <img src="/lovable-uploads/vitor-yuji-summit.jpg" alt="Vitor Yuji" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6"><p className="text-xs font-bold uppercase tracking-widest text-primary">Expert principal</p><h3 className="mt-2 font-editorial text-4xl">Vitor Yuji</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Principal palestrante de IA de Sergipe, jovem aprendiz da Adapta.org e professor de mais de 50 alunos.</p></div>
              </article>
              {[
                { initials: "MA", name: "Maria Augusta", role: "Pesquisa e inovação", copy: "Ex-pesquisadora da SHIELD, cofundadora do Mangue Mania e reconhecida com o Selo ODS 2025." },
                { initials: "B", name: "Bruno", role: "Engenharia de software", copy: "Entusiasta de engenharia de software, tecnologia, construção de soluções e novas ferramentas." },
              ].map((expert) => (
                <article key={expert.name} className="group relative flex min-h-[510px] flex-col justify-between overflow-hidden border border-border bg-card p-6">
                  <span className="font-editorial text-8xl text-primary/25 transition-colors group-hover:text-primary/50">{expert.initials}</span>
                  <div><p className="text-xs font-bold uppercase tracking-widest text-primary">{expert.role}</p><h3 className="mt-2 font-editorial text-4xl">{expert.name}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{expert.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="02 · Mentoria coletiva" description="Duas aulas por mês para avançar junto, trocar experiências e acompanhar o que há de novo.">Aprenda com especialistas. Evolua com a <em className="text-primary">turma.</em></SectionTitle>
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="relative min-h-[430px] overflow-hidden">
              <img src={classroomImage.url} alt="Aula coletiva da IA Experts" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7"><div className="flex items-center gap-3 text-primary"><Users className="h-7 w-7" /><span className="font-semibold">2 aulas por mês</span></div><p className="mt-3 max-w-lg text-muted-foreground">Encontros ao vivo, grupo no WhatsApp e acesso às gravações para rever quando quiser.</p></div>
            </article>
            <div className="border border-border bg-background p-6 md:p-8">
              <div className="flex items-center justify-between border-b border-border pb-5"><div><p className="text-xs font-bold uppercase tracking-widest text-primary">Calendário de aulas</p><h3 className="mt-2 font-editorial text-3xl">Próximos temas</h3></div><CalendarDays className="h-8 w-8 text-primary" /></div>
              <div className="mt-2 divide-y divide-border">
                {["IA para Gestão", "IA para Estudos", "IA para Slides", "IA para Vibe Coding", "IA para Marketing"].map((title, index) => (
                  <div key={title} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 py-4"><span className="font-editorial text-2xl text-primary">{String(index + 1).padStart(2, "0")}</span><p className="font-semibold">{title}</p><span className="text-xs text-muted-foreground">Em breve</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground px-5 py-20 text-background md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 md:mb-14"><span className="inline-flex bg-primary/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">03 · Cursos</span><h2 className="mt-4 max-w-4xl font-editorial text-5xl leading-[0.98] md:text-7xl">Conheça seus cursos</h2><p className="mt-5 max-w-2xl text-background/65">Uma biblioteca completa para aprender no seu ritmo e chegar às mentorias com dúvidas cada vez melhores.</p></div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courseCards.map((course, index) => (
              <article key={course.title} className="group relative aspect-[3/4] overflow-hidden bg-background">
                <img src={course.image} alt={course.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className={`absolute inset-0 ${index % 2 === 0 ? "bg-gradient-to-t from-background via-background/35 to-primary/20" : "bg-gradient-to-t from-background via-background/40 to-transparent"}`} />
                <course.icon className="absolute right-5 top-5 h-9 w-9 border border-primary/40 bg-primary/20 p-2 text-primary" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-foreground"><p className="text-[11px] font-bold uppercase tracking-widest text-primary">{course.label}</p><h3 className="mt-2 font-editorial text-3xl leading-none">{course.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="border-b border-border px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div><span className="text-xs font-bold uppercase tracking-widest text-primary">Turma fundadora · 10–12 ex-alunos</span><h2 className="mt-4 font-editorial text-5xl leading-none md:text-7xl">Tenha uma equipe de IA ao seu lado por <em className="text-primary">3 meses.</em></h2><p className="mt-6 max-w-xl text-lg text-muted-foreground">Mentor particular, duas aulas coletivas por mês e todos os cursos da biblioteca.</p></div>
          <div className="border border-primary/35 bg-card p-7 md:p-9"><p className="font-editorial text-5xl text-primary">R$800</p><p className="mt-1 text-sm text-muted-foreground">valor total pelos 3 meses</p><ul className="mt-7 space-y-3 text-sm text-muted-foreground">{["1 aula particular por mês", "Contato para tirar dúvidas", "2 aulas coletivas por mês", "Grupo exclusivo no WhatsApp", "Todos os cursos e gravações"].map((item) => <li key={item} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul><Button disabled className="mt-8 h-14 w-full bg-primary font-bold text-primary-foreground disabled:opacity-70">Inscrições em breve</Button><p className="mt-3 text-center text-xs text-muted-foreground">O novo link de inscrição ainda será liberado.</p></div>
        </div>
      </section>

      <section className="bg-card px-5 py-20 md:px-8">
        <div className="mx-auto max-w-4xl"><div className="mb-10 text-center"><CircleHelp className="mx-auto h-9 w-9 text-primary" /><h2 className="mt-4 font-editorial text-5xl">Perguntas frequentes</h2></div><Accordion type="single" collapsible className="space-y-3">{[
          ["Quanto tempo dura a turma fundadora?", "O programa inicial dura 3 meses, com acompanhamento particular, aulas coletivas e acesso aos cursos."],
          ["Como funcionam as aulas particulares?", "Cada encontro é direcionado às suas dúvidas, ao seu trabalho e às aplicações de IA que você precisa desenvolver."],
          ["As aulas coletivas ficam gravadas?", "Sim. As gravações entram na biblioteca para você rever durante o programa."],
          ["Como funciona o contato para dúvidas?", "Você terá contato no WhatsApp para enviar dúvidas. Os horários e prazos de resposta serão combinados com a turma."],
        ].map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className="border border-border bg-background px-5"><AccordionTrigger className="text-left font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div>
      </section>

      <footer className="border-t border-border px-5 py-9"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"><p className="font-semibold text-foreground"><span className="text-primary">IA</span> Experts</p><a href="mailto:contato.vitoryujiminomo@gmail.com" className="hover:text-primary">contato.vitoryujiminomo@gmail.com</a></div></footer>
    </main>
  );
};

export default IAExperts;