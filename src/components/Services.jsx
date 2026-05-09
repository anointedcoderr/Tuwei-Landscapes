import { useState } from "react";
import {
  Sprout,
  Grid3x3,
  Construction,
  Home,
  Droplets,
  Leaf,
  Lightbulb,
  TreePine,
  Flower2,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import Modal from "./Modal.jsx";
import { services } from "../data/services.js";
import { buildWhatsAppLink } from "../lib/whatsapp.js";

const iconMap = {
  Sprout,
  Grid3x3,
  Construction,
  Home,
  Droplets,
  Leaf,
  Lightbulb,
  TreePine,
  Flower2
};

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="section bg-white">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Our Services</span>
          <h2 className="heading-lg text-deepforest">
            Complete GreenScape and Outdoor Solutions
          </h2>
          <p className="mt-4 text-charcoal/75">
            From garden design to full outdoor construction, every project is delivered with clean execution and a finish that fits the property.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Leaf;
            return (
              <div
                key={s.id}
                className="group card border border-sage/50 flex flex-col animate-fadeUp"
                style={{ animationDelay: `${(i % 3) * 0.08}s` }}
              >
                <span className="w-14 h-14 rounded-2xl bg-forest/10 text-forest flex items-center justify-center mb-5 group-hover:bg-gold group-hover:text-deepforest transition">
                  <Icon size={26} />
                </span>
                <h3 className="font-display text-xl font-semibold text-deepforest mb-2">
                  {s.title}
                </h3>
                <p className="text-charcoal/75 leading-relaxed flex-1">{s.blurb}</p>
                <button
                  onClick={() => setActive(s)}
                  className="mt-5 inline-flex items-center gap-2 text-forest font-semibold hover:text-gold transition"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        isOpen={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
      >
        {active && (
          <>
            <p className="text-charcoal/80 leading-relaxed">{active.details}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppLink(
                  `Hello Tuwei GreenScapes, I am interested in ${active.title}. Please share more details and pricing.`
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} /> Request this Service
              </a>
              <a href="#quote" onClick={() => setActive(null)} className="btn-forest">
                Send Quote Request
              </a>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
