import { MessagesSquare, Map, FileText, Hammer, Sparkles } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: MessagesSquare,
    title: "Consultation",
    text: "We understand your space, style, budget, and goals."
  },
  {
    n: "02",
    icon: Map,
    title: "Site Planning",
    text: "We recommend the best landscaping, cladding, shading, or garden solution."
  },
  {
    n: "03",
    icon: FileText,
    title: "Design and Quotation",
    text: "You receive a clear plan with service details and pricing guide."
  },
  {
    n: "04",
    icon: Hammer,
    title: "Installation",
    text: "The team brings the project to life with clean, professional execution."
  },
  {
    n: "05",
    icon: Sparkles,
    title: "Maintenance",
    text: "Optional garden care and tree services keep the space fresh all year."
  }
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="section bg-sage/40">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">How We Work</span>
          <h2 className="heading-lg text-deepforest">
            Simple Process, Beautiful Results
          </h2>
          <p className="mt-4 text-charcoal/75">
            Five clear stages from first conversation to a fully finished space.
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-gold via-leaf to-forest rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="relative bg-white rounded-3xl p-6 shadow-card hover:-translate-y-1 hover:shadow-soft transition animate-fadeUp"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-deepforest text-gold font-display font-bold text-lg flex items-center justify-center">
                    {s.n}
                  </span>
                  <span className="w-10 h-10 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                    <s.icon size={20} />
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-deepforest">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/75 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
