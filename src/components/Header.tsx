
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bebas text-2xl font-bold text-ai-black">
          IA PARA TODOS
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="font-poppins text-gray-700 hover:text-ai-blue transition-colors"
          >
            Sobre o Manual
          </button>
          <button 
            onClick={() => scrollToSection('conteudo')}
            className="font-poppins text-gray-700 hover:text-ai-blue transition-colors"
          >
            Conteúdo
          </button>
          <button 
            onClick={() => scrollToSection('autor')}
            className="font-poppins text-gray-700 hover:text-ai-blue transition-colors"
          >
            Autor
          </button>
        </nav>
        <Button 
          onClick={() => scrollToSection('oferta')}
          className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold px-6 py-2"
        >
          Quero Começar
        </Button>
      </div>
    </header>
  );
};

export default Header;
