/**
 * pages/NotFoundPage.tsx
 *
 * 404 Not Found page
 */

import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/kiru-styles.css";

export function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found - Kiru Tech";
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: 600 }}>
        {/* 404 */}
        <div
          style={{
            fontSize: "8rem",
            fontWeight: 900,
            color: "var(--blue)",
            lineHeight: 1,
            marginBottom: 20,
            opacity: 0.8,
          }}
        >
          404
        </div>

        {/* Heading */}
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            marginBottom: 12,
          }}
        >
          Page not found
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            marginBottom: 32,
            lineHeight: 1.6,
          }}
        >
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
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
            Back to Home
          </Link>
          <Link
            to="/services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "12px 32px",
              background: "var(--surface)",
              color: "var(--text-primary)",
              border: "1px solid var(--border)",
              textDecoration: "none",
              borderRadius: "var(--radius)",
              fontWeight: 600,
              transition: "all .2s",
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
            Explore Services
          </Link>
        </div>

        {/* Links grid */}
        <div
          style={{
            marginTop: 60,
            paddingTop: 40,
            borderTop: "1px solid var(--border)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 20,
            fontSize: ".9rem",
          }}
        >
          <Link to="/" style={{ color: "var(--blue)", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            to="/services"
            style={{ color: "var(--blue)", textDecoration: "none" }}
          >
            Services
          </Link>
          <Link
            to="/projects"
            style={{ color: "var(--blue)", textDecoration: "none" }}
          >
            Projects
          </Link>
          <Link
            to="/#contact"
            style={{ color: "var(--blue)", textDecoration: "none" }}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
