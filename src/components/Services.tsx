import { motion } from "framer-motion";
import { Calendar, BookOpen, Camera, Sparkles, ClipboardCheck, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Organização de Formaturas",
    description: "Planejamento completo do evento, desde a logística até a decoração, garantindo uma cerimônia impecável e memorável.",
  },
  {
    icon: BookOpen,
    title: "Álbuns de Formatura",
    description: "Álbuns premium com materiais de alta qualidade que preservam suas melhores memórias para sempre, com design exclusivo.",
  },
  {
    icon: Camera,
    title: "Fotos e Vídeos Profissionais",
    description: "Ensaios fotográficos e cobertura completa em vídeo com equipamentos de última geração e profissionais experientes.",
  },
  {
    icon: Sparkles,
    title: "Cerimônias e Eventos",
    description: "Produção de eventos memoráveis com atenção a cada detalhe, do convite à decoração da mesa de doces.",
  },
  {
    icon: ClipboardCheck,
    title: "Gestão de Cobrança e Entrega",
    description: "Processos transparentes e acompanhamento completo do pedido até a entrega final, sem surpresas.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-alt py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Soluções
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Tudo que sua formatura precisa
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Oferecemos soluções completas para tornar sua formatura perfeita em cada detalhe.
          </p>
        </motion.div>

        {/* Top row: 3 cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-blue transition-transform group-hover:scale-110">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:max-w-2xl/3 lg:mx-auto lg:grid-cols-2">
          {services.slice(3).map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.08 }}
              className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl gradient-blue transition-transform group-hover:scale-110">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
