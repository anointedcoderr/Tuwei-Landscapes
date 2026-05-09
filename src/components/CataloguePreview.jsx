import { MessageCircle, Tag } from "lucide-react";
import { catalogue } from "../data/catalogue.js";
import { buildWhatsAppLink } from "../lib/whatsapp.js";

export default function CataloguePreview() {
  return (
    <section id="catalogue" className="section bg-white">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Catalogue</span>
          <h2 className="heading-lg text-deepforest">
            Popular Services and Starting Prices
          </h2>
          <p className="mt-4 text-charcoal/75">
            A clear, premium view of the items clients ask for most. Tap any item to start a WhatsApp chat with the team.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {catalogue.map((item, i) => (
            <article
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-soft transition border border-sage/40 flex flex-col animate-fadeUp"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-deepforest/90 text-cream text-xs font-semibold px-3 py-1 rounded-full">
                  <Tag size={12} /> Popular
                </span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold text-deepforest leading-snug">
                  {item.title}
                </h3>
                <p className="text-gold font-semibold mt-1">{item.price}</p>
                <p className="text-sm text-charcoal/75 mt-2 leading-relaxed flex-1">
                  {item.description}
                </p>
                <a
                  href={buildWhatsAppLink(
                    `Hello Tuwei GreenScapes, I am interested in ${item.title}. Please send me more details.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp mt-5 w-full text-sm"
                >
                  <MessageCircle size={16} /> Enquire on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-charcoal/60 text-sm mt-10">
          Final pricing depends on size, materials, and site conditions. All quotes are free.
        </p>
      </div>
    </section>
  );
}
