import React from "react";
import { ButtonOutline } from "../Buttons";

const ServicesSection: React.FC = () => {
  const services = [
    {
      num: "01",
      title: "Web Application Development",
      description:
        "Full-stack web apps — fast, accessible, and production-ready from day one.",
    },
    {
      num: "02",
      title: "Mobile App Development",
      description:
        "Cross-platform or native mobile experiences that delight users on any device.",
    },
    {
      num: "03",
      title: "UI/UX Design",
      description:
        "Research-driven design systems and interfaces that convert and retain users.",
    },
    {
      num: "04",
      title: "Backend & APIs",
      description:
        "Robust, documented APIs and server infrastructure built for reliability at scale.",
    },
    {
      num: "05",
      title: "MVP Development",
      description:
        "Validate fast. We scope and deliver lean MVPs in 4–8 weeks — no fluff.",
    },
    {
      num: "06",
      title: "System Architecture",
      description:
        "Microservices, cloud infra, data pipelines — designed to grow with you.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-dark">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4 flex-1">
            <p className="text-amber flex items-center gap-2 text-sm font-medium">
              <span>✦</span>
              <span>What We Do</span>
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-chalk">
              Services Built
              <br />
              For Growth
            </h2>
          </div>
          <ButtonOutline href="#contact" text="EXPLORE SERVICES →" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.num}
              className="group p-8 rounded-lg border border-slate-mid/30 hover:border-amber/50 transition-colors duration-300 bg-slate/40 hover:bg-slate/60"
            >
              <div className="text-amber text-3xl font-bold mb-6">
                {service.num}
              </div>
              <h3 className="text-xl font-semibold text-chalk mb-4">
                {service.title}
              </h3>
              <p className="text-chalk/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
