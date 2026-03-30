import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield, Loader2 } from "lucide-react";

const SHEET_NORMAL = "https://script.google.com/macros/s/AKfycbzTOYpeJXrNIs6kfBoxFIbk_yHEevD5Div59JG9QQmmfj3nZWKXBny0Z88jIobd0SAC/exec";
const SHEET_BONUS = "https://script.google.com/macros/s/AKfycbyMud39JG-qm1kANUcDgw2moe1PIsXcxF-dpRc1JTQZScIxcSHy143DffC49OlkOW-Diw/exec";

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  checkoutUrl: string;
  onClosedWithoutSubmit: () => void;
  leadType?: "online" | "presencial";
  isBonus?: boolean;
}

const LeadCaptureModal = ({ open, onOpenChange, checkoutUrl, onClosedWithoutSubmit, leadType = "online", isBonus = false }: LeadCaptureModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    const sheetUrl = isBonus ? SHEET_BONUS : SHEET_NORMAL;
    const payload = { nome: name, email, whatsapp, tipo: leadType };

    try {
      await fetch(sheetUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // silently continue — no-cors won't give response
    }

    setSending(false);
    setSubmitted(true);
    window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen && !submitted) {
      onClosedWithoutSubmit();
    }
    onOpenChange(newOpen);
  };

  const formatWhatsapp = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md bg-white border-0 shadow-2xl rounded-2xl p-0 overflow-hidden">
        <div className="h-1.5 bg-gradient-to-r from-teal-400 to-cyan-500 w-full" />

        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-xl md:text-2xl font-bold text-gray-900 text-center leading-tight">
              Falta <span className="text-teal-500">só um passo</span> pra entrar no grupo da Imersão
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                Nome e sobrenome
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={100}
                className="h-12 rounded-lg border-gray-200 focus:border-teal-400 focus:ring-teal-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                E-mail
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="informeseuemail@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="h-12 rounded-lg border-gray-200 focus:border-teal-400 focus:ring-teal-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="whatsapp" className="text-sm font-semibold text-gray-700">
                Seu WhatsApp (com DDD)
              </Label>
              <Input
                id="whatsapp"
                type="tel"
                placeholder="(79) 99999-9999"
                value={whatsapp}
                onChange={(e) => setWhatsapp(formatWhatsapp(e.target.value))}
                required
                className="h-12 rounded-lg border-gray-200 focus:border-teal-400 focus:ring-teal-400"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500 pt-1">
              <Shield size={14} className="text-green-500 flex-shrink-0" />
              <span>Teste a primeira aula. Se não amar, devolvemos 100%.</span>
            </div>

            <Button
              type="submit"
              disabled={sending}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg py-6 rounded-lg shadow-[0_0_25px_rgba(250,204,21,0.4)] hover:shadow-[0_0_35px_rgba(250,204,21,0.6)] transition-all disabled:opacity-70"
            >
              {sending ? <Loader2 className="animate-spin mr-2" size={20} /> : null}
              AVANÇAR →
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
