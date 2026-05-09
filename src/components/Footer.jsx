import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import { PHONE_DISPLAY, EMAIL } from "../lib/whatsapp.js";

const quick = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

const services = [
  "Garden Design and Installation",
  "Lawn Establishment",
  "Cabro, Paving and Driveways",
  "Outdoor Structures",
  "Vertical and Urban Gardening",
  "Lighting and Water Features"
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-deepforest text-white pt-20 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-xl bg-gold text-deepforest flex items-center justify-center">
                <Leaf size={22} />
              </span>
              <div>
                <div className="font-display text-xl font-bold leading-tight">
                  Tuwei GreenScapes
                </div>
                <div className="text-xs tracking-[0.2em] uppercase text-gold">
                  and Contractors
                </div>
              </div>
            </div>
            <p className="mt-5 text-white/70 leading-relaxed max-w-sm">
              Creating Masterpieces. Living Art. Premium landscaping and outdoor construction across Kenya.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-gold font-semibold uppercase text-xs tracking-[0.18em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-white/80">
              {quick.map((q) => (
                <li key={q.href}>
                  <a href={q.href} className="hover:text-gold transition">
                    {q.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-gold font-semibold uppercase text-xs tracking-[0.18em] mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-white/80 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-gold transition">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-gold font-semibold uppercase text-xs tracking-[0.18em] mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-gold shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-gold shrink-0" />
                <a href={`mailto:${EMAIL}`} className="hover:text-gold transition break-all">
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-gold shrink-0" />
                <span>Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-white/60">
            &copy; {year} Tuwei GreenScapes and Contractors. All rights reserved.
          </p>
          <p className="text-white/70">
            Built by <span className="text-gold font-semibold">Sunday</span> from{" "}
            <span className="text-gold font-semibold">Rss World Network Ltd.</span>{" "}
            <a href="mailto:info@rssworldnet.work" className="hover:text-gold transition">
              info@rssworldnet.work
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
