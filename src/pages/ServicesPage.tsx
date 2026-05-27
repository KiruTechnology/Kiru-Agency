import "../styles/servicePage.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { stack, process, services } from "../data";
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
export function ServicesPage() {
  useReveal();

  return (
    <>
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
