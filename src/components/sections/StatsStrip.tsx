export function StatsStrip() {
  const stats = [
    { num: "10+", label: "Products Built" },
    { num: "⚡ Fast", label: "Delivery Cycles" },
    { num: "∞", label: "Scalable Architectures" },
    { num: "99%", label: "Client Satisfaction" },
  ];
  return (
    <div className="kiru-stats">
      <div className="kiru-stats-inner stagger">
        {stats.map((s) => (
          <div className="kiru-stat-cell reveal-up" key={s.label}>
            <div className="kiru-stat-num">{s.num}</div>
            <div className="kiru-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
