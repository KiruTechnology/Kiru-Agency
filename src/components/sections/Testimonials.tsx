import { useEffect, useRef, useState } from "react";
import { testimonials } from "../../data";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const VISIBLE = 2;

  const max = testimonials.length - VISIBLE;
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
            {testimonials.map((t) => (
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
