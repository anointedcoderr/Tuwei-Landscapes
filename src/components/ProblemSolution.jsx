import { ShieldCheck, ImagePlus, Send } from "lucide-react";

const cards = [
  {
    icon: ShieldCheck,
    title: "Build Trust Faster",
    text: "Give clients a clear place to see your services, past work, pricing guide, and contact details before they message you."
  },
  {
    icon: ImagePlus,
    title: "Showcase Bigger Projects",
    text: "Landscaping, wall cladding, car shades, and outdoor structures need strong visuals, not cut off catalogue previews."
  },
  {
    icon: Send,
    title: "Convert More Enquiries",
    text: "A website guides visitors from interest to action with quote forms, WhatsApp buttons, and clear service pages."
  }
];

export default function ProblemSolution() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto">
          <span className="eyebrow">Why a Website Matters</span>
          <h2 className="heading-lg text-deepforest">
            Why Serious Clients Need More Than a Catalogue
          </h2>
          <p className="mt-4 text-charcoal/75 leading-relaxed">
            Your best projects should not be hidden inside a catalogue. A website gives serious clients a place to trust you before they message.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="card border border-sage/60 animate-fadeUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="w-14 h-14 rounded-2xl bg-gold/15 text-gold flex items-center justify-center mb-5">
                <c.icon size={26} />
              </span>
              <h3 className="font-display text-xl font-semibold text-deepforest mb-2">
                {c.title}
              </h3>
              <p className="text-charcoal/75 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
