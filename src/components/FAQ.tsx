
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
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 md:mb-12 px-2">
          <div className="mb-3 md:mb-4">
            <span className="font-poppins text-xs sm:text-sm text-ai-blue font-semibold uppercase tracking-wider">
              F.A.Q.
            </span>
          </div>
          <h2 className="font-bebas text-3xl sm:text-4xl md:text-6xl text-ai-black mb-4 md:mb-6 px-2">
            Restou alguma dúvida?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-2">
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="bg-white border border-gray-200 rounded-lg px-3 sm:px-6 py-1 sm:py-2 shadow-sm"
              >
                <AccordionTrigger className="font-poppins font-semibold text-sm sm:text-base md:text-lg text-ai-black hover:text-ai-blue transition-colors text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-poppins text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed pt-2">
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
