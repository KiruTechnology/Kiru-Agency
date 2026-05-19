import { useEffect } from "react";
import "../styles/kiru-styles.css";

export default function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service - Kiru Tech";
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        body { font-family: var(--font); background: var(--bg); color: var(--text-primary); }
        :root {
          --bg: #0d1117;
          --surface: #161b22;
          --surface-2: #21262d;
          --border: #30363d;
          --text-primary: #e6edf3;
          --text-secondary: #8b949e;
          --text-muted: #656d76;
          --blue: #58a6ff;
          --max: 1280px;
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
        {/* Navigation */}
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 200,
            height: "64px",
            background: "rgba(13,17,23,.85)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              height: "100%",
              padding: "0 40px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a
              href="/"
              style={{
                fontSize: ".9rem",
                fontWeight: 800,
                color: "var(--text-primary)",
                textDecoration: "none",
              }}
            >
              Kiru Tech
            </a>
            <a
              href="/"
              style={{ color: "var(--text-secondary)", textDecoration: "none" }}
            >
              Back to Home
            </a>
          </div>
        </nav>

        {/* Main Content */}
        <main style={{ paddingTop: "64px", paddingBottom: "60px" }}>
          <div
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              padding: "80px 40px",
            }}
          >
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                marginBottom: "12px",
                color: "var(--text-primary)",
              }}
            >
              Terms of Service
            </h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "48px" }}>
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <div style={{ lineHeight: 1.8, color: "var(--text-secondary)" }}>
              <section style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing and using this website, you accept and agree to
                  be bound by the terms and provision of this agreement. If you
                  do not agree to abide by the above, please do not use this
                  service.
                </p>
              </section>

              <section style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  2. Use License
                </h2>
                <p style={{ marginBottom: "12px" }}>
                  Permission is granted to temporarily download one copy of the
                  materials (information or software) from Kiru Tech for
                  personal, non-commercial transitory viewing only. This is the
                  grant of a license, not a transfer of title, and under this
                  license you may not:
                </p>
                <ul style={{ marginLeft: "20px", marginBottom: "12px" }}>
                  <li>Modifying or copying the materials</li>
                  <li>
                    Using the materials for any commercial purpose or for any
                    public display
                  </li>
                  <li>
                    Attempting to decompile or reverse engineer any software
                    contained on the website
                  </li>
                  <li>
                    Removing any copyright or other proprietary notations from
                    the materials
                  </li>
                  <li>
                    Transferring the materials to another person or "mirroring"
                    the materials on any other server
                  </li>
                </ul>
              </section>

              <section style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  3. Disclaimer
                </h2>
                <p>
                  The materials on Kiru Tech are provided "as is". Kiru Tech
                  makes no warranties, expressed or implied, and hereby
                  disclaims and negates all other warranties including, without
                  limitation, implied warranties or conditions of
                  merchantability, fitness for a particular purpose, or
                  non-infringement of intellectual property or other violation
                  of rights.
                </p>
              </section>

              <section style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  4. Limitations
                </h2>
                <p>
                  In no event shall Kiru Tech or its suppliers be liable for any
                  damages (including, without limitation, damages for loss of
                  data or profit, or due to business interruption) arising out
                  of the use or inability to use the materials on the site.
                </p>
              </section>

              <section style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  5. Accuracy of Materials
                </h2>
                <p>
                  The materials appearing on the Kiru Tech website could include
                  technical, typographical, or photographic errors. Kiru Tech
                  does not warrant that any of the materials on our website are
                  accurate, complete, or current.
                </p>
              </section>

              <section style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  6. Links
                </h2>
                <p>
                  Kiru Tech has not reviewed all of the sites linked to its
                  website and is not responsible for the contents of any such
                  linked site. The inclusion of any link does not imply
                  endorsement by Kiru Tech of the site. Use of any such linked
                  website is at the user's own risk.
                </p>
              </section>

              <section style={{ marginBottom: "40px" }}>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  7. Modifications
                </h2>
                <p>
                  Kiru Tech may revise these terms of service for our website at
                  any time without notice. By using this website you are
                  agreeing to be bound by the then current version of these
                  terms of service.
                </p>
              </section>

              <section>
                <h2
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                  }}
                >
                  8. Governing Law
                </h2>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Kenya and you irrevocably submit
                  to the exclusive jurisdiction of the courts located in Kenya.
                </p>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "48px 40px 32px",
            background: "#010409",
          }}
        >
          <div
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              paddingBottom: "32px",
              borderBottom: "1px solid var(--border)",
              textAlign: "center",
              fontSize: ".72rem",
              color: "var(--text-muted)",
            }}
          >
            <p>© {currentYear} Kiru Tech. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
