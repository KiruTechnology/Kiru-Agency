import React, { useEffect, useRef } from "react";

export function Process() {
  const fillRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      if (!sectionRef.current || !fillRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const pct = Math.min(
        100,
        (Math.max(0, -rect.top + window.innerHeight * 0.4) /
          sectionRef.current.offsetHeight) *
          130,
      );
      fillRef.current.style.height = pct + "%";
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const steps = [
    {
      num: "01",
      icon: "🔍",
      title: "Discovery",
      desc: "We immerse ourselves in your business — goals, users, constraints — to build a shared understanding before a single line of code is written.",
    },
    {
      num: "02",
      icon: "📐",
      title: "Planning",
      desc: "Roadmap, milestones, tech stack, and team structure defined. You see everything upfront — no surprises, no scope creep.",
    },
    {
      num: "03",
      icon: "🎨",
      title: "Design",
      desc: "Wireframes, design systems, and interactive prototypes. Your product looks exceptional before development begins.",
    },
    {
      num: "04",
      icon: "⚙️",
      title: "Development",
      desc: "Agile sprints with weekly demos. You're never in the dark — real code, real progress, real conversations every step of the way.",
    },
    {
      num: "05",
      icon: "🧪",
      title: "Testing",
      desc: "Automated test suites, manual QA, performance audits, and security checks — we sign off only when it's bulletproof.",
    },
    {
      num: "06",
      icon: "🚀",
      title: "Launch",
      desc: "Deployment, monitoring, go-live support, and a 30-day post-launch window. We don't ship and disappear — we ship and stay.",
    },
  ];

  return (
    <section className="gh-section gh-process" id="process" ref={sectionRef}>
      <div className="gh-inner">
        <div className="gh-process-header">
          <div className="gh-overline reveal-fade">How We Work</div>
          <h2 className="gh-section-title reveal-up">
            Six Steps From
            <br />
            Idea to Launch
          </h2>
          <p
            className="gh-section-sub reveal-up"
            style={{ transitionDelay: "80ms" }}
          >
            A clear, repeatable process that keeps you informed at every stage.
          </p>
        </div>

        <div className="gh-timeline">
          <div className="gh-timeline-spine">
            <div className="gh-timeline-fill" ref={fillRef} />
          </div>

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                className={`gh-timeline-step reveal-${isLeft ? "left" : "right"}`}
                key={s.num}
              >
                {!isLeft && (
                  <div className="gh-step-connector">
                    <div className="gh-step-dot" />
                  </div>
                )}
                <div className={isLeft ? "gh-step-left" : "gh-step-right"}>
                  <span className="gh-step-num">{s.num}</span>
                  <span className="gh-step-icon">{s.icon}</span>
                  <h3 className="gh-step-title">{s.title}</h3>
                  <p className="gh-step-desc">{s.desc}</p>
                </div>
                {isLeft && (
                  <div className="gh-step-connector">
                    <div className="gh-step-dot" />
                  </div>
                )}
              </div>
            );
          })}

          <div className="gh-timeline-cta reveal-up">
            <a href="#contact" className="btn-green lg">
              🚀 Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
