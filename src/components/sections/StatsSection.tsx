import React from "react";

const StatsSection: React.FC = () => {
  const stats = [
    { value: "10+", label: "Products Built" },
    { value: "⚡ Fast", label: "Delivery Cycles" },
    { value: "∞", label: "Scalable Architectures" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="bg-slate border-y border-slate-mid/30 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <strong className="text-2xl text-amber">{stat.value}</strong>
                <span className="text-sm text-chalk/70">{stat.label}</span>
              </div>
              {idx < stats.length - 1 && (
                <div className="w-px h-8 bg-slate-mid/30 hidden md:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
