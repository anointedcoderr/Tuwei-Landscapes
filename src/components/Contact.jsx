import { Phone, Mail, MapPin, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import { PHONE_DISPLAY, EMAIL, buildWhatsAppLink } from "../lib/whatsapp.js";

const items = [
  { icon: Phone, label: "Phone and WhatsApp", value: PHONE_DISPLAY, href: `tel:+254732592783` },
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: "Location", value: "Kenya" },
  { icon: Clock, label: "Business Hours", value: "Monday to Saturday, 8:00 AM to 6:00 PM" }
];

export default function Contact() {
  return (
    <section id="contact" className="section bg-cream">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-stretch">
        <div className="lg:col-span-6">
          <span className="eyebrow">Contact</span>
          <h2 className="heading-lg text-deepforest">
            Let Us Walk Your Site With You
          </h2>
          <p className="mt-4 text-charcoal/75 leading-relaxed max-w-xl">
            Reach out for a free consultation. We respond fast on WhatsApp and arrange site visits across Kenya.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {items.map((it) => {
              const content = (
                <div className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-card hover:-translate-y-0.5 hover:shadow-soft transition border border-sage/50 h-full">
                  <span className="w-11 h-11 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <it.icon size={20} />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-charcoal/55 font-semibold">
                      {it.label}
                    </div>
                    <div className="font-semibold text-deepforest leading-snug">
                      {it.value}
                    </div>
                  </div>
                </div>
              );
              return it.href ? (
                <a key={it.label} href={it.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={it.label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={buildWhatsAppLink(
                "Hello Tuwei GreenScapes, I would like to chat about a project."
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
            <a
              href={buildWhatsAppLink(
                "Hello Tuwei GreenScapes, I would like to request a site visit. Please let me know the next available slot."
              )}
              target="_blank"
              rel="noreferrer"
              className="btn-forest"
            >
              <CalendarCheck size={18} /> Request Site Visit
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative h-full min-h-[360px] rounded-3xl overflow-hidden bg-sage shadow-card">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,rgba(31,94,59,0.4),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(201,162,39,0.35),transparent_55%)]" />
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(31,94,59,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(31,94,59,0.18) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }}
            />
            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
              <span className="w-16 h-16 rounded-full bg-forest text-white flex items-center justify-center shadow-soft animate-floaty">
                <MapPin size={28} />
              </span>
              <h3 className="heading-md text-deepforest mt-5">Serving Across Kenya</h3>
              <p className="mt-2 text-charcoal/75 max-w-sm">
                Nairobi, Kiambu, Nakuru, Eldoret, Kisumu, Mombasa, and surrounding regions. Site visits arranged on request.
              </p>
              <a
                href={buildWhatsAppLink(
                  "Hello Tuwei GreenScapes, please share details about a site visit in my area."
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6"
              >
                <MessageCircle size={18} /> Book a Site Visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
