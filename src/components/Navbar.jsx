import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2 group" onClick={close}>
          <span
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
              scrolled ? "bg-forest text-white" : "bg-white/15 text-gold backdrop-blur-sm"
            }`}
          >
            <Leaf size={20} />
          </span>
          <span
            className={`font-display font-bold text-lg sm:text-xl leading-tight ${
              scrolled ? "text-deepforest" : "text-white"
            }`}
          >
            Tuwei GreenScapes
            <span className="block text-[10px] font-sans tracking-[0.2em] uppercase opacity-80">
              and Contractors
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium hover:text-gold transition ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href="#quote" className="btn-primary !py-2.5 !px-5 text-sm">
            Request a Quote
          </a>
        </nav>

        <button
          className={`lg:hidden w-11 h-11 rounded-full flex items-center justify-center transition ${
            scrolled ? "bg-forest text-white" : "bg-white/15 text-white backdrop-blur-sm"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 bg-white shadow-card ${
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x py-5 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="py-3 text-charcoal font-medium border-b border-sage/60 hover:text-forest"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={close}
            className="btn-primary mt-4 w-full"
          >
            Request a Quote
          </a>
        </div>
      </div>
    </header>
  );
}
