import { motion } from "framer-motion";
import { Camera, BookOpen, PartyPopper, Star, Heart, CheckCircle, GraduationCap } from "lucide-react";

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
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Badge "Sobre Nós" Estilizada */}
        <div className="flex justify-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 shadow-sm"
          >
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-primary">
              Sobre nós
            </span>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Lado Esquerdo - Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 border border-primary bg-primary"
          >
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Transformamos sonhos em{" "}
              <span className="text-white block sm:inline underline">momentos eternos</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-100">
              A <strong className="text-gray-900 font-semibold">HB Formaturas</strong> nasceu da paixão por tornar a formatura um marco inesquecível. Somos especialistas em criar experiências completas, cuidando de cada etapa para que você apenas celebre.
            </p>

            <p className="mt-4 text-base leading-relaxed text-gray-100">
              Com dedicação e atenção a cada detalhe, acompanhamos sua turma em toda a jornada. Nosso compromisso é entregar não apenas um serviço, mas a materialização de anos de esforço.
            </p>

            {/* Grid de Checkmarks */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-gray-100">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Lado Direito - Cards de Destaque */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decoração de fundo sutil */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70" />

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-gray-200/50 transition-all"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-200">
                    <f.icon className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-center font-heading text-sm font-bold text-gray-800 leading-tight">
                    {f.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Card de Quote / Heart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-6 flex items-start gap-4 rounded-2xl border border-primary bg-blue-50/50 p-5"
            >
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <Heart className="h-6 w-6 text-blue-500 fill-blue-500" />
              </div>
              <p className="text-sm leading-relaxed text-gray-600 italic">
                <strong className="text-gray-900 font-bold not-italic">Mais do que uma empresa</strong> — somos parceiros na realização do seu sonho de formatura.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;