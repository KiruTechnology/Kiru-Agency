import "./StatsStrip.css";

const stats = [
  { value: "10+",    label: "Products Built" },
  { value: "⚡ Fast", label: "Delivery Cycles" },
  { value: "∞",      label: "Scalable Architectures" },
  { value: "99%",    label: "Client Satisfaction" },
];

export function StatsStrip() {
  return (
    <div className="stats-strip">
      {stats.map((s, i) => (
        <>
          <div className="stat-cell" key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
          {i < stats.length - 1 && <div className="stat-sep" key={`sep-${i}`} />}
        </>
      ))}
    </div>
  );
}
