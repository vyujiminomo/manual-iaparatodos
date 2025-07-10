
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Webinar from "@/components/Webinar";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Content from "@/components/Content";
import Transformation from "@/components/Transformation";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import Offer from "@/components/Offer";
import Guarantee from "@/components/Guarantee";
import Author from "@/components/Author";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Manual = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <Hero />
      <Testimonials />
      <Webinar />
      <Problems />
      <Solution />
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
