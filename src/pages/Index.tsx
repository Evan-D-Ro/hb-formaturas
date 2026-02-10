import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <main>
      <Hero />
      <About />
      <Differentials />
      <Services />
      <Gallery />
      <CTASection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
};

export default Index;
