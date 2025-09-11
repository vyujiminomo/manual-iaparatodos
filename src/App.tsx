
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usePageTracking } from "@/hooks/useAnalytics";
import Home from "./pages/Home";
import Manual from "./pages/Manual";
import UpsellPnp from "./pages/UpsellPnp";
import Contact from "./pages/Contact";
import Obrigado from "./pages/Obrigado";
import VitorYuji from "./pages/VitorYuji";
import Consultoria from "./pages/Consultoria";
import Consultor from "./pages/Consultor";
import Guia from "./pages/Guia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  usePageTracking();
  
  return (
    <Routes>
      <Route path="/" element={<VitorYuji />} />
      <Route path="/consultoria" element={<Consultoria />} />
      <Route path="/consultor" element={<Consultor />} />
      <Route path="/home" element={<Home />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/upsell-pnp" element={<UpsellPnp />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/obrigado" element={<Obrigado />} />
      <Route path="/guia" element={<Guia />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
