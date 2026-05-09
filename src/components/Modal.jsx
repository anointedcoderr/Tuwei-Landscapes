import { useEffect } from "react";
import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children, title }) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-deepforest/80 backdrop-blur-sm" />
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-soft overflow-hidden animate-fadeUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-card flex items-center justify-center text-deepforest"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        {title && (
          <div className="px-7 pt-7 pb-2">
            <h3 className="heading-md text-deepforest">{title}</h3>
          </div>
        )}
        <div className={title ? "px-7 pb-7" : "p-7"}>{children}</div>
      </div>
    </div>
  );
}
