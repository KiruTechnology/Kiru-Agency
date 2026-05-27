import "../styles/projectPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";

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

type Category = "All" | "SaaS" | "Mobile" | "Enterprise" | "MVP" | "Portfolio";
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
