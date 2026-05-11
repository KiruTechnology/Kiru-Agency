import React from "react";
import { ButtonApple } from "../Buttons";

const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      icon: "🔍",
      title: "Discovery",
      description:
        "We immerse ourselves in your business — goals, users, constraints — to build a shared understanding before a single line of code is written.",
    },
    {
      num: "02",
      icon: "📐",
      title: "Planning",
      description:
        "Roadmap, milestones, tech stack, and team structure defined. You see everything upfront — no surprises, no scope creep.",
    },
    {
      num: "03",
      icon: "🎨",
      title: "Design",
      description:
        "Wireframes, design systems, and interactive prototypes. Your product looks exceptional before development begins.",
    },
    {
      num: "04",
      icon: "⚙️",
      title: "Development",
      description:
        "Agile sprints with weekly demos. You're never in the dark — real code, real progress, real conversations every step of the way.",
    },
    {
      num: "05",
      icon: "🧪",
      title: "Testing",
      description:
        "Automated test suites, manual QA, performance audits, and security checks — we sign off only when it's bulletproof.",
    },
    {
      num: "06",
      icon: "🚀",
      title: "Launch",
      description:
        "Deployment, monitoring, go-live support, and a 30-day post-launch window. We don't ship and disappear — we ship and stay.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <p className="text-amber flex items-center gap-2 text-sm font-medium">
            <span>✦</span>
            <span>How We Work</span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-chalk">
            Six Steps From
            <br />
            Idea to Launch
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-amber/50 to-slate-mid/30"></div>

          {/* Steps Grid */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`flex gap-8 ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:w-1/2">
                  <div className="p-8 rounded-lg border border-slate-mid/30 bg-slate-dark/50 hover:border-amber/30 transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-3xl">{step.icon}</span>
                      <div>
                        <div className="text-amber text-sm font-bold mb-2">
                          {step.num}
                        </div>
                        <h3 className="text-xl font-bold text-chalk">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-chalk/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex lg:w-1/2 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-amber border-4 border-slate"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <ButtonApple href="#contact" text="Start Your Project" icon="🚀" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
