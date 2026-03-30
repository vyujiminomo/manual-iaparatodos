import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";

interface GiftPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClaim: () => void;
}

const GiftPopup = ({ open, onOpenChange, onClaim }: GiftPopupProps) => {
  const today = new Date();
  const day = today.getDate();
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  const formattedDate = `${day} de ${months[today.getMonth()]}`;

  const handleClaim = () => {
    onClaim();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl rounded-2xl p-0 overflow-hidden">
        {/* Top accent */}
        <div className="h-1.5 bg-gradient-to-r from-yellow-400 to-orange-400 w-full" />

        <div className="p-6 md:p-8 text-center">
          <div className="mx-auto w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-5">
            <Gift className="w-8 h-8 text-yellow-500" />
          </div>

          <DialogHeader className="mb-5">
            <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
              Espera aí, você ganhou um <span className="text-yellow-500">presente!</span>
            </DialogTitle>
          </DialogHeader>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Assinando a Imersão hoje, dia <span className="font-bold text-gray-900">{formattedDate}</span>, até as 23:59, você ganha uma{" "}
            <span className="font-bold text-teal-500">Consultoria de IA fechada de 30 minutos</span> com Vitor Yuji
          </p>

          <Button
            onClick={handleClaim}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6 rounded-lg shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:shadow-[0_0_35px_rgba(250,204,21,0.6)] transition-all"
          >
            🎁 RESGATAR PRESENTE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GiftPopup;
