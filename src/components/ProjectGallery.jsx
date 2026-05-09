import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Modal from "./Modal.jsx";
import { projects } from "../data/projects.js";
import { buildWhatsAppLink } from "../lib/whatsapp.js";

export default function ProjectGallery() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="section bg-cream">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="heading-lg text-deepforest">
              See What Your Property Could Become
            </h2>
            <p className="mt-3 text-charcoal/75">
              A small selection of recent work. Each one started as a brief and ended as a space the client was proud to show off.
            </p>
          </div>
          <a href="#quote" className="btn-forest self-start md:self-auto">
            Start Your Project <ArrowRight size={18} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article
              key={p.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:-translate-y-1 hover:shadow-soft transition animate-fadeUp"
              style={{ animationDelay: `${(i % 3) * 0.08}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <span className="absolute top-3 left-3 bg-gold text-deepforest text-xs font-semibold px-3 py-1 rounded-full">
                  {p.category}
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-deepforest/80 via-deepforest/0 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-deepforest">
                  {p.name}
                </h3>
                <p className="mt-2 text-charcoal/75 text-sm leading-relaxed">
                  {p.short}
                </p>
                <button
                  onClick={() => setActive(p)}
                  className="mt-5 btn-primary !py-2.5 !px-5 text-sm"
                >
                  View Project <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal isOpen={!!active} onClose={() => setActive(null)}>
        {active && (
          <div>
            <div className="rounded-2xl overflow-hidden mb-5">
              <img src={active.image} alt={active.name} className="w-full h-64 object-cover" />
            </div>
            <span className="text-xs uppercase tracking-[0.18em] text-gold font-semibold">
              {active.category}
            </span>
            <h3 className="heading-md text-deepforest mt-1">{active.name}</h3>
            <p className="mt-3 text-charcoal/80 leading-relaxed">{active.full}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppLink(
                  `Hello Tuwei GreenScapes, I saw the ${active.name} project on your website. I would like a similar project. Please share next steps.`
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} /> Request a Similar Project
              </a>
              <a href="#quote" onClick={() => setActive(null)} className="btn-forest">
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
