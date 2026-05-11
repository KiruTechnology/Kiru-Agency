import React from "react";
import { ButtonApple } from "../Buttons";
import { Reveal } from "../Reveal";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: "⚡",
      title: "Fast Iteration Cycles",
      description:
        "We ship weekly. No long sprints, no waiting — continuous delivery from day one.",
    },
    {
      icon: "🧠",
      title: "Product-First Thinking",
      description:
        "We think like founders. Every decision is weighed against user value and business impact.",
    },
    {
      icon: "🔒",
      title: "Secure & Scalable",
      description:
        "Architecture built to handle 10 users or 10 million — without a painful rewrite.",
    },
    {
      icon: "🎨",
      title: "Clean UI/UX Design",
      description:
        "Interfaces your users will love, built with precision and tested with real feedback.",
    },
    {
      icon: "🤝",
      title: "Transparent Communication",
      description:
        "Daily updates, open roadmaps, and a direct line to your engineering team — always.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-amber flex items-center gap-2 text-sm font-medium">
            <span>✦</span>
            <span>Why Kiru Tech</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-chalk">
            Built Different.
            <br />
            By Design.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Reveal key={idx} delay={idx * 100}>
              <div className="p-6 rounded-2xl border border-slate-mid/30 bg-gradient-to-br from-slate-mid/10 to-slate/10 hover:border-amber/30 transition-colors duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-chalk mb-3">
                  {feature.title}
                </h3>
                <p className="text-chalk/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}

          {/* CTA Card */}
          <Reveal delay={features.length * 100}>
            <div className="p-6 rounded-2xl border border-amber/30 bg-gradient-to-br from-amber/5 to-transparent flex flex-col items-center justify-center text-center space-y-4">
              <p className="text-chalk font-medium">Ready to build?</p>
              <ButtonApple
                href="#contact"
                text="Let's Build Yours"
                icon="🛠"
                amber
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
