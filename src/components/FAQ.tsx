
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      id: "item-1",
      question: "Preciso ter conhecimento prévio de tecnologia?",
      answer: "Absolutamente não. O manual foi criado especificamente para profissionais sem conhecimento técnico."
    },
    {
      id: "item-2", 
      question: "O conteúdo ficará desatualizado rapidamente?",
      answer: "O manual foca em princípios fundamentais e métodos que permanecem válidos independentemente das mudanças específicas em ferramentas."
    },
    {
      id: "item-3",
      question: "Como recebo o material após a compra?", 
      answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com o link para acessar o produto na página da hotmart."
    },
    {
      id: "item-4",
      question: "Existe garantia de satisfação?",
      answer: "Sim. Caso não fique satisfeito, você pode solicitar reembolso integral em até 7 dias após a compra pela plataforma da Hotmart."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-24 h-24 border border-blue-200 rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border border-blue-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-blue-200 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <div className="text-center mb-8 md:mb-12 px-2">
          <div className="mb-6">
            <span className="font-poppins text-sm text-blue-600 font-semibold uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              F.A.Q.
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-6xl text-ai-black mb-4 md:mb-6 px-2">
            Restou alguma dúvida?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-2">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-white border-2 border-gray-100 hover:border-blue-200 rounded-xl px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <AccordionTrigger className="font-poppins font-bold text-base md:text-lg text-ai-black hover:text-blue-600 transition-colors text-left group-hover:text-blue-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-poppins text-sm md:text-base text-gray-700 leading-relaxed pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
