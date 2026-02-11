import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Differentials from "@/components/Differentials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import Header from "@/components/Header";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main>
        <Hero />
        <About />
        <Differentials />
        <Services />
        <Gallery />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
