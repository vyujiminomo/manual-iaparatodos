const CostOfNotActing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-red-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-orange-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-red-200 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 border border-red-100 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-100 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute top-4 left-4 w-3 h-3 bg-red-200 rounded-full opacity-60"></div>
            <div className="absolute top-6 right-8 w-2 h-2 bg-orange-200 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-8 w-2 h-2 bg-red-200 rounded-full opacity-60"></div>
            
            <div className="relative z-10">
              <h2 className="font-bebas text-3xl md:text-5xl text-ai-black mb-8">
                O Custo de Não Agir Agora
              </h2>
              
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Enquanto você fica perdido entre opções caras, complicadas e demoradas...
              </p>
              
              <div className="mb-8">
                <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Seus concorrentes já estão usando IA para:
                </p>
                <div className="text-left max-w-2xl mx-auto space-y-3">
                  <p className="font-poppins text-lg md:text-xl text-gray-700">✅ Ser muito mais produtivo</p>
                  <p className="font-poppins text-lg md:text-xl text-gray-700">✅ Terminar trabalhos em metade do tempo</p>
                  <p className="font-poppins text-lg md:text-xl text-gray-700">✅ Se destacar e não ficar para trás</p>
                </div>
              </div>
              
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed mb-8 font-semibold">
                Em poucos meses, a diferença entre quem domina IA e quem não domina será gritante.
              </p>
              
              <p className="font-poppins text-lg md:text-xl text-gray-700 leading-relaxed">
                <strong>E você:</strong> Continua procurando uma solução acessível, simples e rápida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostOfNotActing;