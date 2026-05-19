import React from "react";

export function StatsStrip() {
  const stats = [
    { num: "10+", label: "Products Built" },
    { num: "⚡ Fast", label: "Delivery Cycles" },
    { num: "∞", label: "Scalable Architectures" },
    { num: "99%", label: "Client Satisfaction" },
  ];

  return (
    <div className="gh-stats">
      <div className="gh-stats-inner stagger">
        {stats.map((s) => (
          <div className="gh-stat-cell reveal-up" key={s.label}>
            <div className="gh-stat-num">{s.num}</div>
            <div className="gh-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
