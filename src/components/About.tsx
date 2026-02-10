import { motion } from "framer-motion";
import { Camera, BookOpen, PartyPopper, Star, Heart, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    { icon: PartyPopper, label: "Organização de Formaturas" },
    { icon: Camera, label: "Registros Fotográficos" },
    { icon: BookOpen, label: "Álbuns de Formatura" },
    { icon: Star, label: "Eventos Memoráveis" },
  ];

  const highlights = [
    "Planejamento completo do início ao fim",
    "Equipe dedicada para cada turma",
    "Materiais de altíssima qualidade",
    "Transparência em todo o processo",
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
              Sobre nós
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Transformamos sonhos em{" "}
              <span className="text-gradient-blue">momentos eternos</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A <strong className="text-foreground">HB Formaturas</strong> nasceu da paixão por tornar a formatura um marco inesquecível. 
              Somos especialistas em criar experiências completas — do planejamento da cerimônia aos registros 
              que ficarão para sempre na memória.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Com dedicação e atenção a cada detalhe, acompanhamos sua turma em toda a jornada, 
              garantindo que cada momento seja vivido com intensidade e registrado com perfeição. 
              Nosso compromisso é entregar não apenas um serviço, mas uma experiência que supera expectativas.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-sm font-medium text-foreground">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg gradient-blue">
                    <f.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-center font-heading text-sm font-semibold text-foreground">
                    {f.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-5 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <Heart className="h-6 w-6 flex-shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Mais do que uma empresa</strong> — somos parceiros na realização do seu sonho de formatura.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
