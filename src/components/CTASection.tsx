import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import logo from "@/assets/logo_3d.png"; // coloque sua logo aqui
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/5544988143049?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20atendimento%20da%20HB%20Formaturas!";

const CTASection = () => {
  return (
    <section id="cta" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">

      {/* Glow de fundo */}
      <div className="absolute w-[600px] h-[600px] rounded-full" />

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Logo com glow */}
          <motion.img
            src={logo}
            alt="HB Formaturas"
            className="w-40 md:w-52 mb-10 drop-shadow-[0_0_35px_rgba(59,130,246,0.8)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
            Pronto para tornar sua formatura{" "}
            <span className="text-blue-400">realidade</span>?
          </h2>

          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Entre em contato agora mesmo e comece a planejar o momento mais
            importante da sua vida acadêmica.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-blue-500 px-10 py-4 font-heading text-base font-bold text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all hover:scale-105 hover:shadow-[0_0_45px_rgba(59,130,246,0.9)]"
          >
            <FaWhatsapp className="h-5 w-5" />
            Quero realizar minha formatura!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
