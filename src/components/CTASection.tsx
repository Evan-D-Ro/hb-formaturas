import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5544988143049?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20atendimento%20da%20HB%20Formaturas!";

const CTASection = () => {
  return (
    <section className="dark-surface py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-extrabold text-dark-surface-foreground md:text-4xl lg:text-5xl">
            Pronto para tornar sua formatura{" "}
            <span className="text-gradient-blue">realidade</span>?
          </h2>
          <p className="mt-5 text-lg text-dark-surface-foreground/70">
            Entre em contato agora mesmo e comece a planejar o momento mais importante da sua vida acadêmica.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full gradient-blue px-10 py-4 font-heading text-base font-bold text-primary-foreground shadow-xl transition-all hover:shadow-2xl hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
            Solicitar atendimento pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
