
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-ai-black z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bebas text-2xl text-white">
          <span className="text-ai-blue">IA</span> PARA TODOS
        </div>
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
