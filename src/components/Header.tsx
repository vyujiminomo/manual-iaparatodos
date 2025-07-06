
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-ai-black z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bebas text-2xl font-bold text-white">
          IA PARA TODOS
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="font-poppins text-white hover:text-ai-blue transition-colors"
          >
            O que é o Manual
          </button>
          <button 
            onClick={() => scrollToSection('autor')}
            className="font-poppins text-white hover:text-ai-blue transition-colors"
          >
            Sobre o Autor
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="font-poppins text-white hover:text-ai-blue transition-colors"
          >
            Contato
          </button>
        </nav>
        <Button 
          onClick={() => scrollToSection('oferta')}
          className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold px-6 py-2 rounded-md"
        >
          Quero Acessar
        </Button>
      </div>
    </header>
  );
};

export default Header;
