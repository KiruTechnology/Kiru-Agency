/**
 * pages/ProjectsPage.tsx
 *
 * Projects and case studies page
 */

import { useEffect } from "react";
import "../styles/kiru-styles.css";

export function ProjectsPage() {
  useEffect(() => {
    document.title = "Projects - Kiru Tech";
  }, []);

  const projects = [
    {
      name: "FlowBoard Analytics",
      description: "Real-time analytics dashboard for SaaS companies",
      tags: ["React", "Node.js", "PostgreSQL", "AWS"],
      image: "📊",
    },
    {
      name: "Pulse Health",
      description: "Mobile health tracking app with AI-powered insights",
      tags: ["React Native", "TypeScript", "Firebase", "ML"],
      image: "💚",
    },
    {
      name: "NexaOS Workspace",
      description: "Collaborative workspace platform for distributed teams",
      tags: ["React", "Go", "WebSocket", "Kubernetes"],
      image: "🚀",
    },
    {
      name: "DataVault Pro",
      description: "Secure data storage and sharing platform",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Docker"],
      image: "🔐",
    },
    {
      name: "MarketFlow",
      description: "E-commerce optimization and inventory management",
      tags: ["React", "Next.js", "Stripe API", "AWS"],
      image: "📈",
    },
    {
      name: "DevStudio IDE",
      description: "Browser-based IDE for real-time code collaboration",
      tags: ["React", "Monaco Editor", "Node.js", "WebRTC"],
      image: "💻",
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
            ✦ Portfolio
          </div>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            Projects We've
            <br />
            <span style={{ color: "var(--blue)" }}>Shipped</span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
            }}
          >
            From startups to enterprises, we&apos;ve delivered high-quality
            software solutions.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section
        style={{
          maxWidth: "var(--max)",
          margin: "0 auto",
          padding: "80px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 32,
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              overflow: "hidden",
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              background: "var(--surface)",
              transition: "all .3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--blue)";
              e.currentTarget.style.background = "var(--surface-2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.background = "var(--surface)";
            }}
          >
            {/* Image placeholder */}
            <div
              style={{
                height: 200,
                background: `linear-gradient(135deg, ${
                  i % 3 === 0
                    ? "var(--blue)"
                    : i % 3 === 1
                      ? "var(--purple)"
                      : "var(--green)"
                }33, ${i % 3 === 0 ? "var(--purple)" : i % 3 === 1 ? "var(--green)" : "var(--blue)"}33)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
              }}
            >
              {p.image}
            </div>

            {/* Content */}
            <div style={{ padding: 24 }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: 8,
                }}
              >
                {p.name}
              </h3>
              <p
                style={{
                  fontSize: ".9rem",
                  color: "var(--text-secondary)",
                  marginBottom: 16,
                  lineHeight: 1.5,
                }}
              >
                {p.description}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {p.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: ".75rem",
                      padding: "4px 10px",
                      background: "var(--surface-2)",
                      border: "1px solid var(--border)",
                      borderRadius: 4,
                      color: "var(--text-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
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
          Let&apos;s discuss your next project
        </h2>
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
          Get in Touch →
        </a>
      </section>
    </div>
  );
}
