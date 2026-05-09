import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/testimonials.js";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-cream">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Client Voices</span>
          <h2 className="heading-lg text-deepforest">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-charcoal/75">
            Real feedback from homeowners and businesses we have worked with.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure
              key={t.id}
              className="card border border-sage/60 flex flex-col animate-fadeUp"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Quote size={36} className="text-gold mb-3" />
              <blockquote className="text-charcoal/85 leading-relaxed italic">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between">
                <span className="font-semibold text-deepforest">{t.author}</span>
                <span className="flex items-center gap-0.5 text-gold">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} size={14} fill="currentColor" stroke="none" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
