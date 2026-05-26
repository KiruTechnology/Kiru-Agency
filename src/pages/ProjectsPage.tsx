import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("pp-visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );
    document.querySelectorAll(".pp-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  });
}

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;500;600;700;800;900&display=swap');

  .pp-root {
    background: #0d1117; color: #e6edf3;
    font-family: 'Mona Sans', -apple-system, sans-serif; min-height: 100vh;
  }
  .pp-reveal {
    opacity: 0; transform: translateY(28px);
    transition: opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1);
  }
  .pp-reveal.pp-visible { opacity: 1; transform: none; }

  /* HERO */
  .pp-hero {
    position: relative; padding: 96px 40px 72px;
    border-bottom: 1px solid #30363d; text-align: center; overflow: hidden;
  }
  .pp-hero::before {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 70% 60% at 50% 0%, rgba(63,185,80,.08) 0%, transparent 60%),
      radial-gradient(ellipse 50% 40% at 100% 80%, rgba(88,166,255,.06) 0%, transparent 60%);
  }
  .pp-hero::after {
    content: ''; position: absolute; inset: 0; pointer-events: none;
    background-image: radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .pp-hero-inner { position: relative; z-index: 1; max-width: 680px; margin: 0 auto; }
  .pp-overline {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: .72rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: .12em; color: #8b949e; margin-bottom: 20px;
  }
  .pp-overline::before { content: ''; width: 16px; height: 1px; background: #30363d; display: block; }
  .pp-hero-title {
    font-size: clamp(2.2rem, 4.5vw, 3.6rem); font-weight: 900;
    letter-spacing: -.04em; line-height: 1.06; color: #e6edf3; margin-bottom: 18px;
  }
  .pp-hero-title .grad {
    background: linear-gradient(135deg, #3fb950 0%, #58a6ff 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .pp-hero-sub { font-size: .95rem; color: #8b949e; line-height: 1.75; margin-bottom: 32px; }

  /* FILTER TABS */
  .pp-filters {
    display: flex; gap: 0; overflow-x: auto;
    border-bottom: 1px solid #30363d;
    padding: 0 40px;
  }
  .pp-filter-btn {
    padding: 14px 20px; background: none; border: none;
    font-family: inherit; font-size: .82rem; font-weight: 600;
    color: #8b949e; cursor: pointer; white-space: nowrap;
    border-bottom: 2px solid transparent; margin-bottom: -1px;
    transition: color .15s, border-color .15s;
  }
  .pp-filter-btn:hover { color: #e6edf3; }
  .pp-filter-btn.active { color: #e6edf3; border-bottom-color: #f0883e; }
  .pp-filter-count {
    display: inline-flex; align-items: center; justify-content: center;
    background: #21262d; color: #8b949e; border-radius: 999px;
    font-size: .62rem; font-weight: 700; padding: 1px 7px; margin-left: 7px;
    min-width: 20px;
  }
  .pp-filter-btn.active .pp-filter-count { background: rgba(240,136,62,.15); color: #f0883e; }

  /* PROJECTS GRID */
  .pp-grid-wrap { padding: 48px 40px; max-width: 1200px; margin: 0 auto; }
  .pp-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: #30363d;
    border: 1px solid #30363d; border-radius: 12px; overflow: hidden;
  }

  .pp-card {
    background: #161b22; display: flex; flex-direction: column;
    overflow: hidden; transition: background .2s; cursor: pointer;
  }
  .pp-card:hover { background: #21262d; }
  .pp-card.featured { grid-column: span 2; }

  /* Thumb */
  .pp-thumb {
    position: relative; aspect-ratio: 16/9; overflow: hidden;
    border-bottom: 1px solid #30363d;
  }
  .pp-card.featured .pp-thumb { aspect-ratio: 21/9; }
  .pp-thumb svg { width: 100%; height: 100%; }
  .pp-thumb-overlay {
    position: absolute; inset: 0;
    background: rgba(13,17,23,.9);
    display: flex; flex-direction: column;
    justify-content: flex-end; padding: 16px;
    opacity: 0; transition: opacity .28s;
  }
  .pp-thumb:hover .pp-thumb-overlay { opacity: 1; }
  .pp-overlay-tag {
    font-size: .62rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: .1em; color: #3fb950; margin-bottom: 4px;
  }
  .pp-overlay-outcome { font-size: .82rem; color: #e6edf3; font-weight: 500; }
  .pp-overlay-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: .75rem; font-weight: 600; color: #58a6ff;
    text-decoration: none; margin-top: 10px;
    transition: color .15s;
  }
  .pp-overlay-link:hover { color: #79c0ff; }

  /* Meta */
  .pp-card-meta { padding: 18px 20px; flex: 1; display: flex; flex-direction: column; gap: 8px; }
  .pp-card-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 10px; }
  .pp-card-name {
    font-size: .95rem; font-weight: 800; color: #e6edf3;
    letter-spacing: -.02em; line-height: 1.2;
  }
  .pp-card-type {
    font-size: .62rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: .1em; padding: 3px 8px; border-radius: 3px;
    flex-shrink: 0; white-space: nowrap;
  }
  .pp-card-desc { font-size: .82rem; color: #8b949e; line-height: 1.65; flex: 1; }

  .pp-card-tags { display: flex; gap: 5px; flex-wrap: wrap; margin-top: auto; padding-top: 10px; border-top: 1px solid #21262d; }
  .pp-card-tag {
    font-family: 'SFMono-Regular', Consolas, monospace;
    font-size: .6rem; color: #8b949e;
    background: #0d1117; border: 1px solid #30363d;
    padding: 2px 7px; border-radius: 3px;
  }

  .pp-card-footer {
    padding: 12px 20px; border-top: 1px solid #21262d;
    display: flex; gap: 16px; flex-wrap: wrap;
  }
  .pp-stat { display: flex; flex-direction: column; gap: 2px; }
  .pp-stat-val { font-size: .82rem; font-weight: 700; color: #e6edf3; }
  .pp-stat-key { font-size: .6rem; text-transform: uppercase; letter-spacing: .08em; color: #656d76; }

  /* EMPTY STATE */
  .pp-empty {
    text-align: center; padding: 80px 40px;
    color: #8b949e; font-size: .9rem;
  }
  .pp-empty-icon { font-size: 2.5rem; display: block; margin-bottom: 16px; }

  /* CTA */
  .pp-cta {
    background: #161b22; border: 1px solid #30363d; border-radius: 12px;
    padding: 40px; text-align: center; margin-top: 48px;
    position: relative; overflow: hidden;
  }
  .pp-cta::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 60% 60% at 50% 100%, rgba(63,185,80,.06) 0%, transparent 60%);
  }
  .pp-cta h2 { font-size: 1.4rem; font-weight: 800; color: #e6edf3; letter-spacing: -.02em; margin-bottom: 10px; position: relative; }
  .pp-cta p  { font-size: .86rem; color: #8b949e; margin-bottom: 24px; position: relative; }
  .pp-cta-btns { display: flex; gap: 12px; justify-content: center; position: relative; flex-wrap: wrap; }

  .pp-btn-green {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 26px; background: #238636;
    border: 1px solid rgba(240,246,252,.1); border-radius: 6px;
    color: #fff; font-family: inherit; font-size: .88rem; font-weight: 700;
    text-decoration: none; transition: background .15s, transform .1s, box-shadow .15s;
  }
  .pp-btn-green:hover { background: #2ea043; transform: translateY(-1px); box-shadow: 0 0 0 3px rgba(63,185,80,.2); }
  .pp-btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 11px 26px; background: transparent;
    border: 1px solid #30363d; border-radius: 6px;
    color: #e6edf3; font-family: inherit; font-size: .88rem; font-weight: 600;
    text-decoration: none; transition: background .15s, border-color .15s;
  }
  .pp-btn-ghost:hover { background: #21262d; border-color: #8b949e; }

  @media(max-width: 860px) {
    .pp-hero, .pp-grid-wrap { padding-left: 20px; padding-right: 20px; }
    .pp-filters { padding: 0 20px; }
    .pp-grid { grid-template-columns: 1fr; }
    .pp-card.featured { grid-column: span 1; }
  }
`;

type Category = "All" | "SaaS" | "Mobile" | "Enterprise" | "MVP" | "Portfolio";

const projects = [
  {
    id: 1,
    featured: true,
    name: "FlowBoard Analytics",
    type: "SaaS Platform",
    typeColor: "#58a6ff",
    typeBg: "rgba(88,166,255,.1)",
    desc: "Real-time analytics dashboard for e-commerce teams. Built from zero to 12k DAU in 3 months. Full-stack platform with live data streaming, custom report builder, and team collaboration features.",
    tags: ["React", "Node.js", "PostgreSQL", "WebSockets", "Redis", "AWS"],
    stats: [
      { val: "12k", key: "Daily Users" },
      { val: "↑ 340%", key: "Retention" },
      { val: "3 months", key: "To Market" },
    ],
    outcome: "↑ 340% user retention in 6 months",
    category: "SaaS",
    svg: (
      <svg viewBox="0 0 560 270" xmlns="http://www.w3.org/2000/svg">
        <rect width="560" height="270" fill="#0d1117" />
        <rect
          x="0"
          y="0"
          width="560"
          height="270"
          fill="url(#grad1)"
          opacity=".4"
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#58a6ff" stopOpacity=".15" />
            <stop offset="100%" stopColor="#3fb950" stopOpacity=".05" />
          </linearGradient>
        </defs>
        <rect
          x="40"
          y="40"
          width="480"
          height="28"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect x="52" y="50" width="8" height="8" rx="2" fill="#3fb950" />
        <rect
          x="68"
          y="51"
          width="60"
          height="6"
          rx="3"
          fill="#8b949e"
          opacity=".4"
        />
        <rect
          x="40"
          y="82"
          width="228"
          height="100"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="280"
          y="82"
          width="110"
          height="100"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="402"
          y="82"
          width="118"
          height="100"
          rx="6"
          fill="#161b22"
          stroke="#3fb950"
          strokeWidth="1"
          opacity=".5"
        />
        <rect
          x="52"
          y="98"
          width="80"
          height="6"
          rx="3"
          fill="#8b949e"
          opacity=".4"
        />
        <text
          x="52"
          y="145"
          fill="#3fb950"
          fontSize="24"
          fontWeight="800"
          fontFamily="monospace"
        >
          12,847
        </text>
        <rect
          x="52"
          y="156"
          width="50"
          height="4"
          rx="2"
          fill="#3fb950"
          opacity=".3"
        />
        <rect
          x="292"
          y="98"
          width="50"
          height="6"
          rx="3"
          fill="#8b949e"
          opacity=".4"
        />
        <text
          x="292"
          y="145"
          fill="#58a6ff"
          fontSize="20"
          fontWeight="800"
          fontFamily="monospace"
        >
          ↑340%
        </text>
        <rect
          x="414"
          y="98"
          width="50"
          height="6"
          rx="3"
          fill="#8b949e"
          opacity=".4"
        />
        <text
          x="414"
          y="145"
          fill="#f0883e"
          fontSize="14"
          fontWeight="800"
          fontFamily="monospace"
        >
          $2.1M
        </text>
        <rect
          x="40"
          y="195"
          width="480"
          height="36"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <rect
            key={i}
            x={52 + i * 60}
            y={203}
            width={48}
            height={i % 3 === 0 ? 20 : i % 2 === 0 ? 14 : 8}
            rx="3"
            fill={i === 3 ? "#3fb950" : "#30363d"}
            opacity={i === 3 ? ".8" : ".5"}
          />
        ))}
      </svg>
    ),
  },
  {
    id: 2,
    featured: false,
    name: "Pulse Health Tracker",
    type: "Mobile App",
    typeColor: "#3fb950",
    typeBg: "rgba(63,185,80,.1)",
    desc: "Cross-platform wellness app shipped in 6 weeks. MVP validated, then scaled to 50k+ downloads and a 4.9★ App Store rating. Series A funded following launch.",
    tags: ["React Native", "Firebase", "Node.js", "Expo", "HealthKit"],
    stats: [
      { val: "50k+", key: "Downloads" },
      { val: "4.9★", key: "App Store" },
      { val: "6 weeks", key: "To Launch" },
    ],
    outcome: "4.9★ App Store · 50k downloads",
    category: "Mobile",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <circle
          cx="130"
          cy="95"
          r="65"
          fill="none"
          stroke="#3fb950"
          strokeWidth="1"
          opacity=".2"
        />
        <circle
          cx="130"
          cy="95"
          r="48"
          fill="none"
          stroke="#3fb950"
          strokeWidth="1"
          opacity=".35"
        />
        <circle
          cx="130"
          cy="95"
          r="30"
          fill="none"
          stroke="#3fb950"
          strokeWidth="1.5"
          opacity=".6"
        />
        <circle cx="130" cy="95" r="12" fill="#3fb950" opacity=".9" />
        <rect
          x="30"
          y="170"
          width="90"
          height="5"
          rx="2"
          fill="#3fb950"
          opacity=".3"
        />
        <rect
          x="30"
          y="180"
          width="60"
          height="4"
          rx="2"
          fill="#3fb950"
          opacity=".15"
        />
      </svg>
    ),
  },
  {
    id: 3,
    featured: false,
    name: "NexaOS Workspace",
    type: "Enterprise",
    typeColor: "#a371f7",
    typeBg: "rgba(163,113,247,.1)",
    desc: "Enterprise project management platform rebuilt from a legacy Rails monolith to a modern, scalable SaaS. $2M ARR, 200+ enterprise clients.",
    tags: ["React", "Go", "PostgreSQL", "Kafka", "Kubernetes", "GCP"],
    stats: [
      { val: "$2M", key: "ARR" },
      { val: "200+", key: "Clients" },
      { val: "99.99%", key: "Uptime" },
    ],
    outcome: "$2M ARR · 200+ enterprise clients",
    category: "Enterprise",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <rect
          x="20"
          y="20"
          width="220"
          height="24"
          rx="5"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect x="30" y="28" width="8" height="8" rx="2" fill="#a371f7" />
        <rect
          x="46"
          y="30"
          width="50"
          height="5"
          rx="2"
          fill="#a371f7"
          opacity=".3"
        />
        <rect
          x="20"
          y="55"
          width="105"
          height="120"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="135"
          y="55"
          width="105"
          height="55"
          rx="6"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect
          x="135"
          y="120"
          width="105"
          height="55"
          rx="6"
          fill="#a371f7"
          opacity=".08"
          stroke="#a371f7"
          strokeWidth=".5"
        />
        <rect
          x="30"
          y="68"
          width="40"
          height="4"
          rx="2"
          fill="#a371f7"
          opacity=".4"
        />
        <rect x="30" y="80" width="80" height="3" rx="2" fill="#30363d" />
        <rect x="30" y="88" width="65" height="3" rx="2" fill="#30363d" />
        <rect x="30" y="96" width="72" height="3" rx="2" fill="#30363d" />
        <text
          x="145"
          y="90"
          fill="#a371f7"
          fontSize="16"
          fontWeight="800"
          fontFamily="monospace"
        >
          $2M
        </text>
        <rect
          x="145"
          y="95"
          width="30"
          height="3"
          rx="2"
          fill="#a371f7"
          opacity=".3"
        />
      </svg>
    ),
  },
  {
    id: 4,
    featured: false,
    name: "TradeLink Africa",
    type: "SaaS",
    typeColor: "#58a6ff",
    typeBg: "rgba(88,166,255,.1)",
    desc: "B2B trade facilitation platform for African markets. Connecting buyers and suppliers with real-time pricing, logistics tracking, and invoice financing.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Mapbox", "AWS"],
    stats: [
      { val: "8 wks", key: "To MVP" },
      { val: "340+", key: "Traders" },
      { val: "Seed", key: "Funded" },
    ],
    outcome: "Seed funded · 340+ active traders",
    category: "SaaS",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <circle
          cx="130"
          cy="100"
          r="70"
          fill="none"
          stroke="#30363d"
          strokeWidth="30"
          opacity=".4"
        />
        <circle
          cx="130"
          cy="100"
          r="45"
          fill="none"
          stroke="#58a6ff"
          strokeWidth="1"
          opacity=".5"
          strokeDasharray="4 4"
        />
        <circle cx="130" cy="100" r="6" fill="#58a6ff" />
        {[
          [80, 65],
          [170, 85],
          [100, 140],
          [155, 130],
          [130, 55],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4" fill="#58a6ff" opacity=".7" />
            <line
              x1="130"
              y1="100"
              x2={cx}
              y2={cy}
              stroke="#58a6ff"
              strokeWidth=".5"
              opacity=".3"
            />
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: 5,
    featured: false,
    name: "PayEase Kenya",
    type: "MVP",
    typeColor: "#f0883e",
    typeBg: "rgba(240,136,62,.1)",
    desc: "Mobile money and payments API platform for Kenyan SMEs. Integrated M-Pesa, Airtel Money, and card payments into a single developer-friendly API. Shipped MVP in 5 weeks.",
    tags: ["Node.js", "React Native", "M-Pesa API", "Redis", "PostgreSQL"],
    stats: [
      { val: "5 wks", key: "MVP" },
      { val: "1M+", key: "Transactions" },
      { val: "API", key: "First" },
    ],
    outcome: "1M+ transactions processed",
    category: "MVP",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <rect
          x="80"
          y="20"
          width="100"
          height="160"
          rx="12"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        <rect x="90" y="35" width="80" height="50" rx="6" fill="#0d1117" />
        <text
          x="130"
          y="67"
          fill="#f0883e"
          fontSize="18"
          fontWeight="800"
          fontFamily="monospace"
          textAnchor="middle"
        >
          KSh
        </text>
        <rect x="90" y="95" width="80" height="6" rx="3" fill="#30363d" />
        <rect x="90" y="107" width="60" height="6" rx="3" fill="#30363d" />
        <rect
          x="90"
          y="125"
          width="80"
          height="24"
          rx="5"
          fill="#f0883e"
          opacity=".8"
        />
        <text
          x="130"
          y="141"
          fill="#0d1117"
          fontSize="10"
          fontWeight="700"
          fontFamily="monospace"
          textAnchor="middle"
        >
          PAY NOW
        </text>
      </svg>
    ),
  },
  {
    id: 6,
    featured: false,
    name: "Savannah Logistics",
    type: "Enterprise",
    typeColor: "#a371f7",
    typeBg: "rgba(163,113,247,.1)",
    desc: "Fleet management and last-mile delivery platform for East African logistics operators. Real-time GPS tracking, route optimisation, and driver performance analytics.",
    tags: ["React", "Go", "WebSockets", "Mapbox", "Kubernetes", "TimescaleDB"],
    stats: [
      { val: "500+", key: "Vehicles" },
      { val: "↓ 23%", key: "Fuel Cost" },
      { val: "Real-time", key: "Tracking" },
    ],
    outcome: "↓ 23% fuel cost · 500+ vehicles",
    category: "Enterprise",
    svg: (
      <svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
        <rect width="260" height="200" fill="#0d1117" />
        <rect
          x="20"
          y="20"
          width="220"
          height="160"
          rx="8"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth="1"
        />
        {/* Stylised map */}
        <rect x="30" y="30" width="200" height="140" rx="5" fill="#0d1117" />
        <path
          d="M50 100 Q100 60 150 90 Q180 110 210 80"
          fill="none"
          stroke="#a371f7"
          strokeWidth="2"
          opacity=".6"
          strokeDasharray="5 3"
        />
        {[
          [50, 100],
          [150, 90],
          [210, 80],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="5"
            fill={i === 0 ? "#3fb950" : i === 2 ? "#a371f7" : "#30363d"}
            stroke="#0d1117"
            strokeWidth="1"
          />
        ))}
        <rect
          x="155"
          y="60"
          width="50"
          height="14"
          rx="3"
          fill="#161b22"
          stroke="#30363d"
          strokeWidth=".5"
        />
        <text
          x="180"
          y="71"
          fill="#a371f7"
          fontSize="7"
          fontWeight="700"
          fontFamily="monospace"
          textAnchor="middle"
        >
          ETA 14m
        </text>
      </svg>
    ),
  },
];

const FILTERS: Category[] = [
  "All",
  "SaaS",
  "Mobile",
  "Enterprise",
  "MVP",
  "Portfolio",
];

export function ProjectsPage() {
  const [activeFilter, setFilter] = useState<Category>("All");
  useReveal();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const countFor = (cat: Category) =>
    cat === "All"
      ? projects.length
      : projects.filter((p) => p.category === cat).length;

  return (
    <>
      <style>{STYLES}</style>
      <div className="pp-root">
        {/* HERO */}
        <section className="pp-hero">
          <div className="pp-hero-inner">
            <div className="pp-overline pp-reveal">Our Work</div>
            <h1 className="pp-hero-title pp-reveal">
              Products We've <span className="grad">Shipped</span>
            </h1>
            <p className="pp-hero-sub pp-reveal">
              Real products, real clients, real results. From seed-stage MVPs to
              enterprise platforms — here's what we've built.
            </p>
            <div
              className="pp-reveal"
              style={{
                display: "flex",
                gap: 12,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link to="/#contact" className="pp-btn-green">
                Start Your Project →
              </Link>
              <Link to="/services" className="pp-btn-ghost">
                See All Services
              </Link>
            </div>
          </div>
        </section>

        {/* FILTER TABS */}
        <div className="pp-filters sticky top-16 z-20 bg-[#0d1117]">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`pp-filter-btn${activeFilter === f ? " active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="pp-filter-count">{countFor(f)}</span>
            </button>
          ))}
        </div>

        {/* PROJECTS GRID */}
        <div className="pp-grid-wrap">
          {filtered.length === 0 ? (
            <div className="pp-empty">
              <span className="pp-empty-icon">🔍</span>
              No projects in this category yet.
            </div>
          ) : (
            <div className="pp-grid">
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className={`pp-card pp-reveal${p.featured && activeFilter === "All" ? " featured" : ""}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="pp-thumb">
                    {p.svg}
                    <div className="pp-thumb-overlay">
                      <span className="pp-overlay-tag">{p.type}</span>
                      <span className="pp-overlay-outcome">{p.outcome}</span>
                      <a href="#" className="pp-overlay-link">
                        View Case Study →
                      </a>
                    </div>
                  </div>

                  <div className="pp-card-meta">
                    <div className="pp-card-header">
                      <h3 className="pp-card-name">{p.name}</h3>
                      <span
                        className="pp-card-type"
                        style={{ color: p.typeColor, background: p.typeBg }}
                      >
                        {p.type}
                      </span>
                    </div>
                    <p className="pp-card-desc">{p.desc}</p>
                    <div className="pp-card-tags">
                      {p.tags.map((t) => (
                        <span key={t} className="pp-card-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pp-card-footer">
                    {p.stats.map((s) => (
                      <div key={s.key} className="pp-stat">
                        <span className="pp-stat-val">{s.val}</span>
                        <span className="pp-stat-key">{s.key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="pp-cta pp-reveal">
            <h2>Don't see what you're looking for?</h2>
            <p>
              We've built across fintech, healthtech, logistics, e-commerce, and
              more. Let's talk about your specific needs.
            </p>
            <div className="pp-cta-btns">
              <Link to="/#contact" className="pp-btn-green">
                Book a Free Discovery Call →
              </Link>
              <Link to="/services" className="pp-btn-ghost">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
