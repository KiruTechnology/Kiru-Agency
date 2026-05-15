import { useState } from "react";
import "./FAQ.css";

const faqs = [
  { icon: "⏱", q: "How long does a project take?",     a: "MVPs typically take 4–8 weeks. Full products range from 2–4 months depending on scope. We'll give you a precise timeline after the discovery call." },
  { icon: "💰", q: "How much does it cost?",             a: "Projects start at $8k for lean MVPs and scale based on complexity. We provide detailed fixed-price quotes after scoping — no hourly billing ambiguity." },
  { icon: "🔧", q: "Do you offer post-launch support?",  a: "Yes — every project includes a 30-day post-launch window. We also offer ongoing retainer packages for teams who need continuous engineering capacity." },
  { icon: "📈", q: "Can you scale with us long-term?",   a: "Absolutely. Several of our clients started with an MVP and we've grown with them through Series A and beyond. We're built to be a long-term engineering partner, not just a vendor." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-inner faq-inner">
        <div className="faq-left">
          <p className="section-eye"><span className="spark-sm">✦</span> Questions</p>
          <h2 className="section-h2">
            Answers You<br /><span style={{ color: "var(--amber)" }}>Need</span>
          </h2>
          <p className="faq-side-note">
            Can't find what you're looking for? <a href="#contact">Let's talk →</a>
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              className="faq-item reveal"
              key={f.q}
              data-open={open === i ? "true" : "false"}
            >
              <button
                className="faq-q"
                data-icon={f.icon}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {f.q}
                <span className="faq-arrow">{open === i ? "↑" : "↓"}</span>
              </button>
              <div className="faq-a">
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
