import { useEffect } from "react";
import "../styles/other.css";
import { Policy } from "../data";

export function PrivacyPolicy() {
  const lastUpdated: string = "May, 2026";
  useEffect(() => {
    document.title = "Privacy Policy - Kiru Tech";
  }, []);
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <main style={{ paddingTop: "64px", paddingBottom: "60px" }}>
        <div
          style={{
            maxWidth: "var(--max)",
            margin: "0 auto",
            padding: "3rem 5rem",
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center">
            <h1
              style={{
                fontSize: "2.2rem",
                fontWeight: 800,
                marginBottom: "12px",
                color: "var(--text-primary)",
              }}
            >
              Privacy Policy
            </h1>
            <p style={{ color: "var(--text-secondary)", marginBottom: "48px" }}>
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Body of the policies */}
          <div
            style={{
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              marginInline: "auto",
            }}
            className="max-w-4xl"
          >
            {Policy.map((Pol, i) => (
              <section style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{ color: "var(--blue)", fontSize: "1.3rem" }}
                  className="mb-3 font-bold"
                >
                  {i + 1}. {Pol.title}
                </h2>
                <p style={{ marginBottom: ".5rem" }}>{Pol.content}</p>
                {/* other -> title?, items -> [{cat?,info}, ]*/}
                {Pol.other &&
                  Pol.other.map(
                    (list, i) =>
                      list.title && (
                        <div key={i}>
                          <h3
                            style={{
                              fontSize: "1.1rem",
                              fontWeight: 600,
                              color: "var(--text-primary)",
                              marginTop: "16px",
                              marginBottom: "8px",
                            }}
                          >
                            {list.title}
                          </h3>
                          <ul style={{ marginLeft: "20px" }}>
                            {list.items.map((item, i) => (
                              <li key={i}>
                                {item.cat && (
                                  <strong style={{ color: "#c1c1c1" }}>
                                    {item.cat}{" "}
                                  </strong>
                                )}
                                {item.info}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                  )}
                {/* )} */}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
