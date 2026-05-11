import React from "react";
import { ButtonOutline } from "../Buttons";

const PricingSection: React.FC = () => {
  const plans = [
    {
      tier: "Starter",
      tag: "MVP",
      price: "$8k",
      description: "From",
      featured: false,
      features: [
        "Discovery & Planning",
        "UI/UX Design",
        "Core Feature Set",
        "4–8 week delivery",
        "30-day support",
      ],
      excluded: ["Custom integrations"],
    },
    {
      tier: "Growth",
      tag: "Full Product",
      price: "$22k",
      description: "From",
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
      excluded: [],
    },
    {
      tier: "Custom",
      tag: "Enterprise",
      price: "Let's talk",
      description: "",
      featured: false,
      features: [
        "Full architecture design",
        "Dedicated team",
        "Long-term partnership",
        "SLA & compliance",
        "Ongoing retainer",
        "Priority support",
      ],
      excluded: [],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <p className="text-amber flex items-center gap-2 text-sm font-medium">
            <span>✦</span>
            <span>Investment</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-chalk">
            Clear Pricing.
            <br />
            No Surprises.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-lg border transition-all duration-300 ${
                plan.featured
                  ? "border-amber/50 bg-linear-to-br from-slate/40 to-slate-dark/60 scale-105 lg:scale-110 shadow-2xl"
                  : "border-slate-mid/30 bg-slate/40 hover:border-amber/30"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-amber text-slate-dark text-xs font-bold rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Header */}
                <div>
                  <p className="text-chalk/70 text-sm mb-2">{plan.tag}</p>
                  <h3 className="text-2xl font-bold text-chalk mb-4">
                    {plan.tier}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    {plan.description && (
                      <span className="text-chalk/70 text-sm">
                        {plan.description}
                      </span>
                    )}
                    <span className="text-3xl font-bold text-amber">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3">
                      <span className="text-amber mt-1">✓</span>
                      <span className="text-chalk/80 text-sm">{feature}</span>
                    </li>
                  ))}
                  {plan.excluded.map((feature, fidx) => (
                    <li
                      key={fidx}
                      className="flex items-start gap-3 opacity-50"
                    >
                      <span className="text-slate-mid mt-1">✗</span>
                      <span className="text-chalk/60 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className={`w-full py-3 px-4 rounded-lg font-bold transition-all duration-300 ${
                    plan.featured
                      ? "bg-amber text-slate-dark hover:bg-amber/90"
                      : "border border-slate-mid/50 text-chalk hover:border-amber/50 hover:text-amber"
                  }`}
                >
                  {plan.tier === "Custom" ? "BOOK A CALL" : "GET A QUOTE"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
