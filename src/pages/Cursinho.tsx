import { Button } from "@/components/ui/button";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import {
  Check,
  Sparkles,
  Calendar,
  Users,
  Target,
  Mic,
  DollarSign,
  Rocket,
  Palette,
  BookOpen,
  Briefcase,
  Brain,
} from "lucide-react";

const Cursinho = () => {
  useDynamicMeta({
    title: "Cursinho para Adolescentes | Vitor Yuji",
    description:
      "O cursinho de currículo para adolescentes: marketing, vendas, oratória, finanças e um projeto real criado por cada aluno. Toda segunda, 17h.",
  });

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const temas = [
    { icon: Rocket, title: "Marketing", desc: "Como marcas nascem, crescem e vendem." },
    { icon: DollarSign, title: "Vendas & Persuasão", desc: "Argumentar, negociar e fechar." },
    { icon: Mic, title: "Oratória", desc: "Falar em público sem travar." },
    { icon: Briefcase, title: "Carreira & Currículo", desc: "Como se posicionar cedo no mercado." },
    { icon: DollarSign, title: "Educação Financeira", desc: "Organizar dinheiro, investir e crescer." },
    { icon: Brain, title: "Organização Digital", desc: "Produtividade real com ferramentas certas." },
    { icon: Palette, title: "Artes & Cultura", desc: "Repertório que abre portas." },
    { icon: BookOpen, title: "Filosofia & Religião", desc: "Pensar com profundidade sobre a vida." },
  ];

  const diferenciais = [
    {
      icon: Target,
      title: "Cada aluno cria um projeto",
      desc: "Do zero ao lançamento. Um projeto real para gerir durante o cursinho — como se abrisse a própria empresa.",
    },
    {
      icon: Users,
      title: "Adolescentes ensinam adolescentes",
      desc: "Aulas com convidados jovens que já fazem acontecer. Referência da idade deles, não do seu tio.",
    },
    {
      icon: Sparkles,
      title: "O que a escola não ensina",
      desc: "Marketing, vendas, dinheiro, carreira, oratória. As habilidades que decidem os próximos 10 anos.",
    },
    {
      icon: Calendar,
      title: "Toda segunda, 17h",
      desc: "Uma aula por semana. Ritmo constante, sem sobrecarregar a rotina escolar.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] font-sans text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "100% 36px",
      }}
    >
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block font-bebas tracking-[0.3em] text-orange-400 text-sm mb-6">
              CURSINHO PARA ADOLESCENTES
            </span>
            <h1 className="font-poppins font-extrabold text-4xl md:text-6xl leading-[1.05] mb-6">
              O currículo que a escola{" "}
              <span className="text-yellow-400">não te dá</span>.
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/70 mb-4 leading-relaxed">
              Marketing, vendas, oratória, finanças, carreira, cultura, filosofia.
              Uma aula por semana — e um projeto real criado por você.
            </p>
            <p className="font-sans text-base text-white/50 mb-10">
              Toda segunda-feira, às 17h.
            </p>
            <Button
              onClick={scrollToOffer}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-poppins font-bold text-base md:text-lg px-8 py-6 rounded-full"
            >
              Quero garantir minha vaga
            </Button>
            <p className="mt-4 text-white/50 text-sm">
              Assinatura de <span className="text-white font-semibold">R$100/mês</span>
            </p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-poppins font-extrabold text-3xl md:text-5xl mb-4">
            Como o cursinho funciona
          </h2>
          <p className="text-white/60 text-lg">
            Não é reforço escolar. É formação de repertório e prática real.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {diferenciais.map((d, i) => (
            <div
              key={i}
              className="p-7 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-orange-400/40 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-400/30 flex items-center justify-center mb-4">
                <d.icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-poppins font-bold text-xl mb-2">{d.title}</h3>
              <p className="text-white/65 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Temas / Exemplos de aula */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="font-bebas tracking-[0.25em] text-yellow-400 text-sm mb-3 block">
            EXEMPLOS DE AULAS
          </span>
          <h2 className="font-poppins font-extrabold text-3xl md:text-5xl mb-4">
            O que você vai <span className="text-orange-400">aprender</span>
          </h2>
          <p className="text-white/60 text-lg">
            Temas rotativos ao longo dos meses. Sempre com aplicação prática.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {temas.map((t, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <t.icon className="w-6 h-6 text-orange-400 mb-3" />
              <h3 className="font-poppins font-bold text-base mb-1">{t.title}</h3>
              <p className="text-white/55 text-sm leading-snug">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projeto pessoal — destaque */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto rounded-3xl border border-yellow-400/25 bg-gradient-to-br from-yellow-400/10 via-orange-500/5 to-transparent p-8 md:p-14">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-yellow-400/15 border border-yellow-400/40 flex items-center justify-center">
              <Rocket className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <span className="font-bebas tracking-[0.25em] text-yellow-400 text-sm">
                O CORAÇÃO DO CURSINHO
              </span>
              <h2 className="font-poppins font-extrabold text-3xl md:text-4xl mt-2 mb-4">
                Cada aluno sai com um projeto próprio.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-6">
                Assim como um empreendedor abre uma empresa e aprende a geri-la,
                cada aluno vai criar um projeto real e aprender a tocá-lo do
                início ao fim durante o cursinho. Marketing, vendas, execução —
                tudo aplicado no que é seu.
              </p>
              <ul className="space-y-3">
                {[
                  "Escolha do projeto nas primeiras semanas",
                  "Aplicação dos temas de cada aula no seu projeto",
                  "Apresentação e evolução acompanhadas pelo Vitor",
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span className="text-white/85">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="container mx-auto px-6 py-24">
        <div className="max-w-xl mx-auto text-center rounded-3xl border border-orange-400/30 bg-gradient-to-b from-orange-500/10 to-transparent p-10 md:p-14">
          <span className="font-bebas tracking-[0.3em] text-orange-400 text-sm">
            ASSINATURA MENSAL
          </span>
          <div className="my-6">
            <span className="font-poppins font-extrabold text-6xl md:text-7xl">
              R$100
            </span>
            <span className="text-white/60 text-lg">/mês</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "1 aula ao vivo por semana (segundas, 17h)",
              "Todos os temas do currículo do cursinho",
              "Projeto pessoal acompanhado do início ao fim",
              "Aulas com adolescentes convidados",
              "Cancele quando quiser",
            ].map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/85">{f}</span>
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            onClick={() => window.open("https://pay.hotmart.com/N100239403C?off=k0ngcj2n", "_blank")}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-poppins font-bold text-base md:text-lg py-6 rounded-full"
          >
            Quero minha vaga
          </Button>
          <p className="mt-4 text-white/50 text-xs">
            Vagas limitadas por turma para garantir acompanhamento próximo.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Vitor Yuji · Cursinho para Adolescentes
      </footer>
    </div>
  );
};

export default Cursinho;
