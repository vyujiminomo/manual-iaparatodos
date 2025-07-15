
import { useDynamicMeta } from "@/hooks/useDynamicMeta";

const VitorYuji = () => {
  useDynamicMeta({
    title: "Vitor Yuji - Criador do Manual IA Para Todos",
    description: "Conheça Vitor Yuji, 14 anos e criador do Manual IA Para Todos, o guia nº1 de IA Generativa no Brasil.",
    image: "/lovable-uploads/c7c5dc38-0495-44e2-b75e-07842c0c52e3.png"
  });

  return (
    <div className="min-h-screen bg-blue-900">
      {/* Página limpa com fundo azul escuro */}
    </div>
  );
};

export default VitorYuji;
