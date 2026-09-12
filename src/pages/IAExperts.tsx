import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  ChevronRight,
  Code2,
  GraduationCap,
  Library,
  Map,
  Megaphone,
  MessageCircle,
  Mic2,
  MonitorPlay,
  Newspaper,
  Presentation,
  Quote,
  ShieldCheck,
  Sparkles,
  UserRound,
  Users,
  Waves,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import heroImage from "@/assets/iaexperts-hero.jpg";
import whatsappImage from "@/assets/webinar-whatsapp.png";
import promptsImage from "@/assets/webinar-biblioteca-prompts.png";
import workbookImage from "@/assets/webinar-manual-novo.png";
import mapsImage from "@/assets/mapas-mentais-composto.jpg.asset.json";
import sessionImage from "@/assets/sessao-individual-vitor.png.asset.json";
import onlineImage from "@/assets/online-meet.jpg";
import depoimentoOsvaldo from "@/assets/depoimento-osvaldo.png.asset.json";
import depoimentoMax from "@/assets/depoimento-max.png.asset.json";
import depoimentoKarina from "@/assets/depoimento-karina.png.asset.json";
import depoimentoCarlos from "@/assets/depoimento-carlos.png.asset.json";

const testimonials = [
  {
    image: depoimentoMax.url,
    name: "Max Mauro",
    role: "Engenheiro e CEO da Maxtron Energia",
    quote:
      "Hoje eu utilizo IA para pesquisa, soluções profissionais e até pessoais. O professor Yuji tem uma didática realmente diferente!",
  },
  {
    image: depoimentoKarina.url,
    name: "Karina Ferreira",
    role: "Médica e oncologista da Vitta",
    position: "center 15%",
    quote:
      "A experiência foi fantástica! O Vitor é extremamente prático, acessível e dinâmico. Muita aplicabilidade na clínica.",
  },
  {
    image: depoimentoCarlos.url,
    name: "Carlos Henrique de Carvalho",
    role: "Professor aposentado de engenharia civil na UFS/IFS",
    position: "center 25%",
    quote:
      "As aulas me abriram um leque de opções com alta produtividade. Incorporei a IA como uma ferramenta ágil e abrangente.",
  },
  {
    image: depoimentoOsvaldo.url,
    name: "Osvaldo Araki",
    role: "Médico",
    quote:
      "O Vitor me ajudou a destrinchar a IA e desbloquear minha dificuldade com tecnologia, com um linguajar muito fácil e límpido.",
  },
];

