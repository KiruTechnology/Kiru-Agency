import { useEffect, useRef } from "react";
import { BtnApple } from "../ui/Buttons";
import "./Process.css";

const steps = [
  { num: "01", icon: "🔍", title: "Discovery",    desc: "We immerse ourselves in your business — goals, users, constraints — to build a shared understanding before a single line of code is written." },
  { num: "02", icon: "📐", title: "Planning",     desc: "Roadmap, milestones, tech stack, and team structure defined. You see everything upfront — no surprises, no scope creep." },
  { num: "03", icon: "🎨", title: "Design",       desc: "Wireframes, design systems, and interactive prototypes. Your product looks exceptional before development begins." },
  { num: "04", icon: "⚙️", title: "Development",  desc: "Agile sprints with weekly demos. You're never in the dark — real code, real progress, real conversations every step of the way." },
  { num: "05", icon: "🧪", title: "Testing",      desc: "Automated test suites, manual QA, performance audits, and security checks — we sign off only when it's bulletproof." },
  { num: "06", icon: "🚀", title: "Launch",       desc: "Deployment, monitoring, go-live support, and a 30-day post-launch window. We don't ship and disappear — we ship and stay." },
];

export function Process() {
  const fillRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateFill = () => {
      if (!sectionRef.current || !fillRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const pct = Math.min(100,
        (Math.max(0, -rect.top + window.innerHeight * 0.4) / sectionRef.current.offsetHeight) * 130
      );
      fillRef.current.style.height = pct + "%";
    };
    window.addEventListener("scroll", updateFill, { passive: true });
    updateFill();
    return () => window.removeEventListener("scroll", updateFill);
  }, []);

  return (
    <section className="section process-section" id="process" ref={sectionRef}>
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eye"><span className="spark-sm">✦</span> How We Work</p>
          <h2 className="section-h2">Six Steps From<br />Idea to Launch</h2>
        </div>

        <div className="timeline">
          <div className="timeline-line">
            <div className="timeline-line-fill" ref={fillRef} />
          </div>

          {steps.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div className={`timeline-step ${isLeft ? "step-left" : "step-right"} reveal-tl`} key={s.num}>
                {!isLeft && <div className="step-connector"><div className="step-dot" /></div>}
                <div className="step-content">
                  <span className="step-num">{s.num}</span>
                  <div className="step-icon-wrap">{s.icon}</div>
                  <h3 className="step-title">{s.title}</h3>
                  <p className="step-desc">{s.desc}</p>
                </div>
                {isLeft && <div className="step-connector"><div className="step-dot" /></div>}
              </div>
            );
          })}

          <div className="timeline-cta reveal">
            <BtnApple href="#contact" icon="🚀" label="Start Your Project" amber />
          </div>
        </div>
      </div>
    </section>
  );
}
