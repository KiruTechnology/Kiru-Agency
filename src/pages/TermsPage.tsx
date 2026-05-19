/**
 * pages/TermsPage.tsx
 *
 * Terms of Service page
 */

import { useEffect } from "react";
import "../styles/kiru-styles.css";

export default function TermsPage() {
  useEffect(() => {
    document.title = "Terms of Service - Kiru Tech";
  }, []);

  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Acceptance of Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.",
    },
    {
      title: "Use License",
      content:
        "Permission is granted to temporarily download one copy of the materials (information or software) on Kiru Tech's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display.",
    },
    {
      title: "Disclaimer",
      content:
        "The materials on Kiru Tech's website are provided on an 'as is' basis. Kiru Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "Limitations",
      content:
        "In no event shall Kiru Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Kiru Tech's website.",
    },
    {
      title: "Accuracy of Materials",
      content:
        "The materials appearing on Kiru Tech's website could include technical, typographical, or photographic errors. Kiru Tech does not warrant that any of the materials on its website are accurate, complete, or current.",
    },
    {
      title: "Links",
      content:
        "Kiru Tech has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Kiru Tech of the site. Use of any such linked website is at the user's own risk.",
    },
    {
      title: "Modifications",
      content:
        "Kiru Tech may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
    },
    {
      title: "Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws of Kenya and you irrevocably submit to the exclusive jurisdiction of the courts located in Kenya.",
    },
  ];

  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      {/* Hero */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 40px 80px",
          textAlign: "center",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Terms of Service
          </h1>
          <p style={{ color: "var(--text-secondary)" }}>
            Last updated: {currentYear}
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "60px 40px 80px",
        }}
      >
        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: 48 }}>
            <h2
              style={{
                fontSize: "1.3rem",
                fontWeight: 600,
                marginBottom: 12,
                color: "var(--blue)",
              }}
            >
              {i + 1}. {s.title}
            </h2>
            <p
              style={{
                fontSize: ".95rem",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
              }}
            >
              {s.content}
            </p>
          </div>
        ))}
      </section>

      {/* Footer note */}
      <section
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "40px",
          textAlign: "center",
          fontSize: ".85rem",
          color: "var(--text-muted)",
          borderTop: "1px solid var(--border)",
        }}
      >
        <p>
          © {currentYear} Kiru Tech. All rights reserved. | Contact us at
          hello@kirutech.io
        </p>
      </section>
    </div>
  );
}
