
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Webinar from "@/components/Webinar";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import BonusSpecials from "@/components/BonusSpecials";
import CostOfNotActing from "@/components/CostOfNotActing";
import Content from "@/components/Content";
import Transformation from "@/components/Transformation";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Offer from "@/components/Offer";
import Guarantee from "@/components/Guarantee";
import Author from "@/components/Author";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { useDynamicMeta } from "@/hooks/useDynamicMeta";

const Manual = () => {
  useDynamicMeta({
    title: "Manual IA Na Prática - O guia mais prático",
    description: "Guia prático de IA pra aumentar sua produtividade. Táticas de IA, exercícios, linguagem simples e mais. Saia na frente com IA Na Prática.",
    image: "/lovable-uploads/c30266d4-9825-4445-9432-869ea5446629.png"
  });

  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <Hero />
      <Testimonials />
      <Webinar />
      <Problems />
      <Solution />
      <BonusSpecials />
      <CostOfNotActing />
      <Content />
      <Transformation />
      <TestimonialsCarousel />
      <Offer />
      <Guarantee />
      <Author />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Manual;
