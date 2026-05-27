import { useEffect, useRef, useState } from "react";
import { team } from "../../data/index";

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
    <section className="kiru-section kiru-team" id="team" ref={sectionRef}>
      <div className="kiru-inner">
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
            <div className="kiru-overline">The Team</div>
            <h2 className="kiru-section-title">
              People Behind
              <br />
              the Product
            </h2>
          </div>
          <span className="kiru-team-hint reveal-right">
            Click a card to expand
          </span>
        </div>

        <div className="kiru-team-cols">
          {team.map((m, i) => (
            <div
              key={m.num}
              className={`kiru-tc${active === i ? " active" : active !== -1 ? " inactive" : ""}`}
              onClick={() => setActive(i)}
            >
              {/* Collapsed */}
              <div className="kiru-tc-collapsed">
                <div
                  className="kiru-tc-monogram"
                  style={{
                    background: `linear-gradient(135deg,${m.from},${m.to})`,
                  }}
                >
                  {m.initials}
                </div>
                <div className="kiru-tc-name-block">
                  <span className="kiru-tc-num">{m.num}</span>
                  <strong className="kiru-tc-name">{m.name}</strong>
                  <span className="kiru-tc-role">{m.role}</span>
                </div>
                <span className="kiru-tc-arrow">→</span>
              </div>

              {/* Expanded */}
              <div className="kiru-tc-expanded">
                <div className="kiru-tc-exp-top">
                  <div
                    className="kiru-tc-monogram"
                    style={{
                      width: 52,
                      height: 52,
                      background: `linear-gradient(135deg,${m.from},${m.to})`,
                    }}
                  >
                    {m.initials}
                  </div>
                  <div>
                    <span className="kiru-tc-exp-name">{m.name}</span>
                    <span className="kiru-tc-exp-role">{m.role}</span>
                  </div>
                </div>
                <p className="kiru-tc-bio">{m.bio}</p>
                <div className="kiru-tc-mockup">
                  <div className="kiru-tc-mock-bar" />
                  {m.tags.map((row, ri) => (
                    <div className="kiru-tc-mock-row" key={ri}>
                      {row.map((t) => (
                        <span className="kiru-tc-tag" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  ))}
                  <div className="kiru-tc-mock-stat">
                    {m.stats.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="kiru-tc-socials">
                  {m.socials.map((s) => (
                    <a key={s} href="#" className="kiru-tc-soc">
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
