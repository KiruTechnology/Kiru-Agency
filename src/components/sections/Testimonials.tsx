import { useEffect, useRef, useState } from "react";
import { Btn1 } from "../ui/Buttons";
import "./Testimonials.css";

const testimonials = [
  { initials: "AO", bg: "#1a3a5c", name: "Amara Osei",   role: "CEO, TradeLink Africa",  body: "Kiru Tech didn't just write code — they thought about our product like co-founders. We launched in 8 weeks and our users love it." },
  { initials: "JM", bg: "#2d1b4e", name: "James Muriuki", role: "CTO, PayEase Kenya",      body: "The most transparent engineering team I've worked with. Daily updates, zero surprises, and the architecture they built scales beautifully." },
  { initials: "SN", bg: "#0f2a1a", name: "Sofia Ndungu",  role: "Founder, GreenStack Labs", body: "We came with a napkin sketch. Kiru Tech came back with a fully designed MVP that raised our seed round. Unreal team." },
  { initials: "DK", bg: "#3a1a1a", name: "Daniel Kamau",  role: "CTO, Lipa Later",          body: "From day one they felt like part of our team. The quality of code, the communication, the speed — everything exceeded our expectations." },
  { initials: "FO", bg: "#1a3a2c", name: "Fatima Omar",   role: "CEO, Savannah Pay",         body: "We'd tried two other agencies before Kiru Tech. The difference in product thinking and delivery speed was night and day." },
];

const VISIBLE = 3;

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (dir: number) => {
    const max = Math.max(0, testimonials.length - VISIBLE);
    setIdx((i) => Math.min(max, Math.max(0, i + dir)));
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll(".testi-card");
    const cardW = cards[0] ? (cards[0] as HTMLElement).offsetWidth + 16 : 0;
    trackRef.current.style.transform = `translateX(-${idx * cardW}px)`;
  }, [idx]);

  const max = Math.max(0, testimonials.length - VISIBLE);

  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-inner">
        <div className="section-header two-col-header">
          <div>
            <p className="section-eye blur-in">
              <span className="spark-sm">✦</span> Client Stories
            </p>
            <h2 className="section-h2 letter-spacing-animate">
              What Our <span style={{ color: "var(--amber)" }}>Clients</span> Say
            </h2>
            <p style={{ fontSize: "0.95rem", color: "#a8a8a8", marginTop: "0.6rem" }}>
              Real partnerships. Real results. Real impact.
            </p>
          </div>
          <div className="testi-nav">
            <button className="testi-arrow" onClick={() => slide(-1)} style={{ opacity: idx === 0 ? 0.3 : 1 }} aria-label="Previous">←</button>
            <button className="testi-arrow" onClick={() => slide(1)}  style={{ opacity: idx >= max ? 0.3 : 1 }} aria-label="Next">→</button>
          </div>
        </div>

        <div className="testi-track-wrap">
          <div className="testi-track" ref={trackRef}>
            {testimonials.map((t) => (
              <div className="testi-card reveal-stagger" key={t.name}>
                <div className="testi-quote-mark">"</div>
                <p className="testi-body">{t.body}</p>
                <div className="testi-author">
                  <div className="testi-avatar" style={{ background: t.bg }}>{t.initials}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="testi-cta">
          <div className="testi-cta-box">
            <div className="testi-cta-text">
              <span className="testi-cta-icon">🎯</span>
              <div className="testi-cta-copy">
                <h4>Ready to be our next success story?</h4>
                <p>Let's build something exceptional together.</p>
              </div>
            </div>
            <Btn1 href="#contact" label="Start Your Project" floodLabel="Click to Start" amber workWithUs />
          </div>
        </div>
      </div>
    </section>
  );
}
