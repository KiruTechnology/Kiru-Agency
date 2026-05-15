import { BtnOutline } from "../ui/Buttons";
import "./Work.css";

/* SVG thumbnails are kept inline to avoid asset coupling */
const projects = [
  {
    bg: "#0D1B2A",
    svg: (
      <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#0D1B2A"/>
        <rect x="40" y="50"  width="140" height="8" rx="4" fill="#E8A020" opacity="0.8"/>
        <rect x="40" y="68"  width="90"  height="8" rx="4" fill="#E8A020" opacity="0.4"/>
        <rect x="40" y="100" width="320" height="1.5" fill="#1a3a5c"/>
        <rect x="40"  y="115" width="80" height="60" rx="6" fill="#1a3a5c"/>
        <rect x="135" y="115" width="80" height="60" rx="6" fill="#1a3a5c"/>
        <rect x="230" y="115" width="80" height="60" rx="6" fill="#E8A020" opacity="0.15"/>
        <rect x="40"  y="190" width="50" height="6"  rx="3" fill="#E8A020" opacity="0.6"/>
      </svg>
    ),
    tag: "SaaS Platform", outcome: "↑ 340% user retention in 6 months",
    title: "FlowBoard Analytics",
    desc:  "Real-time analytics dashboard for e-commerce teams — from zero to 12k DAU in 3 months.",
  },
  {
    svg: (
      <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#0f2a1a"/>
        <circle cx="200" cy="100" r="55" fill="none" stroke="#2ecc71" strokeWidth="1.5" opacity="0.5"/>
        <circle cx="200" cy="100" r="35" fill="none" stroke="#2ecc71" strokeWidth="1.5" opacity="0.7"/>
        <circle cx="200" cy="100" r="14" fill="#2ecc71" opacity="0.9"/>
        <rect x="40" y="175" width="140" height="6" rx="3" fill="#2ecc71" opacity="0.4"/>
        <rect x="40" y="188" width="90"  height="6" rx="3" fill="#2ecc71" opacity="0.2"/>
      </svg>
    ),
    tag: "Mobile App", outcome: "4.9★ App Store · 50k downloads",
    title: "Pulse Health Tracker",
    desc:  "Cross-platform wellness app shipped in 6 weeks — MVP validated, Series A funded.",
  },
  {
    svg: (
      <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="240" fill="#1a0d2e"/>
        <rect x="40" y="40" width="320" height="32" rx="6" fill="#2d1b4e"/>
        <rect x="52" y="50" width="12" height="12" rx="3" fill="#9b59b6"/>
        <rect x="72" y="53" width="80" height="6" rx="3" fill="#9b59b6" opacity="0.5"/>
        <rect x="40"  y="84" width="150" height="120" rx="6" fill="#2d1b4e"/>
        <rect x="202" y="84" width="158" height="56"  rx="6" fill="#2d1b4e"/>
        <rect x="202" y="148" width="158" height="56" rx="6" fill="#9b59b6" opacity="0.2"/>
        <rect x="52" y="96" width="60" height="6" rx="3" fill="#9b59b6" opacity="0.6"/>
      </svg>
    ),
    tag: "Enterprise SaaS", outcome: "$2M ARR · 200+ enterprise clients",
    title: "NexaOS Workspace",
    desc:  "Enterprise project management platform — rebuilt from a legacy system to a modern, scalable SaaS.",
  },
];

export function Work() {
  return (
    <section className="section work-section" id="work">
      <div className="section-inner">
        <div className="section-header two-col-header">
          <div>
            <p className="section-eye slide-in-left">
              <span className="spark-sm">✦</span> Proof of Work
            </p>
            <h2 className="section-h2 blur-in">Products We've<br />Shipped</h2>
          </div>
          <BtnOutline href="#contact" label="VIEW ALL PROJECTS →" className="slide-in-right" />
        </div>

        <div className="work-grid">
          {projects.map((p) => (
            <div className="work-card reveal scale-on-scroll" key={p.title}>
              <div className="work-thumb">
                <div className="work-thumb-inner">{p.svg}</div>
                <div className="work-overlay">
                  <p className="work-tag">{p.tag}</p>
                  <p className="work-outcome">{p.outcome}</p>
                </div>
              </div>
              <div className="work-meta">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
