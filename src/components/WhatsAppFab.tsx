import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5544988143049?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20HB%20Formaturas!";

const WhatsAppFab = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142,70%,45%)] shadow-lg transition-transform hover:scale-110"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppFab;
