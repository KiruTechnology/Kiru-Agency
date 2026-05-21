import { useEffect } from "react";
import "../styles/kiru-styles.css";

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - Kiru Tech";
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`

        }
      `}</style>

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
                  1. Introduction
                </h2>
                <p>
                  Kiru Tech ("we" or "us" or "our") operates the website. This
                  page informs you of our policies regarding the collection,
                  use, and disclosure of personal data when you use our service
                  and the choices you have associated with that data.
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
                  2. Information Collection and Use
                </h2>
                <p style={{ marginBottom: "12px" }}>
                  We collect several different types of information for various
                  purposes to provide and improve our service to you.
                </p>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginTop: "16px",
                    marginBottom: "8px",
                  }}
                >
                  Types of Data Collected:
                </h3>
                <ul style={{ marginLeft: "20px" }}>
                  <li>
                    <strong>Personal Data:</strong> While using our service, we
                    may ask you to provide us with certain personally
                    identifiable information that can be used to contact or
                    identify you ("Personal Data"). This may include: Email
                    address, Name, Phone number
                  </li>
                  <li>
                    <strong>Usage Data:</strong> We may also collect information
                    on how the service is accessed and used ("Usage Data"). This
                    may include: Your computer's Internet Protocol address,
                    Browser type and version, Pages you visit, Time and date of
                    your visit
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
                  3. Use of Data
                </h2>
                <p>Kiru Tech uses the collected data for various purposes:</p>
                <ul style={{ marginLeft: "20px", marginTop: "12px" }}>
                  <li>To provide and maintain our service</li>
                  <li>To notify you about changes to our service</li>
                  <li>To provide customer support</li>
                  <li>
                    To gather analysis or valuable information so we can improve
                    our service
                  </li>
                  <li>To monitor the usage of our service</li>
                  <li>To detect, prevent and address technical issues</li>
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
                  4. Security of Data
                </h2>
                <p>
                  The security of your data is important to us but remember that
                  no method of transmission over the Internet or method of
                  electronic storage is 100% secure. While we strive to use
                  commercially acceptable means to protect your Personal Data,
                  we cannot guarantee its absolute security.
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
                  5. Changes to This Privacy Policy
                </h2>
                <p>
                  We may update our Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "effective date" at the top of this
                  Privacy Policy.
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
                  6. Contact Us
                </h2>
                <p>
                  If you have any questions about this Privacy Policy, please
                  contact us at:
                </p>
                <div
                  style={{ marginTop: "12px", color: "var(--text-primary)" }}
                >
                  <p>Email: hello@kirutech.io</p>
                  <p>Phone: +254 700 000 000</p>
                </div>
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
                  7. Your Rights
                </h2>
                <p>
                  You have the right to access, update, or delete the
                  information we have on you. If you would like to exercise this
                  right, please contact us using the information in the Contact
                  Us section above.
                </p>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
