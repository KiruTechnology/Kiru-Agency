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

/**
 * pages/NotFoundPage.tsx
 * Rendered standalone (outside RootLayout so it has its own minimal chrome)
 */
// import { Link } from "react-router-dom";

// const STYLES = `
//   @import url('https://fonts.googleapis.com/css2?family=Mona+Sans:wght@400;500;600;700;800;900&display=swap');
//   .nf-root {
//     min-height: 100vh; background: #0d1117; color: #e6edf3;
//     font-family: 'Mona Sans', -apple-system, sans-serif;
//     display: flex; flex-direction: column; align-items: center;
//     justify-content: center; text-align: center; padding: 40px 20px;
//     position: relative; overflow: hidden;
//   }
//   .nf-root::before {
//     content: ''; position: fixed; inset: 0; pointer-events: none;
//     background: radial-gradient(ellipse 70% 60% at 50% 50%, rgba(88,166,255,.06) 0%, transparent 70%);
//   }
//   .nf-root::after {
//     content: ''; position: fixed; inset: 0; pointer-events: none;
//     background-image: radial-gradient(rgba(255,255,255,.02) 1px, transparent 1px);
//     background-size: 28px 28px;
//   }
//   .nf-code {
//     font-size: clamp(5rem, 15vw, 10rem); font-weight: 900;
//     letter-spacing: -.06em; line-height: 1;
//     background: linear-gradient(135deg, #30363d 0%, #21262d 100%);
//     -webkit-background-clip: text; -webkit-text-fill-color: transparent;
//     background-clip: text; margin-bottom: 16px; position: relative; z-index: 1;
//     user-select: none;
//   }
//   .nf-title {
//     font-size: 1.4rem; font-weight: 800; color: #e6edf3;
//     letter-spacing: -.03em; margin-bottom: 12px; position: relative; z-index: 1;
//   }
//   .nf-sub {
//     font-size: .9rem; color: #8b949e; line-height: 1.7;
//     max-width: 380px; margin: 0 auto 32px; position: relative; z-index: 1;
//   }
//   .nf-actions { display: flex; gap: 12px; flex-wrap: wrap; justify-content: center; position: relative; z-index: 1; }
//   .nf-btn-green {
//     display: inline-flex; align-items: center; gap: 8px;
//     padding: 11px 24px; background: #238636;
//     border: 1px solid rgba(240,246,252,.1); border-radius: 6px;
//     color: #fff; font-family: inherit; font-size: .88rem; font-weight: 700;
//     text-decoration: none; transition: background .15s, transform .1s;
//   }
//   .nf-btn-green:hover { background: #2ea043; transform: translateY(-1px); }
//   .nf-btn-ghost {
//     display: inline-flex; align-items: center; gap: 8px;
//     padding: 11px 24px; background: transparent;
//     border: 1px solid #30363d; border-radius: 6px;
//     color: #e6edf3; font-family: inherit; font-size: .88rem; font-weight: 600;
//     text-decoration: none; transition: background .15s, border-color .15s;
//   }
//   .nf-btn-ghost:hover { background: #21262d; border-color: #8b949e; }
//   .nf-mono {
//     font-family: 'SFMono-Regular', Consolas, monospace;
//     font-size: .72rem; color: #656d76; margin-top: 32px;
//     position: relative; z-index: 1;
//     background: #161b22; border: 1px solid #30363d;
//     border-radius: 6px; padding: 8px 16px; display: inline-block;
//   }
//   @keyframes nf-in {
//     from { opacity:0; transform: translateY(20px); }
//     to   { opacity:1; transform: translateY(0); }
//   }
//   .nf-code  { animation: nf-in .5s cubic-bezier(.16,1,.3,1) both; }
//   .nf-title { animation: nf-in .5s cubic-bezier(.16,1,.3,1) .1s both; }
//   .nf-sub   { animation: nf-in .5s cubic-bezier(.16,1,.3,1) .18s both; }
//   .nf-actions { animation: nf-in .5s cubic-bezier(.16,1,.3,1) .26s both; }
//   .nf-mono  { animation: nf-in .5s cubic-bezier(.16,1,.3,1) .34s both; }
// `;

// export function NotFoundPage() {
//   return (
//     <>
//       <style>{STYLES}</style>
//       <div className="nf-root">
//         <div className="nf-code">404</div>
//         <h1 className="nf-title">Page not found</h1>
//         <p className="nf-sub">
//           This page doesn't exist or has been moved. Let's get you back on
//           track.
//         </p>
//         <div className="nf-actions">
//           <Link to="/" className="nf-btn-green">
//             ← Back to Home
//           </Link>
//           <Link to="/#contact" className="nf-btn-ghost">
//             Contact Us
//           </Link>
//         </div>
//         <div className="nf-mono">GET /this-page → 404 Not Found</div>
//       </div>
//     </>
//   );
// }
