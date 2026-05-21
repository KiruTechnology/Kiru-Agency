import {
  useEffect,
  useRef,
  useState,
  //   useCallback,
  type FormEvent,
  //   type ReactNode,
} from "react";
import "../styles/kiru-styles.css";
import {
  IconClock,
  IconEmail,
  IconLi,
  IconGh,
  IconPhone,
  IconX,
} from "./icons/ContactIcons";

/* SCROLL REVEAL HOOK */
function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" },
    );
    document
      .querySelectorAll(
        ".reveal-up,.reveal-left,.reveal-right,.reveal-scale,.reveal-fade",
      )
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* NAVBAR */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["Services", "Process", "Work", "Pricing", "Contact"];

  return (
    <>
      <nav className={`gh-nav${scrolled ? " scrolled" : ""}`}>
        <div className="gh-nav-inner">
          <a href="#" className="gh-logo">
            {/* <img src="/assets/kiru.png" alt="Kiru Tech" className="gh-logo-img" /> */}
            <span className="gh-logo-text">Kiru Tech</span>
          </a>
          <ul className="gh-nav-links">
            {links.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`}>{l}</a>
              </li>
            ))}
          </ul>
          <div className="gh-nav-right">
            <a href="#contact" className="btn-ghost">
              Sign in
            </a>
            <a href="#contact" className="btn-green">
              Start Project
            </a>
            <button
              className={`gh-burger${drawer ? " open" : ""}`}
              onClick={() => setDrawer((v) => !v)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
      <div className={`gh-drawer${drawer ? " open" : ""}`}>
        <ul>
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setDrawer(false)}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="drawer-cta"
              onClick={() => setDrawer(false)}
            >
              Start Project ↗
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

/* HERO */
function Hero() {
  const particles = [
    { size: 3, x: 15, y: 25, dur: 7, delay: 0 },
    { size: 4, x: 80, y: 15, dur: 9, delay: 1.5 },
    { size: 2, x: 60, y: 70, dur: 11, delay: 3 },
    { size: 5, x: 35, y: 55, dur: 8, delay: 0.5 },
    { size: 3, x: 90, y: 45, dur: 10, delay: 2 },
    { size: 2, x: 20, y: 80, dur: 13, delay: 4 },
    { size: 4, x: 70, y: 30, dur: 6, delay: 1 },
  ];

  const decorativeTexts = [
    { text: "AI Automation", x: 5, y: 15, delay: 0 },
    { text: "Web Development", x: 85, y: 25, delay: 1 },
    { text: "Scaling", x: 10, y: 70, delay: 2 },
    { text: "Machine Learning", x: 80, y: 75, delay: 0.5 },
    { text: "Cloud", x: 45, y: 10, delay: 1.5 },
    { text: "React", x: 15, y: 85, delay: 2.5 },
    { text: "TypeScript", x: 75, y: 50, delay: 1.2 },
  ];

  return (
    <section className="gh-hero" id="home">
      <div className="gh-hero-bg">
        {particles.map((p, i) => (
          <div
            key={i}
            className="gh-particle"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
              background:
                i % 3 === 0
                  ? "var(--blue)"
                  : i % 3 === 1
                    ? "var(--purple)"
                    : "var(--green)",
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
              opacity: 0.3,
            }}
          />
        ))}
        {decorativeTexts.map((d, i) => (
          <div
            key={`text-${i}`}
            className="gh-hero-decoration-text"
            style={{
              left: `${d.x}%`,
              top: `${d.y}%`,
              animationDelay: `${d.delay}s`,
            }}
          >
            {d.text}
          </div>
        ))}
      </div>

      <div className="gh-hero-inner">
        {/* Center content */}
        <div>
          <div className="gh-eyebrow reveal-fade">
            <div className="gh-eyebrow-dot" />
            Product Engineering Agency
          </div>

          <h1 className="gh-hero-title reveal-up">
            We Build
            <br />
            <span className="gradient-word">Software</span>
            <br />
            That Scales.
          </h1>

          <p
            className="gh-hero-sub reveal-up"
            style={{ transitionDelay: "80ms" }}
          >
            From idea to product — we design, develop, and launch high-quality
            software built for growth.
          </p>

          <div
            className="gh-hero-actions reveal-up"
            style={{ transitionDelay: "160ms" }}
          >
            <a href="#contact" className="btn-green lg">
              ✦ Start Your Project
            </a>
            <a href="#work" className="btn-ghost lg">
              View Our Work →
            </a>
          </div>

          <div
            className="gh-hero-social-proof reveal-fade"
            style={{ transitionDelay: "240ms" }}
          >
            <div className="gh-avatars">
              {["👤", "👤", "👤", "👤"].map((a, i) => (
                <span key={i}>{a}</span>
              ))}
            </div>
            <span>Trusted by founders &amp; engineering teams globally</span>
          </div>
        </div>

        {/* Right — Three.js canvas
        <div className="reveal-scale" style={{ transitionDelay: "120ms" }}>
          <div className="gh-hero-canvas-wrap">
            <canvas id="heroCanvas" className="gh-hero-canvas" />
            <div className="gh-hero-3d-labels" id="hero3dLabels" />
          </div>
        </div> */}
      </div>

      <div className="gh-hero-grid-line" />
    </section>
  );
}

/* STATS STRIP */
function StatsStrip() {
  const stats = [
    { num: "10+", label: "Products Built" },
    { num: "⚡ Fast", label: "Delivery Cycles" },
    { num: "∞", label: "Scalable Architectures" },
    { num: "99%", label: "Client Satisfaction" },
  ];
  return (
    <div className="gh-stats">
      <div className="gh-stats-inner stagger">
        {stats.map((s) => (
          <div className="gh-stat-cell reveal-up" key={s.label}>
            <div className="gh-stat-num">{s.num}</div>
            <div className="gh-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* FEATURES — bento grid */
function Features() {
  const feats = [
    {
      icon: "⚡",
      title: "Fast Iteration Cycles",
      body: "We ship weekly. No long sprints, no waiting — continuous delivery from day one.",
      span: false,
    },
    {
      icon: "🧠",
      title: "Product-First Thinking",
      body: "We think like founders. Every decision is weighed against user value and business impact.",
      span: false,
    },
    {
      icon: "🔒",
      title: "Secure & Scalable",
      body: "Architecture built to handle 10 users or 10 million — without a painful rewrite.",
      span: true,
    },
    {
      icon: "🎨",
      title: "Clean UI/UX Design",
      body: "Interfaces your users will love, built with precision and tested with real feedback.",
      span: false,
    },
    {
      icon: "🤝",
      title: "Transparent Communication",
      body: "Daily updates, open roadmaps, and a direct line to your engineering team — always.",
      span: false,
    },
  ];
  return (
    <section className="gh-section gh-features" id="features">
      <div className="gh-inner">
        <div className="reveal-up">
          <div className="gh-overline">Why Kiru Tech</div>
          <h2 className="gh-section-title">
            Built Different.
            <br />
            By Design.
          </h2>
        </div>

        <div className="gh-bento stagger">
          {feats.map((f) => (
            <div
              key={f.title}
              className={`gh-bento-card reveal-up${f.span ? " span-2" : ""}`}
            >
              <span className="gh-bento-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
          {/* CTA card */}
          <div className="gh-bento-card gh-bento-cta reveal-scale">
            <h3>Ready to build?</h3>
            <p
              style={{
                fontSize: ".85rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
              }}
            >
              Let's turn your idea into production-grade software.
            </p>
            <a href="#contact" className="btn-green" style={{ marginTop: 8 }}>
              Let's Build Yours →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Services */
function Services() {
  const services = [
    {
      num: "01",
      title: "Web Application Development",
      body: "Full-stack web apps — fast, accessible, and production-ready from day one.",
    },
    {
      num: "02",
      title: "Mobile App Development",
      body: "Cross-platform or native mobile experiences that delight users on any device.",
    },
    {
      num: "03",
      title: "UI/UX Design",
      body: "Research-driven design systems and interfaces that convert and retain users.",
    },
    {
      num: "04",
      title: "Backend & APIs",
      body: "Robust, documented APIs and server infrastructure built for reliability at scale.",
    },
    {
      num: "05",
      title: "MVP Development",
      body: "Validate fast. We scope and deliver lean MVPs in 4–8 weeks — no fluff.",
    },
    {
      num: "06",
      title: "System Architecture",
      body: "Microservices, cloud infra, data pipelines — designed to grow with you.",
    },
  ];
  return (
    <section className="gh-section gh-services" id="services">
      <div className="gh-inner">
        <div className="gh-services-header">
          <div className="reveal-left">
            <div className="gh-overline">What We Do</div>
            <h2 className="gh-section-title">
              Services Built
              <br />
              For Growth
            </h2>
          </div>
          <a href="#contact" className="btn-ghost reveal-right">
            EXPLORE SERVICES →
          </a>
        </div>

        <div className="gh-services-grid stagger">
          {services.map((s) => (
            <div className="gh-svc-card reveal-up" key={s.num}>
              <span className="gh-svc-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PROCESS */
function Process() {
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

/* WORK */
function Work() {
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

/* TESTIMONIALS */
function Testimonials() {
  const [idx, setIdx] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const VISIBLE = 2;

  const testi = [
    {
      initials: "AO",
      bg: "#1a3a5c",
      name: "Amara Osei",
      role: "CEO, TradeLink Africa",
      body: "Kiru Tech didn't just write code — they thought about our product like co-founders. We launched in 8 weeks and our users love it.",
    },
    {
      initials: "JM",
      bg: "#2d1b4e",
      name: "James Muriuki",
      role: "CTO, PayEase Kenya",
      body: "The most transparent engineering team I've worked with. Daily updates, zero surprises, and the architecture they built scales beautifully.",
    },
    {
      initials: "SN",
      bg: "#0f2a1a",
      name: "Sofia Ndungu",
      role: "Founder, GreenStack Labs",
      body: "We came with a napkin sketch. Kiru Tech came back with a fully designed MVP that raised our seed round. Unreal team.",
    },
    {
      initials: "DK",
      bg: "#3a1a1a",
      name: "Daniel Kamau",
      role: "CTO, Lipa Later",
      body: "From day one they felt like part of our team. The quality of code, the communication, the speed — everything exceeded our expectations.",
    },
    {
      initials: "FO",
      bg: "#1a3a2c",
      name: "Fatima Omar",
      role: "CEO, Savannah Pay",
      body: "We'd tried two other agencies before Kiru Tech. The difference in product thinking and delivery speed was night and day.",
    },
  ];

  const max = testi.length - VISIBLE;
  const slide = (dir: number) =>
    setIdx((i) => Math.min(max, Math.max(0, i + dir)));

  useEffect(() => {
    if (!trackRef.current) return;
    const cards = trackRef.current.querySelectorAll(".gh-testi-card");
    const w = cards[0] ? (cards[0] as HTMLElement).offsetWidth + 16 : 0;
    trackRef.current.style.transform = `translateX(-${idx * w}px)`;
  }, [idx]);

  return (
    <section className="gh-section gh-testi" id="testimonials">
      <div className="gh-inner">
        <div className="gh-testi-header">
          <div className="reveal-left">
            <div className="gh-overline">Client Stories</div>
            <h2 className="gh-section-title">
              What Our <span style={{ color: "var(--blue)" }}>Clients</span> Say
            </h2>
            <p
              style={{
                fontSize: ".9rem",
                color: "var(--text-muted)",
                marginTop: 8,
              }}
            >
              Real partnerships. Real results. Real impact.
            </p>
          </div>
          <div className="gh-testi-nav reveal-right">
            <button
              className="gh-testi-btn"
              onClick={() => slide(-1)}
              disabled={idx === 0}
            >
              ←
            </button>
            <button
              className="gh-testi-btn"
              onClick={() => slide(1)}
              disabled={idx >= max}
            >
              →
            </button>
          </div>
        </div>

        <div className="gh-testi-track-wrap">
          <div className="gh-testi-track" ref={trackRef}>
            {testi.map((t) => (
              <div className="gh-testi-card reveal-scale" key={t.name}>
                <div className="gh-testi-quote">"</div>
                <p className="gh-testi-body">{t.body}</p>
                <div className="gh-testi-author">
                  <div className="gh-testi-avatar" style={{ background: t.bg }}>
                    {t.initials}
                  </div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gh-testi-cta reveal-up">
          <div className="gh-testi-cta-text">
            <span className="gh-testi-cta-icon">🎯</span>
            <div className="gh-testi-cta-copy">
              <h4>Ready to be our next success story?</h4>
              <p>Let's build something exceptional together.</p>
            </div>
          </div>
          <a href="#contact" className="btn-green">
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}

/* PRICING */
function Pricing() {
  const plans = [
    {
      tier: "Starter",
      tag: "MVP",
      price: "$8k",
      featured: false,
      features: [
        "Discovery & Planning",
        "UI/UX Design",
        "Core Feature Set",
        "4–8 week delivery",
        "30-day support",
      ],
      crossed: ["Custom integrations"],
      cta: "Get a Quote",
      href: "#contact",
    },
    {
      tier: "Growth",
      tag: "Full Product",
      price: "$22k",
      featured: true,
      badge: "Most Popular",
      features: [
        "Everything in Starter",
        "Custom integrations",
        "Mobile + Web",
        "3-month delivery",
        "90-day support",
        "Analytics & monitoring",
      ],
      crossed: [],
      cta: "Get a Quote",
      href: "#contact",
    },
    {
      tier: "Custom",
      tag: "Enterprise",
      price: "Let's talk",
      featured: false,
      features: [
        "Full architecture design",
        "Dedicated team",
        "Long-term partnership",
        "SLA & compliance",
        "Ongoing retainer",
        "Priority support",
      ],
      crossed: [],
      cta: "Book a Call",
      href: "#contact",
    },
  ];

  return (
    <section className="gh-section gh-pricing" id="pricing">
      <div className="gh-inner">
        <div className="reveal-up">
          <div className="gh-overline">Investment</div>
          <h2 className="gh-section-title">
            Clear Pricing.
            <br />
            No Surprises.
          </h2>
        </div>

        <div className="gh-pricing-grid stagger">
          {plans.map((p) => (
            <div
              key={p.tier}
              className={`gh-pricing-card reveal-up${p.featured ? " featured" : ""}`}
            >
              {p.badge && <div className="gh-pricing-badge">{p.badge}</div>}
              <div className="gh-pricing-tier">{p.tier}</div>
              <div className="gh-pricing-tag">{p.tag}</div>
              <div className="gh-pricing-amount">
                <strong>{p.price}</strong>
                {p.price !== "Let's talk" && <span>starting from</span>}
              </div>
              <ul className="gh-pricing-list">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
                {p.crossed.map((f) => (
                  <li key={f} className="crossed">
                    ✗ {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className={p.featured ? "btn-green" : "btn-ghost"}
                style={{ justifyContent: "center" }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    {
      q: "How long does a project take?",
      a: "MVPs typically take 4–8 weeks. Full products range from 2–4 months depending on scope. We'll give you a precise timeline after the discovery call.",
    },
    {
      q: "How much does it cost?",
      a: "Projects start at $8k for lean MVPs and scale based on complexity. We provide detailed fixed-price quotes after scoping — no hourly billing ambiguity.",
    },
    {
      q: "Do you offer post-launch support?",
      a: "Yes — every project includes a 30-day post-launch window. We also offer ongoing retainer packages for teams who need continuous engineering capacity.",
    },
    {
      q: "Can you scale with us long-term?",
      a: "Absolutely. Several of our clients started with an MVP and we've grown with them through Series A and beyond. We're built to be a long-term engineering partner, not just a vendor.",
    },
    {
      q: "What technologies do you work with?",
      a: "We specialize in modern web and mobile stacks including React, TypeScript, Node.js, React Native, and cloud platforms like AWS and Google Cloud. We choose the best tool for your specific needs.",
    },
    {
      q: "Do you handle design as well?",
      a: "Yes! Our team includes experienced designers. We can handle the entire product journey from concept and design through development and launch.",
    },
    {
      q: "How do you handle communication during development?",
      a: "We maintain regular communication through weekly standups, sprint reviews, and direct Slack channels. You'll always know what's happening with your product.",
    },
    {
      q: "What if I'm not happy with the work?",
      a: "We focus on delivering exceptional results. If there are issues, we work closely with you to fix them during the project. Your satisfaction is our priority.",
    },
  ];

  return (
    <section className="gh-section gh-faq" id="faq">
      <div className="gh-inner">
        <div className="gh-faq-inner">
          <div className="reveal-left">
            <div className="gh-overline">Questions</div>
            <h2 className="gh-section-title">
              Answers You
              <br />
              <span style={{ color: "var(--blue)" }}>Need</span>
            </h2>
            <p className="gh-faq-side-note">
              Can't find what you're looking for?{" "}
              <a href="#contact">Let's talk →</a>
            </p>
          </div>

          <div className="gh-faq-list">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className={`gh-faq-item reveal-up${open === i ? " open" : ""}`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  className="gh-faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {f.q}
                  <span className="gh-faq-arrow">↓</span>
                </button>
                <div className="gh-faq-a">
                  <p>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Contact */
function Contact() {
  const [done, setDone] = useState(false);
  return (
    <section className="gh-section gh-contact" id="contact">
      <div className="gh-inner">
        <div className="gh-contact-inner">
          {/* Panel */}
          <div className="gh-contact-panel reveal-left">
            <div className="gh-contact-panel-inner">
              <div className="gh-contact-kicker">
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--green)",
                    boxShadow: "0 0 6px var(--green)",
                  }}
                />
                Let's Build
              </div>
              <h2 className="gh-contact-title">
                Start Your
                <br />
                Project <span>Today</span>
              </h2>
              <p className="gh-contact-sub">
                Share your ideas and goals. We'll help turn them into impactful
                digital solutions.
              </p>

              <div className="gh-info-list">
                {[
                  {
                    icon: <IconEmail />,
                    label: "Email",
                    val: (
                      <a href="mailto:hello@kirutech.io">hello@kirutech.io</a>
                    ),
                  },
                  {
                    icon: <IconPhone />,
                    label: "Phone",
                    val: <a href="tel:+254700000000">+254 700 000 000</a>,
                  },
                  {
                    icon: <IconClock />,
                    label: "Response",
                    val: <span>Within 24 hours</span>,
                  },
                ].map((item) => (
                  <div className="gh-info-item" key={item.label}>
                    <div className="gh-info-icon">{item.icon}</div>
                    <div>
                      <div className="gh-info-label">{item.label}</div>
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="gh-contact-socials">
                {[<IconX />, <IconLi />, <IconGh />].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="gh-social-btn"
                    aria-label={["X", "LinkedIn", "GitHub"][i]}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="gh-form-card reveal-right">
            {done ? (
              <div className="gh-form-success">
                <span className="gh-success-icon">✅</span>
                <h3>We received your message!</h3>
                <p>We'll reach out within 24 hours to confirm your call.</p>
              </div>
            ) : (
              <form
                className="gh-form"
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <div className="gh-form-row">
                  <div className="gh-form-group">
                    <label className="gh-form-label">Your Name</label>
                    <input
                      className="gh-input"
                      type="text"
                      placeholder="Jane Njeri"
                      required
                    />
                  </div>
                  <div className="gh-form-group">
                    <label className="gh-form-label">Email Address</label>
                    <input
                      className="gh-input"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="gh-form-group">
                  <label className="gh-form-label">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    className="gh-input"
                    rows={4}
                    placeholder="Tell us what you're building — goals, timeline, budget..."
                    required
                  />
                </div>
                <div className="gh-form-group">
                  <label className="gh-form-label">
                    When Should We Reach You?
                  </label>
                  <div className="gh-time-slots">
                    {[
                      {
                        v: "morning",
                        icon: "☀",
                        s: "Morning",
                        sub: "9AM – 12PM",
                      },
                      {
                        v: "afternoon",
                        icon: "◐",
                        s: "Afternoon",
                        sub: "12PM – 5PM",
                      },
                      {
                        v: "evening",
                        icon: "☾",
                        s: "Evening",
                        sub: "5PM – 8PM",
                      },
                    ].map((slot) => (
                      <label className="gh-slot" key={slot.v}>
                        <input type="radio" name="time" value={slot.v} />
                        <div className="gh-slot-icon">{slot.icon}</div>
                        <strong>{slot.s}</strong>
                        <span>{slot.sub}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="gh-submit-btn">
                  <span className="gh-submit-icon">📅</span> Book a Call →
                </button>
                <div className="gh-form-trust">
                  <span>We respect your time. No spam, ever.</span>
                  <span>We'll respond within 24 hours.</span>
                </div>
              </form>
            )}
            <div className="gh-form-trust-bottom">
              <div className="gh-trust-avatars">
                {["👤", "👤", "👤", "👤"].map((a, i) => (
                  <span key={i}>{a}</span>
                ))}
              </div>
              <div className="gh-trust-meta">
                <span className="gh-trust-text">
                  Trusted by startups &amp; growing teams
                </span>
                <div className="gh-trust-logos">
                  <span>stripe</span>
                  <span>vercel</span>
                  <span>aws</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TEAM */
function Team() {
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

/* FLOATING CTA */
function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contactEl = document.getElementById("contact");
    const scrollObs = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", scrollObs, { passive: true });
    scrollObs();

    const visObs = new IntersectionObserver(
      ([e]) => setHidden(e.isIntersecting),
      { threshold: 0.1 },
    );
    if (contactEl) visObs.observe(contactEl);
    return () => {
      window.removeEventListener("scroll", scrollObs);
      visObs.disconnect();
    };
  }, []);

  return (
    <div className={`gh-float${visible && !hidden ? " visible" : " hidden"}`}>
      <a href="#contact" className="gh-float-btn">
        <div className="gh-float-dot" />
        Start Your Project
      </a>
    </div>
  );
}

/* FINAL */
export default function KiruTech() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsStrip />
        <Features />
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <Team />
      </main>
      <FloatingCTA />
    </>
  );
}
