import { Search, Image as ImageIcon, Inbox, Award, Globe, Camera, MessageSquare, FileText } from "lucide-react";

const benefits = [
  {
    icon: Search,
    title: "Attract clients from Google searches",
    text: "Show up when people search for landscaping, paving, or vertical gardens in Kenya."
  },
  {
    icon: ImageIcon,
    title: "Display projects professionally",
    text: "Full size visuals that show off scale and finish, far beyond what a chat preview can do."
  },
  {
    icon: Inbox,
    title: "Collect quote requests",
    text: "Visitors fill a quick form and the message is ready to send via WhatsApp in seconds."
  },
  {
    icon: Award,
    title: "Make the brand look established",
    text: "A clean website builds trust before the first call, especially for higher value projects."
  }
];

const mockupCards = [
  { icon: FileText, label: "Quote Request", color: "bg-gold/15 text-gold" },
  { icon: Camera, label: "Project Gallery", color: "bg-leaf/15 text-leaf" },
  { icon: MessageSquare, label: "WhatsApp Lead", color: "bg-forest/15 text-forest" },
  { icon: Globe, label: "Service Page", color: "bg-earth/15 text-earth" }
];

export default function WebsiteAdvantage() {
  return (
    <section className="section bg-deepforest text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-leaf/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="container-x relative grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="eyebrow">Why a Website</span>
          <h2 className="heading-lg">
            A Website That Works Like a 24 Hour Sales Assistant
          </h2>
          <p className="mt-4 text-white/75 leading-relaxed max-w-xl">
            Turn garden interest into quote requests. Show your work the way premium clients expect to see it.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition"
              >
                <span className="w-11 h-11 rounded-xl bg-gold text-deepforest flex items-center justify-center mb-3">
                  <b.icon size={20} />
                </span>
                <h3 className="font-semibold text-white">{b.title}</h3>
                <p className="text-sm text-white/70 mt-1 leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-white rounded-3xl shadow-soft overflow-hidden border border-white/10">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-sage/50 bg-cream">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-charcoal/60 text-xs font-mono">tuwei-greenscapes.co.ke</span>
            </div>
            <div className="p-6 bg-cream">
              <div className="flex items-center justify-between mb-5">
                <div className="font-display text-deepforest text-lg font-bold">
                  Tuwei GreenScapes
                </div>
                <span className="bg-gold text-deepforest text-xs font-semibold px-3 py-1 rounded-full">
                  Request Quote
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {mockupCards.map((m) => (
                  <div
                    key={m.label}
                    className="bg-white rounded-2xl p-4 border border-sage/60 shadow-sm"
                  >
                    <span className={`inline-flex w-10 h-10 rounded-xl items-center justify-center ${m.color}`}>
                      <m.icon size={18} />
                    </span>
                    <div className="mt-3 text-charcoal font-semibold text-sm">
                      {m.label}
                    </div>
                    <div className="mt-1 h-1.5 rounded-full bg-sage" />
                    <div className="mt-1.5 h-1.5 rounded-full bg-sage w-2/3" />
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-deepforest text-white rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/70">New lead</div>
                  <div className="font-semibold">Garden Makeover, Karen</div>
                </div>
                <span className="bg-gold text-deepforest text-xs font-bold px-3 py-1.5 rounded-full">
                  WhatsApp
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
