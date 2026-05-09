import { ArrowRight } from "lucide-react";

export default function StickyMobileQuote() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 p-3 bg-gradient-to-t from-deepforest/95 to-deepforest/0 pointer-events-none">
      <a
        href="#quote"
        className="btn-primary w-full pointer-events-auto shadow-gold !py-3.5"
      >
        Request a Quote <ArrowRight size={18} />
      </a>
    </div>
  );
}
