import React, { useEffect, useRef, useState } from "react";

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

  const team = [
    {
      initials: "KW",
      from: "#1a3a5c",
      to: "#0d1117",
      num: "01",
      name: "Kiru Wanjiku",
      role: "Founder & Lead Engineer",
      bio: "Full-stack architect with 8+ years shipping products for startups and enterprises across Africa and Europe. Obsessed with clean systems and fast delivery.",
      tags: [
        ["Go", "React", "PostgreSQL"],
        ["AWS", "Docker", "Redis"],
      ],
      stats: ["8+ yrs", "20+ products", "3 continents"],
      socials: ["tw", "li", "gh"],
    },
    {
      initials: "AM",
      from: "#6b3fa0",
      to: "#2d1b4e",
      num: "02",
      name: "Amina Mwangi",
      role: "Head of Design",
      bio: "Product designer obsessed with user research and turning complex flows into elegant, intuitive experiences that users genuinely love returning to.",
      tags: [
        ["Figma", "Framer", "Research"],
        ["Motion", "Design Systems"],
      ],
      stats: ["5+ yrs", "30+ screens", "4.9★ avg"],
      socials: ["tw", "li", "dr"],
    },
    {
      initials: "DO",
      from: "#1a6640",
      to: "#0f2a1a",
      num: "03",
      name: "David Omondi",
      role: "Backend Engineer",
      bio: "Systems thinker and API architect. Specialized in high-throughput distributed systems, cloud infrastructure, and making things not fall over at 3am.",
      tags: [
        ["Rust", "Kafka", "Kubernetes"],
        ["GCP", "GraphQL", "gRPC"],
      ],
      stats: ["6+ yrs", "99.99% uptime", "10M+ req/day"],
      socials: ["tw", "li", "gh"],
    },
    {
      initials: "BN",
      from: "#b85c20",
      to: "#3a2010",
      num: "04",
      name: "Brenda Njoki",
      role: "Mobile Engineer",
      bio: "React Native and Flutter specialist. Ships mobile apps that feel truly native, perform brilliantly on any device, and users keep choosing over the competition.",
      tags: [
        ["React Native", "Flutter"],
        ["Swift", "Kotlin", "Firebase"],
      ],
      stats: ["5+ yrs", "4.9★ apps", "50k+ DLs"],
      socials: ["tw", "li", "gh"],
    },
  ];

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
