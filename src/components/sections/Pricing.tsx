export function Pricing() {
  const plans = [
    {
      tier: "Starter",
      tag: "MVP",
      price: "$8k",
      featured: false,
      features: [
        "Discovery & Planning",
        "UI/UX Design",
        "Core Feature Set",
        "4–8 week delivery",
        "30-day support",
      ],
      crossed: ["Custom integrations"],
      cta: "Get a Quote",
      href: "#contact",
    },
    {
      tier: "Growth",
      tag: "Full Product",
      price: "$22k",
      featured: true,
      badge: "Most Popular",
      features: [
        "Everything in Starter",
        "Custom integrations",
        "Mobile + Web",
        "3-month delivery",
        "90-day support",
        "Analytics & monitoring",
      ],
      crossed: [],
      cta: "Get a Quote",
      href: "#contact",
    },
    {
      tier: "Custom",
      tag: "Enterprise",
      price: "Let's talk",
      featured: false,
      features: [
        "Full architecture design",
        "Dedicated team",
        "Long-term partnership",
        "SLA & compliance",
        "Ongoing retainer",
        "Priority support",
      ],
      crossed: [],
      cta: "Book a Call",
      href: "#contact",
    },
  ];

  return (
    <section className="gh-section gh-pricing" id="pricing">
      <div className="gh-inner">
        <div className="reveal-up">
          <div className="gh-overline">Investment</div>
          <h2 className="gh-section-title">
            Clear Pricing.
            <br />
            No Surprises.
          </h2>
        </div>

        <div className="gh-pricing-grid stagger">
          {plans.map((p) => (
            <div
              key={p.tier}
              className={`gh-pricing-card reveal-up${p.featured ? " featured" : ""}`}
            >
              {p.badge && <div className="gh-pricing-badge">{p.badge}</div>}
              <div className="gh-pricing-tier">{p.tier}</div>
              <div className="gh-pricing-tag">{p.tag}</div>
              <div className="gh-pricing-amount">
                <strong>{p.price}</strong>
                {p.price !== "Let's talk" && <span>starting from</span>}
              </div>
              <ul className="gh-pricing-list">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
                {p.crossed.map((f) => (
                  <li key={f} className="crossed">
                    ✗ {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className={p.featured ? "btn-green" : "btn-ghost"}
                style={{ justifyContent: "center" }}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
