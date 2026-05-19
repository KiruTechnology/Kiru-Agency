import React from "react";

export function Features() {
  const feats = [
    {
      icon: "⚡",
      title: "Fast Iteration Cycles",
      body: "We ship weekly. No long sprints, no waiting — continuous delivery from day one.",
      span: false,
    },
    {
      icon: "🧠",
      title: "Product-First Thinking",
      body: "We think like founders. Every decision is weighed against user value and business impact.",
      span: false,
    },
    {
      icon: "🔒",
      title: "Secure & Scalable",
      body: "Architecture built to handle 10 users or 10 million — without a painful rewrite.",
      span: true,
    },
    {
      icon: "🎨",
      title: "Clean UI/UX Design",
      body: "Interfaces your users will love, built with precision and tested with real feedback.",
      span: false,
    },
    {
      icon: "🤝",
      title: "Transparent Communication",
      body: "Daily updates, open roadmaps, and a direct line to your engineering team — always.",
      span: false,
    },
  ];

  return (
    <section className="gh-section gh-features" id="features">
      <div className="gh-inner">
        <div className="reveal-up">
          <div className="gh-overline">Why Kiru Tech</div>
          <h2 className="gh-section-title">
            Built Different.
            <br />
            By Design.
          </h2>
        </div>

        <div className="gh-bento stagger">
          {feats.map((f) => (
            <div
              key={f.title}
              className={`gh-bento-card reveal-up${f.span ? " span-2" : ""}`}
            >
              <span className="gh-bento-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
          {/* CTA card */}
          <div className="gh-bento-card gh-bento-cta reveal-scale">
            <h3>Ready to build?</h3>
            <p
              style={{
                fontSize: ".85rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Let's turn your idea into production-grade software.
            </p>
            <a href="#contact" className="btn-green" style={{ marginTop: 8 }}>
              Let's Build Yours →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
