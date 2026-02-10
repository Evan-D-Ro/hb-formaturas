import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import galleryAlbum from "@/assets/gallery-album.jpg";
import galleryCeremony from "@/assets/gallery-ceremony.jpg";
import galleryParty from "@/assets/gallery-party.jpg";
import galleryPhoto from "@/assets/gallery-photo.jpg";
import galleryGraduate from "@/assets/gallery-graduate.jpg";
import heroGraduation from "@/assets/hero-graduation.jpg";

const images = [
  { src: heroGraduation, alt: "Formandos celebrando" },
  { src: galleryCeremony, alt: "Cerimônia de formatura" },
  { src: galleryAlbum, alt: "Álbum de formatura" },
  { src: galleryParty, alt: "Festa de formatura" },
  { src: galleryPhoto, alt: "Ensaio fotográfico" },
  { src: galleryGraduate, alt: "Formanda com diploma" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="section-alt py-20 lg:py-28">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Galeria
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            Momentos que inspiram
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`group cursor-pointer overflow-hidden rounded-xl ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setSelected(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/20 p-2 text-dark-surface-foreground backdrop-blur-sm transition hover:bg-card/40"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.img
              key={selected}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/20 p-2 text-dark-surface-foreground backdrop-blur-sm transition hover:bg-card/40"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
