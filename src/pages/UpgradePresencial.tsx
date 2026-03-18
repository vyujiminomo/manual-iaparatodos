
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, AlertTriangle, Users, Coffee, MessageCircle } from "lucide-react";

const HOTMART_LINK = "https://pay.hotmart.com/N100239403C";

const UpgradePresencial = () => {
  useDynamicMeta({
    title: "Upgrade Presencial - Imersão IA Para Todos",
    description: "Faça o upgrade para a versão presencial da Imersão IA Para Todos. Apenas 50 vagas.",
    image: "/lovable-uploads/webinar-og-image.png"
  });

  return (
    <div className="min-h-screen bg-foreground font-poppins text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">

          {/* Video Placeholder */}
          <div className="aspect-video bg-primary/80 rounded-2xl flex items-center justify-center mb-8 border border-primary-foreground/10 overflow-hidden">
            <div className="text-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-primary-foreground/70" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-primary-foreground/50 text-sm">Vídeo em breve</p>
            </div>
          </div>

          {/* CTA Button */}
          <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="block mb-12">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg md:text-xl font-bold py-7 rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]">
              Quero Fazer Parte <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </a>

          {/* Main Content */}
          <div className="space-y-8 text-primary-foreground/90">

            <h1 className="font-bebas text-3xl md:text-5xl text-center text-primary-foreground leading-tight">
              PARABÉNS PELA DECISÃO DE ENTRAR NA IMERSÃO IA PARA TODOS!
            </h1>

            <p className="text-lg md:text-xl text-center font-semibold text-accent">
              Sua vaga já está garantida.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Em até 24h você será adicionado no grupo e a primeira aula acontecerá dia <strong className="text-primary-foreground">8 de abril às 19h</strong>.
            </p>

            <p className="text-base md:text-lg leading-relaxed font-semibold text-primary-foreground">
              Mas antes de fechar essa página, quero te fazer um convite:
            </p>

            <div className="border-l-4 border-accent pl-6 space-y-4 py-2">
              <p className="text-base md:text-lg leading-relaxed italic">
                Tem algo que nenhuma tela consegue replicar.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Imagina sentar do lado de um profissional como você. Que também ficou com aquela sensação de que todo mundo entende menos ele.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                E agora está na mesma sala, aprendendo junto, e depois, conversando e tomando um cafézinho.
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed font-semibold">
              Online te dá o conteúdo. <span className="text-accent">Presencial te dá o conteúdo e a experiência.</span>
            </p>

            {/* Presencial Section */}
            <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-8 md:p-10 space-y-6">
              <h2 className="font-bebas text-2xl md:text-4xl text-center text-accent">
                APRESENTO: Imersão IA Para Todos — Versão Presencial
              </h2>

              <p className="text-center text-primary-foreground/70">
                Mesmas datas, mesmo horário, mesma aula. Com:
              </p>

              <div className="space-y-4">
                {[
                  { icon: Users, text: "Aula ao vivo no mesmo ambiente que outros profissionais de Aracaju" },
                  { icon: MessageCircle, text: "Momento prático exclusivo pós-aula com o Vitor Yuji" },
                  { icon: Coffee, text: "Coffee Break" },
                  { icon: Users, text: "Networking e conversas com quem está no mesmo processo que você" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-primary-foreground/5 rounded-xl p-4">
                    <item.icon className="w-6 h-6 text-accent mt-0.5 shrink-0" />
                    <p className="text-base md:text-lg">{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 justify-center text-primary-foreground/80 pt-2">
                <MapPin className="w-5 h-5 text-accent" />
                <p className="text-base md:text-lg font-semibold">
                  Casa Gambiarra, bairro Garcia — Aracaju, SE
                </p>
              </div>

              <div className="flex items-center gap-3 justify-center bg-destructive/20 rounded-xl p-4">
                <AlertTriangle className="w-6 h-6 text-accent shrink-0" />
                <p className="text-base md:text-lg font-bold text-primary-foreground">
                  Apenas 50 vagas presenciais.
                </p>
              </div>
            </div>

            {/* Urgency */}
            <div className="space-y-4 text-base md:text-lg leading-relaxed">
              <p>
                O upgrade para a versão presencial foi criado exclusivamente para quem acabou de adquirir a Imersão e só está disponível <strong className="text-accent">AQUI, nesta página</strong>.
              </p>

              <div className="flex items-start gap-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mt-0.5 shrink-0" />
                <p className="font-semibold">
                  Quando você fechar esta página, ele não estará mais disponível para compra.
                </p>
              </div>

              <p>
                Agora, você pode seguir só com o online (e vai aprender muito).
              </p>
              <p>
                Ou pode incluir a experiência presencial agora clicando no botão abaixo:
              </p>
            </div>

            {/* Final CTA */}
            <a href={HOTMART_LINK} target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg md:text-xl font-bold py-7 rounded-xl shadow-lg shadow-accent/20 transition-all hover:scale-[1.02]">
                Quero Fazer Parte <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </a>

            <p className="text-center text-primary-foreground/60 text-sm">
              Após a inscrição, você será adicionado ao grupo do WhatsApp exclusivo da versão presencial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpgradePresencial;
