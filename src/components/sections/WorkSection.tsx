import React from "react";
import { ButtonOutline } from "../Buttons";

const WorkSection: React.FC = () => {
  const projects = [
    {
      title: "FlowBoard Analytics",
      category: "SaaS Platform",
      outcome: "↑ 340% user retention in 6 months",
      description:
        "Real-time analytics dashboard for e-commerce teams — from zero to 12k DAU in 3 months.",
      color: "from-slate-dark to-slate",
    },
    {
      title: "Pulse Health Tracker",
      category: "Mobile App",
      outcome: "4.9★ App Store · 50k downloads",
      description:
        "Cross-platform wellness app shipped in 6 weeks — MVP validated, Series A funded.",
      color: "from-green-900 to-green-950",
    },
    {
      title: "NexaOS Workspace",
      category: "Enterprise SaaS",
      outcome: "$2M ARR · 200+ enterprise clients",
      description:
        "Enterprise project management platform — rebuilt from a legacy system to a modern, scalable SaaS.",
      color: "from-purple-900 to-purple-950",
    },
  ];

  return (
    <section id="work" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4 flex-1">
            <p className="text-amber flex items-center gap-2 text-sm font-medium">
              <span>✦</span>
              <span>Proof of Work</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk">
              Products We've
              <br />
              Shipped
            </h2>
          </div>
          <ButtonOutline href="#contact" text="VIEW ALL PROJECTS →" />
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              {/* Card Thumbnail */}
              <div className="relative rounded-lg overflow-hidden mb-6 aspect-video">
                <div
                  className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center p-8`}
                >
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber/20 mb-4">
                      {project.category.split(" ")[0][0]}
                    </div>
                    <p className="text-chalk/40 text-sm font-mono">
                      {project.category}
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-amber text-xs font-bold mb-2">
                    {project.category}
                  </p>
                  <p className="text-chalk font-semibold">{project.outcome}</p>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-chalk group-hover:text-amber transition-colors">
                  {project.title}
                </h3>
                <p className="text-chalk/70 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
