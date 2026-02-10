import { Mail, Phone, MapPin } from "lucide-react";
import logoVertical from "@/assets/logo_vertical.png";

const Footer = () => {
  return (
    <footer className="dark-surface border-t border-dark-surface-foreground/10 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Logo & Company */}
          <div>
            <img src={logoVertical} alt="HB Formaturas" className="mb-4 h-20 brightness-0 invert" />
            <p className="text-sm text-dark-surface-foreground/60">
              HB FORMATURAS LTDA
            </p>
            <p className="text-sm text-dark-surface-foreground/60">
              CNPJ: 53.177.377/0001-87
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-dark-surface-foreground">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-dark-surface-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                R Aparecido Scandelai, 2255 – Jardim Cristo Rei
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:atendimento@hbformaturas.com.br" className="transition hover:text-primary">
                  atendimento@hbformaturas.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="https://wa.me/5544988143049" target="_blank" rel="noopener noreferrer" className="transition hover:text-primary">
                  (44) 98814-3049
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-dark-surface-foreground">
              Redes Sociais
            </h4>
            <div className="flex gap-3">
              {["Instagram", "Facebook", "YouTube"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-dark-surface-foreground/20 text-sm text-dark-surface-foreground/60 transition hover:border-primary hover:text-primary"
                  aria-label={name}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-dark-surface-foreground/10 pt-6 text-center text-xs text-dark-surface-foreground/40">
          © {new Date().getFullYear()} HB Formaturas. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
