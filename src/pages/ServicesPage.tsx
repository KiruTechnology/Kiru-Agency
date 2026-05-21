/**
 * pages/ServicesPage.tsx
 *
 * Dedicated services page with services overview and process
 */

import { useEffect } from "react";
import "../styles/kiru-styles.css";

export function ServicesPage() {
  useEffect(() => {
    document.title = "Services - Kiru Tech";
  }, []);

  const services = [
    {
      title: "Custom Software Development",
      description:
        "From MVP to full-scale product. We design, build, and ship software that scales.",
      icon: "💻",
    },
    {
      title: "Product Design & UX",
      description:
        "Beautiful, intuitive interfaces that users love. We design for impact.",
      icon: "🎨",
    },
    {
      title: "Mobile App Development",
      description:
        "iOS and Android apps built with React Native and native technologies.",
      icon: "📱",
    },
    {
      title: "Cloud Architecture",
      description:
        "Scalable, secure infrastructure on AWS, GCP, or your platform of choice.",
      icon: "☁️",
    },
    {
      title: "DevOps & Infrastructure",
      description:
        "CI/CD pipelines, containerization, monitoring, and infrastructure automation.",
      icon: "⚙️",
    },
    {
      title: "Team Augmentation",
      description:
        "Experienced engineers who integrate seamlessly into your team.",
      icon: "👥",
    },
  ];

  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      {/* Hero section */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 40px 80px",
          textAlign: "center",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <div
            style={{
              fontSize: ".75rem",
              fontWeight: 700,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "var(--blue)",
              marginBottom: 16,
            }}
          >
            ✦ Our Services
          </div>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            We Build Software
            <br />
            <span style={{ color: "var(--blue)" }}>That Scales</span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            From initial concept to production-ready systems, we provide
            end-to-end product engineering services.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 32,
        }}
      >
        {services.map((s, i) => (
          <div
            key={i}
            style={{
              padding: 32,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              transition: "all .3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--surface-2)";
              e.currentTarget.style.borderColor = "var(--blue)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--surface)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: 16,
              }}
            >
              {s.icon}
            </div>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: 12,
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: ".9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              {s.description}
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "80px 40px",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: 24,
          }}
        >
          Ready to build something great?
        </h2>
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            marginBottom: 32,
          }}
        >
          Let&apos;s talk about your project and how we can help.
        </p>
        <a
          href="/#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "12px 32px",
            background: "var(--green)",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "var(--radius)",
            fontWeight: 600,
            transition: "background .2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--green-dim)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--green)")
          }
        >
          Start Your Project →
        </a>
      </section>
    </div>
  );
}
