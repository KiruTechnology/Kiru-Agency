/**
 * layouts/RootLayout.tsx
 *
 * Wraps all public-facing pages (Home, Services, Projects, Terms, Privacy)
 * with the shared Navbar and Footer from KiruTech.tsx.
 *
 * Auth pages (Login, Signup) are EXCLUDED — they render standalone.
 */

import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

/* ── inline SVG icons ── */
const IconX = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.731-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const IconLi = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconGh = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

/* ── Navbar ── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawer, setDrawer] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [
    { label: "Services", to: "/services" },
    { label: "Projects", to: "/projects" },
    { label: "Pricing", to: "/#pricing" },
    { label: "Contact", to: "/#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: 64,
          background: scrolled ? "rgba(13,17,23,.97)" : "rgba(13,17,23,.85)",
          borderBottom: "1px solid #30363d",
          backdropFilter: "blur(16px) saturate(180%)",
          transition: "background .3s, box-shadow .3s",
          boxShadow: scrolled
            ? "0 1px 0 #30363d, 0 4px 24px rgba(0,0,0,.4)"
            : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            height: "100%",
            padding: "0 24px",
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            {/* <img src="/assets/kiru.png" alt="Kiru Tech" style={{ height: 32 }} /> */}
            <span
              style={{
                fontFamily: "var(--font)",
                fontSize: ".9rem",
                fontWeight: 800,
                color: "#e6edf3",
                letterSpacing: "-.01em",
              }}
            >
              Kiru Tech
            </span>
          </Link>

          {/* Desktop links */}
          <ul
            style={{ listStyle: "none", display: "flex", gap: 4, flex: 1 }}
            className="nav-desktop-links"
          >
            {navLinks.map((l) => (
              <li key={l.label}>
                <NavLink
                  to={l.to}
                  style={({ isActive }) => ({
                    display: "block",
                    padding: "6px 12px",
                    fontSize: ".82rem",
                    fontWeight: 500,
                    color: isActive ? "#e6edf3" : "#8b949e",
                    textDecoration: "none",
                    borderRadius: 6,
                    background: isActive ? "#21262d" : "transparent",
                    transition: "color .15s, background .15s",
                  })}
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginLeft: "auto",
            }}
          >
            <Link
              to="/login"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 18px",
                height: 36,
                background: "transparent",
                border: "1px solid #30363d",
                borderRadius: 6,
                color: "#e6edf3",
                fontFamily: "var(--font)",
                fontSize: ".82rem",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background .15s, transform .1s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#21262d")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 18px",
                height: 36,
                background: "#238636",
                border: "1px solid rgba(240,246,252,.1)",
                borderRadius: 6,
                color: "#fff",
                fontFamily: "var(--font)",
                fontSize: ".82rem",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background .15s, transform .1s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#2ea043")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#238636")
              }
            >
              Get Started
            </Link>

            {/* Burger */}
            <button
              onClick={() => setDrawer((v) => !v)}
              aria-label="Menu"
              style={{
                display: "none",
                flexDirection: "column",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 4,
              }}
              className="nav-burger-btn"
            >
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: "#e6edf3",
                  borderRadius: 1,
                  transition: "all .25s",
                  transform: drawer
                    ? "translateY(6.5px) rotate(45deg)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: "#e6edf3",
                  borderRadius: 1,
                  opacity: drawer ? 0 : 1,
                  transition: "opacity .25s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 22,
                  height: 1.5,
                  background: "#e6edf3",
                  borderRadius: 1,
                  transition: "all .25s",
                  transform: drawer
                    ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: 280,
          background: "#161b22",
          borderLeft: "1px solid #30363d",
          zIndex: 190,
          padding: "72px 24px 24px",
          transform: drawer ? "translateX(0)" : "translateX(100%)",
          transition: "transform .3s cubic-bezier(.4,0,.2,1)",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                onClick={() => setDrawer(false)}
                style={{
                  display: "block",
                  padding: "10px 12px",
                  fontSize: ".9rem",
                  fontWeight: 500,
                  color: "#8b949e",
                  textDecoration: "none",
                  borderRadius: 6,
                  borderBottom: "1px solid #21262d",
                  transition: "color .15s",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li style={{ marginTop: 12 }}>
            <Link
              to="/signup"
              onClick={() => setDrawer(false)}
              style={{
                display: "block",
                padding: "10px 12px",
                fontSize: ".9rem",
                fontWeight: 600,
                color: "#3fb950",
                textDecoration: "none",
              }}
            >
              Get Started ↗
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

/* ── Footer ── */
function Footer() {
  const cols = [
    {
      head: "Company",
      links: [
        { label: "Services", to: "/services" },
        { label: "Projects", to: "/projects" },
        { label: "Pricing", to: "/#pricing" },
        { label: "Contact", to: "/#contact" },
      ],
    },
    {
      head: "Legal",
      links: [
        { label: "Terms of Service", to: "/terms" },
        { label: "Privacy Policy", to: "/privacy" },
      ],
    },
    {
      head: "Get Started",
      links: [
        { label: "Login", to: "/login" },
        { label: "Sign Up", to: "/signup" },
      ],
    },
  ];

  return (
    <footer
      style={{
        background: "#010409",
        borderTop: "1px solid #30363d",
        padding: "48px 40px 32px",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr repeat(3, 1fr)",
            gap: 48,
            paddingBottom: 40,
            borderBottom: "1px solid #30363d",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font)",
                  fontSize: ".9rem",
                  fontWeight: 800,
                  color: "#e6edf3",
                }}
              >
                Kiru Tech
              </span>
            </Link>
            <p
              style={{
                fontSize: ".82rem",
                color: "#656d76",
                lineHeight: 1.7,
                maxWidth: 220,
              }}
            >
              A product engineering partner that builds scalable software
              systems.
            </p>
            <div style={{ display: "flex", gap: 8 }}>
              {[<IconX />, <IconLi />, <IconGh />].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 6,
                    border: "1px solid #30363d",
                    background: "#161b22",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#656d76",
                    textDecoration: "none",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#e6edf3";
                    e.currentTarget.style.borderColor = "#8b949e";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#656d76";
                    e.currentTarget.style.borderColor = "#30363d";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div
              key={col.head}
              style={{ display: "flex", flexDirection: "column", gap: 10 }}
            >
              <p
                style={{
                  fontSize: ".72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                  color: "#8b949e",
                  marginBottom: 4,
                }}
              >
                {col.head}
              </p>
              {col.links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  style={{
                    fontSize: ".82rem",
                    color: "#656d76",
                    textDecoration: "none",
                    transition: "color .15s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#e6edf3")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#656d76")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
            gap: 16,
            flexWrap: "wrap",
            fontSize: ".72rem",
            color: "#656d76",
          }}
        >
          <span>
            © {new Date().getFullYear()} Kiru Tech. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 16 }}>
            <Link
              to="/terms"
              style={{ color: "#656d76", textDecoration: "none" }}
            >
              Terms
            </Link>
            <Link
              to="/privacy"
              style={{ color: "#656d76", textDecoration: "none" }}
            >
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Root Layout ── */
export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}
