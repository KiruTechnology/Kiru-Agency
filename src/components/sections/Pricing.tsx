import { BtnOutline } from "../ui/Buttons";
import "./Pricing.css";

const plans = [
  {
    tier: "Starter", tag: "MVP", price: "$8k", featured: false,
    features: ["Discovery & Planning", "UI/UX Design", "Core Feature Set", "4–8 week delivery", "30-day support"],
    crossed:  ["Custom integrations"],
    cta: "GET A QUOTE", ctaHref: "#contact",
  },
  {
    tier: "Growth", tag: "Full Product", price: "$22k", featured: true, badge: "Most Popular",
    features: ["Everything in Starter", "Custom integrations", "Mobile + Web", "3-month delivery", "90-day support", "Analytics & monitoring"],
    crossed: [],
    cta: "GET A QUOTE", ctaHref: "#contact",
  },
  {
    tier: "Custom", tag: "Enterprise", price: "Let's talk", featured: false,
    features: ["Full architecture design", "Dedicated team", "Long-term partnership", "SLA & compliance", "Ongoing retainer", "Priority support"],
    crossed: [],
    cta: "BOOK A CALL", ctaHref: "#contact",
  },
];

export function Pricing() {
  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-inner">
        <div className="section-header">
          <p className="section-eye slide-in-left">
            <span className="spark-sm">✦</span> Investment
          </p>
          <h2 className="section-h2 letter-spacing-animate">
            Clear Pricing.<br />No Surprises.
          </h2>
        </div>

        <div className="pricing-grid">
          {plans.map((p) => (
            <div
              key={p.tier}
              className={["pricing-card reveal scale-on-scroll glow-on-scroll", p.featured ? "pricing-card--featured" : ""].join(" ")}
            >
              {p.badge && <div className="pricing-badge">{p.badge}</div>}
              <div className="pricing-tier">{p.tier}</div>
              <div className="pricing-tag">{p.tag}</div>
              <div className="pricing-amount">
                {p.price !== "Let's talk" ? <>From <strong>{p.price}</strong></> : <strong>{p.price}</strong>}
              </div>
              <ul className="pricing-list">
                {p.features.map((f) => <li key={f}>✓ {f}</li>)}
                {p.crossed.map((f)  => <li key={f} className="muted">✗ {f}</li>)}
              </ul>
              <BtnOutline
                href={p.ctaHref}
                label={p.cta}
                light={p.featured}
                fullWidth
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
