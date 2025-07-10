
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    if (location.pathname === '/manual') {
      // Se estiver na página do manual, volta para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Se estiver em qualquer outra página, vai para home
      navigate('/');
    }
  };

  const handleButtonClick = () => {
    if (location.pathname === '/manual') {
      // Se já estiver no manual, scrolla para oferta
      scrollToSection('oferta');
    } else {
      // Se estiver em outra página, vai para o manual
      navigate('/manual');
    }
  };

  return (
    <header className="fixed top-0 w-full bg-ai-black z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="font-bebas text-2xl text-white cursor-pointer"
          onClick={handleLogoClick}
        >
          <span className="text-ai-blue">IA</span> PARA TODOS
        </div>
        <Button 
          onClick={handleButtonClick}
          className="bg-ai-blue hover:bg-ai-blue/90 text-white font-poppins font-semibold px-6 py-2 rounded-md"
        >
          {location.pathname === '/manual' ? 'Quero Acessar' : 'Ver Manual'}
        </Button>
      </div>
    </header>
  );
};

export default Header;
