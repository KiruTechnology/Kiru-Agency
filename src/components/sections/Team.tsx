import { useEffect, useRef, useState } from "react";
import { team } from "../../data";

export function Team() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(0);
      },
      { threshold: 0.25 },
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="gh-section gh-team" id="team" ref={sectionRef}>
      <div className="gh-inner">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div className="reveal-left">
            <div className="gh-overline">The Team</div>
            <h2 className="gh-section-title">
              People Behind
              <br />
              the Product
            </h2>
          </div>
          <span className="gh-team-hint reveal-right">
            Click a card to expand
          </span>
        </div>

        <div className="gh-team-cols">
          {team.map((m, i) => (
            <div
              key={m.num}
              className={`gh-tc${active === i ? " active" : active !== -1 ? " inactive" : ""}`}
              onClick={() => setActive(i)}
            >
              {/* Collapsed */}
              <div className="gh-tc-collapsed">
                <div
                  className="gh-tc-monogram"
                  style={{
                    background: `linear-gradient(135deg,${m.from},${m.to})`,
                  }}
                >
                  {m.initials}
                </div>
                <div className="gh-tc-name-block">
                  <span className="gh-tc-num">{m.num}</span>
                  <strong className="gh-tc-name">{m.name}</strong>
                  <span className="gh-tc-role">{m.role}</span>
                </div>
                <span className="gh-tc-arrow">→</span>
              </div>

              {/* Expanded */}
              <div className="gh-tc-expanded">
                <div className="gh-tc-exp-top">
                  <div
                    className="gh-tc-monogram"
                    style={{
                      width: 52,
                      height: 52,
                      background: `linear-gradient(135deg,${m.from},${m.to})`,
                    }}
                  >
                    {m.initials}
                  </div>
                  <div>
                    <span className="gh-tc-exp-name">{m.name}</span>
                    <span className="gh-tc-exp-role">{m.role}</span>
                  </div>
                </div>
                <p className="gh-tc-bio">{m.bio}</p>
                <div className="gh-tc-mockup">
                  <div className="gh-tc-mock-bar" />
                  {m.tags.map((row, ri) => (
                    <div className="gh-tc-mock-row" key={ri}>
                      {row.map((t) => (
                        <span className="gh-tc-tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  ))}
                  <div className="gh-tc-mock-stat">
                    {m.stats.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="gh-tc-socials">
                  {m.socials.map((s) => (
                    <a key={s} href="#" className="gh-tc-soc">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
