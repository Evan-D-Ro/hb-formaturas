import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo_horizontal.png";
import heroImg1 from "@/assets/hero-graduation.jpg";
import heroImg2 from "@/assets/hero-slide2.jpg";
import heroImg3 from "@/assets/hero-slide3.jpg";

const WHATSAPP_URL = "https://wa.me/5544988143049?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20HB%20Formaturas!";

const slides = [heroImg1, heroImg2, heroImg3];

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] overflow-hidden">
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
          <img
            src={slides[current]}
            alt="Formandos celebrando"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <img src={logoHorizontal} alt="HB Formaturas" className="h-14 md:h-16 lg:h-20 brightness-0 invert" />

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-semibold text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-blue px-6 py-2.5 font-heading text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Fale Conosco
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {menuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 z-30 mx-4 rounded-2xl border border-border/20 bg-foreground/95 backdrop-blur-md p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-base font-semibold text-primary-foreground/90 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-blue px-6 py-3 font-heading text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-dark-surface-foreground md:text-5xl lg:text-6xl">
              Sua formatura merece ser{" "}
              <span className="text-gradient-blue">inesquecível</span>
            </h1>
            <p className="mt-4 text-lg font-light text-dark-surface-foreground/80 md:text-xl">
              Organizamos cada detalhe com excelência — da cerimônia ao álbum — para que você viva o momento mais importante da sua vida acadêmica.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full gradient-blue px-8 py-4 font-heading text-base font-bold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="h-5 w-5" />
              Fale conosco no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary" : "w-2 bg-dark-surface-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
