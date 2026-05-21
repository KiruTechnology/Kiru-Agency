import { useEffect } from "react";
// import "../styles/kiru-styles.css";
import "../styles/other.css";
import { ServiceTerms } from "../data";

export function TermsOfService() {
  useEffect(() => {
    document.title = "Terms of Service - Kiru Tech";
  }, []);

  const updatedAT: string = "May, 2026";

  return (
    <>
      <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
        {/* Main Content */}
        <main style={{ paddingTop: "64px", paddingBottom: "60px" }}>
          <div
            style={{
              maxWidth: "var(--max)",
              margin: "0 auto",
              padding: "80px 40px",
            }}
          >
            {/* Header */}
            <div className="flex w-full mx-auto flex-col items-center">
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
              <p
                style={{ color: "var(--text-secondary)", marginBottom: "48px" }}
              >
                Last updated: {updatedAT}
              </p>
            </div>

            {/* Terms Body */}
            <section
              className="max-w-4xl px-8 py-6 mx-auto!"
              style={{ margin: "0 auto" }}
            >
              {ServiceTerms.map((term, i) => (
                <div style={{ marginBottom: "2.5rem" }} key={i}>
                  <h2
                    className="font-bold mb-3"
                    style={{ fontSize: "1.3rem", color: "var(--blue)" }}
                  >
                    {i + 1}. {term.title}
                  </h2>
                  <p
                    className="font-[0.95rem]"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                  >
                    {term.content}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
