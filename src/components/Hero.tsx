import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo_horizontal.png";
import heroImg1 from "@/assets/hero-graduation.jpg";
import heroImg2 from "@/assets/hero-slide2.jpg";
import heroImg3 from "@/assets/hero-slide3.jpg";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL = "https://wa.me/5544988143049?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20HB%20Formaturas!";

const slides = [heroImg1, heroImg2, heroImg3];

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Galeria", href: "#galeria" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Início");
  const [hideNav, setHideNav] = useState(false);

  // 1. Efeito para Troca de Slides
  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  // 2. Efeito para Navbar Flutuante
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Efeito para Detectar Seção Ativa no Scroll (Capelo Acompanhando)
  // 3. Efeito para Detectar Seção Ativa (com desligamento no CTA)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {

          // 🔥 Se for CTA ou footer → esconder nav
          if (entry.target.id === "cta" || entry.target.id === "footer") {
            setHideNav(true);
            setActiveSection(null);
            return;
          }

          // Caso contrário → mostrar nav
          setHideNav(false);

          const currentLink = navLinks.find(
            link => link.href === `#${entry.target.id}`
          );

          if (currentLink) {
            setActiveSection(currentLink.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observa as seções do menu + a seção CTA
    const sectionIds = [...navLinks.map(l => l.href), "#cta", "#footer"];
    sectionIds.forEach(id => {
      const element = document.querySelector(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden bg-gradient-to-b from-[#0B2C65] to-[#081B3A]">
      {/* Background carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <img src={slides[current]} alt="Formandos" className="h-full w-full object-cover" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/60 to-black/70 backdrop-brightness-75" />

      {/* Navbar Flutuante */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-500 ease-in-out flex justify-center
  ${hideNav ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}
  ${scrolled ? "top-6 px-4" : "top-0 px-0"}`}
      >

        <div className={`transition-all duration-500 ease-in-out flex items-center justify-between w-full shadow-2xl ${scrolled
          ? "max-w-7xl rounded-2xl bg-white/95 backdrop-blur-md py-3 px-8 md:px-12"
          : "container bg-transparent py-5 px-6 md:px-12 lg:px-20 shadow-none"
          }`}>

          <img
            src={logoHorizontal}
            alt="HB Formaturas"
            className={`transition-all duration-300 ${scrolled ? "h-10 md:h-12 brightness-100" : "h-12 md:h-16 brightness-0 invert"
              }`}
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`relative inline-flex items-center justify-center font-heading text-sm font-semibold transition-all duration-300 whitespace-nowrap group py-2 ${scrolled ? "text-gray-900 hover:text-blue-700" : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`} />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="capelo-indicador"
                        // w-full garante que o container do capelo tenha a mesma largura do texto
                        // left-0 garante que ele comece exatamente onde o texto começa
                        className="absolute -top-4 left-0 w-full flex justify-center text-blue-600"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6 drop-shadow-lg"
                        >
                          <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>                </a>
              );
            })}
          </div>

          {/* Botão Mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)} className={`md:hidden ${scrolled ? "text-gray-900" : "text-white"}`}>
            {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </nav>
      {/* Mobile menu (com ajuste de posição para não sobrepor a nav flutuante) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute ${scrolled ? "top-20" : "top-24"} left-0 right-0 z-30 mx-4 rounded-2xl bg-white shadow-xl p-6 border border-gray-100`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-gray-800 font-semibold hover:text-primary transition-colors">
                  {link.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-bold shadow-lg">
                <FaWhatsapp className="h-5 w-5" /> Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo Central */}
      <div className="relative z-20 flex h-full items-center justify-center text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Sua formatura merece ser <span className="text-blue-400 underline">inesquecível</span>
            </h1>
            <p className="mt-4 text-lg font-light text-white/90 md:text-xl">
              Organizamos cada detalhe com excelência para que você viva o momento mais importante da sua vida acadêmica.
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-blue-700 hover:scale-105">
              <FaWhatsapp className="h-5 w-5" /> Fale conosco no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className={`h-2 transition-all duration-300 rounded-full ${i === current ? "w-8 bg-blue-500" : "w-2 bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;