
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Content from "@/components/Content";
import Transformation from "@/components/Transformation";
import Offer from "@/components/Offer";
import Author from "@/components/Author";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <Hero />
      <Problems />
      <Solution />
      <Content />
      <Transformation />
      <Offer />
      <Author />
      <Footer />
    </div>
  );
};

export default Index;
