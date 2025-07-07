
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                MANUAL IA PARA TODOS
              </span>
            </div>
            <h1 className="font-bebas text-5xl md:text-7xl leading-tight text-ai-black mb-6">
              TUDO DE MELHOR SOBRE IA, EM UM SÓ MANUAL
            </h1>
            <p className="font-poppins text-xl text-gray-700 mb-6 leading-relaxed">
              Guia de IAs, exercícios práticos e linguagem simples - <span className="text-ai-blue font-semibold">lendo 5 minutos por dia</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToOffer}
                size="lg" 
                className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold text-lg px-8 py-4"
              >
                Quero acessar o manual
              </Button>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-poppins text-gray-700 text-sm italic mb-2">
                  "Você conseguiu desbloquear a minha dificuldade com a tecnologia."
                </p>
                <p className="font-poppins font-semibold text-ai-black text-sm">
                  Osvaldo Araki
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-poppins text-gray-700 text-sm italic mb-2">
                  "Eu interagia timidamente, agora mudou 80%"
                </p>
                <p className="font-poppins font-semibold text-ai-black text-sm">
                  Isabella Salim
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 bg-white shadow-2xl border-0">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src="/lovable-uploads/12555f99-96ca-47c9-bc24-74a2677becf4.png" 
                  alt="Capa do Manual Inteligência Artificial Para Todos"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </Card>
            
            <div className="absolute -top-4 -right-4 bg-ai-blue text-white p-4 rounded-lg shadow-lg">
              <p className="font-poppins text-sm font-semibold">+100 alunos</p>
              <p className="font-poppins text-xs">já transformados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
