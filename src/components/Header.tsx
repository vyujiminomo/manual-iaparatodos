
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleButtonClick = () => {
    if (location.pathname === '/manual') {
      scrollToSection('oferta');
    } else {
      navigate('/manual');
    }
  };

  // Renderizar cabeçalho diferente para a página do manual
  if (location.pathname === '/manual') {
    return (
      <header className="fixed top-0 w-full bg-ai-black border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div 
              className="font-bebas text-2xl cursor-pointer"
              onClick={handleLogoClick}
            >
              <span className="text-ai-blue">IA</span>
              <span className="text-white"> PARA TODOS</span>
            </div>
            <Button 
              onClick={handleButtonClick}
              className="bg-ai-blue hover:bg-ai-blue/90 text-white font-semibold px-6 py-2 rounded-md"
            >
              Quero Acessar
            </Button>
          </nav>
        </div>
      </header>
    );
  }

  // Cabeçalho para outras páginas
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div 
              className="font-bold text-xl text-black cursor-pointer"
              onClick={handleLogoClick}
            >
              Vitor Yuji
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-black font-medium hover:text-gray-600">
                Home
              </a>
              <a href="/manual" className="text-black font-medium hover:text-gray-600">
                Manual IA Para Todos
              </a>
              <a 
                href="https://linkedin.com/in/vitor-yuji-minomo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black font-medium hover:text-gray-600"
              >
                LinkedIn
              </a>
              <a href="/contato" className="text-black font-medium hover:text-gray-600">
                Contato
              </a>
            </div>
          </div>
          <Button 
            onClick={handleButtonClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md"
          >
            {location.pathname === '/manual' ? 'Quero Acessar' : 'Ver Manual'}
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
