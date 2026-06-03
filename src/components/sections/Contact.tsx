import { type FormEvent, useState } from "react";
import {
  IconEmail,
  IconClock,
  IconGh,
  IconLi,
  IconPhone,
  IconX,
} from "../icons/ContactIcons";
import img1 from "../../assets/3f42e1a373db29e9339c1a3443e1e146.webp";
import img2 from "../../assets/abfc3841d1e383be62397c3f589a9150.webp";
import img3 from "../../assets/c507814898a421b2909393b5ade98e2c.webp";

const FETile = () => <div style={{ width: 1, height: 1, display: "none" }} />;

export function Contact() {
  const [done, setDone] = useState(false);

  return (
    <section className="kiru-section gh-contact" id="contact">
      <FETile />
      <div className="kiru-inner">
        <div className="kiru-contact-inner">
          {/* Panel */}
          <div className="kiru-contact-panel reveal-left">
            <div className="kiru-contact-panel-inner">
              <div className="kiru-contact-kicker">
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
              <h2 className="kiru-contact-title">
                Start Your
                <br />
                Project <span>Today</span>
              </h2>
              <p className="kiru-contact-sub">
                Share your ideas and goals. We'll help turn them into impactful
                digital solutions.
              </p>

              <div className="kiru-info-list">
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
                  <div className="kiru-info-item" key={item.label}>
                    <div className="kiru-info-icon">{item.icon}</div>
                    <div>
                      <div className="kiru-info-label">{item.label}</div>
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>

              <div className="kiru-contact-socials">
                {[<IconX />, <IconLi />, <IconGh />].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="kiru-social-btn"
                    aria-label={["X", "LinkedIn", "GitHub"][i]}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="kiru-form-card reveal-right">
            {done ? (
              <div className="kiru-form-success">
                <span className="kiru-success-icon">✅</span>
                <h3>We received your message!</h3>
                <p>We'll reach out within 24 hours to confirm your call.</p>
              </div>
            ) : (
              <form
                className="kiru-form"
                onSubmit={(e: FormEvent) => {
                  e.preventDefault();
                  setDone(true);
                }}
              >
                <div className="kiru-form-row">
                  <div className="kiru-form-group">
                    <label className="kiru-form-label">Your Name</label>
                    <input
                      className="kiru-input"
                      type="text"
                      placeholder="Jane Njeri"
                      required
                    />
                  </div>
                  <div className="kiru-form-group">
                    <label className="kiru-form-label">Email Address</label>
                    <input
                      className="kiru-input"
                      type="email"
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                </div>
                <div className="kiru-form-group">
                  <label className="kiru-form-label">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    className="kiru-input"
                    rows={4}
                    placeholder="Tell us what you're building — goals, timeline, budget..."
                    required
                  />
                </div>
                <div className="kiru-form-group">
                  <label className="kiru-form-label">
                    When Should We Reach You?
                  </label>
                  <div className="kiru-time-slots">
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
                      <label className="kiru-slot" key={slot.v}>
                        <input type="radio" name="time" value={slot.v} />
                        <div className="kiru-slot-icon">{slot.icon}</div>
                        <strong>{slot.s}</strong>
                        <span>{slot.sub}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <button type="submit" className="kiru-submit-btn">
                  <span className="kiru-submit-icon">📅</span> Book a Call →
                </button>
                <div className="kiru-form-trust">
                  <span>We respect your time. No spam, ever.</span>
                  <span>We'll respond within 24 hours.</span>
                </div>
              </form>
            )}
            <div className="kiru-form-trust-bottom">
              <div className="kiru-trust-avatars">
                {[img1, img2, img3, img1].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Team member"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "1px solid var(--border)",
                    }}
                  />
                ))}
              </div>
              <div className="kiru-trust-meta">
                <span className="kiru-trust-text">
                  Trusted by startups &amp; growing teams
                </span>
                <div className="kiru-trust-logos">
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
