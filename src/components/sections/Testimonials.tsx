import { useEffect, useRef, useState } from "react";
import { testimonials } from "../../data/index";

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const VISIBLE = 2;

  const max = testimonials.length - VISIBLE;
  const slide = (dir: number) =>
    setIdx((i) => Math.min(max, Math.max(0, i + dir)));

  useEffect(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll(".kiru-testi-card");
    const w = cards[0] ? (cards[0] as HTMLElement).offsetWidth + 16 : 0;
    trackRef.current.style.transform = `translateX(-${idx * w}px)`;
  }, [idx]);

  return (
    <section className="kiru-section kiru-testi" id="testimonials">
      <div className="kiru-inner">
        <div className="kiru-testi-header">
          <div className="reveal-left">
            <div className="kiru-overline">Client Stories</div>
            <h2 className="kiru-section-title">
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
          <div className="kiru-testi-nav reveal-right">
            <button
              className="kiru-testi-btn"
              onClick={() => slide(-1)}
              disabled={idx === 0}
            >
              ←
            </button>
            <button
              className="kiru-testi-btn"
              onClick={() => slide(1)}
              disabled={idx >= max}
            >
              →
            </button>
          </div>
        </div>

        <div className="kiru-testi-track-wrap">
          <div className="kiru-testi-track" ref={trackRef}>
            {testimonials.map((t) => (
              <div className="kiru-testi-card reveal-scale" key={t.name}>
                <div className="kiru-testi-quote">"</div>
                <p className="kiru-testi-body">{t.body}</p>
                <div className="kiru-testi-author">
                  <div
                    className="kiru-testi-avatar"
                    style={{ background: t.bg }}
                  >
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

        <div className="kiru-testi-cta reveal-up">
          <div className="kiru-testi-cta-text">
            <span className="kiru-testi-cta-icon">🎯</span>
            <div className="kiru-testi-cta-copy">
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
