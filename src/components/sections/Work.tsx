import React from "react";

export function Work() {
  const projects = [
    {
      tag: "SaaS Platform",
      outcome: "↑ 340% user retention in 6 months",
      title: "FlowBoard Analytics",
      desc: "Real-time analytics dashboard for e-commerce teams — from zero to 12k DAU in 3 months.",
      svg: (
        <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0d1117" />
          <rect
            x="40"
            y="50"
            width="140"
            height="8"
            rx="4"
            fill="#3fb950"
            opacity=".8"
          />
          <rect
            x="40"
            y="68"
            width="90"
            height="8"
            rx="4"
            fill="#3fb950"
            opacity=".4"
          />
          <rect x="40" y="100" width="320" height="1" fill="#30363d" />
          <rect
            x="40"
            y="115"
            width="80"
            height="60"
            rx="6"
            fill="#161b22"
            stroke="#30363d"
            strokeWidth="1"
          />
          <rect
            x="135"
            y="115"
            width="80"
            height="60"
            rx="6"
            fill="#161b22"
            stroke="#30363d"
            strokeWidth="1"
          />
          <rect
            x="230"
            y="115"
            width="80"
            height="60"
            rx="6"
            fill="none"
            stroke="#3fb950"
            strokeWidth="1"
            opacity=".4"
          />
          <rect
            x="40"
            y="190"
            width="50"
            height="5"
            rx="2"
            fill="#58a6ff"
            opacity=".6"
          />
          <rect
            x="100"
            y="190"
            width="30"
            height="5"
            rx="2"
            fill="#3fb950"
            opacity=".4"
          />
        </svg>
      ),
    },
    {
      tag: "Mobile App",
      outcome: "4.9★ App Store · 50k downloads",
      title: "Pulse Health Tracker",
      desc: "Cross-platform wellness app shipped in 6 weeks — MVP validated, Series A funded.",
      svg: (
        <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0d1117" />
          <circle
            cx="200"
            cy="110"
            r="60"
            fill="none"
            stroke="#58a6ff"
            strokeWidth="1"
            opacity=".3"
          />
          <circle
            cx="200"
            cy="110"
            r="40"
            fill="none"
            stroke="#58a6ff"
            strokeWidth="1"
            opacity=".5"
          />
          <circle cx="200" cy="110" r="20" fill="#58a6ff" opacity=".15" />
          <circle cx="200" cy="110" r="8" fill="#58a6ff" opacity=".9" />
          <rect
            x="40"
            y="185"
            width="120"
            height="5"
            rx="2"
            fill="#58a6ff"
            opacity=".3"
          />
          <rect
            x="40"
            y="195"
            width="80"
            height="5"
            rx="2"
            fill="#58a6ff"
            opacity=".15"
          />
        </svg>
      ),
    },
    {
      tag: "Enterprise SaaS",
      outcome: "$2M ARR · 200+ enterprise clients",
      title: "NexaOS Workspace",
      desc: "Enterprise project management platform — rebuilt from a legacy system to a modern, scalable SaaS.",
      svg: (
        <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0d1117" />
          <rect
            x="40"
            y="40"
            width="320"
            height="30"
            rx="6"
            fill="#161b22"
            stroke="#30363d"
            strokeWidth="1"
          />
          <rect x="52" y="50" width="10" height="10" rx="3" fill="#a371f7" />
          <rect
            x="70"
            y="53"
            width="70"
            height="5"
            rx="2"
            fill="#a371f7"
            opacity=".4"
          />
          <rect
            x="40"
            y="84"
            width="148"
            height="120"
            rx="6"
            fill="#161b22"
            stroke="#30363d"
            strokeWidth="1"
          />
          <rect
            x="200"
            y="84"
            width="160"
            height="58"
            rx="6"
            fill="#161b22"
            stroke="#30363d"
            strokeWidth="1"
          />
          <rect
            x="200"
            y="150"
            width="160"
            height="54"
            rx="6"
            fill="#a371f7"
            opacity=".08"
            stroke="#a371f7"
            strokeWidth=".5"
          />
          <rect
            x="52"
            y="96"
            width="50"
            height="5"
            rx="2"
            fill="#a371f7"
            opacity=".5"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="gh-section gh-work" id="work">
      <div className="gh-inner">
        <div className="gh-work-header">
          <div className="reveal-left">
            <div className="gh-overline">Proof of Work</div>
            <h2 className="gh-section-title">
              Products We've
              <br />
              Shipped
            </h2>
          </div>
          <a href="#contact" className="btn-ghost reveal-right">
            VIEW ALL PROJECTS →
          </a>
        </div>

        <div className="gh-work-grid stagger">
          {projects.map((p) => (
            <div className="gh-work-card reveal-up" key={p.title}>
              <div className="gh-work-thumb">
                {p.svg}
                <div className="gh-work-overlay">
                  <p className="gh-work-tag">{p.tag}</p>
                  <p className="gh-work-outcome">{p.outcome}</p>
                </div>
              </div>
              <div className="gh-work-meta">
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
