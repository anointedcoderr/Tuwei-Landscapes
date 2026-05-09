import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "../lib/whatsapp.js";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(
        "Hello Tuwei GreenScapes, I would like to know more about your services."
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-leaf/40 animate-ping" />
      <span className="relative w-14 h-14 rounded-full bg-forest text-white shadow-soft flex items-center justify-center hover:bg-deepforest transition">
        <MessageCircle size={26} />
      </span>
      <span className="hidden sm:block absolute right-full top-1/2 -translate-y-1/2 mr-3 bg-deepforest text-white text-xs font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat on WhatsApp
      </span>
    </a>
  );
}
