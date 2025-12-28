import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

const VitorYuji = () => {
  useDynamicMeta({
    title: "Palestra de IA na Prática - Vitor Yuji",
    description: "O garoto de 15 anos que ensinou IA para +1200 pessoas - e pode transformar sua equipe",
    image: "/lovable-uploads/vitor-yuji-palestra-1.png"
  });

  const [empresasIndex, setEmpresasIndex] = useState(0);
  const [escolasIndex, setEscolasIndex] = useState(0);
  const [eventosIndex, setEventosIndex] = useState(0);

  const empresas = [
    { name: "SHIELD", students: "+30 alunos", image: "/lovable-uploads/palestra-shield.jpg" }
  ];

  const escolas = [
    { name: "Colégio Master", students: "+50 alunos", image: "/lovable-uploads/colegio-master-fll.jpg" },
    { name: "Colégio Babylândia", students: "+100 alunos", image: "/lovable-uploads/palestra-babylandia-new.png" },
    { name: "Imersão IA Para Todos", students: "21 alunos", image: "/lovable-uploads/imersao-logo.png" },
    { name: "Colégio Estadual Dom Luciano", students: "+200 alunos", image: "/lovable-uploads/palestra-dom-luciano.png" },
    { name: "SuperClass Itirapina e Brotas", students: "+20 alunos", image: "/lovable-uploads/escola-superclass.png" },
    { name: "Colégio Estadual Ivo do Prado", students: "+100 alunos", image: "/lovable-uploads/palestra-ivo-prado.png" }
  ];

  const eventos = [
    { name: "Conexão Empregabilidade", students: "+50 alunos", image: "/lovable-uploads/instituto-jcpm.png" }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = (current: number, total: number, setter: (n: number) => void) => {
    setter((current + 1) % total);
  };

  const prevSlide = (current: number, total: number, setter: (n: number) => void) => {
    setter((current - 1 + total) % total);
  };

  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-12 md:py-20 px-4 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-teal-400 font-semibold text-sm uppercase tracking-wider border border-teal-400/30 px-4 py-2 rounded-full mb-6">
              Palestra Corporativa & Educacional
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              PALESTRA DE IA NA PRÁTICA
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              O garoto de 15 anos que ensinou IA para +1200 pessoas - e pode transformar sua equipe
            </p>
            
            <Button 
              onClick={scrollToContact}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-base md:text-lg px-8 md:px-10 py-7 md:py-6 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              QUERO UMA PALESTRA →
            </Button>
          </div>
          
          {/* Video */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border-2 border-teal-400/30">
              <img 
                src="/lovable-uploads/vitor-yuji-palestra-1.png" 
                alt="Vitor Yuji palestrando" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Já Palestrei Para Section */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
            JÁ PALESTREI PARA:
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Empresas */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Empresas</h3>
              <div className="relative bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 min-h-[320px] flex flex-col">
                {empresas.length > 1 && (
                  <button 
                    onClick={() => prevSlide(empresasIndex, empresas.length, setEmpresasIndex)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                
                <div className="flex-1 w-full">
                  <img 
                    src={empresas[empresasIndex].image} 
                    alt={empresas[empresasIndex].name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-lg text-gray-900">{empresas[empresasIndex].name}</h4>
                  <p className="text-teal-600 font-semibold">{empresas[empresasIndex].students}</p>
                </div>
                
                {empresas.length > 1 && (
                  <button 
                    onClick={() => nextSlide(empresasIndex, empresas.length, setEmpresasIndex)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
                
                {empresas.length > 1 && (
                  <div className="flex gap-2 justify-center pb-4">
                    {empresas.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === empresasIndex ? 'bg-teal-500' : 'bg-gray-300'}`} />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Escolas */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Escolas</h3>
              <div className="relative bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 min-h-[320px] flex flex-col">
                <button 
                  onClick={() => prevSlide(escolasIndex, escolas.length, setEscolasIndex)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex-1 w-full">
                  <img 
                    src={escolas[escolasIndex].image} 
                    alt={escolas[escolasIndex].name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-lg text-gray-900">{escolas[escolasIndex].name}</h4>
                  <p className="text-teal-600 font-semibold">{escolas[escolasIndex].students}</p>
                </div>
                
                <button 
                  onClick={() => nextSlide(escolasIndex, escolas.length, setEscolasIndex)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
                >
                  <ChevronRight size={20} />
                </button>
                
                <div className="flex gap-2 justify-center pb-4">
                  {escolas.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i === escolasIndex ? 'bg-teal-500' : 'bg-gray-300'}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Eventos */}
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">Eventos</h3>
              <div className="relative bg-gray-50 rounded-xl overflow-hidden border-2 border-gray-200 min-h-[320px] flex flex-col">
                {eventos.length > 1 && (
                  <button 
                    onClick={() => prevSlide(eventosIndex, eventos.length, setEventosIndex)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
                  >
                    <ChevronLeft size={20} />
                  </button>
                )}
                
                <div className="flex-1 w-full">
                  <img 
                    src={eventos[eventosIndex].image} 
                    alt={eventos[eventosIndex].name} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h4 className="font-bold text-lg text-gray-900">{eventos[eventosIndex].name}</h4>
                  <p className="text-teal-600 font-semibold">{eventos[eventosIndex].students}</p>
                </div>
                
                {eventos.length > 1 && (
                  <button 
                    onClick={() => nextSlide(eventosIndex, eventos.length, setEventosIndex)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10"
                  >
                    <ChevronRight size={20} />
                  </button>
                )}
                
                {eventos.length > 1 && (
                  <div className="flex gap-2 justify-center pb-4">
                    {eventos.map((_, i) => (
                      <div key={i} className={`w-2 h-2 rounded-full ${i === eventosIndex ? 'bg-teal-500' : 'bg-gray-300'}`} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Expert */}
      <section className="py-16 md:py-24 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            OLÁ, SOU VITOR YUJI
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/5">
              <img 
                src="/lovable-uploads/vitor-yuji-summit.jpg" 
                alt="Vitor Yuji" 
                className="rounded-xl border-2 border-teal-400/30 w-full h-[500px] object-cover object-top"
              />
            </div>
            
            <div className="w-full md:w-3/5 space-y-4 text-gray-300">
              <p className="text-lg">
                <span className="text-white font-bold">Vitor Yuji tem apenas 15 anos</span> e já é referência em IA Generativa no Nordeste.
              </p>
              <p>
                Foi selecionado pelo CEO Max Peters para ser jovem aprendiz da <span className="text-teal-400 font-semibold">ADAPTA</span>, a maior startup de IA do Brasil.
              </p>
              <p>
                Foi <span className="text-teal-400 font-semibold">4x competidor</span> no torneio de robótica First Lego League.
              </p>
              <p>
                É co-fundador do <span className="text-teal-400 font-semibold">Mangue Mania</span>, a primeira metodologia ativa infantil sobre manguezais de Sergipe, com mais de 400 alunos impactados.
              </p>
              <p>
                Já palestrou sobre IA para <span className="text-white font-bold">+1000 jovens</span> de organizações como Instituto JCPM, Colégio Master e Babylândia.
              </p>
              <p>
                É também músico no <span className="text-teal-400 font-semibold">Movimento Escalada</span>, um dos principais grupos de jovens cristãos do Nordeste.
              </p>
              <p className="text-white font-medium pt-4">
                Desde então, vem transmitindo todo seu conhecimento que adquiriu nos últimos anos para milhares de pessoas, com a missão de tornar a IA acessível para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Não é uma palestra convencional */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">
            ESSA NÃO É UMA PALESTRA CONVENCIONAL
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Uma boa palestra não deveria ser com um profissional que consegue te dar uma palestra motivacional.
            </p>
            <p>
              Deveria ser com um <span className="font-bold text-black">praticante</span>, que está testando e implementando IA em seus estudos e trabalho. Na vida real.
            </p>
            <p className="text-xl font-bold text-teal-600">
              Vitor Yuji é exatamente isso.
            </p>
            <p className="text-2xl font-bold text-black pt-4">
              Ele não é motivacional. É <span className="text-yellow-500">acional</span>.
            </p>
          </div>
          
          <div className="mt-10">
            <Button 
              onClick={scrollToContact}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-12 py-6 rounded-full shadow-[0_0_30px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)]"
            >
              QUERO UMA PALESTRA →
            </Button>
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            DEPOIMENTOS
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Carlos Menezes */}
            <div className="flex flex-col">
              <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-teal-400/30 aspect-[9/16]">
                <video 
                  src="/lovable-uploads/video-carlos-menezes.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              </div>
              <p className="text-white font-semibold text-center mt-3">Carlos Menezes</p>
              <p className="text-gray-400 text-sm text-center">Empresário</p>
            </div>

            {/* Matheus Barreto */}
            <div className="flex flex-col">
              <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-teal-400/30 aspect-[9/16]">
                <video 
                  src="/lovable-uploads/video-matheus-barreto.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              </div>
              <p className="text-white font-semibold text-center mt-3">Matheus Barreto</p>
              <p className="text-gray-400 text-sm text-center">Aluno do 5º ano</p>
            </div>

            {/* Karina Oliveira */}
            <div className="flex flex-col">
              <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-teal-400/30 aspect-[9/16]">
                <video 
                  src="/lovable-uploads/video-karina-oliveira.mp4" 
                  controls 
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              </div>
              <p className="text-white font-semibold text-center mt-3">Karina Oliveira</p>
              <p className="text-gray-400 text-sm text-center">Médica Oncologista</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Motivos */}
      <section className="py-16 md:py-24 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-black">
            5 MOTIVOS PRA ESCOLHER VITOR YUJI
          </h2>
          
          <div className="space-y-8">
            {/* Motivo 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center text-lg">1</span>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Eu falo a língua do público jovem
                </h3>
              </div>
              <div className="pl-14 space-y-3 text-gray-600">
                <p>Tenho 15 anos. Sei como é estar na sala de aula agora, não à 10 anos atrás.</p>
                <p>Já palestrei para <span className="font-semibold text-black">+280 alunos</span> em escolas municipais, institutos de empregabilidade e projetos sociais.</p>
                <p className="text-teal-600 italic">"Se ele fosse meu professor, eu gostaria muito mais das aulas!"</p>
              </div>
            </div>

            {/* Motivo 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center text-lg">2</span>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Não sou teórico, sou executor
                </h3>
              </div>
              <div className="pl-14 grid md:grid-cols-2 gap-6 text-gray-600">
                <div>
                  <p className="font-semibold text-black mb-2">Aprendi IA com:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Mentoria com o CEO da Adapta.org</li>
                    <li>• +10 cursos da Adapta.org</li>
                    <li>• 2 congressos de IA</li>
                    <li>• +5 livros de IA</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-black mb-2">E apliquei em:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Cofundador do Mangue Mania</li>
                    <li>• Cofundador do ArcheoLab</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Motivo 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center text-lg">3</span>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Ferramentas práticas
                </h3>
              </div>
              <div className="pl-14 space-y-3 text-gray-600">
                <p>Sua equipe não precisa de mais um palestrante lendo slides sobre "o futuro da IA".</p>
                <p className="font-semibold text-black">Na minha palestra, a gente USA ChatGPT. Ao vivo. Na hora.</p>
              </div>
            </div>

            {/* Motivo 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center text-lg">4</span>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Personalizado
                </h3>
              </div>
              <div className="pl-14 space-y-3 text-gray-600">
                <p>Antes da palestra, eu converso com você e entendo as necessidades específicas do seu público.</p>
                <p className="font-semibold text-black">Sua empresa/escola é única. Minha palestra também será.</p>
              </div>
            </div>

            {/* Motivo 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-yellow-400">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 h-10 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center text-lg">5</span>
                <h3 className="text-xl md:text-2xl font-bold text-black">
                  Choque seu público com minha idade
                </h3>
              </div>
              <div className="pl-14 space-y-3 text-gray-600">
                <p className="text-2xl font-bold text-black">Tenho 15 anos.</p>
                <p>Se um garoto de 15 anos, de Aracaju, Sergipe, sem estrutura corporativa, consegue criar projetos que impactam centenas de pessoas com IA...</p>
                <p className="font-bold text-yellow-600 text-lg">Então qualquer um pode.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-black">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            O QUE DIZEM SOBRE A PALESTRA
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white/5 rounded-xl p-6 md:p-8 border-l-4 border-teal-400">
              <p className="text-gray-300 text-lg mb-4 italic">
                "Sua palestra me ajudou muito, principalmente na parte de fazer o comando para o chat gpt, depois da sua palestra ele passou a me entregar o texto ou a imagem bem parecido com oque eu queria. E eu adorei ver na prática como ele funcionava e as diferenças entre o normal e o pago. Minhas amigas até falam: 'seu chat gpt, é mais obediente que o meu!' ou 'meu chat gpt não funciona direto' kkkkk. Isso porque elas não sabem fazer o comando direito. Mas eu aprendi!"
              </p>
              <p className="text-teal-400 font-bold">Gabriela Coelho</p>
              <p className="text-gray-500">Estudante do Ensino Médio</p>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 md:p-8 border-l-4 border-yellow-400">
              <p className="text-gray-300 text-lg mb-4 italic">
                "Descobri no curso que precisava mudar radicalmente minha interação com elas, pois estava cometendo vários erros e demorando muito para obter as respostas que preciso. Gratidão. Vou aplicar os conceitos que ensinou e ficar 'fera', e pode ter certeza que vou espalhar aos 4 ventos que meu professor é 45 anos mais novo que eu."
              </p>
              <p className="text-yellow-400 font-bold">Marta Romilda</p>
              <p className="text-gray-500">Administradora</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-16 md:py-24 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-black">
            ENTRE EM CONTATO
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Quer levar uma palestra de IA para sua empresa, escola ou evento? Entre em contato agora!
          </p>
          
          <a 
            href="https://wa.me/5579981255774?text=Olá! Tenho interesse em uma palestra de IA."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-10 py-5 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.7)] transition-all duration-300"
          >
            <MessageCircle size={24} />
            QUERO UMA PALESTRA
          </a>
          
          <p className="text-gray-500 mt-6">
            WhatsApp: (79) 98125-5774
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-black border-t border-gray-800">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vitor Yuji. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VitorYuji;
