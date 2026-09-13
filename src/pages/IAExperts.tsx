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
  { label: "Masterclass", title: "IA para Vendas", description: "Planeje, prospecte e analise conversas comerciais com IA.", icon: TrendingUp, image: "/lovable-uploads/vitor-yuji-palestra-2.png" },
  { label: "Masterclass", title: "IA para Slides", description: "Crie apresentações claras e profissionais em poucos minutos.", icon: Presentation, image: classroomImage },
  { label: "Masterclass", title: "IA para Estudos", description: "Resuma, revise e aprenda qualquer assunto com mais velocidade.", icon: GraduationCap, image: sessionImage },
];

const SectionTitle = ({ eyebrow, children, description }: { eyebrow: string; children: React.ReactNode; description?: string }) => (
  <div className="mb-12 md:mb-16">
    <span className="text-xs font-semibold uppercase text-primary">{eyebrow}</span>
    <h2 className="mt-5 max-w-4xl font-editorial text-5xl leading-none md:text-7xl">{children}</h2>
    {description && <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
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
  const scrollToSolutions = () => document.getElementById("solucoes")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="iaexperts min-h-screen overflow-hidden bg-background font-work text-foreground">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5 md:px-8">
          <span className="text-sm font-bold uppercase"><span className="text-primary">IA</span> Experts</span>
          <Button onClick={scrollToOffer} variant="ghost" className="text-xs font-semibold text-muted-foreground hover:bg-muted hover:text-foreground">
            Turma fundadora <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <section className="relative border-b border-border pt-14 md:pt-20">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" /> Parceria Adapta.org · Mais de 50 alunos
          </div>
          <h1 className="mx-auto mt-7 max-w-5xl font-editorial text-6xl leading-[0.9] md:text-8xl lg:text-[7.4rem]">
            Tenha a ajuda de um <em className="font-normal text-primary">Expert</em> de IA
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Você não precisa só de cursos gravados, mas sim de um <strong className="font-semibold text-foreground">mentor particular.</strong><br className="hidden md:block" /> O IA Experts te entrega acompanhamento para você ter <strong className="font-semibold text-primary">resultado.</strong>
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={scrollToOffer} size="lg" className="h-14 w-full px-7 font-bold shadow-[0_16px_40px_-20px_hsl(var(--primary)/0.8)] transition-transform hover:-translate-y-0.5 sm:w-auto">
              Quero ter um mentor de IA <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground text-primary"><ArrowRight className="h-4 w-4" /></span>
            </Button>
            <Button onClick={scrollToSolutions} size="lg" variant="outline" className="h-14 w-full px-7 font-semibold sm:w-auto">Conhecer o programa</Button>
          </div>
        </div>

        <div className="ia-stage mt-14 md:mt-20">
          <div className="ia-stage-track">
            {stageImages.map((image, index) => (
              <figure key={`${image.src}-${index}`} className={`ia-stage-card ia-stage-card-${index + 1}`}>
                <img src={image.src} alt={image.alt} loading={index < 3 ? "eager" : "lazy"} className="h-full w-full object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-8">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 md:grid-cols-[240px_1fr] md:items-center md:px-8">
          <p className="text-sm leading-snug text-muted-foreground"><strong className="text-foreground">Profissionais e empresas</strong><br />já aprenderam com a gente</p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="ia-marquee flex w-max items-center gap-14">
              {[...brands, ...brands].map((logo, index) => <img key={`${logo}-${index}`} src={logo} alt="Empresa parceira ou atendida" loading="lazy" className="h-9 w-28 object-contain grayscale opacity-45" />)}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div><span className="text-xs font-semibold uppercase text-primary">O problema dos cursos</span><h2 className="mt-5 font-editorial text-5xl leading-none md:text-7xl">A IA muda.<br />Sua ajuda também precisa <em className="text-primary">mudar.</em></h2></div>
            <div className="border-t border-border">
              {[
                ["Novas IAs surgem", "A ferramenta que você aprendeu ontem pode não ser a melhor escolha amanhã."],
                ["Novas técnicas aparecem", "Agentes, automações e novas formas de trabalhar não cabem em um curso parado."],
                ["As dúvidas são pessoais", "A melhor aplicação depende da sua profissão, da sua rotina e do resultado que você procura."],
              ].map(([title, copy], index) => <article key={title} className="grid grid-cols-[44px_1fr] gap-4 border-b border-border py-7"><span className="font-editorial text-2xl text-primary">0{index + 1}</span><div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{copy}</p></div></article>)}
            </div>
          </div>
          <div className="mt-16 grid border-y border-border py-10 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-12">
            <p className="font-editorial text-4xl leading-none md:text-5xl">Um curso te mostra como nadar.</p><ArrowRight className="my-6 h-8 w-8 text-primary md:my-0" /><p className="font-editorial text-4xl leading-none text-primary md:text-5xl">Um mentor entra na água com você.</p>
          </div>
        </div>
      </section>

      <div id="solucoes">
        <section className="border-y border-border bg-card px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="01 · Mentor particular" description="Um expert entende sua rotina, acompanha suas dúvidas e ajuda você a transformar IA em resultado.">Um especialista para chamar de <em className="text-primary">seu.</em></SectionTitle>
            <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
              <div className="border-y border-border">
                {[{ icon: UserRound, title: "Aula particular", copy: "Um encontro individual por mês, direcionado para o seu trabalho e suas prioridades." }, { icon: MessageCircle, title: "Contato para tirar dúvidas", copy: "Converse no WhatsApp quando surgir uma dúvida, um erro ou uma ferramenta nova." }].map((item) => (
                  <article key={item.title} className="grid grid-cols-[44px_1fr] gap-4 border-b border-border py-8 last:border-b-0"><item.icon className="h-7 w-7 text-primary" /><div><h3 className="font-editorial text-3xl">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.copy}</p></div></article>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <article className="group relative min-h-[510px] overflow-hidden rounded-2xl bg-muted">
                  <img src="/lovable-uploads/vitor-yuji-summit.jpg" alt="Vitor Yuji" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6"><p className="text-xs font-bold uppercase text-primary">Expert principal</p><h3 className="mt-2 font-editorial text-4xl">Vitor Yuji</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Principal palestrante de IA de Sergipe, jovem aprendiz da Adapta.org e professor de mais de 50 alunos.</p></div>
                </article>
                {[
                  { initials: "MA", name: "Maria Augusta", role: "Pesquisa e inovação", copy: "Ex-pesquisadora da SHIELD, cofundadora do Mangue Mania e reconhecida com o Selo ODS 2025." },
                  { initials: "B", name: "Bruno", role: "Engenharia de software", copy: "Entusiasta de engenharia de software, tecnologia, construção de soluções e novas ferramentas." },
                ].map((expert) => <article key={expert.name} className="group relative flex min-h-[510px] flex-col justify-between overflow-hidden rounded-2xl border border-border bg-background p-6"><span className="font-editorial text-8xl text-primary/25 transition-colors group-hover:text-primary/50">{expert.initials}</span><div><p className="text-xs font-bold uppercase text-primary">{expert.role}</p><h3 className="mt-2 font-editorial text-4xl">{expert.name}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{expert.copy}</p></div></article>)}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="02 · Mentoria coletiva" description="Duas aulas por mês para avançar junto, trocar experiências e acompanhar o que há de novo.">Aprenda com especialistas. Evolua com a <em className="text-primary">turma.</em></SectionTitle>
            <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <article className="relative min-h-[460px] overflow-hidden rounded-2xl">
                <img src={classroomImage} alt="Aula coletiva da IA Experts" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7"><div className="flex items-center gap-3 text-primary"><Users className="h-7 w-7" /><span className="font-semibold">2 aulas por mês</span></div><p className="mt-3 max-w-lg text-muted-foreground">Encontros ao vivo, grupo no WhatsApp e acesso às gravações para rever quando quiser.</p></div>
              </article>
              <div className="border-y border-border px-1 md:px-6">
                <div className="flex items-center justify-between border-b border-border py-5"><div><p className="text-xs font-bold uppercase text-primary">Calendário de aulas</p><h3 className="mt-2 font-editorial text-3xl">Próximos temas</h3></div><CalendarDays className="h-8 w-8 text-primary" /></div>
                <div className="divide-y divide-border">{["IA para Gestão", "IA para Estudos", "IA para Slides", "IA para Vibe Coding", "IA para Marketing"].map((title, index) => <div key={title} className="grid grid-cols-[44px_1fr_auto] items-center gap-3 py-5"><span className="font-editorial text-2xl text-primary">0{index + 1}</span><p className="font-semibold">{title}</p><span className="text-xs text-muted-foreground">Em breve</span></div>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-card px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="03 · Cursos" description="Uma biblioteca completa para aprender no seu ritmo e chegar às mentorias com dúvidas cada vez melhores.">Conteúdo que continua com você.</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {courseCards.map((course) => <article key={course.title} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-background"><img src={course.image} alt={course.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" /><course.icon className="absolute right-5 top-5 h-9 w-9 rounded-md border border-primary/40 bg-primary/20 p-2 text-primary" /><div className="absolute inset-x-0 bottom-0 p-6"><p className="text-xs font-bold uppercase text-primary">{course.label}</p><h3 className="mt-2 font-editorial text-3xl leading-none">{course.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.description}</p></div></article>)}
            </div>
          </div>
        </section>
      </div>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="Resultados reais">Impacto real em rotinas <em className="text-primary">reais.</em></SectionTitle><div className="mb-12 flex gap-2 md:mb-16"><Button variant="outline" size="icon" aria-label="Depoimento anterior" onClick={() => setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}><ChevronLeft className="h-5 w-5" /></Button><Button variant="outline" size="icon" aria-label="Próximo depoimento" onClick={() => setTestimonialIndex((current) => (current + 1) % testimonials.length)}><ChevronRight className="h-5 w-5" /></Button></div></div>
          <div className="grid gap-5 md:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => <article key={`${testimonial.name}-${testimonialIndex}`} className={`${index > 0 ? "hidden md:block" : "block"} overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1`}><img src={testimonial.image} alt={testimonial.name} loading="lazy" className="h-64 w-full object-cover" style={{ objectPosition: testimonial.position }} /><div className="p-7"><span className="text-xs font-semibold uppercase text-primary">{testimonial.result}</span><p className="mt-5 text-lg leading-relaxed text-foreground">“{testimonial.quote}”</p><div className="mt-7 border-t border-border pt-5"><p className="font-semibold">{testimonial.name}</p><p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p></div></div></article>)}
          </div>
        </div>
      </section>

      <section id="oferta" className="border-y border-border bg-card px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div><span className="text-xs font-bold uppercase text-primary">Turma fundadora · 10–12 ex-alunos</span><h2 className="mt-5 font-editorial text-5xl leading-none md:text-7xl">Tenha uma equipe de IA ao seu lado por <em className="text-primary">3 meses.</em></h2><p className="mt-6 max-w-xl text-lg text-muted-foreground">Mentor particular, duas aulas coletivas por mês e todos os cursos da biblioteca.</p><div className="mt-8 flex items-start gap-3 border-t border-border pt-6"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-primary" /><p className="text-sm leading-relaxed text-muted-foreground"><strong className="text-foreground">Experimente antes de decidir:</strong> você pode participar da próxima aula coletiva gratuitamente.</p></div></div>
          <div className="rounded-2xl border border-primary/35 bg-background p-7 md:p-9"><p className="font-editorial text-6xl text-primary">R$800</p><p className="mt-1 text-sm text-muted-foreground">valor total pelos 3 meses</p><ul className="mt-7 space-y-3 text-sm text-muted-foreground">{["1 aula particular por mês", "Contato para tirar dúvidas", "2 aulas coletivas por mês", "Grupo exclusivo no WhatsApp", "Todos os cursos e gravações"].map((item) => <li key={item} className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul><Button disabled className="mt-8 h-14 w-full font-bold disabled:opacity-70">Inscrições em breve</Button><p className="mt-3 text-center text-xs text-muted-foreground">O novo link de inscrição ainda será liberado.</p></div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8"><div className="mx-auto max-w-4xl"><div className="mb-10 text-center"><CircleHelp className="mx-auto h-9 w-9 text-primary" /><h2 className="mt-4 font-editorial text-5xl">Perguntas frequentes</h2></div><Accordion type="single" collapsible className="space-y-3">{[["Quanto tempo dura a turma fundadora?", "O programa inicial dura 3 meses, com acompanhamento particular, aulas coletivas e acesso aos cursos."],["Como funcionam as aulas particulares?", "Cada encontro é direcionado às suas dúvidas, ao seu trabalho e às aplicações de IA que você precisa desenvolver."],["As aulas coletivas ficam gravadas?", "Sim. As gravações entram na biblioteca para você rever durante o programa."],["Como funciona o contato para dúvidas?", "Você terá contato no WhatsApp para enviar dúvidas. Os horários e prazos de resposta serão combinados com a turma."]].map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} className="border border-border bg-card px-5"><AccordionTrigger className="text-left font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <footer className="border-t border-border px-5 py-9"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between"><p className="font-semibold text-foreground"><span className="text-primary">IA</span> Experts</p><a href="mailto:contato.vitoryujiminomo@gmail.com" className="hover:text-primary">contato.vitoryujiminomo@gmail.com</a></div></footer>
    </main>
  );
};

export default IAExperts;
