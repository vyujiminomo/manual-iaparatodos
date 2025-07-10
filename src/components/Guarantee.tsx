
import { Button } from "@/components/ui/button";

const Guarantee = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-300 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Guarantee seal */}
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/115d1d1e-2183-495c-abc3-2d8f83b190cd.png" 
                  alt="Garantia 7 dias" 
                  className="w-32 h-32 md:w-40 md:h-40"
                />
              </div>
              
              {/* Guarantee text */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bebas text-3xl md:text-4xl text-ai-black mb-6 uppercase">
                  Garantia Total de Satisfação
                </h3>
                <p className="font-poppins text-gray-700 text-base md:text-lg leading-relaxed">
                  Pra você se sentir ainda mais seguro(a), a lei te oferece uma garantia total de{" "}
                  <span className="font-bold text-ai-black">7 dias</span>. Se durante esse período você sentir que o manual não é pra você, é só seguir o passo a passo através da plataforma da Hotmart e a plataforma devolve cada centavo do seu investimento,{" "}
                  <span className="font-bold text-ai-black">sem burocracia ou letras miúdas</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
