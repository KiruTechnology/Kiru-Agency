import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does a project take?",
      icon: "⏱",
      answer:
        "MVPs typically take 4–8 weeks. Full products range from 2–4 months depending on scope. We'll give you a precise timeline after the discovery call.",
    },
    {
      question: "How much does it cost?",
      icon: "💰",
      answer:
        "Projects start at $8k for lean MVPs and scale based on complexity. We provide detailed fixed-price quotes after scoping — no hourly billing ambiguity.",
    },
    {
      question: "Do you offer post-launch support?",
      icon: "🔧",
      answer:
        "Yes — every project includes a 30-day post-launch window. We also offer ongoing retainer packages for teams who need continuous engineering capacity.",
    },
    {
      question: "Can you scale with us long-term?",
      icon: "📈",
      answer:
        "Absolutely. Several of our clients started with an MVP and we've grown with them through Series A and beyond. We're built to be a long-term engineering partner, not just a vendor.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div className="space-y-6">
            <p className="text-amber flex items-center gap-2 text-sm font-medium">
              <span>✦</span>
              <span>Questions</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk">
              Answers You
              <br />
              <span className="text-amber">Need</span>
            </h2>
            <p className="text-chalk/70">
              Can't find what you're looking for?{" "}
              <a href="#contact" className="text-amber hover:underline">
                Let's talk →
              </a>
            </p>
          </div>

          {/* Right Side - FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-slate-mid/30 rounded-lg overflow-hidden bg-slate-dark/50 hover:border-amber/30 transition-colors"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-slate-dark/80 transition-colors group"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className="text-2xl flex-shrink-0">{faq.icon}</span>
                    <span className="font-semibold text-chalk group-hover:text-amber transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className={`text-chalk/70 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {/* Answer */}
                {openIndex === idx && (
                  <div className="px-6 py-4 bg-slate-dark/30 border-t border-slate-mid/30">
                    <p className="text-chalk/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
