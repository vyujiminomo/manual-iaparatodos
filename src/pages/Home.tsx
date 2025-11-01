import Footer from "@/components/Footer";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";

const Home = () => {
  useDynamicMeta({
    title: "Treinamento de IA gratuito pra escolas sergipanas",
    description: "Um jovem de 15 anos da maior startup de IA do Brasil quer revolucionar a educação em Sergipe.",
    image: "/lovable-uploads/e20266cf-968b-4e4b-aa62-c8c09f3ab0bc.png"
  });

  const cards = [
    {
      image: "/lovable-uploads/webinar-logo-main.png",
      alt: "Webinar IA Para Todos",
      link: "/webinar"
    },
    {
      image: "/lovable-uploads/card-manual.png",
      alt: "Manual de Inteligência Artificial Para Todos",
      link: "/manual"
    },
    {
      image: "/lovable-uploads/card-instagram.png",
      alt: "Instagram",
      link: "https://www.instagram.com/vitoryujim/"
    },
    {
      image: "/lovable-uploads/card-entrevista.png",
      alt: "Entrevista",
      link: "https://www.youtube.com/watch?v=Lrj2LPw80AM&t=523s"
    },
    {
      image: "/lovable-uploads/card-linkedin.png",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/vitor-yuji-minomo/"
    },
    {
      image: "/lovable-uploads/card-sobre.png",
      alt: "Sobre Mim",
      link: "/bio"
    },
    {
      image: "/lovable-uploads/card-whatsapp.png",
      alt: "Contato - WhatsApp",
      link: "https://wa.me/5579981255774"
    }
  ];

  const handleCardClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      window.location.href = link;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6 py-16">
        <div className="max-w-xl w-full">
          {/* Profile Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/vitor-yuji-new-photo.png" 
                alt="Vitor Yuji"
                className="w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
              />
            </div>
            
            <h1 className="text-4xl font-bold mb-2 text-gray-900">
              Vitor Yuji
            </h1>
            
            <p className="text-gray-600 text-base">
              @vitoryujim
            </p>
          </div>

          {/* Action Cards */}
          <div className="space-y-3 mb-8">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(card.link)}
                className="w-full rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-white"
              >
                <img 
                  src={card.image} 
                  alt={card.alt}
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
