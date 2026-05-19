import React, { FormEvent, useState } from "react";

const IconEmail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M4 6h16v12H4z" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M4 7l8 6 8-6" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M5.5 5.5c2.5 5.8 7.2 10.5 13 13l2.6-2.6c.4-.4 1-.5 1.5-.3l3 1.1c.6.2 1 .8.9 1.4-.2 1.8-1.7 3.4-3.6 3.4C12.6 21.5 2.5 11.4 2.5 1.1c0-1.9 1.5-3.4 3.4-3.6.6-.1 1.2.3 1.4.9l1.1 3c.2.5.1 1.1-.3 1.5L5.5 5.5z"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path
      d="M12 7v5l3 2"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
  </svg>
);

const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.731-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconLi = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconGh = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const FETile = () => <div style={{ width: 1, height: 1, display: "none" }} />;

export function Contact() {
  const [done, setDone] = useState(false);

  return (
    <section className="gh-section gh-contact" id="contact">
      <FETile />
      <div className="gh-inner">
        <div className="gh-contact-inner">
          {/* Panel */}
          <div className="gh-contact-panel reveal-left">
            <div className="gh-contact-panel-inner">
              <div className="gh-contact-kicker">
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--green)",
                    boxShadow: "0 0 6px var(--green)",
                  }}
                />
                Let's Build
              </div>
              <h2 className="gh-contact-title">
                Start Your
                <br />
                Project <span>Today</span>
              </h2>
              <p className="gh-contact-sub">
                Share your ideas and goals. We'll help turn them into impactful
                digital solutions.
              </p>

              <div className="gh-info-list">
                {[
                  {
                    icon: <IconEmail />,
                    label: "Email",
                    val: (
                      <a href="mailto:hello@kirutech.io">hello@kirutech.io</a>
                    ),
                  },
                  {
                    icon: <IconPhone />,
                    label: "Phone",
                    val: <a href="tel:+254700000000">+254 700 000 000</a>,
                  },
                  {
                    icon: <IconClock />,
                    label: "Response",
                    val: <span>Within 24 hours</span>,
                  },
                ].map((item) => (
                  <div className="gh-info-item" key={item.label}>
                    <div className="gh-info-icon">{item.icon}</div>
                    <div>
                      <div className="gh-info-label">{item.label}</div>
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="gh-contact-socials">
                {[<IconX />, <IconLi />, <IconGh />].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="gh-social-btn"
                    aria-label={["X", "LinkedIn", "GitHub"][i]}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="gh-form-card reveal-right">
            {done ? (
              <div className="gh-form-success">
                <span className="gh-success-icon">✅</span>
                <h3>We received your message!</h3>
                <p>We'll reach out within 24 hours to confirm your call.</p>
              </div>
            ) : (
              <form
                className="gh-form"
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <div className="gh-form-row">
                  <div className="gh-form-group">
                    <label className="gh-form-label">Your Name</label>
                    <input
                      className="gh-input"
                      type="text"
                      placeholder="Jane Njeri"
                      required
                    />
                  </div>
                  <div className="gh-form-group">
                    <label className="gh-form-label">Email Address</label>
                    <input
                      className="gh-input"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="gh-form-group">
                  <label className="gh-form-label">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    className="gh-input"
                    rows={4}
                    placeholder="Tell us what you're building — goals, timeline, budget..."
                    required
                  />
                </div>
                <div className="gh-form-group">
                  <label className="gh-form-label">
                    When Should We Reach You?
                  </label>
                  <div className="gh-time-slots">
                    {[
                      {
                        v: "morning",
                        icon: "☀",
                        s: "Morning",
                        sub: "9AM – 12PM",
                      },
                      {
                        v: "afternoon",
                        icon: "◐",
                        s: "Afternoon",
                        sub: "12PM – 5PM",
                      },
                      {
                        v: "evening",
                        icon: "☾",
                        s: "Evening",
                        sub: "5PM – 8PM",
                      },
                    ].map((slot) => (
                      <label className="gh-slot" key={slot.v}>
                        <input type="radio" name="time" value={slot.v} />
                        <div className="gh-slot-icon">{slot.icon}</div>
                        <strong>{slot.s}</strong>
                        <span>{slot.sub}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="gh-submit-btn">
                  <span className="gh-submit-icon">📅</span> Book a Call →
                </button>
                <div className="gh-form-trust">
                  <span>We respect your time. No spam, ever.</span>
                  <span>We'll respond within 24 hours.</span>
                </div>
              </form>
            )}
            <div className="gh-form-trust-bottom">
              <div className="gh-trust-avatars">
                {["👤", "👤", "👤", "👤"].map((a, i) => (
                  <span key={i}>{a}</span>
                ))}
              </div>
              <div className="gh-trust-meta">
                <span className="gh-trust-text">
                  Trusted by startups &amp; growing teams
                </span>
                <div className="gh-trust-logos">
                  <span>stripe</span>
                  <span>vercel</span>
                  <span>aws</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
