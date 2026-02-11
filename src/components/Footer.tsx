import { Mail, Phone, MapPin } from "lucide-react";
import logoHorizontal from "@/assets/logo_horizontal_branco.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black text-white pt-16 pb-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo & Empresa */}
          <div>
            <img
              src={logoHorizontal}
              alt="HB Formaturas"
              className="mb-6 h-12"
            />

            <p className="text-sm text-white/60">
              H B FORMATURAS LTDA
            </p>

            <p className="text-sm text-white/60">
              CNPJ: 53.177.377/0001-87
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-blue-400" />
                R Aparecido Scandelai, 2255 –<br />Jardim Cristo Rei - Santa Fé/PR
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a
                  href="mailto:atendimento@hbformaturas.com.br"
                  className="hover:text-blue-400 transition"
                >
                  atendimento@hbformaturas.com.br
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a
                  href="https://wa.me/5544988143049"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition"
                >
                  (44) 98814-3049
                </a>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h4 className="mb-6 font-heading text-sm font-bold uppercase tracking-widest text-white/80">
              Navegação
            </h4>

            <ul className="space-y-3 text-sm text-white/70">
              {[
                { name: "Início", href: "#inicio" },
                { name: "Sobre", href: "#sobre" },
                { name: "Diferenciais", href: "#diferenciais" },
                { name: "Soluções", href: "#solucoes" },
                { name: "Galeria", href: "#galeria" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="transition hover:text-blue-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-heading text-sm font-bold uppercase tracking-widest text-dark-surface-foreground">
              Localização
            </h4>

            <div className="rounded-xl overflow-hidden border border-dark-surface-foreground/10">
              <iframe
                src="https://www.google.com/maps?q=R+Aperecido+Scandelai,+2255,+Jardim+Cristo+Rei&output=embed"
                width="100%"
                height="150"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href="https://www.google.com/maps?q=R+Aperecido+Scandelai,+2255,+Jardim+Cristo+Rei"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm text-primary hover:underline"
            >
              Ver no Google Maps
            </a>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} HB Formaturas. Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
