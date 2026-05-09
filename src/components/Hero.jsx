import { ArrowRight, Sparkles, ShieldCheck, MapPin, MessageCircle, Leaf, Building2, Wrench, Hammer } from "lucide-react";

const floatingCards = [
  { icon: Leaf, label: "Premium Landscaping", tone: "bg-leaf/90" },
  { icon: Building2, label: "Vertical Gardens", tone: "bg-gold/90" },
  { icon: Hammer, label: "Outdoor Structures", tone: "bg-white/90 text-deepforest" },
  { icon: Wrench, label: "Maintenance Plans", tone: "bg-forest/90" }
];

const trust = [
  { icon: Building2, label: "Residential and Commercial Projects" },
  { icon: Sparkles, label: "Custom Designs" },
  { icon: MessageCircle, label: "Quote via WhatsApp" },
  { icon: MapPin, label: "Kenya Based Contractor" }
];

export default function Hero() {
  return (
    <section id="home" className="relative bg-hero text-white overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-leaf/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 animate-fadeUp">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.2em] text-gold font-semibold">
            <Sparkles size={14} /> Creating Masterpieces. Living Art.
          </span>
          <h1 className="heading-xl mt-5 max-w-3xl">
            Transform Your Outdoor Space Into <span className="text-gold">Living Art</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
            Professional landscaping, vertical gardens, wall cladding, car shades, garden care, and outdoor construction built to make your property stand out.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#quote" className="btn-primary">
              Request a Free Quote <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-ghost">
              View Our Services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {trust.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur rounded-xl px-3 py-2.5"
              >
                <span className="w-8 h-8 rounded-lg bg-gold text-deepforest flex items-center justify-center shrink-0">
                  <t.icon size={16} />
                </span>
                <span className="text-xs sm:text-sm font-medium leading-tight">{t.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=80&q=80"
              ].map((src) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-10 h-10 rounded-full border-2 border-deepforest object-cover"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="font-semibold text-white">Trusted across Kenya</div>
              <div className="text-white/70 text-xs flex items-center gap-1">
                <ShieldCheck size={14} className="text-gold" /> Residential, commercial, hospitality
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[480px] hidden lg:block">
          <div className="absolute top-0 right-4 w-64 rounded-3xl overflow-hidden shadow-soft animate-floaty">
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80"
              alt="Lush garden"
              className="w-full h-56 object-cover"
            />
          </div>
          <div className="absolute top-32 left-0 w-56 rounded-3xl overflow-hidden shadow-soft animate-floaty" style={{ animationDelay: "1.5s" }}>
            <img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80"
              alt="Outdoor structure"
              className="w-full h-44 object-cover"
            />
          </div>
          <div className="absolute bottom-4 right-12 w-60 rounded-3xl overflow-hidden shadow-soft animate-floaty" style={{ animationDelay: "0.7s" }}>
            <img
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=600&q=80"
              alt="Modern car shade"
              className="w-full h-40 object-cover"
            />
          </div>

          <div className="absolute -bottom-2 -left-2 grid grid-cols-2 gap-2 w-72">
            {floatingCards.map((c) => (
              <div
                key={c.label}
                className={`${c.tone} backdrop-blur rounded-2xl p-3 flex items-center gap-2 shadow-card text-white`}
              >
                <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <c.icon size={18} />
                </span>
                <span className="text-xs font-semibold leading-tight">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-cream pointer-events-none" />
    </section>
  );
}
