
import { Mail, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ai-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <div className="font-bebas text-2xl mb-4">
              <span className="text-ai-blue">IA</span>
              <span className="text-white"> PARA TODOS</span>
            </div>
            <p className="font-poppins text-gray-300 text-sm max-w-xs">
              Enquanto o mundo complica, a gente simplifica.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-poppins text-white font-semibold text-lg mb-4">
              Contato
            </h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="text-ai-blue w-4 h-4" />
                <span className="font-poppins text-gray-300 text-sm">contato.vitoryujiminomo@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="text-ai-blue w-4 h-4" />
                <a 
                  href="https://www.instagram.com/vitor.yuji_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-poppins text-gray-300 text-sm hover:text-ai-blue transition-colors"
                >
                  @vitor.yuji_
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="text-ai-blue w-4 h-4" />
                <a 
                  href="https://www.linkedin.com/in/vitor-yuji-minomo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-poppins text-gray-300 text-sm hover:text-ai-blue transition-colors"
                >
                  Vitor Yuji Minomo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
