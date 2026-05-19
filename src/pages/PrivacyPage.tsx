/**
 * pages/PrivacyPage.tsx
 *
 * Privacy Policy page
 */

import { useEffect } from "react";
import "../styles/kiru-styles.css";

export default function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy - Kiru Tech";
  }, []);

  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Introduction",
      content:
        "Kiru Tech is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise handle your information when you visit our website and use our services.",
    },
    {
      title: "Information We Collect",
      content:
        "We may collect information about you in a variety of ways. The information we may collect on the site includes: name, email address, phone number, company information, and any other information you voluntarily provide to us when inquiring about our services.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use the information we collect in various ways, including to: provide, operate, and maintain our services; improve, personalize, and expand our services; communicate with you regarding updates and promotions; and for other lawful purposes.",
    },
    {
      title: "Security of Your Information",
      content:
        "We use administrative, technical, and physical security measures to protect your information. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    },
    {
      title: "Changes to This Privacy Policy",
      content:
        "Kiru Tech may update this privacy policy at any time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you by updating the date on this privacy policy.",
    },
    {
      title: "Contact Us",
      content:
        "If you have questions about this privacy policy or our privacy practices, please contact us at hello@kirutech.io or +254 700 000 000.",
    },
    {
      title: "Your Rights",
      content:
        "Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your information. Please contact us if you wish to exercise any of these rights.",
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
            Privacy Policy
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