const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}) => (
  <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
    <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
    <h2 className="font-poppins text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
      {title} {highlight && <span className="text-primary">{highlight}</span>}
    </h2>
    {description && <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
  </div>
);

const IAExperts = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useDynamicMeta({
    title: "IA Experts | Mentoria pessoal de IA",
    description:
      "Tenha experts acompanhando seu uso de IA por 3 meses, com aulas particulares, encontros coletivos e suporte no WhatsApp.",
  });

  const scrollToOffer = () => document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  const visibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(testimonialIndex + offset) % testimonials.length],
  );

  return (
    <main className="iaexperts min-h-screen bg-background text-foreground">
      <section className="relative flex min-h-[92vh] overflow-hidden border-b border-border">
        <img
          src={heroImage}
          alt="Mentor de inteligência artificial acompanhando um profissional"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 py-20 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="h-2 w-2 bg-primary" /> Turma fundadora · 10–12 ex-alunos
            </div>
            <p className="mb-5 font-bebas text-3xl uppercase text-primary md:text-5xl">IA Experts</p>
            <h1 className="font-poppins text-4xl font-extrabold leading-[1.06] md:text-6xl lg:text-7xl">
              Você não precisa de mais um curso de IA.
              <span className="mt-2 block text-primary">Precisa de alguém que te acompanhe.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Uma equipe de experts para responder suas dúvidas, corrigir seus erros e direcionar como usar IA no seu trabalho todos os meses.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button onClick={scrollToOffer} size="lg" className="h-14 bg-primary px-7 font-bold text-primary-foreground hover:bg-primary/90">
                Quero entrar na IA Experts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <span className="text-sm text-muted-foreground">3 meses de acompanhamento · R$800 no total</span>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="O problema não é aprender"
            title="O curso termina."
            highlight="A IA não para."
            description="Você aprende uma técnica hoje. Amanhã surge outra ferramenta, outra demanda e uma dúvida que nenhuma gravação consegue prever."
          />
          <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-5">
            {[
              ["01", "Bons prompts", "O começo"],
              ["02", "IA para vendas", "Nova aplicação"],
              ["03", "Slides com IA", "Nova ferramenta"],
              ["04", "Vibe coding", "Nova habilidade"],
              ["05", "Agentes e automações", "O próximo salto"],
            ].map(([number, title, label]) => (
              <div key={number} className="bg-card p-6 md:min-h-48">
                <span className="font-bebas text-4xl text-primary">{number}</span>
                <h3 className="mt-8 font-poppins text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xl font-semibold leading-relaxed md:text-2xl">
            É impossível condensar uma tecnologia em movimento em apenas cinco aulas.
          </p>
        </div>
      </section>

      <section className="bg-card px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div className="flex aspect-square items-center justify-center border border-border bg-background">
            <Waves className="h-28 w-28 text-primary" strokeWidth={1.2} />
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Uma comparação simples</p>
            <h2 className="font-poppins text-3xl font-extrabold leading-tight md:text-5xl">Você aprenderia a nadar sozinho?</h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
              Ou apenas vendo um curso gravado? Claro que não. Você procuraria um professor para observar, corrigir e dar segurança.
            </p>
            <p className="mt-6 border-l-2 border-primary pl-5 text-xl font-bold md:text-2xl">
              Com IA é igual: conteúdo ensina. Acompanhamento transforma em prática.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Sua mentorIA"
            title="Uma equipe que conhece"
            highlight="o seu contexto"
            description="A IA Experts acompanha suas dúvidas reais e direciona a tecnologia para aquilo que você precisa fazer agora."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: UserRound,
                tag: "Particular",
                title: "Acompanhamento individual",
                items: ["1 aula particular por mês", "Contato direto no WhatsApp", "Aplicação no seu trabalho", "Correção dos seus erros"],
              },
              {
                icon: Users,
                tag: "Coletivo",
                title: "Evolução em comunidade",
                items: ["1 aula temática por mês", "Grupo exclusivo no WhatsApp", "Troca com outros profissionais", "Novas ferramentas e técnicas"],
              },
            ].map((card) => (
              <article key={card.tag} className="border border-border bg-card p-7 md:p-10">
                <card.icon className="h-10 w-10 text-primary" />
                <p className="mt-8 text-xs font-bold uppercase tracking-widest text-primary">{card.tag}</p>
                <h3 className="mt-2 font-poppins text-2xl font-bold md:text-3xl">{card.title}</h3>
                <ul className="mt-6 space-y-3">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Próximos encontros" title="Aulas coletivas que acompanham" highlight="o mercado" />
          <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {[
              [BriefcaseBusiness, "IA para Gestão"],
              [GraduationCap, "IA para Estudos"],
              [Presentation, "IA para Slides"],
              [Code2, "IA para Vibe Coding"],
              [Megaphone, "IA para Marketing"],
            ].map(([Icon, title], index) => {
              const TopicIcon = Icon as typeof BriefcaseBusiness;
              return (
                <div key={title as string} className="bg-background p-6">
                  <TopicIcon className="h-7 w-7 text-primary" />
                  <p className="mt-10 text-xs text-muted-foreground">TEMA {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-poppins text-lg font-bold">{title as string}</h3>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">As datas serão definidas com a turma fundadora.</p>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Conteúdo sob demanda"
            title="Aprenda no seu ritmo."
            highlight="Pergunte quando precisar."
            description="A biblioteca gravada dá a base. Os experts ajudam você a transformar cada conteúdo em resultado."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [BrainCircuit, "Dominando IA Generativa", "Curso completo"],
              [BriefcaseBusiness, "IA para Vendas", "Masterclass"],
              [Presentation, "IA para Slides", "Masterclass"],
              [GraduationCap, "IA para Estudos", "Masterclass"],
            ].map(([Icon, title, type]) => {
              const CourseIcon = Icon as typeof BrainCircuit;
              return (
                <article key={title as string} className="border border-border bg-card p-6">
                  <CourseIcon className="h-8 w-8 text-primary" />
                  <p className="mt-10 text-xs font-bold uppercase tracking-widest text-muted-foreground">{type as string}</p>
                  <h3 className="mt-2 font-poppins text-xl font-bold">{title as string}</h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-card px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Sem ansiedade tecnológica" title="Você não precisa descobrir" highlight="tudo sozinho" />
          <article className="mb-5 grid overflow-hidden border border-primary/30 bg-primary/5 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <Newspaper className="h-10 w-10 text-primary" />
              <p className="mt-8 text-xs font-bold uppercase tracking-widest text-primary">Atualização semanal</p>
              <h3 className="mt-3 font-poppins text-3xl font-extrabold">As notícias de IA que realmente importam chegam até você.</h3>
              <p className="mt-5 leading-relaxed text-muted-foreground">Sem passar horas pesquisando e sem a sensação de estar ficando para trás.</p>
            </div>
            <img src={whatsappImage} alt="Notícias e suporte da IA Experts pelo WhatsApp" loading="lazy" className="h-full min-h-80 w-full object-cover" />
          </article>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [promptsImage, Library, "Biblioteca individual de prompts"],
              [workbookImage, BookOpen, "Workbook de IA"],
              [mapsImage.url, Map, "Mapas mentais"],
              ["/lovable-uploads/vitor-yuji-palestra-2.png", Mic2, "Gravações das palestras"],
            ].map(([image, Icon, title]) => {
              const BonusIcon = Icon as typeof Library;
              return (
                <article key={title as string} className="overflow-hidden border border-border bg-background">
                  <img src={image as string} alt={title as string} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-5">
                    <BonusIcon className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-poppins font-bold">{title as string}</h3>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Quem vai acompanhar você" title="Seus" highlight="experts" />
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="overflow-hidden border border-border bg-card">
              <img src="/lovable-uploads/vitor-yuji-palestra-2.png" alt="Vitor Yuji, expert em inteligência artificial" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Expert principal</p>
                <h3 className="mt-2 font-poppins text-2xl font-bold">Vitor Yuji</h3>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" /> Principal palestrante de IA de Sergipe</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" /> Jovem aprendiz da Adapta.org</li>
                  <li className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-primary" /> Mais de 50 alunos de IA</li>
                </ul>
              </div>
            </article>
            {[
              {
                initials: "MA",
                name: "Maria Augusta",
                role: "Pesquisa, inovação e impacto",
                description: "Ex-pesquisadora da SHIELD e cofundadora do Mangue Mania, metodologia ativa sobre manguezais reconhecida com o Selo ODS 2025.",
              },
              {
                initials: "B",
                name: "Bruno",
                role: "Engenharia de software",
                description: "Entusiasta de engenharia de software, trazendo uma visão prática sobre tecnologia, construção e novas ferramentas.",
              },
            ].map((expert) => (
              <article key={expert.name} className="flex min-h-full flex-col border border-border bg-card p-7">
                <div className="flex aspect-[4/3] items-center justify-center border border-border bg-background font-bebas text-7xl text-primary">
                  {expert.initials}
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-widest text-primary">{expert.role}</p>
                <h3 className="mt-2 font-poppins text-2xl font-bold">{expert.name}</h3>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{expert.description}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-center text-sm text-muted-foreground">As fotos de Maria Augusta e Bruno serão adicionadas quando forem enviadas.</p>
        </div>
      </section>

      <section className="border-y border-border bg-card px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 grid gap-5 border border-border bg-background p-7 sm:grid-cols-2 md:p-10">
            <div><p className="font-bebas text-5xl text-primary">+50</p><p className="mt-1 text-muted-foreground">alunos de inteligência artificial</p></div>
            <div><p className="font-bebas text-5xl text-primary">ADAPTA.ORG</p><p className="mt-1 text-muted-foreground">experiência construída ao lado de uma referência em IA</p></div>
          </div>
          <SectionHeading eyebrow="Resultados reais" title="Quem aprendeu com a gente" highlight="recomenda" />
          <div className="grid gap-5 md:grid-cols-3">
            {visibleTestimonials.map((testimonial, index) => (
              <article key={`${testimonial.name}-${testimonialIndex}`} className={`${index > 0 ? "hidden md:flex" : "flex"} flex-col overflow-hidden border border-border bg-background`}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                  style={{ objectPosition: testimonial.position }}
                />
                <div className="flex flex-1 flex-col p-6">
                  <Quote className="h-7 w-7 text-primary" />
                  <p className="mt-5 flex-1 leading-relaxed text-muted-foreground">“{testimonial.quote}”</p>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 flex justify-center gap-3">
            <Button variant="outline" size="icon" aria-label="Depoimento anterior" onClick={() => setTestimonialIndex((current) => (current - 1 + testimonials.length) % testimonials.length)}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Próximo depoimento" onClick={() => setTestimonialIndex((current) => (current + 1) % testimonials.length)}>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Sua evolução, sem teto" title="Até onde nossa equipe" highlight="pode ir com você" />
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {[
              { level: "Nível 1", title: "IA Experts", price: "Incluído", copy: "Acompanhamento particular e coletivo durante os 3 meses." },
              { level: "Nível 2", title: "Aula particular adicional", price: "R$100 / aula", copy: "Mais tempo individual para demandas específicas e urgentes." },
              { level: "Nível 3", title: "Implementação", price: "Sob demanda", copy: "Entrega de Skip por R$1.200 ou workshop na empresa por R$2.000." },
            ].map((level, index) => (
              <article key={level.level} className={`border p-7 ${index === 0 ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
                <p className="text-xs font-bold uppercase tracking-widest text-primary">{level.level}</p>
                <h3 className="mt-3 font-poppins text-2xl font-bold">{level.title}</h3>
                <p className="mt-8 font-bebas text-3xl text-primary">{level.price}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{level.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="border-y border-primary/20 bg-card px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Turma fundadora · somente para ex-alunos</p>
            <h2 className="mt-4 font-poppins text-4xl font-extrabold leading-tight md:text-6xl">Três meses para nunca mais usar IA sozinho.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Uma turma pequena para validar o formato com proximidade máxima, aprender com cada aluno e construir a melhor experiência possível.</p>
            <div className="mt-8 flex items-end gap-3">
              <span className="font-bebas text-7xl text-primary">R$800</span>
              <span className="pb-3 text-muted-foreground">no total pelos 3 meses</span>
            </div>
          </div>
          <div className="border border-primary/30 bg-background p-7 md:p-9">
            <p className="font-poppins text-xl font-bold">Tudo incluído na turma fundadora</p>
            <ul className="mt-6 space-y-3">
              {[
                "3 aulas particulares — uma por mês",
                "3 aulas coletivas — uma por mês",
                "Contato particular no WhatsApp",
                "Grupo exclusivo com a turma",
                "Todos os cursos e masterclasses gravados",
                "Notícias semanais, prompts, workbook e mapas mentais",
              ].map((item) => <li key={item} className="flex gap-3 text-sm text-muted-foreground"><Check className="h-5 w-5 shrink-0 text-primary" />{item}</li>)}
            </ul>
            <Button disabled size="lg" className="mt-8 h-14 w-full bg-primary font-bold text-primary-foreground disabled:opacity-70">
              Inscrições em breve
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">O link de inscrição será liberado para os ex-alunos selecionados.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-8 border border-border bg-card p-7 md:grid-cols-[auto_1fr] md:p-12">
          <div className="flex h-28 w-28 items-center justify-center border border-primary/30 bg-primary/10">
            <ShieldCheck className="h-14 w-14 text-primary" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Experimente antes de decidir</p>
            <h2 className="mt-3 font-poppins text-3xl font-extrabold">Venha à próxima aula coletiva de graça.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Veja de perto como funciona o acompanhamento, conheça a equipe e perceba o ganho antes de entrar na turma fundadora.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card px-5 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Perguntas frequentes" title="O que você precisa" highlight="saber" />
          <Accordion type="single" collapsible className="space-y-3">
            {[
              ["Quanto tempo dura a turma fundadora?", "O MVP dura 3 meses. Nesse período, você recebe uma aula particular e uma aula coletiva por mês, além do acompanhamento no WhatsApp e acesso aos conteúdos."],
              ["Como funcionam as aulas particulares?", "Cada encontro é direcionado às suas dúvidas, ao seu trabalho e às aplicações de IA que você precisa desenvolver naquele momento."],
              ["Preciso já entender de IA?", "A turma foi pensada inicialmente para ex-alunos, mas o acompanhamento respeita o nível e o contexto de cada participante."],
              ["As aulas coletivas ficam gravadas?", "Sim. Os encontros coletivos entram na biblioteca para você rever e consultar durante o programa."],
              ["O WhatsApp funciona o dia todo?", "Você terá contato direto e um grupo exclusivo para enviar dúvidas e acompanhar as orientações. Os horários e prazos de resposta serão combinados com a turma."],
              ["Os serviços dos níveis 2 e 3 estão incluídos?", "Não. Aulas particulares adicionais, entrega de Skip e workshops empresariais são serviços opcionais contratados separadamente."],
            ].map(([question, answer], index) => (
              <AccordionItem key={question} value={`item-${index}`} className="border border-border bg-background px-5">
                <AccordionTrigger className="text-left font-bold hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-12 text-center">
            <h2 className="font-poppins text-3xl font-extrabold md:text-5xl">A IA muda todo dia.<br /><span className="text-primary">Você não precisa acompanhar sozinho.</span></h2>
            <Button onClick={scrollToOffer} size="lg" className="mt-7 h-14 bg-primary px-8 font-bold text-primary-foreground hover:bg-primary/90">
              Quero entrar na turma fundadora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-center text-sm text-muted-foreground md:flex-row md:items-center md:justify-between md:text-left">
          <div><p className="font-bebas text-2xl text-foreground">IA Experts</p><p>Sua equipe pessoal de inteligência artificial.</p></div>
          <a href="mailto:contato.vitoryujiminomo@gmail.com" className="hover:text-primary">contato.vitoryujiminomo@gmail.com</a>
        </div>
      </footer>
    </main>
  );
};

export default IAExperts;