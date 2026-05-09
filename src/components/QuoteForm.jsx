import { useState } from "react";
import { CheckCircle2, MessageCircle, Send, RefreshCcw } from "lucide-react";
import { buildWhatsAppLink } from "../lib/whatsapp.js";
import { services } from "../data/services.js";

const budgets = [
  "Under KES 50,000",
  "KES 50,000 to KES 200,000",
  "KES 200,000 to KES 500,000",
  "KES 500,000 to KES 1,000,000",
  "Above KES 1,000,000"
];

const initial = {
  name: "",
  phone: "",
  location: "",
  service: "",
  budget: "",
  details: ""
};

export default function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const message = [
      "Hello Tuwei GreenScapes, I would like to request a quote.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Location: ${form.location}`,
      `Service Needed: ${form.service}`,
      `Budget Range: ${form.budget}`,
      "",
      "Project Details:",
      form.details
    ].join("\n");
    setWaLink(buildWhatsAppLink(message));
    setSubmitted(true);
  };

  const reset = () => {
    setForm(initial);
    setSubmitted(false);
    setWaLink("");
  };

  return (
    <section id="quote" className="section bg-white">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="eyebrow">Lead Capture</span>
            <h2 className="heading-lg text-deepforest">
              Ready to Upgrade Your Space?
            </h2>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              Send a quick request and the team will guide you on the right service, estimated budget, and next step.
            </p>
            <ul className="mt-7 space-y-3 text-charcoal/80">
              {[
                "Free consultation and site advice",
                "Clear pricing guide before installation",
                "Single point of contact from start to finish"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-gold mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-cream border border-sage/60 rounded-3xl p-6 sm:p-8 shadow-card">
              {!submitted ? (
                <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-sage bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+254 7xx xxx xxx"
                      className="w-full rounded-xl border border-sage bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Location
                    </label>
                    <input
                      required
                      name="location"
                      value={form.location}
                      onChange={onChange}
                      placeholder="City, neighbourhood, or estate"
                      className="w-full rounded-xl border border-sage bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Service Needed
                    </label>
                    <select
                      required
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full rounded-xl border border-sage bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Budget Range
                    </label>
                    <select
                      required
                      name="budget"
                      value={form.budget}
                      onChange={onChange}
                      className="w-full rounded-xl border border-sage bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                    >
                      <option value="">Select a range</option>
                      {budgets.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-charcoal mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      required
                      name="details"
                      value={form.details}
                      onChange={onChange}
                      rows={4}
                      placeholder="Tell us about your space, what you need, and any preferences."
                      className="w-full rounded-xl border border-sage bg-white px-4 py-3 text-charcoal focus:outline-none focus:ring-2 focus:ring-forest"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn-primary w-full sm:w-auto">
                      <Send size={18} /> Prepare My Quote Request
                    </button>
                    <p className="text-xs text-charcoal/60 mt-3">
                      Your details are not stored. The next step opens WhatsApp with your message ready to send.
                    </p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 animate-fadeUp">
                  <div className="w-16 h-16 mx-auto rounded-full bg-leaf/15 text-leaf flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="heading-md text-deepforest mt-5">Thank you.</h3>
                  <p className="mt-2 text-charcoal/75 max-w-md mx-auto">
                    Your request has been prepared. You can now send it directly on WhatsApp.
                  </p>
                  <div className="mt-7 flex flex-wrap justify-center gap-3">
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-whatsapp"
                    >
                      <MessageCircle size={18} /> Send on WhatsApp
                    </a>
                    <button onClick={reset} className="btn-forest">
                      <RefreshCcw size={16} /> Send Another
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
