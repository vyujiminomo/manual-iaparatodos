import { Button } from "@/components/ui/button";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Check, Sparkles, Clock, Users, Target, Brain } from "lucide-react";

const Cursinho = () => {
  useDynamicMeta({
    title: "Cursinho | Vitor Yuji",
    description:
      "Cursinho de IA para vestibulandos: foco, método de estudos e IA para estudar menos e render mais.",
  });

  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  const beneficios = [
    {
      icon: Target,
      title: "Foco absoluto",
      desc: "Entre em estado de foco profundo em qualquer hora do dia.",
    },
    {
      icon: Brain,
      title: "Método de estudos",
      desc: "A técnica da aula perfeita, flashcards e ciclo de estudos.",
    },
    {
      icon: Sparkles,
      title: "IA a seu favor",
      desc: "Use ChatGPT e NotebookLM para aprender 3x mais rápido.",
    },
    {
      icon: Clock,
      title: "Menos horas, mais resultado",
      desc: "Descanse do jeito certo e recupere 3h de energia em 20min.",
    },
  ];

  const paraQuem = [
    "Vestibulandos que estudam muito, mas rendem pouco",
    "Alunos do cursinho que querem sair na frente com IA",
    "Estudantes cansados de decorar sem entender",
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
              CURSINHO · TURMA 2026
            </span>
            <h1 className="font-poppins font-extrabold text-4xl md:text-6xl leading-[1.05] mb-6">
              O cursinho que te ensina a{" "}
              <span className="text-yellow-400">estudar com IA</span> e passar
              no vestibular.
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Foco, método de estudos e inteligência artificial em um só lugar.
              Estude menos horas, entenda mais e chegue no vestibular com
              vantagem real.
            </p>
            <Button
              onClick={scrollToOffer}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-black font-poppins font-bold text-base md:text-lg px-8 py-6 rounded-full"
            >
              Quero garantir minha vaga
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-poppins font-extrabold text-3xl md:text-5xl mb-4">
            O que você vai desenvolver
          </h2>
          <p className="text-white/60 text-lg">
            Os 4 pilares que separam um vestibulando comum de um aprovado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {beneficios.map((b, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-orange-400/40 transition"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-400/30 flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="font-poppins font-bold text-lg mb-2">{b.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-yellow-400" />
            <span className="font-bebas tracking-[0.25em] text-yellow-400 text-sm">
              PARA QUEM É
            </span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl md:text-4xl mb-8">
            Feito para quem quer <span className="text-orange-400">passar</span>{" "}
            — não só estudar.
          </h2>
          <ul className="space-y-4">
            {paraQuem.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-white/85 text-lg">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA / Oferta */}
      <section id="oferta" className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center rounded-3xl border border-orange-400/30 bg-gradient-to-b from-orange-500/10 to-transparent p-10 md:p-14">
          <h2 className="font-poppins font-extrabold text-3xl md:text-5xl mb-4">
            Garanta sua vaga no{" "}
            <span className="text-yellow-400">Cursinho</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Vagas limitadas por turma para garantir acompanhamento próximo.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-black font-poppins font-bold text-base md:text-lg px-10 py-6 rounded-full"
          >
            Quero minha vaga
          </Button>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Vitor Yuji · Cursinho
      </footer>
    </div>
  );
};

export default Cursinho;
