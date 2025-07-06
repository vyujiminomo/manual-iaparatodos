
const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bebas text-4xl md:text-5xl text-ai-black mb-8">
            O que dizem os alunos do método:
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <p className="font-poppins text-gray-600 mb-6 text-sm leading-relaxed">
              "O ChatGPT começou a me entregar exatamente o que eu queria. Minhas amigas até dizem que meu ChatGPT é mais obediente que o delas kkkk."
            </p>
            <div>
              <p className="font-poppins font-bold text-ai-black text-sm">
                Gabriela Coelho
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <p className="font-poppins text-gray-600 mb-6 text-sm leading-relaxed">
              "Achava que IA era coisa complicada, mas ele explicou de uma forma simples e leve. Depois de ler, comecei a usar a IA nos meus estudos e projetos. É um conteúdo que serve pra todo mundo, independente da idade ou do quanto já entende de tecnologia."
            </p>
            <div>
              <p className="font-poppins font-bold text-ai-black text-sm">
                Isadora Helena
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
            <p className="font-poppins text-gray-600 mb-6 text-sm leading-relaxed">
              "Agora é uma ferramenta essencial pra mim. Mudou totalmente meu jeito de pesquisar e estudar."
            </p>
            <div>
              <p className="font-poppins font-bold text-ai-black text-sm">
                Arthur Lucena
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
