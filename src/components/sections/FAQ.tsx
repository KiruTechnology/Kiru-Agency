import React, { useState } from "react";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "How long does a project take?",
      a: "MVPs typically take 4–8 weeks. Full products range from 2–4 months depending on scope. We'll give you a precise timeline after the discovery call.",
    },
    {
      q: "How much does it cost?",
      a: "Projects start at $8k for lean MVPs and scale based on complexity. We provide detailed fixed-price quotes after scoping — no hourly billing ambiguity.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes — every project includes a 30-day post-launch window. We also offer ongoing retainer packages for teams who need continuous engineering capacity.",
    },
    {
      q: "Can you scale with us long-term?",
      a: "Absolutely. Several of our clients started with an MVP and we've grown with them through Series A and beyond. We're built to be a long-term engineering partner, not just a vendor.",
    },
    {
      q: "What technologies do you work with?",
      a: "We specialize in modern web and mobile stacks including React, TypeScript, Node.js, React Native, and cloud platforms like AWS and Google Cloud. We choose the best tool for your specific needs.",
    },
    {
      q: "Do you handle design as well?",
      a: "Yes! Our team includes experienced designers. We can handle the entire product journey from concept and design through development and launch.",
    },
    {
      q: "How do you handle communication during development?",
      a: "We maintain regular communication through weekly standups, sprint reviews, and direct Slack channels. You'll always know what's happening with your product.",
    },
    {
      q: "What if I'm not happy with the work?",
      a: "We focus on delivering exceptional results. If there are issues, we work closely with you to fix them during the project. Your satisfaction is our priority.",
    },
  ];

  return (
    <section className="gh-section gh-faq" id="faq">
      <div className="gh-inner">
        <div className="gh-faq-inner">
          <div className="reveal-left">
            <div className="gh-overline">Questions</div>
            <h2 className="gh-section-title">
              Answers You
              <br />
              <span style={{ color: "var(--blue)" }}>Need</span>
            </h2>
            <p className="gh-faq-side-note">
              Can't find what you're looking for?{" "}
              <a href="#contact">Let's talk →</a>
            </p>
          </div>

          <div className="gh-faq-list">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className={`gh-faq-item reveal-up${open === i ? " open" : ""}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  className="gh-faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {f.q}
                  <span className="gh-faq-arrow">↓</span>
                </button>
                <div className="gh-faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
