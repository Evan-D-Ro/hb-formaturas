import { motion } from "framer-motion";
import { Users, Award, Clock, ShieldCheck } from "lucide-react";
import differentialsBg from "@/assets/differentials-bg.jpg";

const items = [
  { icon: Users, title: "Atendimento Personalizado", description: "Acompanhamento dedicado e exclusivo para cada turma, do início ao fim" },
  { icon: Award, title: "Qualidade nos Materiais", description: "Produtos premium com acabamento impecável que superam expectativas" },
  { icon: Clock, title: "Experiência no Mercado", description: "Anos de tradição e expertise em formaturas de sucesso" },
  { icon: ShieldCheck, title: "Compromisso com Prazos", description: "Pontualidade e transparência em todas as entregas" },
];

const Differentials = () => {
  return (
    <section
      id="diferenciais"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={differentialsBg}
          alt="Formandos celebrando"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/85 via-foreground/80 to-foreground/90" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary-foreground/70">
            Diferenciais
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-primary-foreground md:text-4xl">
            Por que escolher a{" "}
            <span className="text-gradient-blue">HB Formaturas?</span>
          </h2>
          <p className="mt-4 text-base text-primary-foreground/70">
            Cada detalhe é pensado para que sua formatura seja perfeita e inesquecível.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full gradient-blue shadow-lg">
                <item.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-base font-bold text-primary-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
