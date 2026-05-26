import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  PaintBrushIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  BuildingLibraryIcon,
  MagnifyingGlassIcon,
  ClipboardDocumentIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  HandRaisedIcon,
} from "@heroicons/react/24/solid";
import {
  DiReact,
  DiGo,
  DiRust,
  DiPostgresql,
  DiRedis,
  DiDocker,
} from "react-icons/di";
import {
  SiTypescript,
  SiKubernetes,
  SiAew,
  SiVercel,
  SiFigma,
} from "react-icons/si";
/* ── scroll reveal hook ── */
function useReveal() {
  useEffect(() => {
    document.title = "Services - Kiru Tech ";
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("sp-visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );
    document.querySelectorAll(".sp-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;500;600;700;800;900&display=swap');

  .sp-root {
    background: #0d1117;
    color: #e6edf3;
    font-family: 'Mona Sans', -apple-system, sans-serif;
    min-height: 100vh;
  }

  /* reveal system */
  .sp-reveal {
    opacity: 0; transform: translateY(32px);
    transition: opacity .65s cubic-bezier(.16,1,.3,1), transform .65s cubic-bezier(.16,1,.3,1);
  }
  .sp-reveal.sp-visible { opacity: 1; transform: none; }
  .sp-reveal-left  { opacity:0; transform:translateX(-32px); transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1); }
  .sp-reveal-left.sp-visible  { opacity:1; transform:none; }
  .sp-reveal-right { opacity:0; transform:translateX(32px);  transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1); }
  .sp-reveal-right.sp-visible { opacity:1; transform:none; }

  /* ── HERO ── */
  .sp-hero {
    position: relative; padding: 100px 40px 80px;
    border-bottom: 1px solid #30363d;
    overflow: hidden; text-align: center;
  }
  .sp-hero::before {
    content: ''; position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 80% 60% at 50% 0%, rgba(88,166,255,.1) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 0% 100%, rgba(163,113,247,.07) 0%, transparent 60%);
    pointer-events: none;
  }
  .sp-hero::after {
    content: ''; position: absolute; inset: 0;
    background-image: radial-gradient(rgba(255,255,255,.025) 1px, transparent 1px);
    background-size: 28px 28px; pointer-events: none;
  }
  .sp-hero-inner { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
  .sp-overline {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: .72rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: .12em; color: #8b949e; margin-bottom: 20px;
  }
  .sp-overline::before { content: ''; display: block; width: 16px; height: 1px; background: #30363d; }
  .sp-hero-title {
    font-size: clamp(2.4rem, 5vw, 4rem); font-weight: 900;
    letter-spacing: -.04em; line-height: 1.05;
    color: #e6edf3; margin-bottom: 20px;
  }
  .sp-hero-title .grad {
    background: linear-gradient(135deg, #58a6ff 0%, #a371f7 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .sp-hero-sub {
    font-size: 1rem; color: #8b949e; line-height: 1.75;
    max-width: 560px; margin: 0 auto 36px;
  }
  .sp-hero-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

  /* ── BUTTONS ── */
  .sp-btn-green {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 28px; background: #238636;
    border: 1px solid rgba(240,246,252,.1); border-radius: 6px;
    color: #fff; font-family: inherit; font-size: .9rem; font-weight: 700;
    text-decoration: none; cursor: pointer;
    transition: background .15s, transform .1s, box-shadow .15s;
  }
  .sp-btn-green:hover {
    background: #2ea043; transform: translateY(-1px);
    box-shadow: 0 0 0 3px rgba(63,185,80,.2);
  }
  .sp-btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 12px 28px; background: transparent;
    border: 1px solid #30363d; border-radius: 6px;
    color: #e6edf3; font-family: inherit; font-size: .9rem; font-weight: 600;
    text-decoration: none; cursor: pointer; transition: background .15s, border-color .15s;
  }
  .sp-btn-ghost:hover { background: #21262d; border-color: #8b949e; }

  /* ── SECTION WRAPPER ── */
  .sp-section { padding: 80px 40px; border-bottom: 1px solid #30363d; }
  .sp-inner { max-width: 1200px; margin: 0 auto; }
  .sp-section-title {
    font-size: clamp(1.6rem, 2.5vw, 2.2rem); font-weight: 800;
    letter-spacing: -.03em; color: #e6edf3; margin-bottom: 12px;
  }
  .sp-section-sub { font-size: .9rem; color: #8b949e; line-height: 1.7; max-width: 540px; margin-bottom: 48px; }

  /* ── SERVICE DETAIL CARDS ── */
  .sp-services-list { display: flex; flex-direction: column; gap: 1px; background: #30363d; border: 1px solid #30363d; border-radius: 12px; overflow: hidden; }

  .sp-svc {
    background: #0d1117; display: grid;
    grid-template-columns: 56px 1fr 240px;
    gap: 0; align-items: stretch;
    transition: background .2s; cursor: default;
    border-bottom: 1px solid #30363d;
  }
  .sp-svc:last-child { border-bottom: none; }
  .sp-svc:hover { background: #161b22; }

  .sp-svc-num-col {
    border-right: 1px solid #30363d;
    display: flex; align-items: flex-start; justify-content: center;
    padding: 32px 0; font-family: 'SFMono-Regular', Consolas, monospace;
    font-size: .65rem; font-weight: 500; color: #656d76; letter-spacing: .12em;
  }
  .sp-svc-body { padding: 32px 32px; }
  .sp-svc-icon { font-size: 1.5rem; margin-bottom: 12px; display: block; }
  .sp-svc-name {
    font-size: 1.05rem; font-weight: 800; color: #e6edf3;
    letter-spacing: -.02em; margin-bottom: 10px;
  }
  .sp-svc-desc { font-size: .86rem; color: #8b949e; line-height: 1.75; margin-bottom: 16px; }
  .sp-svc-tags { display: flex; gap: 6px; flex-wrap: wrap; }
  .sp-tag {
    font-family: 'SFMono-Regular', Consolas, monospace;
    font-size: .65rem; font-weight: 500;
    background: #161b22; color: #58a6ff;
    border: 1px solid #30363d; padding: 3px 9px; border-radius: 3px;
  }
  .sp-svc:hover .sp-tag { background: #21262d; }

  .sp-svc-meta {
    border-left: 1px solid #30363d; padding: 32px 28px;
    display: flex; flex-direction: column; gap: 20px;
  }
  .sp-meta-item { display: flex; flex-direction: column; gap: 4px; }
  .sp-meta-label {
    font-size: .65rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: .1em; color: #656d76;
  }
  .sp-meta-val { font-size: .85rem; font-weight: 600; color: #e6edf3; }
  .sp-meta-val.green { color: #3fb950; }

  /* ── PROCESS MINI ── */
  .sp-process-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 1px; background: #30363d;
    border: 1px solid #30363d; border-radius: 12px; overflow: hidden;
  }
  .sp-process-card {
    background: #161b22; padding: 28px 24px; transition: background .2s;
  }
  .sp-process-card:hover { background: #21262d; }
  .sp-process-num {
    font-family: 'SFMono-Regular', Consolas, monospace;
    font-size: .65rem; color: #3fb950; letter-spacing: .12em;
    display: block; margin-bottom: 12px;
  }
  .sp-process-icon { font-size: 1.3rem; display: block; margin-bottom: 10px; }
  .sp-process-card h3 { font-size: .95rem; font-weight: 700; color: #e6edf3; margin-bottom: 8px; }
  .sp-process-card p  { font-size: .82rem; color: #8b949e; line-height: 1.7; }

  /* ── TECH STACK ── */
  .sp-stack-grid {
    display: grid; grid-template-columns: repeat(6, 1fr);
    gap: 1px; background: #30363d;
    border: 1px solid #30363d; border-radius: 12px; overflow: hidden;
  }
  .sp-stack-cell {
    background: #161b22; padding: 20px 16px;
    display: flex; flex-direction: column; align-items: center; gap: 8px;
    transition: background .2s; cursor: default;
  }
  .sp-stack-cell:hover { background: #21262d; }
  .sp-stack-icon { font-size: 1.6rem; }
  .sp-stack-name { font-size: .72rem; font-weight: 600; color: #8b949e; text-align: center; }
  .sp-stack-cat {
    font-size: .58rem; text-transform: uppercase; letter-spacing: .08em;
    color: #656d76; text-align: center;
  }

  /* ── CTA BANNER ── */
  .sp-cta-banner {
    background: #161b22; border: 1px solid #30363d; border-radius: 12px;
    padding: 48px 40px; display: flex;
    align-items: center; justify-content: space-between;
    gap: 32px; flex-wrap: wrap; position: relative; overflow: hidden;
  }
  .sp-cta-banner::before {
    content: ''; position: absolute; inset: 0;
    background: radial-gradient(ellipse 80% 80% at 0% 50%, rgba(88,166,255,.05) 0%, transparent 60%);
    pointer-events: none;
  }
  .sp-cta-text { position: relative; }
  .sp-cta-text h2 {
    font-size: 1.6rem; font-weight: 800; color: #e6edf3;
    letter-spacing: -.03em; margin-bottom: 8px;
  }
  .sp-cta-text p { font-size: .88rem; color: #8b949e; line-height: 1.6; }
  .sp-cta-actions { display: flex; gap: 12px; position: relative; flex-wrap: wrap; }

  @media(max-width: 860px) {
    .sp-hero, .sp-section { padding: 64px 20px; }
    .sp-svc { grid-template-columns: 1fr; }
    .sp-svc-num-col { border-right: none; border-bottom: 1px solid #30363d; padding: 16px 20px; flex-direction: row; justify-content: flex-start; }
    .sp-svc-meta { border-left: none; border-top: 1px solid #30363d; }
    .sp-process-grid { grid-template-columns: 1fr; }
    .sp-stack-grid { grid-template-columns: repeat(3, 1fr); }
    .sp-cta-banner { flex-direction: column; text-align: center; padding: 32px 24px; }
    .sp-cta-actions { justify-content: center; }
  }
  @media(max-width: 480px) {
    .sp-stack-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

const services = [
  {
    num: "01",
    icon: SparklesIcon,
    name: "AI Automation & AI Agents",
    desc: "Custom AI agents and automation workflows that integrate with your systems. From document processing to intelligent task automation — we build AI that works for your business.",
    tags: [
      "OpenAI",
      "Claude",
      "LangChain",
      "Automation",
      "Integration",
      "Custom Agents",
    ],
    timeline: "3–10 weeks",
    price: "From $8k",
    delivery: "Functional agents",
  },
  {
    num: "02",
    icon: SparklesIcon,
    name: "AI Chatbots & Conversational AI",
    desc: "Intelligent chatbots trained on your data. Whether customer support, internal knowledge assistants, or specialized domain experts — we build AI conversational interfaces that understand context.",
    tags: [
      "OpenAI",
      "LangChain",
      "Vector DB",
      "RAG",
      "Integration",
      "Fine-tuning",
    ],
    timeline: "2–8 weeks",
    price: "From $6k",
    delivery: "Live chatbot",
  },
  {
    num: "03",
    icon: GlobeAltIcon,
    name: "Web Application Development",
    desc: "We build fast, accessible, production-ready full-stack web applications. From complex SaaS platforms to internal tools — we architect for the long run, not just the deadline.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
    timeline: "6–16 weeks",
    price: "From $12k",
    delivery: "Weekly demos",
  },
  {
    num: "04",
    icon: DevicePhoneMobileIcon,
    name: "Mobile App Development",
    desc: "Cross-platform and native mobile apps that feel genuinely native, perform brilliantly on any device, and get shipped to the App Store and Play Store — end to end.",
    tags: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    timeline: "8–14 weeks",
    price: "From $15k",
    delivery: "TestFlight builds",
  },
  {
    num: "05",
    icon: PaintBrushIcon,
    name: "UI/UX Design",
    desc: "Research-driven product design. We run discovery workshops, create wireframes, design systems, and high-fidelity prototypes — all before a single line of code is written.",
    tags: ["Figma", "Framer", "User Research", "Prototyping", "Design Systems"],
    timeline: "2–6 weeks",
    price: "From $5k",
    delivery: "Interactive Figma",
  },
  {
    num: "06",
    icon: Cog6ToothIcon,
    name: "Backend & API Development",
    desc: "Robust, well-documented REST and GraphQL APIs. Microservice architectures, event-driven systems, and cloud infrastructure designed for reliability at any scale.",
    tags: ["Go", "Rust", "Node.js", "GraphQL", "gRPC", "Kafka", "Kubernetes"],
    timeline: "4–12 weeks",
    price: "From $10k",
    delivery: "API docs + tests",
  },
  {
    num: "07",
    icon: RocketLaunchIcon,
    name: "MVP Development",
    desc: "Validate your idea fast. We scope, design, and ship lean, polished MVPs in 4–8 weeks. Built to be extended — not thrown away. Our MVPs have raised seed rounds and found product-market fit.",
    tags: ["React", "Node.js", "Supabase", "Vercel", "Stripe", "Auth"],
    timeline: "4–8 weeks",
    price: "From $8k",
    delivery: "Live deployment",
  },
  {
    num: "08",
    icon: BuildingLibraryIcon,
    name: "System Architecture & Consulting",
    desc: "Struggling with a legacy system? Planning a migration? We design scalable architectures, review existing codebases, and give you a clear technical roadmap with no fluff.",
    tags: [
      "Architecture Review",
      "Cloud Migration",
      "Scalability",
      "DevOps",
      "CI/CD",
    ],
    timeline: "1–3 weeks",
    price: "From $3k",
    delivery: "Architecture docs",
  },
];

const process = [
  {
    num: "01",
    icon: MagnifyingGlassIcon,
    title: "Discovery Call",
    desc: "We dig into your goals, users, and constraints. 60 minutes — free, no commitment.",
  },
  {
    num: "02",
    icon: ClipboardDocumentIcon,
    title: "Scoped Proposal",
    desc: "Detailed project scope, timeline, milestones, and fixed price. No hourly guesswork.",
  },
  {
    num: "03",
    icon: SparklesIcon,
    title: "Sprint Delivery",
    desc: "Weekly demos, open roadmap, and direct Slack access to your team throughout.",
  },
  {
    num: "04",
    icon: RocketLaunchIcon,
    title: "Launch + Support",
    desc: "We handle deployment, go-live support, and a 30-day post-launch window.",
  },
  {
    num: "05",
    icon: ArrowTrendingUpIcon,
    title: "Scale Together",
    desc: "Ongoing retainers for continuous engineering — grow with us past your MVP.",
  },
  {
    num: "06",
    icon: HandRaisedIcon,
    title: "Long-term Partner",
    desc: "Many clients start with a project and evolve into a full engineering partnership.",
  },
];

const stack = [
  {
    icon: DiReact,
    name: "React",
    cat: "Frontend",
    isComponent: true,
    color: "#61DAFB",
  },
  {
    icon: SiTypescript,
    name: "TypeScript",
    cat: "Language",
    isComponent: true,
    color: "#3178C6",
  },
  {
    icon: DiGo,
    name: "Go",
    cat: "Backend",
    isComponent: true,
    color: "#00ADD8",
  },
  {
    icon: DiRust,
    name: "Rust",
    cat: "Backend",
    isComponent: true,
    color: "#CE422B",
  },
  {
    icon: DiPostgresql,
    name: "PostgreSQL",
    cat: "Database",
    isComponent: true,
    color: "#336791",
  },
  {
    icon: DiRedis,
    name: "Redis",
    cat: "Cache",
    isComponent: true,
    color: "#DC382D",
  },
  {
    icon: DiDocker,
    name: "Docker",
    cat: "DevOps",
    isComponent: true,
    color: "#2496ED",
  },
  {
    icon: SiKubernetes,
    name: "Kubernetes",
    cat: "DevOps",
    isComponent: true,
    color: "#326CE5",
  },
  {
    icon: SiAew,
    name: "AWS",
    cat: "Cloud",
    isComponent: true,
    color: "#FF9900",
  },
  {
    icon: SiVercel,
    name: "Vercel",
    cat: "Deploy",
    isComponent: true,
    color: "#000000",
  },
  {
    icon: SiFigma,
    name: "Figma",
    cat: "Design",
    isComponent: true,
    color: "#F24E1E",
  },
  {
    icon: DevicePhoneMobileIcon,
    name: "React Native",
    cat: "Mobile",
    isComponent: true,
    color: "#61DAFB",
  },
];

export function ServicesPage() {
  useReveal();

  return (
    <>
      <style>{STYLES}</style>
      <div className="sp-root">
        {/* ── HERO ── */}
        <section className="sp-hero">
          <div className="sp-hero-inner">
            <div className="sp-overline sp-reveal">Our Services</div>
            <h1 className="sp-hero-title sp-reveal">
              Everything You Need
              <br />
              to <span className="grad">Ship Great Software</span>
            </h1>
            <p className="sp-hero-sub sp-reveal">
              From a napkin sketch to a production-grade product — we cover
              design, engineering, infrastructure, and everything in between.
            </p>
            <div className="sp-hero-actions sp-reveal">
              <Link to="/#contact" className="sp-btn-green">
                Book a Free Discovery Call →
              </Link>
              <Link to="/projects" className="sp-btn-ghost">
                See Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* ── SERVICES DETAIL ── */}
        <section className="sp-section">
          <div className="sp-inner">
            <div className="sp-reveal">
              <div className="sp-overline">What We Build</div>
              <h2 className="sp-section-title">Eight Core Services</h2>
              <p className="sp-section-sub">
                Each service is a standalone offering — or combine them for
                end-to-end product delivery.
              </p>
            </div>

            <div className="sp-services-list">
              {services.map((s, i) => (
                <div
                  key={s.num}
                  className="sp-svc sp-reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="sp-svc-num-col">{s.num}</div>
                  <div className="sp-svc-body">
                    <span className="sp-svc-icon">
                      <s.icon className="w-6 h-6" />
                    </span>
                    <h3 className="sp-svc-name">{s.name}</h3>
                    <p className="sp-svc-desc">{s.desc}</p>
                    <div className="sp-svc-tags">
                      {s.tags.map((t) => (
                        <span key={t} className="sp-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="sp-svc-meta">
                    <div className="sp-meta-item">
                      <span className="sp-meta-label">Timeline</span>
                      <span className="sp-meta-val">{s.timeline}</span>
                    </div>
                    <div className="sp-meta-item">
                      <span className="sp-meta-label">Starting From</span>
                      <span className="sp-meta-val green">{s.price}</span>
                    </div>
                    <div className="sp-meta-item">
                      <span className="sp-meta-label">Delivery</span>
                      <span className="sp-meta-val">{s.delivery}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <section className="sp-section">
          <div className="sp-inner">
            <div className="sp-reveal">
              <div className="sp-overline">How It Works</div>
              <h2 className="sp-section-title">
                From First Call to Long-term Partner
              </h2>
              <p className="sp-section-sub">
                A clear, repeatable process with no surprises.
              </p>
            </div>
            <div className="sp-process-grid">
              {process.map((p, i) => (
                <div
                  key={p.num}
                  className="sp-process-card sp-reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="sp-process-num">{p.num}</span>
                  <span className="sp-process-icon">
                    <p.icon className="w-5 h-5" />
                  </span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="sp-section">
          <div className="sp-inner">
            <div className="sp-reveal">
              <div className="sp-overline">Technology</div>
              <h2 className="sp-section-title">Our Tech Stack</h2>
              <p className="sp-section-sub">
                We choose the right tool for the job — not the trendiest one.
                Everything we build on is battle-tested and production-proven.
              </p>
            </div>
            <div className="sp-stack-grid">
              {stack.map((s, i) => (
                <div
                  key={s.name}
                  className="sp-stack-cell sp-reveal"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="sp-stack-icon">
                    <s.icon className="w-7 h-7" style={{ color: s.color }} />
                  </span>
                  <span className="sp-stack-name">{s.name}</span>
                  <span className="sp-stack-cat">{s.cat}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="sp-section" style={{ borderBottom: "none" }}>
          <div className="sp-inner">
            <div className="sp-cta-banner sp-reveal">
              <div className="sp-cta-text">
                <h2>Ready to start building?</h2>
                <p>
                  Book a free 60-minute discovery call. No commitment, no fluff
                  — just clarity.
                </p>
              </div>
              <div className="sp-cta-actions">
                <Link to="/#contact" className="sp-btn-green">
                  Book a Free Call →
                </Link>
                <Link to="/projects" className="sp-btn-ghost">
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
