
const Webinar = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mb-4">
              <span className="font-poppins text-sm text-ai-blue font-semibold uppercase tracking-wider">
                TESTADO NA PRÁTICA
              </span>
            </div>
            <h2 className="font-bebas text-4xl md:text-5xl text-ai-black mb-6 leading-tight">
              O Webinar IA Para Todos
            </h2>
            <p className="font-poppins text-lg text-gray-700 leading-relaxed mb-8">
              Para testar o conteúdo do manual, reuni <span className="font-semibold text-ai-black">20 leigos em IA em 3 encontros ao vivo</span>, e todos saíram com resultados reais.
            </p>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-poppins text-gray-700 mb-4 text-sm leading-relaxed italic">
                  "Descobri no curso que precisava mudar radicalmente minha interação com elas, pois estava cometendo vários erros e demorando muito para obter as respostas que preciso"
                </p>
                <p className="font-poppins font-bold text-ai-black text-sm">
                  Marta Romilda
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-poppins text-gray-700 mb-4 text-sm leading-relaxed italic">
                  "A aula foi bem didática e sensação q tive foi q a IA não ficará tão distante de nós depois de sua apresentação."
                </p>
                <p className="font-poppins font-bold text-ai-black text-sm">
                  Ana Isabel
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="font-poppins text-gray-500 text-center">
                Imagem do encontro<br />
                (será adicionada)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinar;
