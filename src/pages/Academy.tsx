import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  TrendingUp,
  GraduationCap,
  Presentation,
  Layers,
  Sparkles,
  Video,
  BookOpen,
  Users,
  Quote,
  Minus,
} from "lucide-react";

import depoimentoMax from "@/assets/depoimento-max.png.asset.json";
import depoimentoKarina from "@/assets/depoimento-karina.png.asset.json";
import depoimentoCarlos from "@/assets/depoimento-carlos.png.asset.json";
import depoimentoOsvaldo from "@/assets/depoimento-osvaldo.png.asset.json";

const CHECKOUT_ACADEMY = "";
const CHECKOUT_CURSO = "";

const auloes = [
  {
    icone: TrendingUp,
    titulo: "Aulão IA para Vendas",
    descricao: "Prospecte, escreva propostas e analise suas conversas de venda com IA.",
    link: "",
  },
  {
    icone: Presentation,
    titulo: "Aulão IA pra Slides",
    descricao: "Monte apresentações profissionais em minutos, sem saber design.",
    link: "",
  },
  {
    icone: GraduationCap,
    titulo: "Aulão IA pra Estudos",
    descricao: "Resuma, revise e estude qualquer conteúdo em metade do tempo.",
    link: "",
  },
  {
    icone: Stethoscope,
    titulo: "Aulão IA pra Médicos",
    descricao: "Use IA no consultório com segurança: registros, estudos e rotina.",
    link: "",
  },
];

const modulos = [
  {
    numero: "01",
    titulo: "Fundamentos da IA generativa",
    itens: ["Como a IA realmente funciona", "Qual IA usar em cada situação", "O Filtro da Verdade"],
  },
  {
    numero: "02",
    titulo: "Prompts que funcionam",
    itens: ["Método CIII+", "PAPEI: as 5 atividades da IA", "Biblioteca de prompts prontos"],
  },
  {
    numero: "03",
    titulo: "IA aplicada ao seu trabalho",
    itens: ["Gestão, marketing e vendas", "Sites e apresentações", "Fluxos do dia a dia"],
  },
];

const incluiAcademy = [
  "Todos os aulões, inclusive os novos",
  "Todos os cursos da plataforma",
  "2 aulas ao vivo por mês",
  "1 plantão de dúvidas mensal com o Vitor",
  "1 aula temática nova por mês",
  "Workbook IA Para Todos",
  "Comunidade de alunos no WhatsApp",
];

const comparativo = [
  { recurso: "Um tema específico, direto ao ponto", aulao: true, curso: true, academy: true },
  { recurso: "Curso completo de IA generativa", aulao: false, curso: true, academy: true },
  { recurso: "Todos os aulões liberados", aulao: false, curso: false, academy: true },
  { recurso: "Aulas ao vivo todo mês", aulao: false, curso: false, academy: true },
  { recurso: "Plantão de dúvidas", aulao: false, curso: false, academy: true },
  { recurso: "Conteúdos novos conforme forem lançados", aulao: false, curso: false, academy: true },
];

const depoimentos = [
  {
    image: depoimentoMax.url,
    nome: "Max Mauro",
    cargo: "Engenheiro e CEO da Maxtron Energia",
    texto:
      "Esse foi meu primeiro contato didático com IA. Saí de lá conseguindo aplicar no mesmo dia dentro da empresa.",
    pos: "center 25%",
  },
  {
    image: depoimentoKarina.url,
    nome: "Karina Ferreira",
    cargo: "Médica e oncologista da Vitta",
    texto:
      "Sempre tive muita resistência com tecnologia. Mas a experiência foi fantástica e hoje uso IA todos os dias.",
    pos: "center 15%",
  },
  {
    image: depoimentoCarlos.url,
    nome: "Carlos Henrique de Carvalho",
    cargo: "Professor aposentado de engenharia civil na UFS/IFS",
    texto:
      "As aulas me abriram um leque de opções com alta produtividade que eu nem imaginava existir.",
    pos: "center 25%",
  },
  {
    image: depoimentoOsvaldo.url,
    nome: "Osvaldo Araki",
    cargo: "Empresário",
    texto:
      "Eu tinha muita dificuldade na utilização da inteligência artificial. O Vitor me surpreendeu: linguajar muito fácil e límpido.",
    pos: "center 25%",
  },
];

const faq = [
  {
    p: "Preciso saber alguma coisa de tecnologia?",
    r: "Não. Tudo é ensinado do zero, com linguagem simples e exemplos do dia a dia. A maior parte dos alunos nunca tinha usado IA de verdade antes.",
  },
  {
    p: "Qual a diferença entre o aulão e o curso?",
    r: "O aulão é uma aula única e direta sobre um tema (vendas, slides, estudos ou medicina). O curso é a formação completa, com três módulos, para você dominar a IA generativa em qualquer contexto.",
  },
  {
    p: "A assinatura vale mais a pena?",
    r: "Se você quer mais de um conteúdo, sim. A Academy libera todos os aulões, todos os cursos e ainda inclui duas aulas ao vivo por mês.",
  },
  {
    p: "As aulas ao vivo ficam gravadas?",
    r: "Sim. Todas as aulas ao vivo ficam disponíveis na plataforma para assistir quando quiser.",
  },
  {
    p: "Posso cancelar a assinatura quando quiser?",
    r: "Sim, a assinatura é mensal e você pode cancelar a qualquer momento, sem multa.",
  },
];

const Academy = () => {
  const [slide, setSlide] = useState(0);

  useDynamicMeta({
    title: "IA Na Prática Academy | Plataforma de cursos de IA",
    description:
      "Aulões de R$47, o curso Dominando IA Generativa e a assinatura Academy com aulas ao vivo todo mês. Aprenda inteligência artificial na prática.",
  });

  const irPara = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const comprar = (url: string) => {
    if (url) window.open(url, "_blank");
  };

  const visiveis = [0, 1, 2].map((i) => depoimentos[(slide + i) % depoimentos.length]);

  return (
    <div className="academy min-h-screen bg-background text-foreground font-poppins">
      {/* HERO */}
      <header className="relative overflow-hidden bg-academy-radial">
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(hsl(var(--foreground))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground))_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="container relative mx-auto px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border academy-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              IA Na Prática Academy
            </span>
            <h1 className="mt-8 font-poppins text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              Aprenda IA na prática,
              <br />
              <span className="text-primary">do zero ao domínio</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              A plataforma onde você escolhe por onde começar: aulões diretos ao ponto,
              cursos completos e uma assinatura com aulas ao vivo todo mês.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                onClick={() => irPara("planos")}
                className="w-full bg-gradient-academy px-8 py-6 text-base font-bold text-primary-foreground shadow-academy transition-transform hover:scale-[1.02] sm:w-auto"
              >
                Ver planos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => irPara("auloes")}
                className="w-full border-border academy-surface px-8 py-6 text-base font-semibold text-foreground hover:bg-secondary sm:w-auto"
              >
                Começar pelos aulões
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* ESCADA */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Três degraus, um caminho
            </h2>
            <p className="mt-4 text-muted-foreground">
              Você entra no ponto que faz sentido pra sua realidade e sobe quando quiser.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                num: "01",
                icone: Video,
                titulo: "Aulões",
                preco: "R$47 cada",
                texto: "Uma aula, um tema, resultado no mesmo dia.",
              },
              {
                num: "02",
                icone: BookOpen,
                titulo: "Cursos",
                preco: "Formação completa",
                texto: "Dominando IA Generativa em três módulos.",
              },
              {
                num: "03",
                icone: Layers,
                titulo: "Academy",
                preco: "Assinatura mensal",
                texto: "Tudo liberado + duas aulas ao vivo por mês.",
              },
            ].map((d) => (
              <div
                key={d.num}
                className="group relative overflow-hidden rounded-2xl border border-border academy-surface p-8 shadow-academy-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <span className="text-xs font-bold tracking-widest text-muted-foreground">
                  {d.num}
                </span>
                <d.icone className="mt-6 h-7 w-7 text-primary" />
                <h3 className="mt-5 text-xl font-bold">{d.titulo}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{d.preco}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AULÕES */}
      <section id="auloes" className="border-t border-border py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Comece por aqui
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
                Aulões — R$47 cada
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Aulas gravadas, diretas e aplicáveis. Escolha o tema mais próximo do seu trabalho.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {auloes.map((a) => (
              <div
                key={a.titulo}
                className="flex flex-col rounded-2xl border border-border academy-surface p-6 shadow-academy-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <a.icone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug">{a.titulo}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {a.descricao}
                </p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-2xl font-extrabold">47</span>
                </div>
                <Button
                  onClick={() => comprar(a.link)}
                  disabled={!a.link}
                  className="mt-4 w-full bg-gradient-academy font-bold text-primary-foreground disabled:opacity-40"
                >
                  {a.link ? "Quero esse aulão" : "Em breve"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURSOS */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="container mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Formação completa
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">Cursos</h2>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-primary/30 academy-surface p-8 shadow-academy lg:col-span-2">
              <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                Curso principal
              </span>
              <h3 className="mt-5 text-2xl font-extrabold md:text-3xl">
                Dominando IA Generativa
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Três módulos para sair do improviso e usar inteligência artificial com método,
                em qualquer área.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {modulos.map((m) => (
                  <div key={m.numero} className="rounded-xl border border-border academy-elevated p-5">
                    <span className="text-xs font-bold tracking-widest text-primary">
                      MÓDULO {m.numero}
                    </span>
                    <h4 className="mt-2 text-base font-bold leading-snug">{m.titulo}</h4>
                    <ul className="mt-3 space-y-2">
                      {m.itens.map((i) => (
                        <li key={i} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                          <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-primary" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => comprar(CHECKOUT_CURSO)}
                disabled={!CHECKOUT_CURSO}
                size="lg"
                className="mt-8 bg-gradient-academy px-8 font-bold text-primary-foreground disabled:opacity-40"
              >
                {CHECKOUT_CURSO ? "Quero o curso" : "Em breve"}
              </Button>
            </div>

            <div className="flex flex-col items-start justify-center rounded-2xl border border-dashed border-border p-8">
              <Sparkles className="h-6 w-6 text-muted-foreground" />
              <h3 className="mt-5 text-lg font-bold">Novos cursos a caminho</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                A plataforma cresce todo mês. Quem é assinante da Academy recebe cada
                lançamento sem pagar nada a mais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY */}
      <section id="planos" className="border-t border-border bg-academy-radial py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/40 academy-surface shadow-academy">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10">
                <span className="inline-block rounded-full bg-gradient-academy px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                  Assinatura
                </span>
                <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                  IA Na Prática Academy
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Tudo o que existe hoje na plataforma, tudo o que for lançado e duas aulas
                  ao vivo comigo todo mês.
                </p>

                <div className="mt-8 flex items-end gap-2">
                  <span className="text-sm text-muted-foreground">R$</span>
                  <span className="text-5xl font-extrabold leading-none">100</span>
                  <span className="pb-1 text-sm text-muted-foreground">/mês</span>
                </div>

                <Button
                  onClick={() => comprar(CHECKOUT_ACADEMY)}
                  disabled={!CHECKOUT_ACADEMY}
                  size="lg"
                  className="mt-6 w-full bg-gradient-academy py-6 text-base font-bold text-primary-foreground disabled:opacity-40"
                >
                  {CHECKOUT_ACADEMY ? "Assinar a Academy" : "Em breve"}
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Cancele quando quiser, sem multa.
                </p>
              </div>

              <div className="border-t border-border academy-elevated p-8 md:border-l md:border-t-0 md:p-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary">
                  O que está incluído
                </h3>
                <ul className="mt-6 space-y-4">
                  {incluiAcademy.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Qual é o seu plano?
            </h2>
            <p className="mt-4 text-muted-foreground">Compare e escolha em 10 segundos.</p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-x-auto rounded-2xl border border-border academy-surface">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-5 font-semibold text-muted-foreground">Acesso</th>
                  <th className="p-5 text-center font-bold">Aulão</th>
                  <th className="p-5 text-center font-bold">Curso</th>
                  <th className="p-5 text-center font-bold text-primary">Academy</th>
                </tr>
              </thead>
              <tbody>
                {comparativo.map((linha) => (
                  <tr key={linha.recurso} className="border-b border-border last:border-b-0">
                    <td className="p-5 text-muted-foreground">{linha.recurso}</td>
                    {[linha.aulao, linha.curso, linha.academy].map((v, i) => (
                      <td key={i} className="p-5 text-center">
                        {v ? (
                          <Check className="mx-auto h-4 w-4 text-primary" />
                        ) : (
                          <Minus className="mx-auto h-4 w-4 text-muted-foreground/50" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Indicado por <span className="text-primary">profissionais:</span>
            </h2>
            <div className="hidden gap-2 md:flex">
              <button
                aria-label="Depoimento anterior"
                onClick={() => setSlide((s) => (s - 1 + depoimentos.length) % depoimentos.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border academy-surface transition-colors hover:border-primary/60"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Próximo depoimento"
                onClick={() => setSlide((s) => (s + 1) % depoimentos.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border academy-surface transition-colors hover:border-primary/60"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {visiveis.map((d) => (
              <article
                key={d.nome}
                className="rounded-2xl border border-border academy-surface shadow-academy-card"
              >
                <div className="h-56 overflow-hidden rounded-t-2xl">
                  <img
                    src={d.image}
                    alt={`Foto de ${d.nome}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: d.pos }}
                  />
                </div>
                <div className="relative p-7">
                  <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-academy">
                    <Quote className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">"{d.texto}"</p>
                  <p className="mt-5 text-base font-bold">{d.nome}</p>
                  <p className="text-xs text-muted-foreground">{d.cargo}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2 md:hidden">
            <button
              aria-label="Depoimento anterior"
              onClick={() => setSlide((s) => (s - 1 + depoimentos.length) % depoimentos.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border academy-surface"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Próximo depoimento"
              onClick={() => setSlide((s) => (s + 1) % depoimentos.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border academy-surface"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border py-20 md:py-24">
        <div className="container mx-auto max-w-3xl px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.p}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.r}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-border bg-academy-radial py-20 md:py-28">
        <div className="container mx-auto max-w-2xl px-6 text-center">
          <Users className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
            Entre para a IA Na Prática Academy
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comece por um aulão de R$47 ou assine e tenha tudo em um só lugar.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => irPara("planos")}
              className="w-full bg-gradient-academy px-8 py-6 text-base font-bold text-primary-foreground shadow-academy sm:w-auto"
            >
              Assinar a Academy <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => irPara("auloes")}
              className="w-full border-border academy-surface px-8 py-6 text-base font-semibold text-foreground hover:bg-secondary sm:w-auto"
            >
              Ver os aulões
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Vitor Yuji — IA Na Prática Academy
        </div>
      </footer>
    </div>
  );
};

export default Academy;
