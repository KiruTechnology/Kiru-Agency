import React, { useEffect, useRef, useState } from "react";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const VISIBLE = 2;

  const testi = [
    {
      initials: "AO",
      bg: "#1a3a5c",
      name: "Amara Osei",
      role: "CEO, TradeLink Africa",
      body: "Kiru Tech didn't just write code — they thought about our product like co-founders. We launched in 8 weeks and our users love it.",
    },
    {
      initials: "JM",
      bg: "#2d1b4e",
      name: "James Muriuki",
      role: "CTO, PayEase Kenya",
      body: "The most transparent engineering team I've worked with. Daily updates, zero surprises, and the architecture they built scales beautifully.",
    },
    {
      initials: "SN",
      bg: "#0f2a1a",
      name: "Sofia Ndungu",
      role: "Founder, GreenStack Labs",
      body: "We came with a napkin sketch. Kiru Tech came back with a fully designed MVP that raised our seed round. Unreal team.",
    },
    {
      initials: "DK",
      bg: "#3a1a1a",
      name: "Daniel Kamau",
      role: "CTO, Lipa Later",
      body: "From day one they felt like part of our team. The quality of code, the communication, the speed — everything exceeded our expectations.",
    },
    {
      initials: "FO",
      bg: "#1a3a2c",
      name: "Fatima Omar",
      role: "CEO, Savannah Pay",
      body: "We'd tried two other agencies before Kiru Tech. The difference in product thinking and delivery speed was night and day.",
    },
  ];

  const max = testi.length - VISIBLE;
  const slide = (dir: number) =>
    setIdx((i) => Math.min(max, Math.max(0, i + dir)));

  useEffect(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll(".gh-testi-card");
    const w = cards[0] ? (cards[0] as HTMLElement).offsetWidth + 16 : 0;
    trackRef.current.style.transform = `translateX(-${idx * w}px)`;
  }, [idx]);

  return (
    <section className="gh-section gh-testi" id="testimonials">
      <div className="gh-inner">
        <div className="gh-testi-header">
          <div className="reveal-left">
            <div className="gh-overline">Client Stories</div>
            <h2 className="gh-section-title">
              What Our <span style={{ color: "var(--blue)" }}>Clients</span> Say
            </h2>
            <p
              style={{
                fontSize: ".9rem",
                color: "var(--text-muted)",
                marginTop: 8,
              }}
            >
              Real partnerships. Real results. Real impact.
            </p>
          </div>
          <div className="gh-testi-nav reveal-right">
            <button
              className="gh-testi-btn"
              onClick={() => slide(-1)}
              disabled={idx === 0}
            >
              ←
            </button>
            <button
              className="gh-testi-btn"
              onClick={() => slide(1)}
              disabled={idx >= max}
            >
              →
            </button>
          </div>
        </div>

        <div className="gh-testi-track-wrap">
          <div className="gh-testi-track" ref={trackRef}>
            {testi.map((t) => (
              <div className="gh-testi-card reveal-scale" key={t.name}>
                <div className="gh-testi-quote">"</div>
                <p className="gh-testi-body">{t.body}</p>
                <div className="gh-testi-author">
                  <div className="gh-testi-avatar" style={{ background: t.bg }}>
                    {t.initials}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gh-testi-cta reveal-up">
          <div className="gh-testi-cta-text">
            <span className="gh-testi-cta-icon">🎯</span>
            <div className="gh-testi-cta-copy">
              <h4>Ready to be our next success story?</h4>
              <p>Let's build something exceptional together.</p>
            </div>
          </div>
          <a href="#contact" className="btn-green">
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
