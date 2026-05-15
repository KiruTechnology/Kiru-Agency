import React from "react";
import { Reveal } from "./Reveal";

interface TimelineStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const ProcessTimeline: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      number: "01",
      icon: "🔍",
      title: "Discovery",
      description:
        "We dive deep into your vision, market, and goals. Understanding your users is our first priority.",
    },
    {
      number: "02",
      icon: "📐",
      title: "Design & Strategy",
      description:
        "We craft product roadmaps, wireframes, and design systems that align with your business objectives.",
    },
    {
      number: "03",
      icon: "💻",
      title: "Development",
      description:
        "Building with cutting-edge tech. We ship features weekly—no long sprints, constant delivery.",
    },
    {
      number: "04",
      icon: "✅",
      title: "Testing & Launch",
      description:
        "Rigorous QA, performance optimization, and a flawless deployment to production.",
    },
    {
      number: "05",
      icon: "📈",
      title: "Growth & Support",
      description:
        "Post-launch monitoring, user feedback integration, and continuous optimization for scale.",
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 bg-slate">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <Reveal delay={0}>
          <div className="text-center mb-20">
            <p className="text-amber text-sm font-bold tracking-widest uppercase mb-4">
              ✦ How We Work
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-chalk leading-tight mb-6">
              Our
              <br />
              <span className="text-amber">Process</span>
            </h2>
            <p className="text-lg text-chalk/70 max-w-2xl mx-auto">
              A structured, transparent approach to building your product — from
              idea to launch.
            </p>
          </div>
        </Reveal>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber via-amber/50 to-transparent transform -translate-x-1/2 hidden lg:block"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div
                  className={`flex gap-8 md:gap-12 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 flex items-center">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-amber tracking-widest">
                          {step.number}
                        </span>
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-chalk">
                        {step.title}
                      </h3>
                      <p className="text-chalk/70 leading-relaxed max-w-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Node (visible only on desktop) */}
                  <div className="hidden lg:flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-full border-4 border-amber bg-slate flex items-center justify-center relative z-10">
                      <div className="w-4 h-4 rounded-full bg-amber"></div>
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Mobile Timeline Indicator */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber via-amber/50 to-transparent md:hidden"></div>

          {/* Mobile Steps */}
          <div className="lg:hidden space-y-12 md:space-y-16 pl-16">
            {steps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 100}>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="absolute left-0 w-12 h-12 rounded-full border-3 border-amber bg-slate flex items-center justify-center -translate-x-1/2">
                      <div className="w-3 h-3 rounded-full bg-amber"></div>
                    </div>
                    <span className="text-sm font-bold text-amber tracking-widest">
                      {step.number}
                    </span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-chalk">{step.title}</h3>
                  <p className="text-chalk/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
